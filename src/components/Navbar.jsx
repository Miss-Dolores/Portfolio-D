import { useState, useEffect } from 'react'
import { User, Code2, Briefcase, Mail, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', icon: User, href: '#about' },
  { label: 'Skills', icon: Code2, href: '#skills' },
  { label: 'Projects', icon: Briefcase, href: '#projects' },
  { label: 'Contacts', icon: Mail, href: '#contacts' },
]

export default function Navbar({ onNavClick, activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href) => {
    onNavClick(href)
    setMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,15,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid #1a2e1a' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="text-xl font-bold cursor-pointer select-none"
          style={{ fontFamily: 'var(--font-jevena)', color: '#22c55e', letterSpacing: '0.05em' }}
          onClick={() => handleClick('#hero')}
        >
          DS Dev
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, icon: Icon, href }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <li key={label}>
                <button
                  onClick={() => handleClick(href)}
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:text-[#22c55e] group"
                  style={{
                    fontFamily: 'var(--font-space)',
                    color: isActive ? '#22c55e' : '#f0f5f0',
                  }}
                >
                  <Icon
                    size={15}
                    style={{ color: isActive ? '#22c55e' : '#6b7c6b' }}
                    className="transition-colors duration-200 group-hover:text-[#22c55e]"
                  />
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 rounded-full"
                      style={{ backgroundColor: '#22c55e' }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <button
          className="md:hidden transition-colors duration-200 hover:text-[#22c55e]"
          style={{ color: '#f0f5f0' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-4"
          style={{ background: '#0f1a0f', borderTop: '1px solid #1a2e1a' }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, icon: Icon, href }) => {
              const isActive = activeSection === href.slice(1)
              return (
                <li key={label}>
                  <button
                    onClick={() => handleClick(href)}
                    className="flex items-center gap-3 text-sm font-medium w-full transition-colors duration-200 hover:text-[#22c55e]"
                    style={{
                      fontFamily: 'var(--font-space)',
                      color: isActive ? '#22c55e' : '#f0f5f0',
                    }}
                  >
                    <Icon size={16} style={{ color: isActive ? '#22c55e' : '#6b7c6b' }} />
                    {label}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
