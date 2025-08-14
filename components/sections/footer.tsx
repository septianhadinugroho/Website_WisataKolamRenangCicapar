"use client"

import { motion } from "framer-motion"
import { Waves, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Waves className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              <h3 className="text-xl md:text-2xl font-bold">Wisata Cicapar</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
              Kolam renang mata air alami di jantung Kota Garut. Nikmati pengalaman berenang yang menyegarkan 
              dengan air jernih yang mengalir langsung dari sumber mata air bawah tanah.
            </p>
            <p className="text-xs md:text-sm text-gray-400">
              Dikelola oleh BUMDES Desa Leles untuk kesejahteraan masyarakat
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Kontak</h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm text-gray-300">
                  Desa Leles, Kec. Leles<br />
                  Kab. Garut, Jawa Barat
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-xs md:text-sm text-gray-300">+62 831-3307-4707</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-xs md:text-sm text-gray-300">bumdeslestari99@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Jam Operasional</h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 md:gap-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-gray-300">08:00 - 17:00 WIB</p>
                  <p className="text-xs text-gray-400">Setiap Hari</p>
                </div>
              </div>
              <div className="bg-gray-800 p-2 md:p-3 rounded-lg">
                <p className="text-xs text-gray-300">
                  <strong className="text-blue-400">Harga Tiket:</strong><br />
                  Dewasa: Rp 10.000<br />
                  Anak-anak: Rp 5.000<br />
                  <span className="text-yellow-400">Diskon 50% untuk warga lokal</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 md:pt-8 text-center"
        >
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 Wisata Kolam Renang Cicapar. Dikelola oleh BUMDES Desa Leles.
          </p>
          <p className="text-gray-500 text-xs mt-1 md:mt-2">
            Mata air alami sejak zaman kolonial • Terjaga kelestariannya untuk generasi mendatang
          </p>
          <p className="text-gray-600 text-xs mt-2 md:mt-4 italic">
            Website ini dibuat oleh KKN Sisdamas Kelompok 125 UIN Sunan Gunung Djati Bandung
          </p>
        </motion.div>
      </div>
    </footer>
  )
}