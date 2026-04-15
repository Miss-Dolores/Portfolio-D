import { useState } from 'react'
import { GitFork, Link2, Mail, X, Send } from 'lucide-react'

const socialLinks = [
  { icon: GitFork, label: 'GitHub', href: '#' },
  { icon: Link2, label: 'LinkedIn', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:dolores@example.com' },
  { icon: X, label: 'Twitter', href: '#' },
]

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = {
    background: '#0f1a0f',
    border: '1px solid #1a2e1a',
    color: '#f0f5f0',
    fontFamily: 'var(--font-space)',
    fontSize: '0.9rem',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    outline: 'none',
    width: '100%',
    borderRadius: '0.75rem',
    padding: '0.85rem 1rem',
  }

  return (
    <section id="contacts" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-jevena)', color: '#f0f5f0', letterSpacing: '-0.01em' }}
          >
            Contacts
          </h2>
          <div
            className="w-16 h-0.5 mx-auto rounded-full mb-4"
            style={{ backgroundColor: '#22c55e' }}
          />
          <p
            className="text-sm"
            style={{ color: '#6b7c6b', fontFamily: 'var(--font-space)' }}
          >
            Une idée de projet ? N'hésitez pas à me contacter.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl p-8 glass-card"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                className="block text-xs font-medium mb-2 uppercase tracking-wider"
                style={{ color: '#6b7c6b', fontFamily: 'var(--font-space)' }}
              >
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
                className="input-glow"
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = '#22c55e'
                  e.target.style.boxShadow = '0 0 12px rgba(34,197,94,0.25)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#1a2e1a'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>
            <div>
              <label
                className="block text-xs font-medium mb-2 uppercase tracking-wider"
                style={{ color: '#6b7c6b', fontFamily: 'var(--font-space)' }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="votre@email.com"
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = '#22c55e'
                  e.target.style.boxShadow = '0 0 12px rgba(34,197,94,0.25)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#1a2e1a'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-2 uppercase tracking-wider"
              style={{ color: '#6b7c6b', fontFamily: 'var(--font-space)' }}
            >
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Votre message..."
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={(e) => {
                e.target.style.borderColor = '#22c55e'
                e.target.style.boxShadow = '0 0 12px rgba(34,197,94,0.25)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#1a2e1a'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>

          <button
            type="submit"
            className="btn-slide flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 mt-2"
            style={{
              fontFamily: 'var(--font-space)',
              color: '#f0f5f0',
              border: '1px solid #22c55e',
              background: 'transparent',
            }}
          >
            <Send size={16} />
            {sent ? 'Message envoyé !' : 'Envoyer le message'}
          </button>
        </form>

        <div className="flex justify-center gap-8 mt-12">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="social-icon"
              style={{ color: '#6b7c6b' }}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <p
          className="text-center mt-12 text-xs"
          style={{ color: '#1a2e1a', fontFamily: 'var(--font-space)' }}
        >
          © 2025 Dolores Vlafonou. Tous droits réservés.
        </p>
      </div>
    </section>
  )
}
