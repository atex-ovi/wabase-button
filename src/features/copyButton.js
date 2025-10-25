export async function handleCopyButton(sock, jid) {
  await sock.sendMessage(jid, {
    text: '📋 Ini contoh Copy Button!',
    interactiveButtons: [
      {
        name: 'cta_copy',
        buttonParamsJson: JSON.stringify({
          display_text: 'Salin Link',
          copy_code: 'https://github.com/atex-ovi'
        })
      }
    ]
  });
}
