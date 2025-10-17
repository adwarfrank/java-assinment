'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { name: 'Biography', href: '#about' },
      { name: 'Timeline', href: '#timeline' },
      { name: 'Achievements', href: '#achievements' },
      { name: 'Vision', href: '#vision' },
    ],
    resources: [
      { name: 'News & Updates', href: '#news' },
      { name: 'Media Gallery', href: '#media' },
      { name: 'Press Releases', href: '/press' },
      { name: 'Publications', href: '/publications' },
    ],
    getInvolved: [
      { name: 'Projects', href: '#projects' },
      { name: 'Donate', href: '/donate' },
      { name: 'Volunteer', href: '/volunteer' },
      { name: 'Events', href: '/events' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/RailaOdinga', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/RailaOdinga', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/RailaOdinga', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/in/RailaOdinga', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@RailaOdinga', label: 'YouTube' },
  ]

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">RO</span>
              </div>
              <span className="font-heading font-bold text-xl">Raila Odinga</span>
            </div>
            <p className="text-gray-400 mb-6">
              Unity. Service. Progress.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 rounded-lg p-2 hover:bg-primary-orange transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1" />
                <div>
                  <p>+254 20 123 4567</p>
                  <p>+254 700 123 456</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1" />
                <div>
                  <p>info@railaodinga.ke</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <div>
                  <p>Capitol Hill Square</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Raila Amolo Odinga. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Made with Love */}
      <div className="bg-gradient-to-r from-primary-orange to-primary-blue py-2">
        <div className="text-center text-sm">
          Made with <Heart className="inline w-4 h-4 mx-1" fill="currentColor" /> for Kenya
        </div>
      </div>
    </footer>
  )
}