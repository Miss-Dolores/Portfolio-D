import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIBuild from './components/WhatIBuild'
import WhyMe from './components/WhyMe'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [transitioning, setTransitioning] = useState(false)
  const contentRef = useRef(null)

  const handleNavClick = (href) => {
    const id = href.slice(1)
    if (contentRef.current) {
      contentRef.current.classList.add('page-fade-out')
      contentRef.current.classList.remove('page-fade-in')
    }
    setTransitioning(true)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      if (contentRef.current) {
        contentRef.current.classList.remove('page-fade-out')
        contentRef.current.classList.add('page-fade-in')
      }
      setTransitioning(false)
    }, 250)
  }

  useEffect(() => {
    const sections = ['hero', 'whatibuild', 'whyme', 'about', 'projects', 'faq', 'skills', 'contacts']
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />
      <div ref={contentRef} className="page-fade-in">
        <Hero onContactClick={() => handleNavClick('#contacts')} />
        <WhatIBuild />
        <WhyMe />
        <About />
        <Projects />
        <Skills />
        <Contacts />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}
