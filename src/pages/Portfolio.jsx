import React from 'react'
import { motion as Motion } from 'framer-motion'
import { caseStudies, metrics } from '../data/content'
import CTASection from '../components/home/CTASection'

const Portfolio = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900/30 via-neutral-900/70 to-neutral-950" />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-white sm:text-6xl"
          >
            Real results from data-driven marketing campaigns.
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-300"
          >
            Explore a selection of successful campaigns and projects showcasing measurable growth in SEO, SEM, Meta Ads,
            and social media marketing.
          </Motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12">
            {caseStudies.map((study, index) => (
              <Motion.article
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass gradient-border overflow-hidden rounded-[2.5rem] border border-neutral-400/10 bg-neutral-800/30 p-1"
              >
                <div className="rounded-[2.4rem] bg-neutral-950/80 p-12">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                    <div className="lg:w-1/3">
                      <div
                        className={`h-48 w-full rounded-3xl bg-gradient-to-br ${study.accent} opacity-80 transition group-hover:opacity-100`}
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">
                          {study.category}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">2025</span>
                      </div>
                      <h2 className="mt-6 text-3xl font-semibold text-white">{study.title}</h2>
                      <p className="mt-4 text-sm leading-relaxed text-neutral-300">{study.description}</p>
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {study.impact.map((impact) => (
                          <li key={impact} className="flex items-center gap-3 text-sm text-accent-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl rounded-[3rem] border border-neutral-400/10 bg-neutral-800/30 p-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">Key Achievements</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Measurable results that drive business growth</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-400">{metric.label}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}

export default Portfolio

