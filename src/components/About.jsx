import { useEffect, useRef } from 'react'

const expertise = [
  {
    label: 'Front-end',
    title: 'Développeur front-end',
    text: 'Je maîtrise les technologies web modernes — HTML, CSS, JavaScript, React. Mon objectif est de transformer les idées en interfaces attrayantes, fluides et performantes.',
    stack: ['React', 'JavaScript', 'CSS', 'HTML'],
  },
  {
    label: 'Back-end',
    title: 'Développeur back-end',
    text: 'Spécialisé dans la logique serveur et la gestion des bases de données, je conçois des APIs robustes pour assurer le bon fonctionnement des applications web.',
    stack: ['Node.js', 'REST API', 'PostgreSQL', 'Git'],
  },
]

function RevealItem({ children, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('in-view'), delay)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref} className="reveal-item">{children}</div>
}

export default function About() {
  return (
    <section id="about" style={{ background: '#000000', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* header row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          paddingBottom: '28px',
          marginBottom: '80px',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div>
            <span style={{
              color: '#22c55e',
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              fontFamily: 'var(--font-space)',
              display: 'block',
              marginBottom: '10px',
              textTransform: 'uppercase',
            }}>
              01 — About
            </span>
            <h2 style={{
              fontFamily: 'var(--font-jevena)',
              color: '#ffffff',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
            }}>
              À propos
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-space)',
            color: '#444',
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
          }}>
            Cotonou, Bénin · Disponible
          </p>
        </div>

        {/* intro */}
        <RevealItem delay={100}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '80px',
            marginBottom: '80px',
            alignItems: 'start',
          }}
          className="about-grid"
          >
            <div style={{ position: 'relative' }}>
              <img
                src="/dolores.png"
                alt="Dolores Vlafonou"
                style={{
                  width: '100%',
                  maxWidth: '260px',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  borderRadius: '12px',
                  display: 'block',
                  filter: 'grayscale(20%)',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: '6px',
                padding: '6px 12px',
                fontFamily: 'var(--font-space)',
                fontSize: '0.62rem',
                letterSpacing: '0.15em',
                color: '#22c55e',
                textTransform: 'uppercase',
              }}>
                Full-Stack Dev
              </div>
            </div>
            <p style={{
              fontFamily: 'var(--font-space)',
              color: '#b0aca6',
              fontSize: '1.1rem',
              lineHeight: 1.75,
            }}>
              Passionné par la création d'expériences numériques modernes et performantes. 
              Je combine maîtrise technique et sensibilité design pour livrer des produits 
              qui font la différence — du concept à la mise en production.
            </p>
          </div>
        </RevealItem>

        {/* expertise rows */}
        <div>
          {expertise.map(({ label, title, text, stack }, i) => (
            <RevealItem key={label} delay={200 + i * 150}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '0.4fr 1fr 0.8fr',
                  gap: '48px',
                  padding: '40px 0',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  alignItems: 'start',
                  transition: 'background 0.3s ease',
                  cursor: 'default',
                }}
                className="expertise-row"
              >
                <div>
                  <span style={{
                    fontFamily: 'var(--font-space)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    color: '#22c55e',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '12px',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-jevena)',
                    color: '#ffffff',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                  }}>
                    {title}
                  </h3>
                </div>
                <p style={{
                  fontFamily: 'var(--font-space)',
                  color: '#888',
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                  paddingTop: '2px',
                }}>
                  {text}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
                  {stack.map(s => (
                    <span key={s} style={{
                      fontFamily: 'var(--font-space)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.12em',
                      color: '#555',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '5px 12px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
        </div>

      </div>
    </section>
  )
}
