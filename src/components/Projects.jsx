import { useEffect, useRef } from 'react'
import { ExternalLink, GitFork } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'Application de gestion e-commerce avec tableau de bord analytique, gestion des stocks et suivi des commandes en temps réel.',
    tags: ['React', 'Node.js', 'Tailwind CSS'],
    live: '#',
    github: '#',
  },
  {
    title: 'Portfolio Personnel',
    description: 'Site vitrine minimaliste avec animations CSS avancées, design system cohérent et expérience utilisateur optimisée.',
    tags: ['React', 'Vite', 'CSS'],
    live: '#',
    github: '#',
  },
  {
    title: 'API REST Blog',
    description: 'Backend complet pour une plateforme de blogging : authentification JWT, gestion CRUD, base de données PostgreSQL.',
    tags: ['Node.js', 'JavaScript', 'Git'],
    live: '#',
    github: '#',
  },
]

function ProjectCard({ project, delay }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="card-animate glass-card rounded-2xl p-7 flex flex-col gap-5"
      style={{ '--delay': `${delay}ms` }}
    >
      <div>
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
          style={{
            background: 'rgba(34,197,94,0.1)',
            color: '#22c55e',
            fontFamily: 'var(--font-space)',
            border: '1px solid rgba(34,197,94,0.2)',
          }}
        >
          Projet
        </div>
        <h3
          className="text-xl font-bold mb-2"
          style={{ fontFamily: 'var(--font-jevena)', color: '#f0f5f0' }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: '#6b7c6b', fontFamily: 'var(--font-space)' }}
        >
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              background: 'rgba(34,197,94,0.08)',
              color: '#22c55e',
              fontFamily: 'var(--font-space)',
              border: '1px solid rgba(34,197,94,0.15)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        <a
          href={project.live}
          className="btn-slide flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
          style={{
            fontFamily: 'var(--font-space)',
            color: '#f0f5f0',
            border: '1px solid #22c55e',
            background: 'transparent',
          }}
        >
          <ExternalLink size={15} />
          Live
        </a>
        <a
          href={project.github}
          className="btn-slide flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
          style={{
            fontFamily: 'var(--font-space)',
            color: '#f0f5f0',
            border: '1px solid #1a2e1a',
            background: 'transparent',
          }}
        >
          <GitFork size={15} />
          GitHub
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-jevena)', color: '#f0f5f0', letterSpacing: '-0.01em' }}
          >
            Projects
          </h2>
          <div
            className="w-16 h-0.5 mx-auto rounded-full"
            style={{ backgroundColor: '#22c55e' }}
          />
          <p
            className="mt-4 text-sm"
            style={{ color: '#6b7c6b', fontFamily: 'var(--font-space)' }}
          >
            Quelques projets sur lesquels j'ai travaillé
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
