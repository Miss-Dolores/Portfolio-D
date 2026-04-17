import { useEffect, useRef, useState } from 'react'
import { ExternalLink, GitFork } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'Underground Bouge',
    description: 'Plateforme web pour révéler les talents urbains du Bénin — événements, battles et promotion d\'artistes via une stratégie pull innovante.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    year: '2026',
    image: '/underg.webp',
    live: 'https://underg.vercel.app/',
    github: 'https://github.com/ange918/underg',
  },
  {
    num: '02',
    title: 'LovePage',
    description: 'Page web romantique pour la Saint-Valentin, message personnalisé, galerie d\'images et design émotionnel pour déclarer son amour.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2026',
    image: '/tp-sv.webp',
    live: 'https://project-sv.netlify.app/',
    github: 'https://github.com/Miss-Dolores/TP-SV',
  },
  {
    num: '03',
    title: 'Solana',
    description: 'Reproduction fidèle du site officiel de Solana. Design dark avec animations, sections statistiques et mise en page responsive.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2026',
    image: '/solana.webp',
    live: 'https://solana-dsdev.netlify.app/',
    github: 'https://github.com/Miss-Dolores/solana',
  },
  {
    num: '04',
    title: 'Assiba Market',
    description: 'Site vitrine pour une superette bio locale avec un de catalogue produits, design coloré et navigation simple pour mettre en valeur les produits du marché.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2026',
    image: '/assiba.webp',
    live: 'https://examdolores.netlify.app/',
    github: 'https://github.com/Miss-Dolores/Examen',
  },
]

function ProjectRow({ project, delay }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

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
      className="reveal-item project-row-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '40px 0',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        cursor: 'default',
        transition: 'opacity 0.3s',
      }}
    >
      <div className="project-row-inner">
        {/* number */}
        <span style={{
          fontFamily: 'var(--font-space)',
          fontSize: '0.68rem',
          color: hovered ? '#22c55e' : 'rgba(255,255,255,0.3)',
          letterSpacing: '0.12em',
          paddingTop: '8px',
          transition: 'color 0.3s',
          flexShrink: 0,
        }}>
          {project.num}
        </span>

        {/* main content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <h3 style={{
              fontFamily: 'var(--font-jevena)',
              color: hovered ? '#22c55e' : '#ffffff',
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              transition: 'color 0.35s ease',
            }}>
              {project.title}
            </h3>
            <span style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.68rem',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.1em',
            }}>
              {project.year}
            </span>
          </div>

          {/* image preview */}
          {project.image && (
            <div style={{
              marginBottom: '20px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              maxWidth: '520px',
              aspectRatio: '16/9',
              background: '#111',
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  transform: hovered ? 'scale(1.03)' : 'scale(1)',
                }}
              />
            </div>
          )}

          <p style={{
            fontFamily: 'var(--font-space)',
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.88rem',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '20px',
          }}>
            {project.description}
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: project.image ? '20px' : '0' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-space)',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.4)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '4px 12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '4px',
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* action buttons for projects with real links */}
          {project.live !== '#' && (
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-space)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: '#000000',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  background: '#22c55e',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  transition: 'background 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#16a34a'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#22c55e'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Voir le projet <ExternalLink size={13} />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-space)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  transition: 'border-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                GitHub <GitFork size={13} />
              </a>
            </div>
          )}
        </div>

        {/* links (for projects without real links) */}
        {project.live === '#' && (
          <div className="project-links">
            <a
              href={project.live}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-space)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: hovered ? '#22c55e' : 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                transition: 'color 0.3s',
                textTransform: 'uppercase',
              }}
            >
              Live <ExternalLink size={13} />
            </a>
            <a
              href={project.github}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-space)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.25)',
                textDecoration: 'none',
                transition: 'color 0.3s',
                textTransform: 'uppercase',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
            >
              Code <GitFork size={13} />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: '#000000', padding: '100px 48px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          paddingBottom: '28px',
          marginBottom: '0',
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
              03 — Projects
            </span>
            <h2 style={{
              fontFamily: 'var(--font-jevena)',
              color: '#ffffff',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
            }}>
              Projets
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-space)',
            color: 'rgba(255,255,255,0.25)',
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
          }}>
            {projects.length} projets sélectionnés
          </p>
        </div>

        {/* project rows */}
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.num} project={p} delay={i * 100} />
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
        </div>

      </div>
    </section>
  )
}
