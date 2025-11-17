import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { industries } from '../data/industriesData'
import CTASection from '../components/home/CTASection'

const Industries = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900/30 via-neutral-900/60 to-neutral-950" />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-white sm:text-6xl"
          >
            Domain Depth with Cross-Industry Best Practices
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-300"
          >
            We bring deep industry expertise and proven best practices to deliver solutions tailored to your specific sector. From education to healthcare, we understand your unique challenges and opportunities.
          </Motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Motion.article
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="glass gradient-border group rounded-3xl border border-neutral-400/10 overflow-hidden transition hover:-translate-y-1 hover:border-primary-400/20"
              >
                <Link to={`/industries/${industry.slug}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
                        {industry.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-semibold text-white transition group-hover:text-primary-400">
                      {industry.title}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-primary-300">{industry.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-300 line-clamp-3">
                      {industry.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {industry.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-neutral-400/10 bg-neutral-800/30 px-3 py-1 text-xs text-neutral-300"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition group-hover:text-primary-300">
                      Learn More <span>→</span>
                    </div>
                  </div>
                </Link>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}

export default Industries


