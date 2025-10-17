'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { useState } from 'react'

const newsData = [
  {
    id: 1,
    title: 'Raila Odinga Launches Major Infrastructure Initiative Across East Africa',
    excerpt: 'The AU High Representative unveils ambitious plan to connect African nations through modern infrastructure, promising economic transformation.',
    content: 'Full article content here...',
    image: '/images/news/infrastructure.jpg',
    category: 'Infrastructure',
    date: '2024-01-15',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Youth Empowerment Summit: Creating Opportunities for the Next Generation',
    excerpt: 'Speaking at the annual youth summit, Raila emphasized the importance of investing in young people as the future of Kenya and Africa.',
    content: 'Full article content here...',
    image: '/images/news/youth-summit.jpg',
    category: 'Youth',
    date: '2024-01-12',
    readTime: '3 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Building Bridges: Unity and Reconciliation in Modern Kenya',
    excerpt: 'Reflecting on the journey towards national unity and the importance of dialogue in building a cohesive society.',
    content: 'Full article content here...',
    image: '/images/news/unity.jpg',
    category: 'Unity',
    date: '2024-01-10',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Healthcare Revolution: Universal Coverage for All Kenyans',
    excerpt: 'Unveiling comprehensive healthcare reforms aimed at ensuring every Kenyan has access to quality medical services.',
    content: 'Full article content here...',
    image: '/images/news/healthcare.jpg',
    category: 'Healthcare',
    date: '2024-01-08',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 5,
    title: 'Education Transformation: Preparing Kenya for the Digital Age',
    excerpt: 'New education policies focus on digital literacy, technical skills, and innovation to prepare students for the future.',
    content: 'Full article content here...',
    image: '/images/news/education.jpg',
    category: 'Education',
    date: '2024-01-05',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Economic Summit: Strategies for Sustainable Growth',
    excerpt: 'Leading economists and policymakers gather to discuss Kenya's economic future and strategies for inclusive growth.',
    content: 'Full article content here...',
    image: '/images/news/economy.jpg',
    category: 'Economy',
    date: '2024-01-03',
    readTime: '7 min read',
    featured: false,
  },
]

const categories = ['All', 'Infrastructure', 'Youth', 'Unity', 'Healthcare', 'Education', 'Economy']

export default function NewsFeed() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null)

  const filteredNews = selectedCategory === 'All' 
    ? newsData 
    : newsData.filter(item => item.category === selectedCategory)

  const featuredNews = newsData.filter(item => item.featured)[0]

  return (
    <section id="news" className="py-20 bg-white">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Latest News & Updates</h2>
          <p className="section-subtitle">
            Stay informed about the latest developments and initiatives
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-blue text-white'
                  : 'bg-gray-100 text-dark hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredNews && selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-primary-orange to-primary-blue p-1 rounded-2xl">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(featuredNews.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {featuredNews.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag size={16} />
                        {featuredNews.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-dark">
                      {featuredNews.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {featuredNews.excerpt}
                    </p>
                    <button className="btn-primary inline-flex items-center gap-2">
                      Read Full Article
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article, index) => (
            <motion.article
              key={article.id}
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
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-xs font-medium text-dark">{article.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-dark line-clamp-2">
                  {article.title}
                </h3>

                <p className={`text-gray-600 mb-4 ${expandedArticle === article.id ? '' : 'line-clamp-3'}`}>
                  {article.excerpt}
                </p>

                <button 
                  onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                  className="text-primary-orange font-medium hover:text-primary-blue transition-colors inline-flex items-center gap-1"
                >
                  {expandedArticle === article.id ? 'Show Less' : 'Read More'}
                  <ArrowRight size={16} className={`transition-transform ${expandedArticle === article.id ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-dark">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest news, updates, and exclusive content directly to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-orange focus:outline-none"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}