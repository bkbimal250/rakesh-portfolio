import React from 'react'
import { motion as Motion } from 'framer-motion'
import { caseStudies } from '../../data/content'
import CTASection from '../../components/home/CTASection'

const CaseStudies = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900/30 via-neutral-900/60 to-neutral-950" />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-white sm:text-6xl"
          >
            Case Studies
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-300"
          >
            Detailed narratives of transformation showcasing real results, strategies, and outcomes from our client engagements.
          </Motion.p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Motion.article
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass gradient-border rounded-3xl border border-neutral-400/10 overflow-hidden"
              >
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="relative h-64 md:h-full w-full overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-2xl font-semibold text-white">{study.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-300">{study.description}</p>
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 mb-3">
                        Key Results
                      </p>
                      <div className="space-y-2">
                        {study.impact.map((impact, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default CaseStudies


