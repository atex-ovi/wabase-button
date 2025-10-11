# Atex Ovi WA Bot

<p align="center">

  <!-- 🔹 BARIS 1 -->
  <a href="https://www.npmjs.com/package/atexovi-baileys" target="_blank">
    <img src="https://img.shields.io/npm/v/atexovi-baileys?style=flat&logo=npm&logoColor=white&labelColor=CB3837&color=white" alt="npm version">
  </a>
  <a href="https://nodejs.org/en/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-%3E%3D20-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js version">
  </a>
  <a href="https://github.com/atex-ovi/atexovi-wabase-button/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat&logo=balance-scale&logoColor=black" alt="License MIT">
  </a>
  <a href="https://github.com/atex-ovi/atexovi-wabase-button/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/atex-ovi/atexovi-wabase-button?style=flat&logo=github&labelColor=181717&color=white" alt="GitHub Stars">
  </a>
  <a href="https://github.com/atex-ovi/atexovi-wabase-button/network/members" target="_blank">
    <img src="https://img.shields.io/github/forks/atex-ovi/atexovi-wabase-button?style=flat&logo=github&labelColor=181717&color=white" alt="GitHub Forks">
  </a>

  <br>

  <!-- 🔹 BARIS 2 -->
  <a href="https://github.com/atex-ovi/baileys/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/atex-ovi/baileys?style=flat&logo=github&labelColor=181717&color=white" alt="GitHub Issues">
  </a>
  <a href="https://github.com/atex-ovi/baileys/commits/main" target="_blank">
    <img src="https://img.shields.io/github/last-commit/atex-ovi/baileys?style=flat&logo=git&labelColor=181717&color=white" alt="Last Commit">
  </a>
  <a href="https://github.com/atex-ovi/wabase-button/releases" target="_blank">
    <img src="https://img.shields.io/github/v/release/atex-ovi/wabase-button?style=flat&logo=whatsapp&logoColor=white&label=wabase-button&color=brightgreen" alt="Bot Version">
  </a>
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

<br><br>

## Features

* Interactive message templates with various button types
* Quick Reply Button
* URL Button
* Call Button
* Copy Button
* Buttons with multiple options

This bot uses **Atex Ovi** as the default identity and sender name.
You can expand this template to your needs, customizing the name, message, and interactive buttons.

<br><br>

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

<br><br>

## ⚡ Quick Start
- **Termux Android**
```bash
pkg update && pkg upgrade
pkg install nodejs git
git clone https://github.com/atex-ovi/wabase-button.git
cd wabase-button
npm install
cp .env.example .env
nano .env  # edit BOT_NUMBER, OWNER_NUMBER, dll.
npm start
```
- **Windows / Linux**
```bash
git clone https://github.com/atex-ovi/wabase-button.git
cd wabase-button
npm install
cp .env.example .env   # Windows: copy .env.example .env
nano .env               # edit BOT_NUMBER, OWNER_NUMBER, dll.
npm start
```
> **After `npm start`, follow the pairing code that appears in the terminal to connect WhatsApp.**

<br><br>

## Installation Video Tutorial

Watch the following video tutorial for bot installation steps:

<a href="https://www.facebook.com/share/v/1BKnSgDqL8/">
<img src="https://raw.githubusercontent.com/atex-ovi/thumb-fb/main/thumbnail-fb.jpg" width="450"/>
</a>

Click the image to watch the video.


<br><br>

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

<br><br>

## 📦 Wabase Button Installation Guide

**This section covers how to install and run Wabase Button Bot on Termux (Android), Windows, and Linux PC.**

## 🧩 Prerequisites / System Requirements

Before installing the bot, make sure your system meets the following requirements:

- **Node.js version 20 or higher**  
  Check version:  
```bash
node -v
```
- **npm** (comes with Node.js)
  Check version:
```bash
npm -v
```
- **Git installed**
  Check version:
```bash
git --version
```

**Stable internet connection** to download dependencies and complete the pairing process.
For **Android / Termux**: basic knowledge of Termux commands and storage permissions.

<br><br>

### 📱 Termux (Android)

1. Install [Termux](https://termux.com/) & Node.js
```bash
pkg update && pkg upgrade
pkg install nodejs git
```
2. Clone the repository
```bash
git clone https://github.com/atex-ovi/wabase-button.git
cd wabase-button
```

3. Install dependencies:

```bash
npm install
```
4. Configure environment variables
```bash
cp .env.example .env
nano .env
```

  Update values like:
```bash
  BOT_NUMBER=6281234567890
BOT_NAME=Atex Ovi
OWNER_NUMBER=6289876543210
PHONE_NUMBER=6281234567890
```
5. Run the Bot
```bash
npm start
```
  Follow the pairing code instructions in the terminal to connect your WhatsApp.
  
<br><br>

### 🖥️ Windows

1. Install Node.js & Git
   - Download and install [Node.js LTS](https://nodejs.org/en/download)
   - Download and install [Git for Windows](https://git-scm.com/download/win)

2. Clone the repository
```bash
git clone https://github.com/atex-ovi/wabase-button.git
cd wabase-button
```
3. Install dependencies:

```bash
npm install
```
4. Configure environment variables
   - Create a `.env` file in the root folder and set values as shown in Termux above.

5. Run the Bot
```bash
npm start
```

<br><br>

### 🐧 Linux

1. Install Node.js and Git
```bash
sudo apt update && sudo apt install -y nodejs npm git
```

2. Clone the repository
```bash
git clone https://github.com/atex-ovi/wabase-button.git
cd wabase-button
```

3. Install dependencies:

```bash
npm install
```
4. Configure environment variables
   - Create a `.env` file in the root folder and set values as shown above.

5. Run the Bot
```bash
npm start
```

<br><br>

## 📝 Notes / Tips

- A `session/` folder will be created automatically to store authentication.
- The `.env` file contains sensitive data; do not commit it to the public repository.
- This template is flexible; you can customize the message, buttons, and branding as needed.
- Pairing code always appears in the terminal when the bot is running.
- To stop the bot, press `CTRL + C`.
- If you encounter permission errors (Linux/Termux), run:
```bash
chmod +x index.js
```

## 🌟 Done! Your Wabase Button Bot is Ready 🚀
**Run it on Termux, Windows, or Linux PC.**

<br><br>

## Disclaimer

WhatsApp is a trademark of WhatsApp Inc.

This bot uses the [**atexovi-baileys**](https://www.npmjs.com/package/atexovi-baileys) library, which is open-source and unofficial.

Use this bot at your own risk and avoid spam or abuse.

<br><br>

## Donations
Support the bot development via [Saweria](https://saweria.co/atexovi)

<br><br>


## Special Thanks
- [WhatsApp API](https://www.whatsapp.com) - WhatsApp's official messaging technology.
- [adiwajshing (Baileys)](https://github.com/adiwajshing) - Baileys library developer for WhatsApp API.
- [WhiskeySockets Baileys](https://github.com/WhiskeySockets) - additional contributions to Baileys.

<br><br>

## License

This project is licensed under the [MIT License](LICENSE).
