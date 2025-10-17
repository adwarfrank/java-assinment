'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Users, Building, GraduationCap, Droplets, TreePine, Target, DollarSign } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Education for All Initiative',
    description: 'Building schools and providing scholarships to underprivileged children across Kenya.',
    icon: GraduationCap,
    image: '/images/projects/education.jpg',
    impact: '50,000+ students supported',
    raised: 2500000,
    goal: 5000000,
    category: 'education',
    details: 'This initiative focuses on constructing modern learning facilities, providing digital learning tools, and offering full scholarships to bright students from disadvantaged backgrounds.',
  },
  {
    id: 2,
    title: 'Clean Water Access Program',
    description: 'Drilling boreholes and installing water purification systems in arid regions.',
    icon: Droplets,
    image: '/images/projects/water.jpg',
    impact: '100+ communities served',
    raised: 1800000,
    goal: 3000000,
    category: 'water',
    details: 'Ensuring every Kenyan has access to clean, safe drinking water through sustainable water solutions and community-managed water points.',
  },
  {
    id: 3,
    title: 'Youth Empowerment Centers',
    description: 'Establishing vocational training centers for youth skill development and entrepreneurship.',
    icon: Users,
    image: '/images/projects/youth.jpg',
    impact: '20,000+ youth trained',
    raised: 3200000,
    goal: 4000000,
    category: 'youth',
    details: 'Creating opportunities for young people through technical training, mentorship programs, and startup incubation centers.',
  },
  {
    id: 4,
    title: 'Community Health Clinics',
    description: 'Building and equipping health clinics in underserved rural areas.',
    icon: Heart,
    image: '/images/projects/health.jpg',
    impact: '30+ clinics established',
    raised: 4500000,
    goal: 6000000,
    category: 'health',
    details: 'Bringing healthcare closer to the people with fully equipped clinics, trained staff, and essential medicines.',
  },
  {
    id: 5,
    title: 'Environmental Conservation',
    description: 'Tree planting campaigns and environmental education programs.',
    icon: TreePine,
    image: '/images/projects/environment.jpg',
    impact: '1M+ trees planted',
    raised: 800000,
    goal: 2000000,
    category: 'environment',
    details: 'Combating climate change through massive reforestation efforts and educating communities on environmental conservation.',
  },
  {
    id: 6,
    title: 'Women Economic Empowerment',
    description: 'Providing micro-loans and business training to women entrepreneurs.',
    icon: DollarSign,
    image: '/images/projects/women.jpg',
    impact: '10,000+ women supported',
    raised: 2100000,
    goal: 3500000,
    category: 'women',
    details: 'Empowering women through financial literacy, business skills training, and access to affordable credit for business ventures.',
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [donationAmount, setDonationAmount] = useState('')

  const calculateProgress = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Community Projects & Initiatives</h2>
          <p className="section-subtitle">
            Making a tangible difference in communities across Kenya through sustainable development projects
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-orange mb-2">150+</div>
            <div className="text-gray-600">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-blue mb-2">2M+</div>
            <div className="text-gray-600">Beneficiaries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-orange mb-2">47</div>
            <div className="text-gray-600">Counties Reached</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-blue mb-2">KES 500M+</div>
            <div className="text-gray-600">Funds Raised</div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            const progress = calculateProgress(project.raised, project.goal)

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Icon size={32} />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-dark capitalize">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-dark">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  {/* Impact Badge */}
                  <div className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full inline-block mb-4">
                    <span className="text-sm font-medium">{project.impact}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-dark">{progress.toFixed(0)}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary-orange to-primary-blue"
                      />
                    </div>
                    <div className="flex justify-between text-xs mt-2 text-gray-500">
                      <span>Raised: {formatCurrency(project.raised)}</span>
                      <span>Goal: {formatCurrency(project.goal)}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 bg-primary-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                    >
                      Learn More
                    </button>
                    <button className="flex-1 bg-primary-orange text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors font-medium text-sm">
                      Donate Now
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-orange to-primary-blue rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Be Part of the Change</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your contribution, no matter how small, makes a significant difference in transforming lives and building a better Kenya for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-dark px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Make a Donation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark transition-all">
              Become a Volunteer
            </button>
          </div>
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-dark">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.details}</p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-4">Make a Donation</h4>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[1000, 5000, 10000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setDonationAmount(amount.toString())}
                        className={`py-2 px-4 rounded-lg border-2 transition-all ${
                          donationAmount === amount.toString()
                            ? 'border-primary-orange bg-primary-orange text-white'
                            : 'border-gray-300 hover:border-primary-orange'
                        }`}
                      >
                        {formatCurrency(amount)}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-4 focus:border-primary-orange focus:outline-none"
                  />
                  <button className="w-full btn-primary">
                    Donate {donationAmount && formatCurrency(parseInt(donationAmount))}
                  </button>
                </div>

                <div className="text-center text-gray-500 text-sm">
                  <p>All donations are tax-deductible and go directly to project implementation.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}