'use client'

import { motion } from 'framer-motion'
import { TrendingUp, GraduationCap, Heart, Building2, Users, Globe2 } from 'lucide-react'
import Image from 'next/image'

const visionData = [
  {
    title: 'Economic Transformation',
    description: 'Building a prosperous Kenya through industrialization, job creation, and support for SMEs. Focusing on value addition in agriculture and manufacturing.',
    icon: TrendingUp,
    color: 'from-primary-orange to-orange-600',
    image: '/images/economy.jpg',
    points: [
      'Create 1 million jobs annually',
      'Support youth entrepreneurship',
      'Promote local manufacturing',
      'Enhance agricultural value chains',
    ],
  },
  {
    title: 'Education for All',
    description: 'Ensuring quality education from early childhood to university level. Investing in technical training and digital literacy for the 21st century.',
    icon: GraduationCap,
    color: 'from-primary-blue to-blue-600',
    image: '/images/education.jpg',
    points: [
      'Free primary and secondary education',
      'Expand technical and vocational training',
      'Digital literacy programs',
      'University accessibility for all',
    ],
  },
  {
    title: 'Universal Healthcare',
    description: 'Providing affordable, quality healthcare for every Kenyan. Building modern health facilities and training medical professionals.',
    icon: Heart,
    color: 'from-red-500 to-red-600',
    image: '/images/healthcare.jpg',
    points: [
      'Universal health coverage',
      'Modern medical facilities',
      'Train 50,000 healthcare workers',
      'Free maternal healthcare',
    ],
  },
  {
    title: 'Infrastructure Development',
    description: 'Connecting Kenya through modern roads, railways, and digital infrastructure. Building the foundation for economic growth.',
    icon: Building2,
    color: 'from-gray-600 to-gray-700',
    image: '/images/infrastructure.jpg',
    points: [
      'Expand SGR to all counties',
      'Modern highways network',
      'Affordable housing programs',
      'High-speed internet access',
    ],
  },
  {
    title: 'National Unity',
    description: 'Fostering unity, inclusivity, and equal opportunities for all Kenyans regardless of tribe, religion, or background.',
    icon: Users,
    color: 'from-green-500 to-green-600',
    image: '/images/unity.jpg',
    points: [
      'Inclusive governance',
      'Youth and women empowerment',
      'Fight against corruption',
      'Equal opportunities for all',
    ],
  },
  {
    title: 'Pan-African Leadership',
    description: 'Championing African unity and integration. Leading infrastructure development across the continent for shared prosperity.',
    icon: Globe2,
    color: 'from-purple-500 to-purple-600',
    image: '/images/africa.jpg',
    points: [
      'African economic integration',
      'Cross-border infrastructure',
      'Intra-African trade promotion',
      'Continental peace and security',
    ],
  },
]

export default function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Vision for Kenya & Africa</h2>
          <p className="section-subtitle">
            A comprehensive blueprint for transformation, prosperity, and unity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionData.map((item, index) => {
            const Icon = item.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`} />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <Icon className="text-white" size={64} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-dark">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    {/* Key Points */}
                    <ul className="space-y-2 mb-6">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary-orange mt-1">✓</span>
                          <span className="text-sm text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button className="w-full py-2 px-4 bg-gray-100 text-dark rounded-lg hover:bg-primary-orange hover:text-white transition-colors duration-300 font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-orange to-primary-blue rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Our Commitment</h3>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            "Together, we will build a Kenya where every citizen has equal opportunities, 
            where innovation drives our economy, where no one is left behind, and where 
            our unity is our greatest strength. This is not just a vision—it's our promise 
            to future generations."
          </p>
          <div className="mt-8">
            <p className="text-2xl font-heading font-bold">- Raila Amolo Odinga</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}