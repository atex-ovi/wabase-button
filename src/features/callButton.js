export async function handleCallButton(sock, jid) {
  await sock.sendMessage(jid, {
    text: '📞 This is an example of a Call Button!',
    interactiveButtons: [
      {
        name: 'cta_call',
        buttonParamsJson: JSON.stringify({
          display_text: 'Call Owner',
          phone_number: '628xxxxxxx'
        })
      }
    ]
  });
}
