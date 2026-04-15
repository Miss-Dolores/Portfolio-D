import { useState } from 'react'
import { GitFork, Link2, Mail, X, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { icon: GitFork, label: 'GitHub',   href: '#' },
  { icon: Link2,   label: 'LinkedIn', href: '#' },
  { icon: Mail,    label: 'Email',    href: 'mailto:dolores@example.com' },
  { icon: X,       label: 'Twitter',  href: '#' },
]

export default function Contacts() {
  const [form,  setForm]  = useState({ name: '', email: '', message: '' })
  const [sent,  setSent]  = useState(false)
  const [focus, setFocus] = useState(null)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass = (name) =>
    `w-full bg-transparent border-0 border-b py-3.5 font-[var(--font-space)] text-[0.95rem] text-[#e8e4dc] outline-none rounded-none transition-colors duration-250 placeholder:text-white/20 ${
      focus === name ? 'border-green-500' : 'border-white/[0.12]'
    }`

  return (
    <section id="contacts" className="bg-black py-24 px-6 md:px-12 pb-20">
      <div className="max-w-[1100px] mx-auto">

        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.07] pb-7 mb-20">
          <div>
            <span className="block font-[var(--font-space)] text-[0.68rem] tracking-[0.22em] uppercase text-green-500 mb-2.5">
              04 — Contact
            </span>
            <h2 className="font-[var(--font-jevena)] font-bold text-[clamp(2.4rem,5vw,4rem)] text-[#e8e4dc] tracking-[-0.02em] leading-[0.95]">
              Travaillons<br />ensemble
            </h2>
          </div>
          <p className="font-[var(--font-space)] text-[0.8rem] tracking-[0.05em] text-white/25 max-w-[220px] text-right leading-[1.6]">
            Une idée ? Un projet ?<br />N'hésitez pas à écrire.
          </p>
        </div>

        {/* two-column */}
        <div className="contact-grid grid grid-cols-[1fr_1.4fr] gap-24 items-start">

          {/* left */}
          <div>
            <p className="font-[var(--font-space)] text-[0.9rem] leading-[1.75] text-white/50 mb-12">
              Je suis disponible pour des missions freelance, des collaborations créatives ou un poste à plein temps.
            </p>

            <a
              href="mailto:dolores@example.com"
              className="group inline-flex items-center gap-2 font-[var(--font-jevena)] text-[1.1rem] text-[#e8e4dc] no-underline border-b border-white/15 pb-1 mb-16 transition-all duration-250 hover:text-green-500 hover:border-green-500"
            >
              dolores@example.com <ArrowUpRight size={16} />
            </a>

            <div className="flex flex-col">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center justify-between py-4 border-t border-white/[0.07] font-[var(--font-space)] text-[0.8rem] tracking-[0.1em] uppercase text-white/35 no-underline transition-colors duration-250 hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={14} />
                    {label}
                  </span>
                  <ArrowUpRight size={13} />
                </a>
              ))}
              <div className="border-t border-white/[0.07]" />
            </div>
          </div>

          {/* right: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block font-[var(--font-space)] text-[0.62rem] tracking-[0.2em] uppercase text-white/25 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  className={inputClass('name')}
                  onFocus={() => setFocus('name')}
                  onBlur={() => setFocus(null)}
                />
              </div>
              <div>
                <label className="block font-[var(--font-space)] text-[0.62rem] tracking-[0.2em] uppercase text-white/25 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  className={inputClass('email')}
                  onFocus={() => setFocus('email')}
                  onBlur={() => setFocus(null)}
                />
              </div>
            </div>

            <div>
              <label className="block font-[var(--font-space)] text-[0.62rem] tracking-[0.2em] uppercase text-white/25 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet..."
                required
                rows={5}
                className={`${inputClass('message')} resize-none`}
                onFocus={() => setFocus('message')}
                onBlur={() => setFocus(null)}
              />
            </div>

            <div>
              <button
                type="submit"
                className={`inline-flex items-center gap-2.5 font-[var(--font-space)] text-[0.78rem] tracking-[0.15em] uppercase border border-green-500 px-8 py-3.5 cursor-pointer transition-all duration-300 ${sent ? 'text-green-500 bg-transparent' : 'text-black bg-green-500 hover:bg-transparent hover:text-green-500'}`}
              >
                <ArrowUpRight size={15} />
                {sent ? 'Message envoyé !' : 'Envoyer'}
              </button>
            </div>
          </form>
        </div>

        {/* footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] mt-24 pt-7">
          <span className="font-[var(--font-space)] text-[0.72rem] tracking-[0.08em] text-white/20">
            © 2025 Dolores Vlafonou
          </span>
          <span className="font-[var(--font-space)] text-[0.72rem] tracking-[0.08em] text-white/20">
            Conçu & développé avec soin
          </span>
        </div>

      </div>
    </section>
  )
}
