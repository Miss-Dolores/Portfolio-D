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
      className="reveal-item border-t border-white/[0.07] py-10 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-row-top">

        {/* number */}
        <span className={`font-[var(--font-space)] text-[0.68rem] tracking-[0.12em] transition-colors duration-300 shrink-0 pt-1 ${hovered ? 'text-green-500' : 'text-white/30'}`}>
          {project.num}
        </span>

        {/* content */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-4 mb-3.5">
            <h3
              className={`font-[var(--font-jevena)] font-bold text-[clamp(1.3rem,3vw,2.2rem)] tracking-[-0.02em] leading-none transition-colors duration-350 ${hovered ? 'text-green-500' : 'text-white'}`}
            >
              {project.title}
            </h3>
            <span className="font-[var(--font-space)] text-[0.68rem] tracking-[0.1em] text-white/25">
              {project.year}
            </span>
          </div>
          <p className="font-[var(--font-space)] text-[0.88rem] leading-[1.7] text-white/45 max-w-[520px] mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="font-[var(--font-space)] text-[0.65rem] tracking-[0.1em] uppercase text-white/40 border border-white/10 rounded px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* links */}
        <div className="project-links">
          <a
            href={project.live}
            className={`flex items-center gap-1.5 font-[var(--font-space)] text-[0.72rem] tracking-[0.12em] uppercase no-underline transition-colors duration-300 ${hovered ? 'text-green-500' : 'text-white/40'}`}
          >
            Live <ArrowUpRight size={13} />
          </a>
          <a
            href={project.github}
            className="flex items-center gap-1.5 font-[var(--font-space)] text-[0.72rem] tracking-[0.12em] uppercase text-white/25 no-underline transition-colors duration-300 hover:text-white/70"
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
    <section id="projects" className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">

        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.07] pb-7 mb-0">
          <div>
            <span className="block font-[var(--font-space)] text-[0.68rem] tracking-[0.22em] uppercase text-green-500 mb-2.5">
              03 — Projects
            </span>
            <h2 className="font-[var(--font-jevena)] font-bold text-[clamp(2.4rem,5vw,4rem)] text-[#e8e4dc] tracking-[-0.02em] leading-[0.95]">
              Projets
            </h2>
          </div>
          <p className="font-[var(--font-space)] text-[0.8rem] tracking-[0.05em] text-white/25">
            {projects.length} projets sélectionnés
          </p>
        </div>

        {/* rows */}
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.num} project={p} delay={i * 100} />
          ))}
          <div className="border-t border-white/[0.07]" />
        </div>

      </div>
    </section>
  )
}
