export async function handleCallButton(sock, jid) {
  await sock.sendMessage(jid, {
    text: '📞 This is a Call Button example!',
    interactiveButtons: [
      {
        name: 'cta_call',
        buttonParamsJson: JSON.stringify({
          display_text: 'Call the Owner',
          phone_number: '628xxxxxxx'
        })
      }
    ]
  });
}
