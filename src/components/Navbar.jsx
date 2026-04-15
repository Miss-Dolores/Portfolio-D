import { useState, useEffect } from 'react'
import { User, Code2, Briefcase, Mail, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About',    icon: User,     href: '#about' },
  { label: 'Skills',   icon: Code2,    href: '#skills' },
  { label: 'Projects', icon: Briefcase, href: '#projects' },
  { label: 'Contacts', icon: Mail,     href: '#contacts' },
]

export default function Navbar({ onNavClick, activeSection }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    onNavClick(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-green-500/10 backdrop-blur-md' : ''}`}
      style={{ background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => handleClick('#hero')}
          className="flex items-center gap-2 font-[var(--font-jevena)] text-[1.15rem] font-bold tracking-[0.08em] text-green-500 bg-transparent border-none cursor-pointer"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
          DS Dev
        </button>

        {/* Desktop nav pill */}
        <ul className="hidden md:flex items-center gap-0.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-2 py-1.5">
          {navLinks.map(({ label, icon: Icon, href }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <li key={label}>
                <button
                  onClick={() => handleClick(href)}
                  className={`flex items-center gap-1.5 text-sm font-medium rounded-full px-4 py-1.5 border-none cursor-pointer transition-all duration-250 font-[var(--font-space)] ${isActive ? 'bg-green-500 text-black' : 'bg-transparent text-white/65 hover:text-white'}`}
                >
                  <Icon size={13} />
                  {label}
                </button>
              </li>
            )
          })}
        </ul>

        {/* CTA button */}
        <button
          onClick={() => handleClick('#contacts')}
          className="hidden md:flex items-center gap-2 font-[var(--font-space)] text-[0.75rem] tracking-[0.1em] uppercase text-green-500 border border-green-500 rounded-full px-5 py-2 bg-transparent cursor-pointer transition-all duration-250 hover:bg-green-500 hover:text-black"
        >
          Me contacter
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden text-white bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-6 border-t border-green-500/10 bg-black/95">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, icon: Icon, href }) => {
              const isActive = activeSection === href.slice(1)
              return (
                <li key={label}>
                  <button
                    onClick={() => handleClick(href)}
                    className={`flex items-center gap-3 text-sm font-medium font-[var(--font-space)] w-full text-left border-none cursor-pointer px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'text-green-500 bg-green-500/8' : 'text-white/70 bg-transparent hover:text-white'}`}
                  >
                    <Icon size={16} className={isActive ? 'text-green-500' : 'text-white/40'} />
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
