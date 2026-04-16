import { ArrowUpRight, MessageCircle, Mail, GitFork } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Services', href: '#whatibuild' },
  { label: 'Projets', href: '#projects' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contacts' },
]

const socialLinks = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/22966765173' },
  { icon: Mail, label: 'Email', href: 'mailto:doloresvlafonou2000@gmail.com' },
  { icon: GitFork, label: 'GitHub', href: 'https://github.com/Miss-Dolores' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.getElementById(href.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 48px 48px' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr',
          gap: '64px',
          marginBottom: '72px',
        }}
        className="footer-grid"
        >
          <div>
            <div style={{
              fontFamily: 'var(--font-jevena)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}>
              Dolores<br />
              <span style={{ color: '#22c55e' }}>Vlafonou</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-space)',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.82rem',
              lineHeight: 1.75,
              maxWidth: '280px',
              marginBottom: '36px',
            }}>
              Développeuse Full-Stack & Designer UI/UX.<br />
              Disponible pour des missions freelance.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: '2px',
              padding: '6px 14px',
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#22c55e',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{
                fontFamily: 'var(--font-space)',
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                color: '#22c55e',
                textTransform: 'uppercase',
              }}>
                Disponible pour travailler
              </span>
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.2)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}>
              Navigation
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => scrollTo(href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-space)',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.4)',
                    padding: '7px 0',
                    letterSpacing: '0.05em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-space)',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.2)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}>
              Réseaux
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-space)',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    padding: '7px 0',
                    letterSpacing: '0.05em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#22c55e'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                >
                  <Icon size={14} />
                  {label}
                  <ArrowUpRight size={12} style={{ marginLeft: 'auto' }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'var(--font-space)',
            fontSize: '0.68rem',
            color: 'rgba(255,255,255,0.18)',
            letterSpacing: '0.08em',
          }}>
            © 2025 Dolores Vlafonou. Tous droits réservés.
          </span>
          <span style={{
            fontFamily: 'var(--font-space)',
            fontSize: '0.68rem',
            color: 'rgba(255,255,255,0.18)',
            letterSpacing: '0.08em',
          }}>
            Conçu & développé avec soin
          </span>
        </div>

      </div>
    </footer>
  )
}
