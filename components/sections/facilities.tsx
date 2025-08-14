"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building, UtensilsCrossed, Shirt, Car, Waves, Home, Users, MapPin } from 'lucide-react'

export default function Facilities() {
  const facilities = [
    { icon: Home, name: "Mushola", description: "Tempat ibadah yang nyaman" },
    { icon: UtensilsCrossed, name: "Kantin", description: "Makanan dan minuman segar" },
    { icon: Shirt, name: "Kamar Ganti", description: "Terpisah untuk pria dan wanita" },
    { icon: Building, name: "Toilet & MCK", description: "Fasilitas bersih dan terawat" },
    { icon: Users, name: "Ruang Terbuka", description: "Area santai di lantai 2" },
    { icon: Waves, name: "Perosotan", description: "Wahana seru untuk anak-anak" },
    { icon: Car, name: "Area Parkir", description: "Parkir luas dan aman" },
    { icon: MapPin, name: "Lokasi Strategis", description: "Di pusat kota Garut" }
  ]

  return (
    <section id="fasilitas" className="py-12 md:py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Fasilitas Lengkap
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Nikmati berbagai fasilitas modern yang mendukung kenyamanan kunjungan Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-4 md:p-6 text-center">
                  <facility.icon className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mx-auto mb-2 md:mb-4" />
                  <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-1 md:mb-2">{facility.name}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Jam Operasional</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-base md:text-lg">
              <span className="text-blue-600 font-semibold text-lg md:text-xl">08:00 - 17:00 WIB</span>
              <span className="text-gray-400 hidden md:inline">|</span>
              <span className="text-gray-600">Setiap Hari</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}