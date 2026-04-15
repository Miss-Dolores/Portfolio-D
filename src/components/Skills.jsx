import { Palette, Server, Atom, FileCode2, Braces, Wind, GitBranch, Zap, Globe, GitFork } from 'lucide-react'

const allSkills = [
  { label: 'CSS',         icon: Palette },
  { label: 'Node.js',     icon: Server },
  { label: 'React',       icon: Atom },
  { label: 'HTML',        icon: FileCode2 },
  { label: 'JavaScript',  icon: Braces },
  { label: 'Tailwind CSS',icon: Wind },
  { label: 'Git',         icon: GitBranch },
  { label: 'Vite',        icon: Zap },
  { label: 'Netlify',     icon: Globe },
  { label: 'GitHub',      icon: GitFork },
]

const row1 = allSkills.slice(0, 5)
const row2 = allSkills.slice(5)

function SkillBadge({ label, icon: Icon }) {
  return (
    <div className="skill-badge flex items-center gap-2.5 px-7 py-3 mx-2.5 whitespace-nowrap border border-white/[0.07] font-[var(--font-space)] text-[0.82rem] tracking-[0.08em] text-white/50 cursor-default transition-all duration-300">
      <Icon size={14} className="text-green-500 shrink-0" />
      {label}
    </div>
  )
}

function MarqueeRow({ skills, direction = 'left', speed = '35s' }) {
  const items = [...skills, ...skills, ...skills, ...skills]
  const cls   = direction === 'left' ? 'marquee-track-left' : 'marquee-track-right'
  return (
    <div className="marquee-wrapper overflow-hidden pb-px">
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
    <section id="skills" className="bg-black py-24">

      {/* header */}
      <div className="px-6 md:px-12 max-w-[1100px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.07] pb-7 mb-18">
          <div>
            <span className="block font-[var(--font-space)] text-[0.68rem] tracking-[0.22em] uppercase text-green-500 mb-2.5">
              02 — Skills
            </span>
            <h2 className="font-[var(--font-jevena)] font-bold text-[clamp(2.4rem,5vw,4rem)] text-[#e8e4dc] tracking-[-0.02em] leading-[0.95]">
              Compétences
            </h2>
          </div>
          <p className="font-[var(--font-space)] text-[0.8rem] tracking-[0.05em] text-white/25">
            10 technologies
          </p>
        </div>
      </div>

      {/* marquee rows */}
      <div className="flex flex-col">
        <div className="border-t border-b border-white/[0.07] py-1">
          <MarqueeRow skills={row1} direction="left"  speed="28s" />
        </div>
        <div className="border-b border-white/[0.07] py-1">
          <MarqueeRow skills={row2} direction="right" speed="22s" />
        </div>
      </div>

    </section>
  )
}
