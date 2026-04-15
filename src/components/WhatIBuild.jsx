import { useEffect, useRef } from 'react'
import {
  Monitor,
  ShoppingCart,
  LayoutDashboard,
  Server,
  FileText,
  Briefcase,
  Globe,
  Layers,
} from 'lucide-react'

const siteTypes = [
  {
    icon: Monitor,
    label: 'Site Vitrine',
    desc: 'Présentation professionnelle de votre activité ou marque.',
  },
  {
    icon: Briefcase,
    label: 'Portfolio',
    desc: 'Mise en valeur de vos projets et compétences.',
  },
  {
    icon: ShoppingCart,
    label: 'E-Commerce',
    desc: 'Boutique en ligne avec catalogue, panier et paiement.',
  },
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    desc: 'Interface d\'administration avec visualisation de données.',
  },
  {
    icon: Server,
    label: 'API REST',
    desc: 'Backend robuste avec authentification et base de données.',
  },
  {
    icon: FileText,
    label: 'Blog / CMS',
    desc: 'Plateforme de contenu dynamique et facile à gérer.',
  },
  {
    icon: Globe,
    label: 'Landing Page',
    desc: 'Page de conversion optimisée pour vos campagnes.',
  },
  {
    icon: Layers,
    label: 'App Full-Stack',
    desc: 'Application complète du frontend au backend.',
  },
]

function Card({ icon: Icon, label, desc, delay }) {
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
      className="reveal-item whatibuild-card"
      style={{
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        padding: '28px 24px',
        cursor: 'default',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        background: 'rgba(255,255,255,0.02)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'
        e.currentTarget.style.background  = 'rgba(34,197,94,0.04)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.background  = 'rgba(255,255,255,0.02)'
      }}
    >
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        background: 'rgba(34,197,94,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '18px',
      }}>
        <Icon size={18} color="#22c55e" />
      </div>
      <h3 style={{
        fontFamily: 'var(--font-jevena)',
        color: '#ffffff',
        fontSize: '1rem',
        fontWeight: 700,
        letterSpacing: '0.01em',
        marginBottom: '8px',
      }}>
        {label}
      </h3>
      <p style={{
        fontFamily: 'var(--font-space)',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.82rem',
        lineHeight: 1.65,
      }}>
        {desc}
      </p>
    </div>
  )
}

export default function WhatIBuild() {
  return (
    <section id="whatibuild" style={{ background: '#000000', padding: '80px 48px' }}>
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
              Ce que je construis
            </span>
            <h2 style={{
              fontFamily: 'var(--font-jevena)',
              color: '#ffffff',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
            }}>
              Types de sites &amp; apps
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-space)',
            color: 'rgba(255,255,255,0.25)',
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
          }}>
            {siteTypes.length} catégories
          </p>
        </div>

        {/* grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px',
        }}>
          {siteTypes.map((item, i) => (
            <Card key={item.label} {...item} delay={i * 70} />
          ))}
        </div>

      </div>
    </section>
  )
}
