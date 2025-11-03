import { userState } from './userState.js';
import { handleCallButton } from './features/callButton.js';
import { handleUrlButton } from './features/urlButton.js';
import { handleQuickReplyButton } from './features/quickReplyButton.js';
import { handleCopyButton } from './features/copyButton.js';

export async function handler(sock, msg) {
  if (!msg?.message) return;
  const from = msg.key.remoteJid;
  const state = userState.get(from) || { step: 'start' };

  let rowId;
  try {
    if (msg.message?.interactiveResponseMessage?.nativeFlowResponseMessage) {
      rowId = JSON.parse(msg.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id;
    } else if (msg.message?.listResponseMessage?.singleSelectReply?.selectedRowId) {
      rowId = msg.message.listResponseMessage.singleSelectReply.selectedRowId;
    }
  } catch {}

  const btnId = msg.message?.buttonsResponseMessage?.selectedButtonId;

  if (rowId) {
    switch (rowId) {
      case 'call':
        await handleCallButton(sock, from);
        break;
      case 'url':
        await handleUrlButton(sock, from);
        break;
      case 'quick':
        await handleQuickReplyButton(sock, from);
        break;
      case 'copy':
        await handleCopyButton(sock, from);
        break;
    }
    return;
  }

/*  if (btnId === 'quick_reply_demo') {
    await sock.sendMessage(from, { text: 'Ini contoh quick reply' });
    return;
  }
*/

  if (state.step === 'start' || state.step === 'menuMain') {
    await sendIntroMenu(sock, from);
    userState.set(from, { step: 'menuMain' });
  }
}

async function sendIntroMenu(sock, from) {
  await sock.sendMessage(from, {
    text: '🤖 Hello!\nChoose an option from the menu below:',
    subtitle: 'All Button Showcase',
    footer: '© Atex Ovi 2025 — MIT License',
    interactiveButtons: [
      {
        name: 'single_select',
        buttonParamsJson: JSON.stringify({
          title: 'Menu',
          sections: [
            {
              title: 'Available Features',
              rows: [
                { title: 'Call Button', description: 'Example: Call Button', id: 'call' },
                { title: 'URL Button', description: 'Example: URL Button', id: 'url' },
                { title: 'Quick Reply Button', description: 'Example: Quick Reply Button', id: 'quick' },
                { title: 'Copy Button', description: 'Example: Copy Button', id: 'copy' },
              ],
            },
          ],
        }),
      },
    ],
  });
}
