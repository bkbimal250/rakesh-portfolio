import React from 'react'
import { motion as Motion } from 'framer-motion'
import { metrics } from '../../data/content'

const AboutStats = () => {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl rounded-[3rem] border border-white/10 bg-white/5 p-12 text-center">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-3"
            >
              <p className="text-3xl font-semibold text-white">{metric.value}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{metric.label}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStats

