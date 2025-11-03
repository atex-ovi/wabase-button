#!/usr/bin/env node
import { makeWASocket, useMultiFileAuthState, DisconnectReason } from 'atexovi-baileys';
import pino from 'pino';
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import dotenv from 'dotenv';
import { handler } from './src/handler.js';

dotenv.config({ debug: false });

const authDir = path.join(process.cwd(), 'session');

function showBanner() {
  console.clear();
  const text = figlet.textSync('Atex - Wa Bot', { font: 'Standard' });
  console.log(chalk.cyanBright(text));
}

async function startBot() {
  showBanner();

  const { state, saveCreds } = await useMultiFileAuthState(authDir);

  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: 'silent' }),
  });

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'open') {
      console.log(chalk.greenBright('✅ Connect to WhatsApp!'));
      console.log(chalk.cyan(`👤 User: ${sock.user?.id || 'Unknown'}`));
    } else if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = reason !== DisconnectReason.loggedOut;
      if (shouldReconnect) {
        console.log(chalk.yellow('🔁 Connection lost, reconnecting...'));
        startBot();
      } else {
        console.log(chalk.red('❌ Session invalid, delete the session folder and try again..'));
      }
    }
  });

  sock.ev.on('creds.update', saveCreds);
  
  sock.ev.on('messages.upsert', m => {
    const msg = m.messages?.[0];
    if (!msg || msg.key.fromMe) return;

    console.log(chalk.blueBright('Incoming message from:'), msg.key.remoteJid);
    console.log(chalk.magenta('Message type:'), Object.keys(msg.message || {}));

    try { handler(sock, msg); } catch (err) {
      console.error(chalk.red('[Handler Error]'), err);
    }
  });

  const files = fs.readdirSync(authDir).filter(f => f.endsWith('.json'));
  if (files.length === 0) {
    let waNumber;
    try {
      const response = await inquirer.prompt([
        {
          type: 'input',
          name: 'waNumber',
          message: chalk.cyanBright('Enter WhatsApp number (without +):'),
          validate: (input) => /^\d{8,}$/.test(input) ? true : 'Invalid number',
        },
      ]);
      waNumber = response.waNumber;
    } catch (err) {
      if (err.name === 'ExitPromptError') {
        console.log(chalk.red('\n⚠️  Prompt canceled by user. Stopping the process...'));
        process.exit(0);
      } else {
        throw err;
      }
    }
  
    try {
      const code = await sock.requestPairingCode(waNumber);
      console.log(chalk.greenBright('\n✅ Pairing Code Found!'));
      console.log(chalk.yellowBright('📌 Kode:'), chalk.bold.magenta(code));
      console.log(chalk.cyan('Open WhatsApp > Linked Devices > Link Device'));
      console.log(chalk.greenBright('\nWaiting for automatic connection...'));
    } catch (error) {
      console.error(chalk.red('❌ Error requesting pairing code:'), error);
    }
  }
}

startBot();
