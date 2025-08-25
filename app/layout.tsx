// app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

const siteUrl = "https://wisata-kolamrenangcicapar.vercel.app";

export const metadata: Metadata = {
  title: "Wisata Kolam Renang Cicapar - Mata Air Alami Garut",
  description: "Kolam renang mata air alami di jantung Kota Garut. Nikmati pengalaman berenang yang menyegarkan dengan fasilitas lengkap dan harga terjangkau.",
  keywords: "kolam renang garut, wisata air garut, cicapar, mata air alami, wisata keluarga, kolam renang leles",
  
  metadataBase: new URL(siteUrl),

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Wisata Kolam Renang Cicapar - Mata Air Alami Garut",
    description: "Kolam renang mata air alami di jantung Kota Garut. Nikmati pengalaman berenang yang menyegarkan!",
    images: [
      {
        url: `${siteUrl}/kolam1.png`,
        width: 1200,
        height: 630,
        alt: 'Papan Nama Wisata Kolam Renang Cicapar',
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wisata Kolam Renang Cicapar - Mata Air Alami Garut",
    description: "Kolam renang mata air alami di jantung Kota Garut. Jernih, segar, dan terjangkau!",
    images: [`${siteUrl}/kolam1.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Wisata Kolam Renang Cicapar",
  "description": "Kolam renang mata air alami di jantung Kota Garut. Nikmati pengalaman berenang yang menyegarkan dengan fasilitas lengkap dan harga terjangkau.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Desa Leles, Kecamatan Leles",
    "addressLocality": "Garut",
    "addressRegion": "Jawa Barat",
    "addressCountry": "ID"
  },
  "telephone": "+6283133074707",
  "email": "bumdeslestari99@gmail.com",
  "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 08:00-17:00",
  "image": "https://wisata-kolamrenangcicapar.vercel.app/kolam1.png",
  "url": "https://wisata-kolamrenangcicapar.vercel.app"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}