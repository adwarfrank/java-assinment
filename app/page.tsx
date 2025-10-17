'use client'

import dynamic from 'next/dynamic'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'

// Dynamic imports for better code splitting
const Timeline = dynamic(() => import('./components/Timeline'), {
  loading: () => <div className="py-20 text-center">Loading timeline...</div>
})
const VisionSection = dynamic(() => import('./components/VisionSection'), {
  loading: () => <div className="py-20 text-center">Loading vision...</div>
})
const MediaGallery = dynamic(() => import('./components/MediaGallery'), {
  loading: () => <div className="py-20 text-center">Loading media...</div>
})
const NewsFeed = dynamic(() => import('./components/NewsFeed'), {
  loading: () => <div className="py-20 text-center">Loading news...</div>
})
const ProjectsSection = dynamic(() => import('./components/ProjectsSection'), {
  loading: () => <div className="py-20 text-center">Loading projects...</div>
})
const ContactForm = dynamic(() => import('./components/ContactForm'), {
  loading: () => <div className="py-20 text-center">Loading contact...</div>
})
const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <div className="py-20 text-center">Loading footer...</div>
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Timeline />
      <VisionSection />
      <MediaGallery />
      <NewsFeed />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </main>
  )
}