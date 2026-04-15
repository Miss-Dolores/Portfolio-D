import { useState } from 'react'
import { GitFork, Link2, Mail, X, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { icon: GitFork, label: 'GitHub',   href: '#' },
  { icon: Link2,   label: 'LinkedIn', href: '#' },
  { icon: Mail,    label: 'Email',    href: 'mailto:dolores@example.com' },
  { icon: X,       label: 'Twitter',  href: '#' },
]

const inputBase = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.12)',
  color: '#ffffff',
  fontFamily: 'var(--font-space)',
  fontSize: '0.95rem',
  outline: 'none',
  width: '100%',
  padding: '14px 0',
  transition: 'border-color 0.25s ease',
  borderRadius: 0,
}

export default function Contacts() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [focus, setFocus] = useState(null)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const fieldStyle = name => ({
    ...inputBase,
    borderBottomColor: focus === name ? '#22c55e' : 'rgba(255,255,255,0.12)',
  })

  return (
    <section id="contacts" style={{ background: '#000000', padding: '100px 48px 80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          paddingBottom: '28px',
          marginBottom: '80px',
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
              04 — Contact
            </span>
            <h2 style={{
              fontFamily: 'var(--font-jevena)',
              color: '#ffffff',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
            }}>
              Travaillons<br />ensemble
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-space)',
            color: '#444',
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
            maxWidth: '220px',
            textAlign: 'right',
            lineHeight: 1.6,
          }}>
            Une idée ? Un projet ?<br />N'hésitez pas à écrire.
          </p>
        </div>

        {/* two-column */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '100px',
          alignItems: 'start',
        }}
        className="contact-grid"
        >
          {/* left: CTA + socials */}
          <div>
            <p style={{
              fontFamily: 'var(--font-space)',
              color: '#888',
              fontSize: '0.9rem',
              lineHeight: 1.75,
              marginBottom: '48px',
            }}>
              Je suis disponible pour des missions freelance, des collaborations créatives ou un poste à plein temps.
            </p>

            <a
              href="mailto:dolores@example.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-jevena)',
                fontSize: '1.1rem',
                color: '#ffffff',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.15)',
                paddingBottom: '4px',
                marginBottom: '64px',
                transition: 'color 0.25s, border-color 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.borderBottomColor = '#22c55e' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#e8e4dc'; e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.15)' }}
            >
              dolores@example.com <ArrowUpRight size={16} />
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 0',
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                    fontFamily: 'var(--font-space)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    color: '#555',
                    textDecoration: 'none',
                    transition: 'color 0.25s',
                    textTransform: 'uppercase',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#e8e4dc'}
                  onMouseLeave={e => e.currentTarget.style.color = '#555'}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Icon size={14} />
                    {label}
                  </span>
                  <ArrowUpRight size={13} />
                </a>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
            </div>
          </div>

          {/* right: form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-space)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.2em',
                  color: '#444',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}>Nom</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  style={fieldStyle('name')}
                  onFocus={() => setFocus('name')}
                  onBlur={() => setFocus(null)}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-space)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.2em',
                  color: '#444',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  style={fieldStyle('email')}
                  onFocus={() => setFocus('email')}
                  onBlur={() => setFocus(null)}
                />
              </div>
            </div>

            <div>
              <label style={{
                display: 'block',
                fontFamily: 'var(--font-space)',
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                color: '#444',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet..."
                required
                rows={5}
                style={{ ...fieldStyle('message'), resize: 'none' }}
                onFocus={() => setFocus('message')}
                onBlur={() => setFocus(null)}
              />
            </div>

            <div>
              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-space)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: sent ? '#22c55e' : '#0a0f0a',
                  background: sent ? 'transparent' : '#22c55e',
                  border: '1px solid #22c55e',
                  padding: '14px 32px',
                  cursor: 'pointer',
                  transition: 'background 0.3s, color 0.3s',
                }}
                onMouseEnter={e => { if (!sent) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#22c55e' } }}
                onMouseLeave={e => { if (!sent) { e.currentTarget.style.background = '#22c55e'; e.currentTarget.style.color = '#0a0f0a' } }}
              >
                <ArrowUpRight size={15} />
                {sent ? 'Message envoyé !' : 'Envoyer'}
              </button>
            </div>
          </form>
        </div>

        {/* footer */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          marginTop: '100px',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{ fontFamily: 'var(--font-space)', fontSize: '0.72rem', color: '#333', letterSpacing: '0.08em' }}>
            © 2025 Dolores Vlafonou
          </span>
          <span style={{ fontFamily: 'var(--font-space)', fontSize: '0.72rem', color: '#333', letterSpacing: '0.08em' }}>
            Conçu & développé avec soin
          </span>
        </div>

      </div>
    </section>
  )
}
