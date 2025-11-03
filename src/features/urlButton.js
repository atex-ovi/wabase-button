export async function handleUrlButton(sock, jid) {
  await sock.sendMessage(jid, {
    text: '🌐 This is an example of a Button URL!',
    interactiveButtons: [
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({
          display_text: 'Visit GitHub',
          url: 'https://github.com/atex-ovi',
          merchant_url: 'https://github.com/atex-ovi'
        })
      }
    ]
  });
}
