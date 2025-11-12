import React from 'react'
import { motion as Motion } from 'framer-motion'

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden pb-24 pt-20 sm:pt-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-slate-900/20 via-slate-900/60 to-slate-950" />
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-white sm:text-6xl"
        >
          We architect growth systems that feel like experiences.
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300"
        >
          Rakesh is a collective of strategists, designers, storytellers, and growth technologists. We partner with
          visionary teams to make every touchpoint intentional, measurable, and unforgettable.
        </Motion.p>
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-1"
        >
          <div className="rounded-[2.4rem] bg-slate-950/80 p-10">
            <p className="text-left text-sm leading-relaxed text-slate-200">
              “We believe marketing is no longer a campaign—it&apos;s the connective tissue between every product moment,
              every story, and every relationship. We orchestrate that connection so brands can earn attention and trust
              with precision.”
            </p>
            <div className="mt-6 flex flex-col gap-2 text-left">
              <span className="text-sm font-semibold text-white">Elena Carter</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Founding Partner</span>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default AboutHero

