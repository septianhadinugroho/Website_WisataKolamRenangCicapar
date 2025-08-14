"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Daftar media untuk background slideshow
const backgroundMedia = [
  { type: 'image', src: '/kolam5.png' },
  { type: 'image', src: '/kolam2.png' },
  { type: 'video', src: '/kolam3.mp4' },
  { type: 'image', src: '/kolam6.png' },
  { type: 'image', src: '/kolam4.png' },
];

export default function Hero() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // useEffect untuk membuat slideshow berjalan otomatis
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMediaIndex((prevIndex) =>
        prevIndex === backgroundMedia.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentMediaIndex]);

  return (
    <section className="relative min-h-screen md:min-h-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow Container */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundMedia.map((media, index) => (
          <div
            key={media.src + index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentMediaIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {media.type === 'image' ? (
              <>
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${media.src}')` }}
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
              </>
            ) : (
              <>
                <video
                  src={media.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
              </>
            )}
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <div className="flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-4">
            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Wisata Kolam Renang
            <span className="block text-blue-300">Cicapar</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto px-2">
            Kolam renang alami dengan mata air jernih di jantung Kota Garut
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg px-2">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="text-center">Desa Leles, Kecamatan Leles, Kabupaten Garut</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 md:mt-8 px-4"
          >
            <Link href="#fasilitas">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base" asChild>
                <div>Jelajahi Fasilitas</div>
              </Button>
            </Link>
            <Link href="#harga-tiket">
              <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-gray-300 px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base" asChild>
                <div>Lihat Harga Tiket</div>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 md:h-3 bg-white rounded-full mt-1 md:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}