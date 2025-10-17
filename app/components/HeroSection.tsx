'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Play } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/raila-hero.jpg"
          alt="Raila Amolo Odinga"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="gradient-overlay z-10" />

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex items-center justify-center"
      >
        <div className="section-padding text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-shadow">
              Raila Amolo Odinga
            </h1>
            <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl mb-8">
              <span>Unity</span>
              <span className="text-primary-orange">•</span>
              <span>Service</span>
              <span className="text-primary-orange">•</span>
              <span>Progress</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-100"
          >
            Former Prime Minister of Kenya • AU High Representative for Infrastructure Development • Champion of Democracy and Unity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#about"
              className="btn-primary inline-flex items-center justify-center space-x-2 group"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>Explore His Story</span>
              <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </a>
            
            <button
              onClick={() => setIsVideoOpen(true)}
              className="btn-secondary inline-flex items-center justify-center space-x-2 group"
            >
              <Play className="group-hover:scale-110 transition-transform" size={20} />
              <span>Watch Video</span>
            </button>

            <a
              href="#contact"
              className="bg-white text-dark px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Join the Movement
            </a>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-orange">45+</div>
              <div className="text-sm text-gray-200">Years of Service</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-orange">2M+</div>
              <div className="text-sm text-gray-200">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-orange">54</div>
              <div className="text-sm text-gray-200">AU Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-orange">100+</div>
              <div className="text-sm text-gray-200">Infrastructure Projects</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white"
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-primary-orange z-10"
            >
              <X size={32} />
            </button>
            {/* Video placeholder - replace with actual video */}
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play size={64} className="mx-auto mb-4" />
                <p>Video content goes here</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}