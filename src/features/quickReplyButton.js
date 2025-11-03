export async function handleQuickReplyButton(sock, jid) {
  await sock.sendMessage(jid, {
    text: '⚡ Tap the button below to send a quick reply:',
    title: 'Quick Reply Demo',
    interactiveButtons: [
      {
        name: 'quick_reply',
        buttonParamsJson: JSON.stringify({
          display_text: 'Send Quick Reply',
          id: 'quick_reply_demo'
        })
      }
    ]
  });
}
