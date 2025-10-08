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
      console.log(chalk.greenBright('✅ Terhubung ke WhatsApp!'));
      console.log(chalk.cyan(`👤 User: ${sock.user?.id || 'Unknown'}`));
    } else if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = reason !== DisconnectReason.loggedOut;
      if (shouldReconnect) {
        console.log(chalk.yellow('🔁 Koneksi terputus, reconnecting...'));
        startBot();
      } else {
        console.log(chalk.red('❌ Session invalid, hapus folder session/ dan coba lagi.'));
      }
    }
  });

  sock.ev.on('creds.update', saveCreds);
  
  sock.ev.on('messages.upsert', m => {
    const msg = m.messages?.[0];
    if (!msg || msg.key.fromMe) return;

    console.log(chalk.blueBright('Pesan masuk dari:'), msg.key.remoteJid);
    console.log(chalk.magenta('Tipe pesan:'), Object.keys(msg.message || {}));

    try { handler(sock, msg); } catch (err) {
      console.error(chalk.red('[Handler Error]'), err);
    }
  });

  const files = fs.readdirSync(authDir).filter(f => f.endsWith('.json'));
  if (files.length === 0) {
    const { waNumber } = await inquirer.prompt([
      {
        type: 'input',
        name: 'waNumber',
        message: chalk.cyanBright('Masukkan nomor WhatsApp (tanpa +):'),
        validate: (input) => /^\d{8,}$/.test(input) ? true : 'Nomor tidak valid',
      },
    ]);

    try {
      const code = await sock.requestPairingCode(waNumber);
      console.log(chalk.greenBright('\n✅ Pairing Code Ditemukan!'));
      console.log(chalk.yellowBright('📌 Kode:'), chalk.bold.magenta(code));
      console.log(chalk.cyan('Buka WhatsApp > Perangkat Tertaut > Tautkan Perangkat'));
      console.log(chalk.greenBright('\nMenunggu koneksi otomatis...'));
    } catch (error) {
      console.error(chalk.red('❌ Error saat meminta pairing code:'), error);
    }
  }
}

startBot();