import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { heroContent, marqueeClients } from '../../data/content'
import useTheme from '../../hooks/useTheme'

const HeroSection = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const badgeClasses = isLight
    ? 'rounded-full border border-[#FF6F00]/30 bg-[#FFF4E6] text-[#BF4B00]'
    : 'rounded-full border border-primary-400/40 bg-primary-400/10 text-primary-300'
  const headingColor = isLight ? 'text-[#1A1A1A]' : 'text-white'
  const subtitleColor = isLight ? 'text-[#4A4A4A]' : 'text-neutral-300'
  const primaryBtnClasses = isLight
    ? 'bg-gradient-to-r from-[#FF6F00] via-[#FF8F1F] to-[#F4A300] text-white shadow-xl shadow-[#FF6F00]/40 hover:bg-gradient-to-r hover:from-[#FF7F1A] hover:via-[#FF9A32] hover:to-[#F9B936]'
    : 'bg-gradient-primary text-neutral-900 shadow-xl shadow-primary-500/40 hover:bg-gradient-primary-hover hover:shadow-accent-500/40'
  const secondaryBtnClasses = isLight
    ? 'border-[#FF6F00]/40 text-[#BF4B00] hover:border-[#FF8F1F] hover:text-[#FF6F00]'
    : 'border-neutral-400/20 text-neutral-100 hover:border-primary-400/40 hover:text-primary-300'
  const metricCardClasses = isLight
    ? 'glass gradient-border rounded-2xl p-6 border-[#FF6F00]/15 bg-white text-[#1A1A1A]'
    : 'glass gradient-border rounded-2xl p-6'

  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pt-32">
      <div
        className={`absolute inset-x-0 top-0 -z-10 h-96 ${
          isLight ? 'bg-gradient-to-b from-[#FFF1E0] via-[#FFF8F0] to-white' : 'bg-hero-overlay'
        }`}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-orb-primary" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-orb-secondary" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${badgeClasses}`}>
            {heroContent.badge}
          </span>
          <h1 className={`mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl ${headingColor}`}>
            {heroContent.title}
          </h1>
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${subtitleColor}`}>{heroContent.subtitle}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to={heroContent.primaryCta.href}
              className={`pulse-glow inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition hover:scale-[1.02] ${primaryBtnClasses}`}
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              to={heroContent.secondaryCta.href}
              className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition ${secondaryBtnClasses}`}
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {heroContent.metrics.map((item, index) => (
              <Motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={metricCardClasses}
              >
                <p className={`text-2xl font-semibold ${isLight ? 'text-[#1A1A1A]' : 'text-white'}`}>{item.value}</p>
                <p className={`mt-2 text-sm ${isLight ? 'text-[#7A7A7A]' : 'text-neutral-400'}`}>{item.label}</p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="floating absolute -left-16 top-10 hidden h-56 w-56 rounded-3xl bg-gradient-to-br from-accent-400/30 via-primary-500/30 to-transparent blur-3xl sm:block" />
          <div className="floating-delayed absolute -right-16 top-1/2 hidden h-48 w-48 rounded-full bg-gradient-to-br from-secondary-500/30 via-secondary-600/30 to-transparent blur-3xl sm:block" />
          <div className="gradient-border relative aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-400/10 bg-neutral-900/70 sm:aspect-[3/4] lg:aspect-square">
            <img
              src={heroContent.artwork}
              alt="Raha digital — Full-Service Agency"
              className="h-full w-full object-cover opacity-95"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-transparent p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Agency Excellence</p>
              <p className="mt-3 text-sm text-neutral-200">
                Strategy, design, and technology—crafted for measurable business growth.
              </p>
            </div>
          </div>
        </Motion.div>
      </div>

      <div className="mt-16 border-y border-neutral-400/10 py-6 sm:py-8">
        <div className="marquee">
          <div className="marquee-track">
            {[...marqueeClients, ...marqueeClients].map((client, index) => (
              <span
                key={`${client}-${index}`}
                className="mx-8 text-xs font-semibold uppercase tracking-[0.5em] text-neutral-400 sm:mx-12 sm:text-sm"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

