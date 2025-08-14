# Website Wisata Kolam Renang Cicapar

Selamat datang di repositori resmi Website Wisata Kolam Renang Cicapar. Proyek ini adalah sebuah platform daring yang dirancang untuk memperkenalkan dan mempromosikan destinasi wisata Kolam Renang Cicapar yang terletak di Desa Leles, Garut. Website ini dikembangkan menggunakan **Next.js** dan **Tailwind CSS**, dengan tujuan memberikan informasi lengkap mengenai sejarah, fasilitas, harga tiket, dan keunggulan yang dimiliki oleh tempat wisata ini.

## Latar Belakang Proyek

Website ini lahir dari inisiatif mahasiswa KKN Sisdamas Kelompok 125 UIN Sunan Gunung Djati Bandung sebagai bentuk kontribusi nyata kepada masyarakat. Tujuannya adalah untuk meningkatkan visibilitas Kolam Renang Cicapar yang dikelola oleh BUMDES Desa Leles, sehingga dapat menarik lebih banyak pengunjung dan pada akhirnya memberikan manfaat ekonomi bagi masyarakat setempat.

## Fitur Utama

  - **Desain Responsif**: Tampilan website dapat menyesuaikan diri dengan berbagai ukuran layar, mulai dari desktop hingga perangkat mobile.
  - **Informasi Lengkap**: Menyajikan detail mengenai:
      - **Sejarah Cicapar**: Asal-usul nama dan perkembangan dari zaman kolonial hingga saat ini.
      - **Fasilitas**: Daftar fasilitas yang tersedia, seperti mushola, kantin, kamar ganti, dan area parkir.
      - **Harga Tiket**: Informasi harga tiket masuk untuk dewasa, anak-anak, dan diskon khusus untuk warga lokal.
      - **Keunggulan**: Poin-poin unik yang membedakan Cicapar, seperti mata air alami dan lokasinya yang strategis.
  - **Galeri Foto & Video**: Menampilkan keindahan Kolam Renang Cicapar melalui slideshow gambar dan video yang menarik.
  - **Informasi Kontak**: Memudahkan pengunjung untuk menghubungi pengelola melalui telepon, email, atau WhatsApp.
  - **Peta Lokasi**: Integrasi dengan Google Maps untuk mempermudah pengunjung menemukan lokasi.

## Teknologi yang Digunakan

  - **Framework**: [Next.js](https://nextjs.org/)
  - **Styling**: [Tailwind CSS](https://tailwindcss.com/)
  - **Animasi**: [Framer Motion](https://www.framer.com/motion/)
  - **Komponen UI**: Dibangun menggunakan [Shadcn/ui](https://ui.shadcn.com/) yang berbasis pada Radix UI.
  - **Bahasa**: TypeScript

## Struktur Direktori

```
/
├── app/                  # Halaman utama dan layout
│   ├── globals.css       # Gaya global
│   └── layout.tsx        # Layout utama
│   └── page.tsx          # Halaman utama
├── components/           # Komponen React
│   ├── sections/         # Komponen untuk setiap bagian halaman
│   │   ├── about.tsx
│   │   ├── advantages.tsx
│   │   ├── contact.tsx
│   │   ├── facilities.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   └── pricing.tsx
│   └── ui/               # Komponen UI (Tombol, Kartu, dll.)
├── public/               # Aset statis (Gambar, Video, Favicon)
└── ...                   # File konfigurasi lainnya
```

## Cara Menjalankan Proyek Secara Lokal

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/septianhadinugroho/website_wisatakolamrenangcicapar.git
    ```
2.  **Masuk ke direktori proyek:**
    ```bash
    cd website_wisatakolamrenangcicapar
    ```
3.  **Install dependensi:**
    ```bash
    npm install
    ```
4.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```
    Buka [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) di browser Anda untuk melihat hasilnya.

## Kontribusi

Proyek ini adalah hasil kolaborasi antara mahasiswa KKN dan pengelola BUMDES Desa Leles. Kami sangat terbuka untuk kontribusi dari siapa saja yang ingin membantu meningkatkan fungsionalitas dan kualitas website ini. Jangan ragu untuk membuat *pull request* atau melaporkan isu yang Anda temukan.

-----

Terima kasih telah mengunjungi repositori ini. Semoga website ini dapat memberikan manfaat yang besar bagi kemajuan Wisata Kolam Renang Cicapar.
