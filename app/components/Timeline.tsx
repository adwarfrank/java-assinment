'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react'
import { useState } from 'react'

const timelineData = [
  {
    year: 1945,
    title: 'Born in Maseno',
    description: 'Born on January 7, 1945, to Jaramogi Oginga Odinga and Mary Ajuma Odinga',
    icon: Calendar,
    color: 'bg-primary-blue',
  },
  {
    year: 1970,
    title: 'Education in Germany',
    description: 'Studied Mechanical Engineering at the University of Magdeburg, East Germany',
    icon: Award,
    color: 'bg-primary-orange',
  },
  {
    year: 1974,
    title: 'Return to Kenya',
    description: 'Established East African Spectre, a company manufacturing liquid petroleum gas cylinders',
    icon: Briefcase,
    color: 'bg-primary-blue',
  },
  {
    year: 1982,
    title: 'Political Detention',
    description: 'Detained following alleged involvement in a coup attempt. Released in 1988',
    icon: MapPin,
    color: 'bg-gray-600',
  },
  {
    year: 1992,
    title: 'Multi-party Democracy',
    description: 'Played key role in the restoration of multi-party democracy in Kenya',
    icon: Award,
    color: 'bg-primary-orange',
  },
  {
    year: 1997,
    title: 'Member of Parliament',
    description: 'Elected MP for Langata Constituency, serving the people with dedication',
    icon: Briefcase,
    color: 'bg-primary-blue',
  },
  {
    year: 2008,
    title: 'Prime Minister of Kenya',
    description: 'Served as Prime Minister in the Grand Coalition Government (2008-2013)',
    icon: Award,
    color: 'bg-primary-orange',
  },
  {
    year: 2018,
    title: 'The Handshake',
    description: 'Historic handshake with President Uhuru Kenyatta, promoting national unity and reconciliation',
    icon: Calendar,
    color: 'bg-primary-blue',
  },
  {
    year: 2018,
    title: 'AU High Representative',
    description: 'Appointed African Union High Representative for Infrastructure Development',
    icon: Briefcase,
    color: 'bg-primary-orange',
  },
  {
    year: 2023,
    title: 'Continuing Legacy',
    description: 'Continues to champion democracy, infrastructure development, and African unity',
    icon: Award,
    color: 'bg-primary-blue',
  },
]

export default function Timeline() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Journey Through Time</h2>
          <p className="section-subtitle">
            A lifetime dedicated to service, democracy, and the advancement of Kenya and Africa
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-orange via-primary-blue to-primary-orange" />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-24">
            {timelineData.map((item, index) => {
              const Icon = item.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isLeft ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:text-right' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedItem(selectedItem === index ? null : index)}
                      className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 ${
                        selectedItem === index ? 'ring-2 ring-primary-orange shadow-xl' : ''
                      }`}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span className="text-3xl font-bold text-primary-orange">{item.year}</span>
                        <div className={`p-2 rounded-full ${item.color}`}>
                          <Icon className="text-white" size={20} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-dark">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                      
                      {selectedItem === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-gray-200"
                        >
                          <p className="text-sm text-gray-500">
                            This milestone represents a significant chapter in Raila Odinga's journey of service to Kenya and Africa.
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Center Icon - Desktop */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center shadow-lg z-10`}>
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>

                  {/* Spacer - Desktop */}
                  <div className="hidden lg:block w-5/12" />

                  {/* Mobile Line */}
                  <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-orange to-primary-blue -z-10" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="/biography" className="btn-primary inline-flex items-center space-x-2">
            <span>Download Full Biography</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}