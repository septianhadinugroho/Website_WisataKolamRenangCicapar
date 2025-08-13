import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Wisata Kolam Renang Cicapar - Mata Air Alami Garut",
  description: "Kolam renang mata air alami di jantung Kota Garut. Nikmati pengalaman berenang yang menyegarkan dengan fasilitas lengkap dan harga terjangkau.",
  keywords: "kolam renang garut, wisata air garut, cicapar, mata air alami, wisata keluarga",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
