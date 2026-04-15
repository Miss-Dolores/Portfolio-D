import { Palette, Server, Atom, FileCode2, Braces, Wind, GitBranch, Zap, Globe, GitFork } from 'lucide-react'

const allSkills = [
  { label: 'CSS', icon: Palette },
  { label: 'Node.js', icon: Server },
  { label: 'React', icon: Atom },
  { label: 'HTML', icon: FileCode2 },
  { label: 'JavaScript', icon: Braces },
  { label: 'Tailwind CSS', icon: Wind },
  { label: 'Git', icon: GitBranch },
  { label: 'Vite', icon: Zap },
  { label: 'Netlify', icon: Globe },
  { label: 'GitHub', icon: GitFork },
]

const row1 = allSkills.slice(0, 5)
const row2 = allSkills.slice(5)

function SkillBadge({ label, icon: Icon }) {
  return (
    <div
      className="skill-badge"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 28px',
        margin: '0 10px',
        whiteSpace: 'nowrap',
        border: '1px solid rgba(255,255,255,0.07)',
        fontFamily: 'var(--font-space)',
        color: '#888',
        fontSize: '0.82rem',
        letterSpacing: '0.08em',
        cursor: 'default',
        transition: 'border-color 0.3s, color 0.3s',
      }}
    >
      <Icon size={14} style={{ color: '#22c55e', flexShrink: 0 }} />
      {label}
    </div>
  )
}

function MarqueeRow({ skills, direction = 'left', speed = '35s' }) {
  const items = [...skills, ...skills, ...skills, ...skills]
  const cls = direction === 'left' ? 'marquee-track-left' : 'marquee-track-right'
  return (
    <div className="marquee-wrapper" style={{ overflow: 'hidden', paddingBottom: '1px' }}>
      <div className={cls} style={{ animationDuration: speed }}>
        {items.map((s, i) => (
          <SkillBadge key={`${s.label}-${i}`} {...s} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: '#000000', padding: '100px 0' }}>

      {/* header */}
      <div style={{ padding: '0 48px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          paddingBottom: '28px',
          marginBottom: '72px',
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
              02 — Skills
            </span>
            <h2 style={{
              fontFamily: 'var(--font-jevena)',
              color: '#ffffff',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
            }}>
              Compétences
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-space)',
            color: '#444',
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
          }}>
            10 technologies
          </p>
        </div>
      </div>

      {/* marquee rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '4px 0' }}>
          <MarqueeRow skills={row1} direction="left" speed="28s" />
        </div>
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '4px 0' }}>
          <MarqueeRow skills={row2} direction="right" speed="22s" />
        </div>
      </div>

    </section>
  )
}
