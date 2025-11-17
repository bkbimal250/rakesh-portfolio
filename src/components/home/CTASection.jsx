import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import useTheme from '../../hooks/useTheme'

const CTASection = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const highlights = ['Strategy First', 'Execution Support', 'Transparent Reporting']

  const outerGlow = isLight
    ? 'from-[#FF6F00]/25 via-[#FF8F1F]/15 to-[#F4A300]/20'
    : 'from-sky-500/20 via-cyan-400/10 to-emerald-400/20'

  const cardBorder = isLight ? 'border-[#FF6F00]/20' : 'border-white/10'
  const cardShadow = isLight ? 'shadow-[0_25px_70px_rgba(255,111,0,0.18)]' : 'shadow-[0_0_50px_rgba(56,189,248,0.1)]'
  const innerBg = isLight
    ? 'bg-gradient-to-b from-white via-[#FFF8F0] to-white text-neutral-900'
    : 'bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950 text-white'
  const subtitleColor = isLight ? 'text-[#FF6F00]' : 'text-cyan-300'
  const bodyText = isLight ? 'text-neutral-600' : 'text-neutral-200'
  const chipBorder = isLight ? 'border-[#FF6F00]/30 bg-[#FFFBF4]' : 'border-white/10 bg-white/5'
  const chipText = isLight ? 'text-[#BF4B00]' : 'text-neutral-100'
  const primaryBtn = isLight
    ? 'bg-gradient-to-r from-[#FF6F00] via-[#FF8F1F] to-[#F4A300] text-white shadow-lg shadow-[#FF6F00]/40'
    : 'bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 text-neutral-900 shadow-lg shadow-cyan-500/40'
  const secondaryBtn = isLight
    ? 'border-[#FF6F00]/40 text-[#BF4B00] hover:border-[#FF8F1F] hover:text-[#FF6F00]'
    : 'border-white/20 text-white hover:border-cyan-400/60 hover:text-cyan-300'

  return (
    <section className="relative py-24">
      <div className={`absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-gradient-to-r ${outerGlow} blur-3xl`} />
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`mx-auto max-w-6xl overflow-hidden rounded-[3.5rem] ${cardBorder} bg-neutral-950/80 p-[2px] ${cardShadow}`}
      >
        <div className={`rounded-[calc(3.5rem-4px)] px-8 py-16 sm:px-14 ${innerBg}`}>
          <div className="text-center">
            <p className={`text-xs font-semibold uppercase tracking-[0.6em] ${subtitleColor}`}>Let&apos;s collaborate</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Ready to grow your digital presence?</h2>
            <p className={`mt-4 text-base leading-relaxed ${bodyText}`}>
              Let&apos;s discuss how I can help you achieve your marketing goals with data-driven strategies, rapid
              experimentation, and execution pods that deliver measurable results.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${chipBorder} ${chipText}`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition hover:scale-[1.02] ${primaryBtn}`}
              >
                Get In Touch
              </Link>
              <Link
                to="/work/portfolio"
                className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition ${secondaryBtn}`}
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  )
}

export default CTASection

