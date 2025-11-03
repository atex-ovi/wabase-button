export async function handleCopyButton(sock, jid) {
  await sock.sendMessage(jid, {
    text: '📋 This is an example of a Copy Button!',
    interactiveButtons: [
      {
        name: 'cta_copy',
        buttonParamsJson: JSON.stringify({
          display_text: 'Copy Link',
          copy_code: 'https://github.com/atex-ovi'
        })
      }
    ]
  });
}
