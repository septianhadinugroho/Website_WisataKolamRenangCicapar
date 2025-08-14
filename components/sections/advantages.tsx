"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, MapPin, Shield, Award, Waves, TreePine } from 'lucide-react'

export default function Advantages() {
  const advantages = [
    {
      icon: Droplets,
      title: "Mata Air Alami",
      description: "Satu-satunya kolam renang dengan sumber mata air alami di pusat kota Garut",
      highlight: "100% Alami"
    },
    {
      icon: Waves,
      title: "Air Tidak Pernah Surut",
      description: "Sumber air berasal dari bawah tanah sehingga debit air selalu stabil sepanjang tahun",
      highlight: "Selalu Jernih"
    },
    {
      icon: Shield,
      title: "Kawasan Lindung",
      description: "Area sekitar mata air ditetapkan sebagai wilayah steril bebas sampah dan limbah",
      highlight: "Terjaga Kebersihan"
    },
    {
      icon: Award,
      title: "Pusat Pelatihan TNI",
      description: "Dipercaya sebagai lokasi pelatihan para TNI di wilayah Garut dan sekitarnya",
      highlight: "Standar Militer"
    },
    {
      icon: MapPin,
      title: "Lokasi Strategis",
      description: "Berada di pusat kota dengan akses mudah dari berbagai arah",
      highlight: "Mudah Dijangkau"
    },
    {
      icon: TreePine,
      title: "Lingkungan Asri",
      description: "Dikelilingi pepohonan dan taman yang membuat suasana sejuk dan nyaman",
      highlight: "Udara Segar"
    }
  ]

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Keunggulan Cicapar
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Mengapa Kolam Renang Cicapar menjadi pilihan utama wisata air di Garut
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-blue-100 p-2 md:p-3 rounded-full group-hover:bg-blue-200 transition-colors flex-shrink-0">
                      <advantage.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 md:mb-3">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800">{advantage.title}</h3>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs w-fit">
                          {advantage.highlight}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{advantage.description}</p>
                    </div>
                  </div>
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
          className="mt-8 md:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 md:p-8 text-white text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Pengalaman Berenang yang Tak Terlupakan
            </h3>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto">
              Rasakan sensasi berenang di mata air alami yang jernih dan segar, 
              dikelilingi suasana alam yang asri di jantung kota Garut
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}