import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

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
    const sections = ['hero', 'about', 'skills', 'projects', 'contacts']
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
    <div className="bg-[#0a0f0a] min-h-screen text-[#f0f5f0]">
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} lightBg={activeSection === 'hero'} />
      <div ref={contentRef} className="page-fade-in">
        <Hero onContactClick={() => handleNavClick('#contacts')} />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </div>
  )
}
