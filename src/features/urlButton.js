export async function handleUrlButton(sock, jid) {
  await sock.sendMessage(jid, {
    text: '🌐 This is a URL Button example!',
    interactiveButtons: [
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({
          display_text: 'Visit on GitHub',
          url: 'https://github.com/atex-ovi',
          merchant_url: 'https://github.com/atex-ovi'
        })
      }
    ]
  });
}
