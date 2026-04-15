import { useEffect, useRef } from 'react'

export default function Hero({ onContactClick }) {
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const fitLine = (el, container) => {
      if (!el || !container) return
      let size = 5
      el.style.fontSize = size + 'vw'
      const maxWidth = container.clientWidth
      while (el.scrollWidth < maxWidth - 1 && size < 40) {
        size += 0.05
        el.style.fontSize = size + 'vw'
      }
      el.style.fontSize = (size - 0.1) + 'vw'
    }

    const fit = () => {
      if (containerRef.current) {
        fitLine(line1Ref.current, containerRef.current)
        fitLine(line2Ref.current, containerRef.current)
      }
    }

    document.fonts.ready.then(() => {
      fit()
      window.addEventListener('resize', fit)
    })

    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <section
      id="hero"
      style={{
        background: '#f0ebe0',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        ref={containerRef}
        style={{
          padding: '110px 48px 52px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-space)',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            color: '#888',
            marginBottom: '24px',
            textTransform: 'uppercase',
          }}
        >
          Développeur Web Full-Stack
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '-40px' }}>
          <div
            ref={line1Ref}
            style={{
              fontFamily: 'var(--font-jevena)',
              fontWeight: 700,
              lineHeight: 0.88,
              whiteSpace: 'nowrap',
              color: '#0d0d0d',
              letterSpacing: '-0.02em',
            }}
          >
            Dolores
          </div>
          <div
            ref={line2Ref}
            style={{
              fontFamily: 'var(--font-jevena)',
              fontWeight: 700,
              lineHeight: 0.88,
              whiteSpace: 'nowrap',
              color: '#0d0d0d',
              letterSpacing: '-0.02em',
            }}
          >
            Vlafonou
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingTop: '40px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-space)',
              color: '#777',
              maxWidth: '300px',
              fontSize: '0.9rem',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Je crée des interfaces modernes, fluides et centrées sur l'expérience utilisateur.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'flex-end',
            }}
          >
            <div
              style={{
                background: '#0d0d0d',
                color: '#f0ebe0',
                padding: '9px 22px',
                borderRadius: '999px',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-space)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}
              onClick={onContactClick}
            >
              <span style={{ color: '#22c55e', fontSize: '10px' }}>●</span>
              DISPONIBLE POUR TRAVAILLER
            </div>
            <div
              style={{
                border: '1px solid #ccc',
                padding: '9px 22px',
                borderRadius: '999px',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: '#888',
                fontFamily: 'var(--font-space)',
              }}
            >
              PARIS, FRANCE
            </div>
            <div
              style={{
                border: '1px solid #ccc',
                padding: '9px 22px',
                borderRadius: '999px',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                color: '#888',
                fontFamily: 'var(--font-space)',
              }}
            >
              FULL-STACK DEVELOPER
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          fontSize: '0.62rem',
          letterSpacing: '0.35em',
          color: '#bbb',
          fontFamily: 'var(--font-space)',
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '40px',
            height: '1px',
            background: '#ccc',
            verticalAlign: 'middle',
          }}
        />
        SCROLL
      </div>
    </section>
  )
}
