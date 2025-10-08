export async function handleCallButton(sock, jid) {
  await sock.sendMessage(jid, {
    text: '📞 Ini contoh Call Button!',
    interactiveButtons: [
      {
        name: 'cta_call',
        buttonParamsJson: JSON.stringify({
          display_text: 'Telepon Owner',
          phone_number: '628xxxxxxx'
        })
      }
    ]
  });
}