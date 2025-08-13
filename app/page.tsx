"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Users, Droplets, Shield, Star, Phone, Mail, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Facilities from "@/components/sections/facilities"
import Pricing from "@/components/sections/pricing"
import Advantages from "@/components/sections/advantages"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <About />
      <Facilities />
      <Advantages />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
