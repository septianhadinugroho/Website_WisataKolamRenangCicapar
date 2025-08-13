"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react'

export default function Contact() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Kolam+Renang+Cicapar";
  const phoneNumber = "+6283133074707";
  const emailAddress = "bumdeslestari99@gmail.com";

  // Fungsi untuk menangani klik pada tombol
  const handleActionClick = (action: string, content: string) => {
    switch (action) {
      case "Buka Maps":
        window.open(googleMapsUrl, "_blank");
        break;
      case "Lihat Detail":
        window.open(googleMapsUrl, "_blank");
        break;
      case "Hubungi":
        window.location.href = `tel:${phoneNumber}`;
        break;
      case "Kirim Email":
        window.location.href = `mailto:${emailAddress}`;
        break;
      case "Chat WhatsApp":
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
        break;
      default:
        break;
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Desa Leles, Kecamatan Leles, Kabupaten Garut, Jawa Barat",
      action: "Buka Maps"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 831-3307-4707",
      action: "Hubungi"
    },
    {
      icon: Mail,
      title: "Email",
      content: "bumdeslestari99@gmail.com",
      action: "Kirim Email"
    },
    {
      icon: Clock,
      title: "Jam Buka",
      content: "08:00 - 17:00 WIB (Setiap Hari)",
      action: "Lihat Detail"
    }
  ]

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
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Butuh informasi lebih lanjut? Jangan ragu untuk menghubungi kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <info.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{info.content}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => handleActionClick(info.action, info.content)}
                  >
                    {info.action}
                  </Button>
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
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Lokasi Kami</h3>
              {/* === BAGIAN PETA YANG DIGANTI === */}
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1443022492895!2d107.89805887456494!3d-7.109270492894205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b7b3c1aa8a3f%3A0xcdf7f23af589c50f!2sKolam%20Renang%20Cicapar!5e0!3m2!1sen!2sid!4v1755001886023!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open(googleMapsUrl, "_blank")}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Buka di Google Maps
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Pesan Cepat</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Hubungi kami melalui WhatsApp untuk informasi lebih cepat dan reservasi grup.
                </p>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleActionClick("Chat WhatsApp", "")}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleActionClick("Hubungi", "")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Telepon Langsung
                  </Button>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tips:</strong> Untuk kunjungan rombongan, disarankan untuk menghubungi kami terlebih dahulu.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}