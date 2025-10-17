'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Vision', href: '#vision' },
  { name: 'Media', href: '#media' },
  { name: 'News', href: '#news' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">RO</span>
            </div>
            <span
              className={`font-heading font-bold text-xl hidden sm:block ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              Raila Odinga
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled
                    ? activeSection === item.href.substring(1)
                      ? 'text-primary-orange'
                      : 'text-dark hover:text-primary-orange'
                    : activeSection === item.href.substring(1)
                    ? 'text-primary-orange'
                    : 'text-white hover:text-primary-orange'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Language Switcher */}
            <button
              className={`flex items-center space-x-1 ${
                isScrolled ? 'text-dark' : 'text-white'
              } hover:text-primary-orange transition-colors`}
            >
              <Globe size={20} />
              <span className="text-sm">EN</span>
            </button>

            {/* CTA Button */}
            <button className="btn-primary">
              Join Movement
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden ${isScrolled ? 'text-dark' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block py-2 ${
                  isScrolled ? 'text-dark' : 'text-white'
                } hover:text-primary-orange transition-colors`}
              >
                {item.name}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">
              Join Movement
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}