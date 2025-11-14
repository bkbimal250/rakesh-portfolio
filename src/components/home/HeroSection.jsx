import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { heroContent, marqueeClients } from '../../data/content'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-primary-500/20 via-transparent to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center rounded-full border border-primary-400/40 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">
            {heroContent.badge}
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">{heroContent.subtitle}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to={heroContent.primaryCta.href}
              className="pulse-glow inline-flex items-center justify-center rounded-full bg-gradient-primary px-8 py-3 text-sm font-semibold text-neutral-900 shadow-xl shadow-primary-500/40 transition hover:scale-[1.02] hover:bg-gradient-primary-hover hover:shadow-accent-500/40"
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              to={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-neutral-400/20 px-8 py-3 text-sm font-semibold text-neutral-100 transition hover:border-primary-400/40 hover:text-primary-300"
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
                className="glass gradient-border rounded-2xl p-6"
              >
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-neutral-400">{item.label}</p>
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
              alt="Digital Marketing Executive - Rakesh Gupta"
              className="h-full w-full object-cover opacity-95"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-transparent p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Digital Marketing Expertise</p>
              <p className="mt-3 text-sm text-neutral-200">
                Data-driven strategies, continuous optimization, and measurable results that drive business growth.
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

