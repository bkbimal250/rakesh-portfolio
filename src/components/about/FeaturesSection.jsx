import React from 'react'
import { motion as Motion } from 'framer-motion'

const featureData = [
  {
    title: 'Integrated Pods',
    description:
      'Cross-functional teams of strategists, creatives, engineers, and growth scientists aligned to your north-star metrics.',
  },
  {
    title: 'Motion-First Storytelling',
    description:
      'Immersive narratives and launch experiences powered by motion design, interactive content, and product theater.',
  },
  {
    title: 'Growth Intelligence Layer',
    description:
      'Automation, experimentation, and revenue ops woven into every engagement to fuel compounding learning loops.',
  },
]

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.08),_transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">Operating System</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A studio engineered for velocity</h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-400">
          We plug into your organization as an adaptive, data-informed partner. Every engagement blends research,
          experience design, growth strategy, and systems thinking to deliver momentum.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featureData.map((feature, index) => (
            <Motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass gradient-border h-full rounded-3xl border border-white/10 p-8"
            >
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{feature.description}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

