"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Droplets } from 'lucide-react'

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  // Daftar gambar
  const images = [
    "/kolam1.png",
    "/kolam2.png",
    "/kolam7.png",
    "/kolam5.png",
    "/kolam6.png"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Ganti gambar otomatis setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000) // 3 detik

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tentang Cicapar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mata air alami yang telah mengalir sejak zaman kolonial Belanda, kini menjadi destinasi wisata kebanggaan Desa Leles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div {...fadeInUp} className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Sejarah & Makna Nama</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-blue-600">Cicapar</strong> berasal dari kata "cai" (air) dan "capar" yang menggambarkan mata air yang berada di tengah-tengah pemukiman warga.
              </p>
              <p>
                Mata air ini telah ada sejak zaman kolonial Belanda dan menjadi peninggalan bersejarah. Setelah kemerdekaan, mata air diserahkan kepada pemerintah desa untuk dikelola sebagai aset masyarakat.
              </p>
              <p>
                Pengelolaan profesional dimulai tahun 1990-an oleh Pemprov, dengan renovasi terakhir pada 2019 menghabiskan anggaran 500 juta rupiah.
              </p>
            </div>
          </motion.div>

          {/* Slideshow Gambar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Sejarah Cicapar ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800 mb-3">Sejak 1980</h4>
                <p className="text-gray-600">Dikelola pemerintah desa sebagai aset masyarakat</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800 mb-3">BUMDES</h4>
                <p className="text-gray-600">Dikelola oleh Badan Usaha Milik Desa untuk kesejahteraan masyarakat</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800 mb-3">Mata Air Alami</h4>
                <p className="text-gray-600">Sumber air bawah tanah yang tidak pernah surut</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
