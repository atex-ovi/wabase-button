# Atex Ovi WA Bot

<p align="center">
  <!-- BARIS 1 -->
  <img src="https://img.shields.io/npm/v/atexovi-baileys?style=flat&logo=npm&logoColor=white&labelColor=CB3837&color=white" alt="npm version">
  <img src="https://img.shields.io/badge/Node.js-%3E%3D20-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js version">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat&logo=balance-scale&logoColor=black" alt="License MIT">
  <img src="https://img.shields.io/github/stars/atex-ovi/atexovi-wabase-button?style=flat&logo=github&labelColor=181717&color=white" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/atex-ovi/atexovi-wabase-button?style=flat&logo=github&labelColor=181717&color=white" alt="GitHub Forks">

  <br>

  <!-- BARIS 2 -->
  <img src="https://img.shields.io/github/issues/atex-ovi/atexovi-wabase-button?style=flat&logo=github&labelColor=181717&color=white" alt="GitHub Issues">
  <img src="https://img.shields.io/github/last-commit/atex-ovi/atexovi-wabase-button?style=flat&logo=git&labelColor=181717&color=white" alt="Last Commit">
  <img src="https://img.shields.io/github/v/release/atex-ovi/wabase-button?style=flat&logo=whatsapp&logoColor=white&label=Bot%20Version&color=brightgreen" alt="Bot Version">
  <a href="https://saweria.co/atexovi" target="_blank">
    <img src="https://img.shields.io/badge/Donate-Saweria-FFA726?style=flat&logo=ko-fi&logoColor=white" alt="Saweria Donate">
  </a>
  <a href="https://facebook.com/atex.ovi" target="_blank">
    <img src="https://img.shields.io/badge/Follow-Facebook-1877F2?style=flat&logo=facebook&logoColor=white" alt="Facebook Follow">
  </a>
</p>

<br><br>

![Atex Ovi Logo](https://raw.githubusercontent.com/atex-ovi/atex-logo-npm/main/wabase-logo.jpg)

An interactive WhatsApp bot based on [atexovi-baileys](https://www.npmjs.com/package/atexovi-baileys). This bot displays various types of interactive buttons:

* Quick Reply Button
* URL Button
* Call Button
* Copy Button
* List Button

This bot uses **Atex Ovi** as the default identity and sender name.
You can expand this template to your needs, customizing the name, message, and interactive buttons.

## Demos / Screenshots

<table> 
<tr> 
<td><img src="https://raw.githubusercontent.com/atex-ovi/demo-button/main/list-button.jpg" width="150"></td> 
<td><img src="https://raw.githubusercontent.com/atex-ovi/demo-button/main/url-button.jpg" width="150"></td> 
<td><img src="https://raw.githubusercontent.com/atex-ovi/demo-button/main/call-button.jpg" width="150"></td> 
<td><img src="https://raw.githubusercontent.com/atex-ovi/demo-button/main/quick-reply-button.jpg" width="150"></td> 
<td><img src="https://raw.githubusercontent.com/atex-ovi/demo-button/main/copy-button.jpg" width="150"></td>
</tr>
</table>

## Installation Tutorial

Watch the following video tutorial for bot installation steps:

<a href="https://www.facebook.com/share/v/1HjdxkzLmR/">
<img src="https://raw.githubusercontent.com/atex-ovi/thumb-fb/main/thumbnail-fb.jpg" width="300"/>
</a>

Click the image to watch the video.

## Features

* Interactive message templates with various button types
* Quick Reply Button
* URL Button
* Call Button
* Copy Button
* Buttons with multiple options

## Directory Structure

```
wabase-button/
├── LICENSE
├── README.md
├── .env.example
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── src
├── features
│ ├── callButton.js
│ ├── copyButton.js
│ ├── quickReplyButton.js
│ └── urlButton.js
├── handler.js
└── userState.js
```

## Preparation (For [Termux](https://termux.com/))

1. Clone the repository:

```bash
git clone https://github.com/atex-ovi/wabase-button.git
cd wabase-button
```

2. Copy the `.env.example` file to `.env` and adjust the configuration:

```env
BOT_NUMBER=6281234567890
BOT_NAME=Atex Ovi
OWNER_NUMBER=6289876543210
PHONE_NUMBER=6281234567890
```

3. Install dependencies:

```bash
npm install
```

## Running the Bot

With Node.js directly:

```bash
node index.js
```
Or using npm:

```bash
npm start
```

Follow the pairing code instructions that appear in the terminal to connect the bot to WhatsApp.

## Notes

* A `session/` folder will be created automatically to store authentication.
* The `.env` file contains sensitive data; do not commit it to the public repository.
* This template is flexible; you can customize the message, buttons, and branding as needed.

## .gitignore

```
# Node modules
node_modules/

# Environment variables
.env

# Session folder (WhatsApp authentication)
session/

# Temporary files
tmp/
*.log
*.tmp

# OS generated files
.DS_Store
Thumbs.db

# IDE/editor config
.vscode/
.idea/
```

## Disclaimer

WhatsApp is a trademark of WhatsApp Inc.

This bot uses the [**atexovi-baileys**](https://www.npmjs.com/package/atexovi-baileys) library, which is open-source and unofficial.

Use this bot at your own risk and avoid spam or abuse.
## Donations
Support the bot development via [Saweria](https://saweria.co/atexovi)

## Special Thanks
- [WhatsApp API](https://www.whatsapp.com) - WhatsApp's official messaging technology.
- [adiwajshing (Baileys)](https://github.com/adiwajshing) - Baileys library developer for WhatsApp API.
- [WhiskeySockets Baileys](https://github.com/WhiskeySockets) - additional contributions to Baileys.

## License

This project is licensed under the [MIT License](LICENSE).
