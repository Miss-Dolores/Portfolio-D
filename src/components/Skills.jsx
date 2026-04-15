import { Palette, Server, Atom, FileCode2, Braces, Wind, GitBranch, Zap, Globe, GitFork } from 'lucide-react'

const row1 = [
  { label: 'CSS', icon: Palette },
  { label: 'Node.js', icon: Server },
  { label: 'React', icon: Atom },
  { label: 'HTML', icon: FileCode2 },
  { label: 'JavaScript', icon: Braces },
]

const row2 = [
  { label: 'Tailwind CSS', icon: Wind },
  { label: 'Git', icon: GitBranch },
  { label: 'Vite', icon: Zap },
  { label: 'Netlify', icon: Globe },
  { label: 'GitHub', icon: GitFork },
]

function SkillBadge({ label, icon: Icon }) {
  return (
    <div
      className="flex items-center gap-2 px-5 py-3 rounded-full mx-3 whitespace-nowrap select-none"
      style={{
        background: '#0f1a0f',
        border: '1px solid #1a2e1a',
        fontFamily: 'var(--font-space)',
        color: '#f0f5f0',
        fontSize: '0.875rem',
        fontWeight: 500,
      }}
    >
      <Icon size={16} style={{ color: '#22c55e' }} />
      {label}
    </div>
  )
}

function MarqueeRow({ skills, direction = 'left' }) {
  const doubled = [...skills, ...skills, ...skills, ...skills]
  const trackClass = direction === 'left' ? 'marquee-track-left' : 'marquee-track-right'

  return (
    <div className="overflow-hidden marquee-wrapper py-2">
      <div className={trackClass}>
        {doubled.map((skill, i) => (
          <SkillBadge key={`${skill.label}-${i}`} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-jevena)', color: '#f0f5f0', letterSpacing: '-0.01em' }}
          >
            Skills
          </h2>
          <div
            className="w-16 h-0.5 mx-auto rounded-full"
            style={{ backgroundColor: '#22c55e' }}
          />
          <p
            className="mt-4 text-sm"
            style={{ color: '#6b7c6b', fontFamily: 'var(--font-space)' }}
          >
            Technologies que j'utilise au quotidien
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <MarqueeRow skills={row1} direction="left" />
        <MarqueeRow skills={row2} direction="right" />
      </div>
    </section>
  )
}
