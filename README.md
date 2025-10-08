# Atex Ovi WA Bot

![Atex Ovi Logo](https://raw.githubusercontent.com/atex-ovi/atex-logo-npm/main/atex-npm.jpg)

Bot WhatsApp interaktif berbasis **atexovi-baileys**. Bot ini menampilkan berbagai jenis tombol interaktif:

* Quick Reply Button
* URL Button
* Call Button
* Copy Button
* List Button

Bot ini menggunakan **Atex Ovi** sebagai identitas default dan nama pengirim pesan.
Anda bisa mengembangkan template ini sesuai kebutuhan, menyesuaikan nama, pesan, maupun tombol interaktif.

## Demo / Screenshots

### List Button
![List Button](https://raw.githubusercontent.com/atex-ovi/demo-button/main/list-button.jpg)

### URL Button
![URL Button](https://raw.githubusercontent.com/atex-ovi/demo-button/main/url-button.jpg)

### Call Button
![Call Button](https://raw.githubusercontent.com/atex-ovi/demo-button/main/call-button.jpg)

### Quick Reply Button
![Quick Reply Button](https://raw.githubusercontent.com/atex-ovi/demo-button/main/quick-reply-button.jpg)

### Copy Button
![Copy Button](https://raw.githubusercontent.com/atex-ovi/demo-button/main/copy-button.jpg)

## Fitur

* Template pesan interaktif dengan berbagai jenis tombol
* Quick Reply Button
* URL Button
* Call Button
* Copy Button
* Button dengan multiple opsi

## Struktur Direktori

```
atexovi-wabase-button/
├── README.md
├── assets/
│   └── logo.png
├── .env.example
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── src
    ├── features
    │   ├── callButton.js
    │   ├── copyButton.js
    │   ├── quickReplyButton.js
    │   └── urlButton.js
    ├── handler.js
    └── userState.js
```

## Persiapan

1. Clone repository:

```bash
git clone https://github.com/atex-ovi/atexovi-wabase-button.git
cd atexovi-wabase-button
```

2. Salin file `.env.example` menjadi `.env` dan sesuaikan konfigurasi:

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

## Menjalankan Bot

Dengan Node.js langsung:

```bash
node index.js
```
Atau menggunakan npm:

```bash
npm start
```

Ikuti instruksi pairing code yang muncul di terminal untuk menghubungkan bot ke WhatsApp.

## Catatan

* Folder `session/` akan dibuat secara otomatis untuk menyimpan autentikasi.
* File `.env` berisi data sensitif, jangan commit ke repository publik.
* Template ini bersifat fleksibel, Anda bisa menyesuaikan pesan, tombol, dan branding sesuai kebutuhan.

## .gitignore

```
# Node modules
node_modules/

# Environment variables
.env

# Session folder (autentikasi WhatsApp)
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

WhatsApp adalah merek dagang dari WhatsApp Inc.

Bot ini menggunakan library **atexovi-baileys**, yang merupakan library open-source dan tidak resmi.


Gunakan bot ini dengan tanggung jawab sendiri dan hindari spam atau penyalahgunaan.


## Donasi
Dukung pengembangan bot ini melalui [Saweria](https://saweria.co/atexovi)

## Special Thanks
- [WhatsApp API](https://www.whatsapp.com) - teknologi resmi WhatsApp untuk integrasi pesan.
- [adiwajshing (Baileys)](https://github.com/adiwajshing) - pengembang library Baileys untuk WhatsApp API.
- [WhiskeySockets Baileys](https://github.com/WhiskeySockets) - kontribusi tambahan pada Baileys.
- [atexovi-baileys](https://www.npmjs.com/package/atexovi-baileys) - pengembangan template bot.


## Lisensi

ISC
