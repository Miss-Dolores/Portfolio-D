import { useEffect, useRef, useState } from 'react'

const badges = [
  { dot: true,  label: 'AVAILABLE FOR WORK' },
  { dot: false, label: 'COTONOU, BÉNIN' },
  { dot: false, label: 'DS DEV' },
]

export default function Hero({ onContactClick }) {
  const line1Ref     = useRef(null)
  const line2Ref     = useRef(null)
  const containerRef = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const [hovered,  setHovered]  = useState(false)

  useEffect(() => {
    const measureText = (text, fontFamily, fontWeight, letterSpacing, fontSize) => {
      const span = document.createElement('span')
      span.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;top:0;left:-9999px;'
      span.style.fontFamily    = fontFamily
      span.style.fontWeight    = fontWeight
      span.style.letterSpacing = letterSpacing
      span.style.fontSize      = fontSize + 'px'
      span.textContent = text
      document.body.appendChild(span)
      const w = span.getBoundingClientRect().width
      document.body.removeChild(span)
      return w
    }

    const fitLine = (el, maxWidth, capPx) => {
      if (!el || maxWidth <= 0) return
      const cs   = getComputedStyle(el)
      const w100 = measureText(el.textContent.trim(), cs.fontFamily, cs.fontWeight, cs.letterSpacing, 100)
      if (w100 === 0) return
      el.style.fontSize = Math.min((100 * maxWidth) / w100, capPx) + 'px'
    }

    const fit = () => {
      if (!containerRef.current) return
      const vw       = window.innerWidth
      const isMobile = vw < 640
      const isTablet = vw >= 640 && vw < 1024
      // laptop/desktop: scale to 70% width, capped at 160px
      const scale = isMobile ? 0.82 : isTablet ? 0.88 : 0.92
      const cap   = isMobile ? 130  : isTablet ? 180  : 220
      const hPad  = isMobile ? 48   : 96
      const maxW  = (containerRef.current.clientWidth - hPad) * scale
      fitLine(line1Ref.current, maxW, cap)
      fitLine(line2Ref.current, maxW, cap)
    }

    document.fonts.ready.then(() => {
      fit()
      window.addEventListener('resize', fit)
      requestAnimationFrame(() => setRevealed(true))
    })

    return () => window.removeEventListener('resize', fit)
  }, [])

  const nameColor = hovered ? '#22c55e' : '#ffffff'

  return (
    <section
      id="hero"
      style={{
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(/hero-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* dark overlay to keep text readable */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.72)',
        zIndex: 0,
      }} />
      <div
        ref={containerRef}
        className="hero-container"
        style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}
      >
        {/* role label */}
        <div style={{
          fontFamily: 'var(--font-space)',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          color: '#22c55e',
          textTransform: 'uppercase',
          marginBottom: '28px',
        }}>
          Développeur Full-Stack & Designer UI/UX
        </div>

        {/* massive name */}
        <div
          className="hero-name-wrapper"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="hero-name-mask">
            <div
              className={`hero-name-line${revealed ? ' revealed' : ''}`}
              ref={line1Ref}
              style={{
                fontFamily: 'var(--font-jevena)',
                fontWeight: 700,
                lineHeight: 0.95,
                whiteSpace: 'nowrap',
                color: nameColor,
                letterSpacing: '-0.02em',
                transition: 'color 0.4s ease',
                animationDelay: '0ms',
              }}
            >
              DOLORES
            </div>
          </div>
          <div className="hero-name-mask">
            <div
              className={`hero-name-line${revealed ? ' revealed' : ''}`}
              ref={line2Ref}
              style={{
                fontFamily: 'var(--font-jevena)',
                fontWeight: 700,
                lineHeight: 0.95,
                whiteSpace: 'nowrap',
                color: nameColor,
                letterSpacing: '-0.02em',
                transition: 'color 0.4s ease',
                animationDelay: '200ms',
              }}
            >
              VLAFONOU
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingTop: '20px',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
            <p
              className={`hero-subtitle${revealed ? ' revealed' : ''}`}
              style={{
                fontFamily: 'var(--font-space)',
                color: 'rgba(255,255,255,0.55)',
                maxWidth: '380px',
                fontSize: '0.88rem',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Je crée des interfaces modernes, fluides et centrées sur l'expérience utilisateur.
            </p>
            <button
              className={`hero-subtitle md:hidden${revealed ? ' revealed' : ''}`}
              onClick={onContactClick}
              style={{
                fontFamily: 'var(--font-space)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#000',
                background: '#22c55e',
                border: 'none',
                borderRadius: '999px',
                padding: '12px 28px',
                cursor: 'pointer',
                fontWeight: 600,
                animationDelay: '0.7s',
              }}
            >
              Me contacter
            </button>
          </div>

          <div
            className={`hero-badges${revealed ? ' revealed' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}
          >
            {badges.map(({ dot, label }) => (
              <div
                key={label}
                onClick={dot ? onContactClick : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '8px 20px',
                  borderRadius: '999px',
                  fontSize: '0.68rem',
                  letterSpacing: '0.13em',
                  color: '#ffffff',
                  fontFamily: 'var(--font-space)',
                  background: 'transparent',
                  cursor: dot ? 'pointer' : 'default',
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={(e) => { if (dot) { e.currentTarget.style.background = 'rgba(34,197,94,0.08)'; e.currentTarget.style.borderColor = '#22c55e' } }}
                onMouseLeave={(e) => { if (dot) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' } }}
              >
                {dot && (
                  <span
                    className="pulse-dot"
                    style={{
                      display: 'inline-block',
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#22c55e',
                      flexShrink: 0,
                    }}
                  />
                )}
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCROLL indicator */}
      <div
        className={`hero-scroll${revealed ? ' revealed' : ''}`}
        style={{
          position: 'absolute',
          right: '22px',
          bottom: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-space)',
          fontSize: '9px',
          letterSpacing: '0.35em',
          color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
        }}>
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
