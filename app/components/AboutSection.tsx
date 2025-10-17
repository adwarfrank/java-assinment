'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, Award, Briefcase, Users, Globe } from 'lucide-react'

export default function AboutSection() {
  const achievements = [
    {
      icon: Award,
      title: 'Democratic Champion',
      description: 'Lifelong advocate for democracy and human rights in Kenya',
    },
    {
      icon: Briefcase,
      title: 'Former Prime Minister',
      description: 'Served as Prime Minister of Kenya from 2008 to 2013',
    },
    {
      icon: Globe,
      title: 'AU High Representative',
      description: 'Leading infrastructure development across Africa',
    },
    {
      icon: Users,
      title: 'Unity Builder',
      description: 'Championing national reconciliation and inclusivity',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Raila Amolo Odinga</h2>
          <p className="section-subtitle">
            A lifetime of service to Kenya and Africa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/raila-portrait.jpg"
                alt="Raila Amolo Odinga"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px]"
            >
              <div className="text-4xl font-bold text-primary-orange mb-2">79</div>
              <div className="text-sm text-gray-600">Years of Age</div>
              <div className="text-2xl font-bold text-primary-blue mt-4">45+</div>
              <div className="text-sm text-gray-600">Years in Service</div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-dark">
              The People's President
            </h3>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Born on January 7, 1945, in Maseno, Kisumu County, <strong>Raila Amolo Odinga</strong> is 
                the son of Kenya's first Vice President, <strong>Jaramogi Oginga Odinga</strong>, and 
                Mary Ajuma Odinga. His journey from a mechanical engineer educated in East Germany to 
                becoming one of Africa's most prominent political figures is a testament to his resilience 
                and dedication to democratic ideals.
              </p>
              
              <p className="mb-4">
                After completing his education at the University of Magdeburg, where he earned a degree in 
                Mechanical Engineering, Raila returned to Kenya in 1970. He established the successful 
                East African Spectre company, manufacturing liquid petroleum gas cylinders, before fully 
                committing to the struggle for democracy.
              </p>
              
              <p className="mb-4">
                His political journey has been marked by personal sacrifice, including years of detention 
                without trial (1982-1988) for his fight against authoritarian rule. As Prime Minister 
                (2008-2013), he played a crucial role in implementing Kenya's new constitution and 
                promoting national reconciliation.
              </p>
              
              <p>
                Today, as the African Union High Representative for Infrastructure Development, Raila 
                continues to champion pan-African unity, economic integration, and sustainable development 
                across the continent. His vision extends beyond Kenya to encompass the prosperity and 
                unity of all African nations.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="bg-primary-orange/10 rounded-lg p-2 mt-1">
                      <Icon className="text-primary-orange" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/biography.pdf"
                download
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download Full Biography</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-blue to-primary-orange rounded-3xl p-12 text-white text-center"
        >
          <svg className="w-12 h-12 mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl md:text-3xl font-light italic mb-6 max-w-4xl mx-auto">
            "Reform is not an event but a process. True democracy is not just about elections, 
            but about creating institutions that serve all people equally and justly."
          </p>
          <p className="text-xl font-heading font-bold">- Raila Amolo Odinga</p>
        </motion.div>
      </div>
    </section>
  )
}