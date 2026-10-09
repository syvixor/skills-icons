## Skills Icons ✨

Pamerkan teknologi yang Anda gunakan dengan ikon yang bersih dan dapat disesuaikan, cukup sebutkan teknologi tersebut dengan dipisahkan oleh koma.

### Contoh 💡

![Banner Dark](../../.github/example-dark.png#gh-dark-mode-only)
![Banner Light](../../.github/example-light.png#gh-light-mode-only)

### Bahasa yang Tersedia 🌐

- 🇬🇧 [English](../../README.md)
- 🇨🇳 [中文 (Chinese)](./i18n/zh/README.md)
- 🇪🇸 [Español (Spanish)](./i18n/es/README.md)
- 🇪🇸 [Català (Catalan 🇨🇹)](./i18n/ca/README.md)
- 🇮🇹 [Italiano (Italian)](./i18n/it/README.md)
- 🇷🇺 [Русский (Russian)](./i18n/ru/README.md)
- 🇹🇷 [Türkçe (Turkish)](./i18n/tr/README.md)
- 🇵🇹 [Português (Portuguese)](./i18n/pt/README.md)
- 🇩🇪 [Deutsch (German)](./i18n/de/README.md)
- 🇰🇷 [한국어 (Korean)](./i18n/ko/README.md)
- 🇯🇵 [日本語 (Japanese)](./i18n/ja/README.md)
- 🇮🇳 [हिन्दी (Hindi)](./i18n/hin/README.md)
- 🇮🇳 [മലയാളം (Malayalam)](./i18n/ml/README.md)
- 🇬🇷 [Ελληνικά (Greek)](./i18n/el/README.md)
- 🇧🇷 [Português Brasileiro (Brazilian Portuguese)](./i18n/pt-BR/README.md)
- 🇲🇾 [Bahasa Melayu (Malay)](./i18n/ms/README.md)
- 🇧🇩 [বাংলা (Bengali)](./i18n/bn/README.md)
- 🇮🇩 Bahasa Indonesia (Indonesian) ⬅

> [!IMPORTANT]
> Kami akan sangat berterima kasih jika Anda bersedia memberikan bintang pada repositori kami! Ini membantu kami meningkatkan visibilitas dan mendukung proyek ini.

#### URL Utama 🔗

- https://skills.syvixor.com
- https://skills-icons.vercel.app

```markdown
[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)
```

[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)

### Opsi Konfigurasi 🛠️

| Parameter | Deskripsi | Wajib | Default |
| :--- | :--- | :--- | :--- |
| `i` | Daftar nama ikon yang dipisahkan dengan koma | Ya | / |
| `perline` | Jumlah ikon per baris | Tidak | 15 |
| `radius` | Radius sudut ikon (nilai antara 25 dan 85) | Tidak | 40 |

### Mode Gelap & Terang 🌗

`Skills Icons` kini mendukung deteksi tema otomatis — ikon akan dengan mulus beradaptasi dengan mode gelap 🌙 atau terang ☀️ pada sistem Anda tanpa parameter atau pengaturan manual apa pun.
Perilaku ini didukung oleh media query bawaan `CSS` yaitu `prefers-color-scheme`, yang mendeteksi preferensi tema pengguna saat ini dan menyesuaikan warna SVG secara otomatis.

### Ikon yang Tersedia 🎨

Untuk melihat semua ikon yang tersedia, periksa [URL Builder](https://builder.syvixor.com). Alat ini memungkinkan Anda menelusuri, mencari, dan menyesuaikan ikon dengan mudah.

### Berkontribusi 🎖️

Kami menyambut kontribusi dari siapa pun! Jika Anda ingin membantu, silakan ikuti panduan detail di file [CONTRIBUTING.md](./CONTRIBUTING.md) kami.

#### Cara Berkontribusi

- Tambah Ikon Baru: Ajukan PR (Pull Request) untuk memperluas koleksi ikon kami.
- Perbaikan Bug: Bantu kami mengidentifikasi dan memperbaiki masalah.
- Dokumentasi: Bantu tingkatkan dokumentasi.

#### Persiapan Pengembangan (Development Setup)

```bash
# Clone repositori
git clone [https://github.com/syvixor/skills-icons.git](https://github.com/syvixor/skills-icons.git)
# Instal dependensi
pnpm install # atau npm install
# Jalankan server pengembangan
pnpm dev # atau npm run dev
```

Untuk instruksi lebih lanjut tentang cara memulai, periksa panduan di [CONTRIBUTING.md](./CONTRIBUTING.md).

### Penggunaan Docker 🐳

Bagian ini memberikan instruksi tentang cara membangun dan menjalankan proyek `Skills Icons` menggunakan Docker. Ikuti langkah-langkah di bawah ini untuk mengontainerisasi dan mengelola aplikasi secara efisien.

#### Prasyarat

Sebelum Anda mulai, pastikan Anda telah menginstal hal-hal berikut:

- Docker (versi 18.09 atau lebih tinggi)

#### Membangun Image Docker

Untuk membangun image Docker bagi `Skills Icons`, ikuti langkah-langkah berikut:

1. Buka terminal dan arahkan ke direktori tersebut.
2. Jalankan perintah berikut untuk membangun image:

```bash
docker build -t skills-icons .
# atau
sudo docker build -t skills-icons .
```

#### Menjalankan Container Docker

Setelah image berhasil dibangun, Anda dapat menjalankannya dalam sebuah container:

1. Eksekusi perintah berikut:

```bash
docker run -p 3000:3000 skills-icons
# atau
sudo docker run -p 3000:3000 skills-icons
```

Perintah ini memetakan port 3000 pada mesin host Anda ke port 3000 pada container, yang memungkinkan Anda untuk mengakses `Skills Icons` di http://localhost:3000.

### Permintaan Penghapusan Ikon 🚫

Kami berusaha untuk menghormati semua pedoman merek dan kekayaan intelektual. Jika Anda mewakili perusahaan yang ikonnya disertakan dalam proyek ini dan Anda ingin ikon tersebut dihapus, atau jika Anda yakin kami telah menggunakan ikon dengan cara yang melanggar pedoman merek Anda, silakan buka issue di repositori ini dengan memberikan detail permintaan Anda. Kami akan segera meninjau permintaan Anda dan mengambil tindakan yang sesuai. Kami menghargai pengertian dan kerja sama Anda.

### Dukungan 💝

Jika Anda merasa proyek ini bermanfaat, pertimbangkan untuk:

- Memberikan bintang pada repositori ini
- Membagikannya kepada orang lain
- Berkontribusi pada pengembangannya

### Terima Kasih Kepada Semua Kontributor 🙏

[![Contributors](https://contrib.rocks/image?repo=syvixor/skills-icons)](https://github.com/syvixor/skills-icons/graphs/contributors)

### Didukung Oleh 🛟

Proyek ini di-deploy dan di-host menggunakan [Vercel](https://vercel.com)

### Lisensi 📝

Proyek ini dilisensikan di bawah [MIT License](../../LICENSE)