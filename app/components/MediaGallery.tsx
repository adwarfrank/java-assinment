'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Play, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react'

const mediaItems = [
  {
    id: 1,
    type: 'image',
    url: '/images/gallery/rally1.jpg',
    thumbnail: '/images/gallery/rally1-thumb.jpg',
    title: 'Azimio Rally in Nairobi',
    category: 'rallies',
    date: '2023-03-15',
  },
  {
    id: 2,
    type: 'video',
    url: 'https://youtube.com/watch?v=example1',
    thumbnail: '/images/gallery/speech1-thumb.jpg',
    title: 'AU Infrastructure Summit Speech',
    category: 'speeches',
    date: '2023-06-20',
  },
  {
    id: 3,
    type: 'image',
    url: '/images/gallery/meeting1.jpg',
    thumbnail: '/images/gallery/meeting1-thumb.jpg',
    title: 'Meeting with AU Leaders',
    category: 'diplomatic',
    date: '2023-07-10',
  },
  {
    id: 4,
    type: 'image',
    url: '/images/gallery/community1.jpg',
    thumbnail: '/images/gallery/community1-thumb.jpg',
    title: 'Community Development Project Launch',
    category: 'community',
    date: '2023-05-25',
  },
  {
    id: 5,
    type: 'video',
    url: 'https://youtube.com/watch?v=example2',
    thumbnail: '/images/gallery/interview1-thumb.jpg',
    title: 'CNN Interview on African Unity',
    category: 'interviews',
    date: '2023-08-12',
  },
  {
    id: 6,
    type: 'image',
    url: '/images/gallery/handshake.jpg',
    thumbnail: '/images/gallery/handshake-thumb.jpg',
    title: 'Historic Handshake',
    category: 'historic',
    date: '2018-03-09',
  },
  {
    id: 7,
    type: 'image',
    url: '/images/gallery/youth1.jpg',
    thumbnail: '/images/gallery/youth1-thumb.jpg',
    title: 'Youth Empowerment Forum',
    category: 'youth',
    date: '2023-09-01',
  },
  {
    id: 8,
    type: 'video',
    url: 'https://youtube.com/watch?v=example3',
    thumbnail: '/images/gallery/parliament1-thumb.jpg',
    title: 'Parliamentary Address',
    category: 'speeches',
    date: '2023-04-18',
  },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'rallies', label: 'Rallies' },
  { id: 'speeches', label: 'Speeches' },
  { id: 'diplomatic', label: 'Diplomatic' },
  { id: 'community', label: 'Community' },
  { id: 'interviews', label: 'Interviews' },
  { id: 'historic', label: 'Historic' },
  { id: 'youth', label: 'Youth' },
]

export default function MediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMedia, setSelectedMedia] = useState<typeof mediaItems[0] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory)

  const openLightbox = (item: typeof mediaItems[0], index: number) => {
    setSelectedMedia(item)
    setLightboxIndex(index)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % filteredMedia.length
      : (lightboxIndex - 1 + filteredMedia.length) % filteredMedia.length
    
    setLightboxIndex(newIndex)
    setSelectedMedia(filteredMedia[newIndex])
  }

  return (
    <section id="media" className="py-20 bg-gray-50">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Media Gallery</h2>
          <p className="section-subtitle">
            Capturing moments of leadership, service, and unity
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-orange text-white'
                  : 'bg-white text-dark hover:bg-gray-100'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Media Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-white/80 text-xs mt-1">
                        {new Date(item.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Video Icon */}
                  {item.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="bg-white/90 rounded-full p-3 shadow-lg">
                        <Play className="text-primary-orange" size={24} fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            Load More Media
          </button>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary-orange transition-colors"
                >
                  <X size={32} />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-orange transition-colors z-10"
                >
                  <ChevronLeft size={40} />
                </button>
                
                <button
                  onClick={() => navigateLightbox('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-orange transition-colors z-10"
                >
                  <ChevronRight size={40} />
                </button>

                {/* Media Content */}
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  {selectedMedia.type === 'image' ? (
                    <Image
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play size={64} className="mx-auto mb-4" />
                        <p className="text-xl">Video Player</p>
                        <p className="text-sm text-gray-400 mt-2">{selectedMedia.url}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Caption */}
                <div className="mt-4 text-white text-center">
                  <h3 className="text-xl font-semibold">{selectedMedia.title}</h3>
                  <p className="text-gray-400 mt-1">
                    {new Date(selectedMedia.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}