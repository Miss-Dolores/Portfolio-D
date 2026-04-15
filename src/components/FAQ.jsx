import { useState, useEffect, useRef } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Quels types de projets acceptez-vous ?',
    a: 'J\'interviens sur des sites vitrines, portfolios, e-commerces, dashboards, APIs REST et applications full-stack. Si vous avez un projet web, je peux vous aider.',
  },
  {
    q: 'Quel est votre délai de livraison moyen ?',
    a: 'Cela dépend de la complexité du projet. Un site vitrine peut être livré en 1 à 2 semaines, une application complète en 4 à 8 semaines. Je fournis toujours une estimation claire avant de commencer.',
  },
  {
    q: 'Travaillez-vous en freelance ou en équipe ?',
    a: 'Je travaille principalement en freelance, ce qui garantit un interlocuteur unique et une communication directe. Pour les projets de grande envergure, je peux m\'associer à d\'autres développeurs de confiance.',
  },
  {
    q: 'Comment se déroule la collaboration à distance ?',
    a: 'Nous communiquons via les outils de votre choix (WhatsApp, email, Zoom…). Je fournis des mises à jour régulières et des accès aux démos en cours pour que vous suiviez l\'avancement en temps réel.',
  },
  {
    q: 'Proposez-vous une maintenance après livraison ?',
    a: 'Oui. Je reste disponible après la livraison pour corriger les bugs, effectuer des mises à jour et faire évoluer votre projet selon vos besoins.',
  },
  {
    q: 'Comment puis-je démarrer un projet avec vous ?',
    a: 'Il suffit de me contacter via le formulaire ou par email. Nous échangeons sur vos besoins, je prépare un devis, et on démarre dès accord signé.',
  },
]

function FAQItem({ q, a, delay }) {
  const [open, setOpen] = useState(false)
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

  return (
    <div
      ref={ref}
      className="reveal-item"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: '24px',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-jevena)',
          color: open ? '#22c55e' : '#ffffff',
          fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
          fontWeight: 700,
          letterSpacing: '0.01em',
          transition: 'color 0.25s ease',
        }}>
          {q}
        </span>
        <span style={{
          flexShrink: 0,
          color: open ? '#22c55e' : 'rgba(255,255,255,0.35)',
          transition: 'color 0.25s ease',
        }}>
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <div style={{
        maxHeight: open ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <p style={{
          fontFamily: 'var(--font-space)',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.9rem',
          lineHeight: 1.75,
          paddingBottom: '24px',
          maxWidth: '700px',
        }}>
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: '#000000', padding: '80px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          paddingBottom: '28px',
          marginBottom: '8px',
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
              FAQ
            </span>
            <h2 style={{
              fontFamily: 'var(--font-jevena)',
              color: '#ffffff',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
            }}>
              Questions<br />fréquentes
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-space)',
            color: 'rgba(255,255,255,0.25)',
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
          }}>
            {faqs.length} questions
          </p>
        </div>

        {/* accordion */}
        <div>
          {faqs.map((item, i) => (
            <FAQItem key={i} {...item} delay={i * 60} />
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
        </div>

      </div>
    </section>
  )
}
