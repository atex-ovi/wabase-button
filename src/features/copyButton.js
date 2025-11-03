export async function handleCopyButton(sock, jid) {
  await sock.sendMessage(jid, {
    text: '📋 This is a Copy Button example!',
    interactiveButtons: [
      {
        name: 'cta_copy',
        buttonParamsJson: JSON.stringify({
          display_text: 'Copy the Link',
          copy_code: 'https://github.com/atex-ovi'
        })
      }
    ]
  });
}
