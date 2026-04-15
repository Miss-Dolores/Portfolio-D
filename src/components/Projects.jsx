import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, GitFork } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'E-Commerce Dashboard',
    description: 'Application de gestion e-commerce avec tableau de bord analytique, gestion des stocks et suivi des commandes en temps réel.',
    tags: ['React', 'Node.js', 'Tailwind CSS'],
    year: '2024',
    live: '#',
    github: '#',
  },
  {
    num: '02',
    title: 'Portfolio Personnel',
    description: 'Site vitrine minimaliste avec animations CSS avancées, design system cohérent et expérience utilisateur optimisée.',
    tags: ['React', 'Vite', 'CSS'],
    year: '2024',
    live: '#',
    github: '#',
  },
  {
    num: '03',
    title: 'API REST Blog',
    description: 'Backend complet pour une plateforme de blogging : authentification JWT, gestion CRUD, base de données PostgreSQL.',
    tags: ['Node.js', 'JavaScript', 'Git'],
    year: '2023',
    live: '#',
    github: '#',
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
      className="reveal-item project-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '40px 0',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        cursor: 'pointer',
        transition: 'opacity 0.3s',
      }}
    >
      {/* top line: number + title + year + links */}
      <div className="project-row-top">
        <span style={{
          fontFamily: 'var(--font-space)',
          fontSize: '0.68rem',
          color: hovered ? '#22c55e' : 'rgba(255,255,255,0.3)',
          letterSpacing: '0.12em',
          transition: 'color 0.3s',
          flexShrink: 0,
        }}>
          {project.num}
        </span>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <h3 style={{
              fontFamily: 'var(--font-jevena)',
              color: hovered ? '#22c55e' : '#ffffff',
              fontSize: 'clamp(1.3rem, 3vw, 2.2rem)',
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

          <p style={{
            fontFamily: 'var(--font-space)',
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.88rem',
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '16px',
          }}>
            {project.description}
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
        </div>

        {/* links */}
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
            Live <ArrowUpRight size={13} />
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
              color: '#e8e4dc',
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
            color: '#444',
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
