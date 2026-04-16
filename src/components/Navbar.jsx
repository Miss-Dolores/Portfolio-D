import { useState, useEffect } from 'react'
import { User, Code2, Briefcase, Mail, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About',    icon: User,      href: '#about' },
  { label: 'Skills',   icon: Code2,     href: '#skills' },
  { label: 'Projects', icon: Briefcase, href: '#projects' },
  { label: 'Contacts', icon: Mail,      href: '#contacts' },
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
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(34,197,94,0.12)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 navbar-inner flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => handleClick('#hero')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
          aria-label="Retour à l'accueil"
        >
          <svg width="62" height="36" viewBox="0 0 62 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="60" height="34" rx="4" stroke="#22c55e" strokeWidth="1.5" fill="none" />
            <text
              x="8"
              y="24"
              fontFamily="'Josefin Sans', sans-serif"
              fontWeight="700"
              fontSize="18"
              fill="#22c55e"
              letterSpacing="0.5"
            >
              DS
            </text>
            <line x1="37" y1="8" x2="37" y2="28" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.35" />
            <text
              x="41"
              y="16"
              fontFamily="'Josefin Sans', sans-serif"
              fontWeight="400"
              fontSize="7"
              fill="#22c55e"
              fillOpacity="0.6"
              letterSpacing="1.5"
            >
              DEV
            </text>
            <text
              x="41"
              y="26"
              fontFamily="'Josefin Sans', sans-serif"
              fontWeight="300"
              fontSize="6"
              fill="#22c55e"
              fillOpacity="0.4"
              letterSpacing="0.5"
            >
              STUDIO
            </text>
          </svg>
        </button>

        {/* Desktop pill nav */}
        <ul
          className="hidden md:flex items-center"
          style={{
            gap: '2px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '999px',
            padding: '6px 8px',
            listStyle: 'none',
            margin: 0,
          }}
        >
          {navLinks.map(({ label, icon: Icon, href }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <li key={label}>
                <button
                  onClick={() => handleClick(href)}
                  className="flex items-center gap-1.5 text-sm font-medium"
                  style={{
                    fontFamily: 'var(--font-space)',
                    color: isActive ? '#000000' : 'rgba(255,255,255,0.65)',
                    background: isActive ? '#22c55e' : 'transparent',
                    borderRadius: '999px',
                    padding: '6px 16px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                >
                  <Icon size={13} />
                  {label}
                </button>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <button
          className="hidden md:flex items-center gap-2"
          onClick={() => handleClick('#contacts')}
          style={{
            fontFamily: 'var(--font-space)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            color: '#22c55e',
            border: '1px solid #22c55e',
            borderRadius: '999px',
            padding: '8px 20px',
            background: 'transparent',
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#22c55e'; e.currentTarget.style.color = '#000' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#22c55e' }}
        >
          Me contacter
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden"
          style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-6"
          style={{
            background: 'rgba(0,0,0,0.95)',
            borderTop: '1px solid rgba(34,197,94,0.12)',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map(({ label, icon: Icon, href }) => {
              const isActive = activeSection === href.slice(1)
              return (
                <li key={label}>
                  <button
                    onClick={() => handleClick(href)}
                    className="flex items-center gap-3 text-sm font-medium w-full"
                    style={{
                      fontFamily: 'var(--font-space)',
                      color: isActive ? '#22c55e' : 'rgba(255,255,255,0.7)',
                      background: isActive ? 'rgba(34,197,94,0.08)' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Icon size={16} style={{ color: isActive ? '#22c55e' : 'rgba(255,255,255,0.4)' }} />
                    {label}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Mobile CTA */}
          <button
            onClick={() => handleClick('#contacts')}
            style={{
              marginTop: '20px',
              width: '100%',
              fontFamily: 'var(--font-space)',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#000',
              background: '#22c55e',
              border: 'none',
              borderRadius: '999px',
              padding: '14px 24px',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Contactez-moi
          </button>
        </div>
      )}
    </nav>
  )
}
