export async function handleQuickReplyButton(sock, jid) {
  await sock.sendMessage(jid, {
    text: 'Tekan tombol di bawah untuk Quick Reply:',
    title: 'Quick Reply Button',
    interactiveButtons: [
      {
        name: 'quick_reply',
        buttonParamsJson: JSON.stringify({
          display_text: 'Quick Reply',
          id: 'quick_reply_demo'
        })
      }
    ]
  });
}