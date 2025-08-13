"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Baby, Heart, Gift, Clock, CheckCircle } from 'lucide-react'

export default function Pricing() {
  const pricingPlans = [
    {
      icon: Users,
      title: "Dewasa",
      price: "Rp 10.000",
      description: "Tiket masuk untuk pengunjung dewasa",
      features: ["Akses kolam renang", "Fasilitas MCK", "Area parkir", "Ruang terbuka"],
      popular: false
    },
    {
      icon: Baby,
      title: "Anak-anak",
      price: "Rp 5.000",
      description: "Tiket masuk untuk anak-anak",
      features: ["Akses kolam renang", "Wahana perosotan", "Fasilitas MCK", "Area bermain"],
      popular: true
    },
    {
      icon: Heart,
      title: "Warga Lokal",
      price: "50% Diskon",
      description: "Harga khusus untuk warga setempat",
      features: ["Dewasa: Rp 5.000", "Anak: Rp 2.500", "Syarat: KTP setempat", "Berlaku setiap hari"],
      popular: false
    }
  ]

  return (
    <section id="harga-tiket" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Harga Tiket Terjangkau
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nikmati wisata air berkualitas dengan harga yang ramah di kantong
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-blue-500 relative' : ''
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Paling Populer
                  </Badge>
                )}
                <CardContent className="p-8 text-center">
                  <plan.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
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
          className="grid md:grid-cols-2 gap-8"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-8 text-center">
              <Gift className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Gratis untuk Kurang Mampu</h3>
              <p className="text-green-100 mb-4">
                Warga yang kurang mampu dapat masuk gratis dengan membawa surat pengantar dari RT/RW
              </p>
              <Badge variant="secondary" className="bg-white text-green-600">
                Program Sosial
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Jam Operasional</h3>
              <div className="space-y-2 text-blue-100">
                <p className="text-2xl font-bold text-white">08:00 - 17:00 WIB</p>
                <p>Buka setiap hari</p>
                <p>Termasuk hari libur nasional</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
