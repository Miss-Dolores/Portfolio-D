import { useEffect, useRef } from 'react'

const expertise = [
  {
    label: 'Front-end',
    title: 'Développeur front-end',
    text: 'Je maîtrise les technologies web modernes — HTML, CSS, JavaScript, React. Mon objectif est de transformer les idées en interfaces attrayantes, fluides et performantes.',
    stack: ['React', 'JavaScript', 'CSS', 'HTML'],
  },
  {
    label: 'Back-end',
    title: 'Développeur back-end',
    text: 'Spécialisé dans la logique serveur et la gestion des bases de données, je conçois des APIs robustes pour assurer le bon fonctionnement des applications web.',
    stack: ['Node.js', 'REST API', 'PostgreSQL', 'Git'],
  },
]

function RevealItem({ children, delay = 0 }) {
  const ref = useRef(null)
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
  return <div ref={ref} className="reveal-item">{children}</div>
}

export default function About() {
  return (
    <section id="about" className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">

        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.07] pb-7 mb-20">
          <div>
            <span className="block font-[var(--font-space)] text-[0.68rem] tracking-[0.22em] uppercase text-green-500 mb-2.5">
              01 — About
            </span>
            <h2 className="font-[var(--font-jevena)] font-bold text-[clamp(2.4rem,5vw,4rem)] text-[#e8e4dc] tracking-[-0.02em] leading-[0.95]">
              À propos
            </h2>
          </div>
          <p className="font-[var(--font-space)] text-[0.8rem] tracking-[0.05em] text-white/25">
            Cotonou, Bénin · Disponible
          </p>
        </div>

        {/* intro */}
        <RevealItem delay={100}>
          <div className="about-grid grid grid-cols-[1fr_1.6fr] gap-20 mb-20 items-start">
            <p className="font-[var(--font-space)] text-[0.82rem] tracking-[0.18em] uppercase leading-[1.6] text-white/50 pt-1.5">
              Développeur Web<br />Full-Stack
            </p>
            <p className="font-[var(--font-space)] text-[1.1rem] leading-[1.75] text-[#b0aca6]">
              Passionné par la création d'expériences numériques modernes et performantes.
              Je combine maîtrise technique et sensibilité design pour livrer des produits
              qui font la différence — du concept à la mise en production.
            </p>
          </div>
        </RevealItem>

        {/* expertise rows */}
        <div>
          {expertise.map(({ label, title, text, stack }, i) => (
            <RevealItem key={label} delay={200 + i * 150}>
              <div className="expertise-row grid grid-cols-[0.4fr_1fr_0.8fr] gap-12 py-10 border-t border-white/[0.07] items-start">
                <div>
                  <span className="block font-[var(--font-space)] text-[0.68rem] tracking-[0.2em] uppercase text-green-500 mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-[var(--font-jevena)] font-bold text-[1.4rem] tracking-[-0.01em] text-[#e8e4dc]">
                    {title}
                  </h3>
                </div>
                <p className="font-[var(--font-space)] text-[0.92rem] leading-[1.7] text-white/50 pt-0.5">
                  {text}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {stack.map(s => (
                    <span
                      key={s}
                      className="font-[var(--font-space)] text-[0.68rem] tracking-[0.12em] uppercase text-white/35 border border-white/[0.08] rounded-full px-3 py-1.5 skill-badge"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
          <div className="border-t border-white/[0.07]" />
        </div>

      </div>
    </section>
  )
}
