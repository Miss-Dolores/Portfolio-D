import { Monitor, Server } from 'lucide-react'

const cards = [
  {
    icon: Monitor,
    title: 'Developpeur front-end',
    text: "Je suis un développeur front-end passionné qui maîtrise les technologies web modernes telles que HTML, CSS et JavaScript. Mon objectif est de transformer les idées en réalités pour offrir des sites web attrayants et performants.",
  },
  {
    icon: Server,
    title: 'Developpeur back-end',
    text: "En tant que développeur back-end, je suis spécialisé dans la création de la logique serveur et la gestion des bases de données pour assurer le bon fonctionnement des applications web.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-jevena)', color: '#f0f5f0', letterSpacing: '-0.01em' }}
          >
            About
          </h2>
          <div
            className="w-16 h-0.5 mx-auto rounded-full"
            style={{ backgroundColor: '#22c55e' }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-card rounded-2xl p-8">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <Icon size={28} style={{ color: '#22c55e' }} />
              </div>

              <h3
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: 'var(--font-jevena)', color: '#f0f5f0' }}
              >
                {title}
              </h3>

              <p
                className="leading-relaxed"
                style={{ fontFamily: 'var(--font-space)', color: '#6b7c6b', fontSize: '0.95rem' }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
