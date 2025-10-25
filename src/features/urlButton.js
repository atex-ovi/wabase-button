export async function handleUrlButton(sock, jid) {
  await sock.sendMessage(jid, {
    text: '🌐 Ini contoh URL Button!',
    interactiveButtons: [
      {
        name: 'cta_url',
        buttonParamsJson: JSON.stringify({
          display_text: 'Kunjungi GitHub',
          url: 'https://github.com/atex-ovi',
          merchant_url: 'https://github.com/atex-ovi'
        })
      }
    ]
  });
}
