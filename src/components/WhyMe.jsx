import { useEffect, useRef } from 'react'
import { CheckCircle2, Clock, MessageCircle, Rocket, Lightbulb, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Qualité sans compromis',
    desc: 'Chaque projet est livré avec un code propre, maintenable et testé. Pas de raccourcis, pas de dette technique cachée.',
  },
  {
    icon: Clock,
    title: 'Respect des délais',
    desc: 'Je planifie avec soin et communique en avance si un ajustement est nécessaire. Votre calendrier est le mien.',
  },
  {
    icon: MessageCircle,
    title: 'Communication claire',
    desc: 'Mises à jour régulières, langage simple, zéro jargon inutile. Vous savez toujours où en est votre projet.',
  },
  {
    icon: Rocket,
    title: 'Livraison rapide',
    desc: 'Grâce à une stack moderne et une méthode éprouvée, je lance vos projets rapidement sans sacrifier la qualité.',
  },
  {
    icon: Lightbulb,
    title: 'Approche créative',
    desc: 'Je ne me contente pas d\'exécuter — j\'apporte des idées, des suggestions et une vision pour améliorer votre produit.',
  },
  {
    icon: HeartHandshake,
    title: 'Partenariat durable',
    desc: 'Mon but est de construire une relation de confiance. Je reste disponible après la livraison pour accompagner votre croissance.',
  },
]

function Card({ icon: Icon, title, desc, delay }) {
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
        padding: '32px 28px',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '14px',
        background: 'rgba(255,255,255,0.02)',
        transition: 'border-color 0.3s, background 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'
        e.currentTarget.style.background  = 'rgba(34,197,94,0.04)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.background  = 'rgba(255,255,255,0.02)'
      }}
    >
      <Icon size={22} color="#22c55e" style={{ marginBottom: '18px' }} />
      <h3 style={{
        fontFamily: 'var(--font-jevena)',
        color: '#ffffff',
        fontSize: '1.05rem',
        fontWeight: 700,
        letterSpacing: '0.01em',
        marginBottom: '10px',
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-space)',
        color: 'rgba(255,255,255,0.42)',
        fontSize: '0.84rem',
        lineHeight: 1.7,
      }}>
        {desc}
      </p>
    </div>
  )
}

export default function WhyMe() {
  return (
    <section id="whyme" style={{ background: '#000000', padding: '80px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          paddingBottom: '28px',
          marginBottom: '56px',
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
              Pourquoi me choisir
            </span>
            <h2 style={{
              fontFamily: 'var(--font-jevena)',
              color: '#ffffff',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
            }}>
              Le choix idéal<br />pour votre projet
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-space)',
            color: 'rgba(255,255,255,0.25)',
            fontSize: '0.82rem',
            lineHeight: 1.6,
            maxWidth: '260px',
            textAlign: 'right',
          }}>
            Des engagements concrets,<br />pas que des promesses.
          </p>
        </div>

        {/* cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {reasons.map((r, i) => (
            <Card key={r.title} {...r} delay={i * 80} />
          ))}
        </div>

      </div>
    </section>
  )
}
