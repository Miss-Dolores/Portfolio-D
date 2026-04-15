import { useEffect, useRef, useState } from 'react'

const badges = [
  { dot: true,  label: 'AVAILABLE FOR WORK' },
  { dot: false, label: 'COTONOU, BÉNIN' },
  { dot: false, label: 'DS DEV' },
]

export default function Hero({ onContactClick }) {
  const line1Ref     = useRef(null)
  const line2Ref     = useRef(null)
  const containerRef = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const [hovered,  setHovered]  = useState(false)

  useEffect(() => {
    const measureText = (text, fontFamily, fontWeight, letterSpacing, fontSize) => {
      const span = document.createElement('span')
      span.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;top:0;left:-9999px;'
      span.style.fontFamily    = fontFamily
      span.style.fontWeight    = fontWeight
      span.style.letterSpacing = letterSpacing
      span.style.fontSize      = fontSize + 'px'
      span.textContent = text
      document.body.appendChild(span)
      const w = span.getBoundingClientRect().width
      document.body.removeChild(span)
      return w
    }

    const fitLine = (el, maxWidth, capPx) => {
      if (!el || maxWidth <= 0) return
      const cs   = getComputedStyle(el)
      const w100 = measureText(el.textContent.trim(), cs.fontFamily, cs.fontWeight, cs.letterSpacing, 100)
      if (w100 === 0) return
      el.style.fontSize = Math.min((100 * maxWidth) / w100, capPx) + 'px'
    }

    const fit = () => {
      if (!containerRef.current) return
      const vw          = window.innerWidth
      const isMobile    = vw < 640
      const isTablet    = vw >= 640 && vw < 1024
      const scaleFactor = isMobile ? 0.42 : isTablet ? 0.65 : 0.78
      const capPx       = isMobile ? 70   : isTablet ? 130  : 185
      const hPad        = isMobile ? 48   : 96
      const maxW        = (containerRef.current.clientWidth - hPad) * scaleFactor
      fitLine(line1Ref.current, maxW, capPx)
      fitLine(line2Ref.current, maxW, capPx)
    }

    document.fonts.ready.then(() => {
      fit()
      window.addEventListener('resize', fit)
      requestAnimationFrame(() => setRevealed(true))
    })

    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <section id="hero" className="relative overflow-hidden bg-black">
      <div ref={containerRef} className="hero-container flex min-h-screen flex-col">

        {/* role label */}
        <p className="font-[var(--font-space)] text-[0.72rem] tracking-[0.2em] uppercase text-green-500 mb-7">
          Développeur Web Full-Stack
        </p>

        {/* name */}
        <div
          className="flex flex-1 flex-col justify-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="hero-name-mask">
            <div
              ref={line1Ref}
              className={`hero-name-line font-[var(--font-jevena)] font-bold whitespace-nowrap tracking-[-0.02em] transition-colors duration-400${revealed ? ' revealed' : ''}`}
              style={{ lineHeight: 0.95, color: hovered ? '#22c55e' : '#ffffff', animationDelay: '0ms' }}
            >
              DOLORES
            </div>
          </div>
          <div className="hero-name-mask">
            <div
              ref={line2Ref}
              className={`hero-name-line font-[var(--font-jevena)] font-bold whitespace-nowrap tracking-[-0.02em] transition-colors duration-400${revealed ? ' revealed' : ''}`}
              style={{ lineHeight: 0.95, color: hovered ? '#22c55e' : '#ffffff', animationDelay: '200ms' }}
            >
              VLAFONOU
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="flex flex-wrap items-end justify-between gap-6 pt-11">
          <p className={`hero-subtitle font-[var(--font-space)] text-[0.88rem] leading-[1.7] text-white/55 max-w-[380px] m-0${revealed ? ' revealed' : ''}`}>
            Je crée des interfaces modernes, fluides et centrées sur l'expérience utilisateur.
          </p>

          <div className={`hero-badges flex flex-col items-end gap-2.5${revealed ? ' revealed' : ''}`}>
            {badges.map(({ dot, label }) => (
              <button
                key={label}
                type="button"
                onClick={dot ? onContactClick : undefined}
                className={`group flex items-center gap-2 border border-white/20 rounded-full px-5 py-2 font-[var(--font-space)] text-[0.68rem] tracking-[0.13em] text-white bg-transparent transition-all duration-200 ${dot ? 'cursor-pointer hover:border-green-500 hover:bg-green-500/8' : 'cursor-default'}`}
              >
                {dot && <span className="pulse-dot inline-block w-[7px] h-[7px] rounded-full bg-green-500 shrink-0" />}
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className={`hero-scroll absolute right-[22px] bottom-20 flex flex-col items-center gap-2.5${revealed ? ' revealed' : ''}`}>
        <span
          className="font-[var(--font-space)] text-[9px] tracking-[0.35em] uppercase text-white/30"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
