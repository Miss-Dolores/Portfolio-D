const logos = {
  CSS: (
    <svg viewBox="0 0 32 32" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 2l2.4 27L16 31l9.6-2L28 2H4z" fill="#264de4"/>
      <path d="M16 29.1l7.8-2.2 2-22.9H16v25.1z" fill="#2965f1"/>
      <path d="M16 13H9.7l.4 4H16v-4zM16 21.5l-.1.1-3.6-1-.2-2.6H8.5l.4 5.2 7.1 2h.1v-3.7z" fill="#ebebeb"/>
      <path d="M16 13v4h5.6l-.5 5.5L16 23.6v3.7l7.1-2 .1-.1 1-11.2H16zM16 8H9.1l.2 4H16V8zM16 8V4H7.6l.6 4H16z" fill="#fff"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 32 32" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L3 9.5v15L16 32l13-7.5v-15L16 2z" fill="#83cd29"/>
      <path d="M16 2v30l13-7.5v-15L16 2z" fill="#5ea500" opacity=".6"/>
      <path d="M16 8.5c-.7 0-1.2.6-1.2 1.3v8.7l-4.5-2.6c-.3-.2-.7-.1-1 .2-.2.3-.2.7 0 1l6 3.4c.2.1.4.2.7.2.2 0 .5-.1.7-.2l6-3.4c.3-.2.4-.6.2-1-.2-.3-.6-.4-1-.2l-4.5 2.6V9.8c0-.7-.5-1.3-1.4-1.3z" fill="#fff"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 32 32" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="2.8" fill="#61dafb"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.5"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 16 16)"/>
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 32 32" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 2l2.4 27L16 31l9.6-2L28 2H4z" fill="#e44d26"/>
      <path d="M16 29.1l7.8-2.2 2-22.9H16v25.1z" fill="#f16529"/>
      <path d="M16 13H9.7l.4 4H16v-4zM16 21.5l-.1.1-3.6-1-.2-2.6H8.5l.4 5.2 7.1 2h.1v-3.7z" fill="#ebebeb"/>
      <path d="M16 13v4h5.6l-.5 5.5L16 23.6v3.7l7.1-2 .1-.1 1-11.2H16zM16 8H9.1l.2 4H16V8zM16 8V4H7.6l.6 4H16z" fill="#fff"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 32 32" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="4" fill="#f7df1e"/>
      <path d="M20.4 22.7c.5.9 1.2 1.5 2.4 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.8 0-1.9 1.4-3.3 3.6-3.3 1.6 0 2.7.5 3.5 1.9l-1.9 1.2c-.4-.8-.9-1.1-1.6-1.1-.7 0-1.2.5-1.2 1.1 0 .8.5 1.1 1.6 1.6l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.5-4 3.5-2.2 0-3.7-1.1-4.4-2.5l2-.9zm-8.9.2c.4.7.7 1.2 1.5 1.2.8 0 1.2-.3 1.2-1.5v-8h2.4v8.1c0 2.5-1.5 3.6-3.6 3.6-1.9 0-3-1-3.6-2.2l2.1-1.2z" fill="#323330"/>
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 32 32" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 6.4C11.7 6.4 9.1 8.5 8 12.8c1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3 2.2 1.5 1.6 3.3 3.4 7.1 3.4 4.3 0 6.9-2.1 8-6.4-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3-2.2-1.5-1.6-3.3-3.4-7.1-3.4zM8 19.2C3.7 19.2 1.1 21.3 0 25.6c1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3 2.2 1.5 1.6 3.3 3.4 7.1 3.4 4.3 0 6.9-2.1 8-6.4-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3-2.2-1.5-1.6-3.3-3.4-7.1-3.4z" fill="#38bdf8"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 32 32" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.5 14.6L17.4 1.5a2.5 2.5 0 00-3.5 0l-2.5 2.5 3.2 3.2a3 3 0 013.8 3.8l3 3a3 3 0 11-1.8 1.8l-2.8-2.8v7.3a3 3 0 11-2.4 0V12.7a3 3 0 01-1.6-3.9L9.6 5.5 1.5 13.6a2.5 2.5 0 000 3.5L14.6 30.5a2.5 2.5 0 003.5 0L30.5 18.1a2.5 2.5 0 000-3.5z" fill="#f05032"/>
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 32 32" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.9 6L16.7 28.6a.6.6 0 01-1.1 0L2.1 6a.6.6 0 01.6-.9l13.4 2.4 13.2-2.4a.6.6 0 01.6.9z" fill="#bd34fe"/>
      <path d="M22.4 2L16 13.3 9.6 2H13l3 5.5L19 2h3.4z" fill="#41d1ff"/>
    </svg>
  ),
  Netlify: (
    <svg viewBox="0 0 32 32" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5 14.6h-1.8l-3.8-3.8.8-2.1h1.5l3.3 3.3v2.6zm-6.7-8.5L10 5.4 7.5 8l.9 2.3L11 12l2.5-2.4-1.7-3.5zM24 17.7l-2.4-.9-1.7 1.7.9 2.3 2.5 2.5 2.4-2.4-.9-2.4-.8.3v-1.1zm-8.7 7.8l-1.7-1.7-2.5 1 .9 2.4 2.4 2.4 2.4-2.4-.9-2.4-.6.7z" fill="#00ad9f"/>
      <path d="M16 2L2 16l14 14 14-14L16 2zm0 25.3L4.7 16 16 4.7 27.3 16 16 27.3z" fill="#00ad9f"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 32 32" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.3 2 2 8.3 2 16c0 6.2 4 11.4 9.6 13.2.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.2 1.5 4 1.1.1-.9.5-1.5.9-1.8-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.8 1.4a13.4 13.4 0 017 0c2.6-1.8 3.8-1.4 3.8-1.4.7 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4 1 1.3 1 2.6v3.9c0 .4.2.8 1 .7C26 27.4 30 22.2 30 16c0-7.7-6.3-14-14-14z" fill="#fff"/>
    </svg>
  ),
}

const allSkills = [
  'CSS', 'Node.js', 'React', 'HTML', 'JavaScript',
  'Tailwind CSS', 'Git', 'Vite', 'Netlify', 'GitHub',
]

const row1 = allSkills.slice(0, 5)
const row2 = allSkills.slice(5)

function SkillBadge({ label }) {
  return (
    <div
      className="skill-badge"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
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
      <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        {logos[label]}
      </span>
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
        {items.map((label, i) => (
          <SkillBadge key={`${label}-${i}`} label={label} />
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
            color: 'rgba(255,255,255,0.25)',
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
