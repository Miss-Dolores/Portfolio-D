import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'

const TYPING_TEXTS = [
  'Developpeur web full-stack',
  'UI/UX Enthusiast',
  'React Developer',
]

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 4 + 2,
  delay: `${Math.random() * 4}s`,
  duration: `${Math.random() * 4 + 4}s`,
  animIndex: i % 3,
}))

export default function Hero({ onContactClick }) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = TYPING_TEXTS[phraseIndex]

    if (!deleting && charIndex <= current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, 80)
    } else if (!deleting && charIndex > current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, 45)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setPhraseIndex((p) => (p + 1) % TYPING_TEXTS.length)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [charIndex, deleting, phraseIndex])

  const animNames = ['float-1', 'float-2', 'float-3']

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden grid-bg"
    >
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: '#22c55e',
            animation: `${animNames[p.animIndex]} ${p.duration} ${p.delay} ease-in-out infinite`,
            opacity: 0.4,
          }}
        />
      ))}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,197,94,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className="mb-6 text-base md:text-lg font-medium tracking-widest uppercase"
          style={{ color: '#22c55e', fontFamily: 'var(--font-space)' }}
        >
          <span>{displayText}</span>
          <span className="typing-cursor" />
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{
            fontFamily: 'var(--font-jevena)',
            background: 'linear-gradient(135deg, #22c55e 0%, #ffffff 60%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
          }}
        >
          DOLORES VLAFONOU
        </h1>

        <p
          className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: '#6b7c6b', fontFamily: 'var(--font-space)' }}
        >
          Je crée des interfaces modernes, fluides et centrées sur l'expérience utilisateur.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onContactClick}
            className="btn-slide px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300"
            style={{
              fontFamily: 'var(--font-space)',
              color: '#f0f5f0',
              border: '1px solid #22c55e',
              background: 'transparent',
            }}
          >
            Contactez-moi
          </button>

          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-[#22c55e]"
            style={{ color: '#6b7c6b', fontFamily: 'var(--font-space)' }}
          >
            Voir mes projets <ArrowDown size={16} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} style={{ color: '#22c55e', opacity: 0.6 }} />
      </div>
    </section>
  )
}
