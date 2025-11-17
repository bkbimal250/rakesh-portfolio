import React from 'react'
import { motion as Motion } from 'framer-motion'
import ContactForm from '../components/contact/ContactForm'
import { contactChannels } from '../data/content'
import CTASection from '../components/home/CTASection'
import useTheme from '../hooks/useTheme'

const Contact = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const heroGradient = isLight
    ? 'from-[#FFF1E0]/80 via-[#FFF8F0] to-white'
    : 'from-slate-900/30 via-slate-900/60 to-slate-950'
  const headingColor = isLight ? 'text-[#1A1A1A]' : 'text-white'
  const subTextColor = isLight ? 'text-[#4A4A4A]' : 'text-slate-300'
  const cardBorder = isLight ? 'border-[#FF6F00]/25' : 'border-white/10'
  const cardBg = isLight ? 'bg-white' : 'bg-white/5'
  const cardTextMuted = isLight ? 'text-[#BF4B00]' : 'text-sky-300'
  const listText = isLight ? 'text-[#4A4A4A]' : 'text-slate-200'

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${heroGradient}`} />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-semibold sm:text-5xl ${headingColor}`}
          >
            Let&apos;s map the next wave of your growth story.
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed ${subTextColor}`}
          >
            Tell us about your upcoming launch, growth goals, or marketing systems you want to reimagine. We reply
            within one business day.
          </Motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[2fr_1fr]">
          <ContactForm />
          <aside className="space-y-6">
            <div className={`rounded-3xl ${cardBg} ${cardBorder} p-8`}>
              <p className={`text-xs font-semibold uppercase tracking-[0.4em] ${cardTextMuted}`}>Direct Channels</p>
              <ul className={`mt-6 space-y-5 text-sm ${listText}`}>
                {contactChannels.map((channel) => (
                  <li key={channel.label} className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">{channel.label}</span>
                    <span>{channel.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`rounded-3xl ${cardBg} ${cardBorder} p-8`}>
              <p className={`text-xs font-semibold uppercase tracking-[0.4em] ${cardTextMuted}`}>Engagement Rhythm</p>
              <ul className={`mt-6 space-y-4 text-sm ${listText}`}>
                <li>Discovery sprint to map opportunities</li>
                <li>Co-create the growth roadmap & KPI stack</li>
                <li>Embedded pod deploys within 21 days</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <CTASection />
    </div>
  )
}

export default Contact

