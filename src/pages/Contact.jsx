import React from 'react'
import { motion as Motion } from 'framer-motion'
import ContactForm from '../components/contact/ContactForm'
import { contactChannels } from '../data/content'
import CTASection from '../components/home/CTASection'

const Contact = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-950" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-white sm:text-5xl"
          >
            Let&apos;s map the next wave of your growth story.
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300"
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
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Direct Channels</p>
              <ul className="mt-6 space-y-5 text-sm text-slate-200">
                {contactChannels.map((channel) => (
                  <li key={channel.label} className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{channel.label}</span>
                    <span>{channel.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">Engagement Rhythm</p>
              <ul className="mt-6 space-y-4 text-sm text-slate-200">
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

