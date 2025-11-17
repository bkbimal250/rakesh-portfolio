import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { caseStudies } from '../../data/content'
import CTASection from '../../components/home/CTASection'
import useTheme from '../../hooks/useTheme'

const Portfolio = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const heroGradient = isLight
    ? 'from-[#FFF1E0]/85 via-[#FFF8F0] to-white'
    : 'from-neutral-900/30 via-neutral-900/60 to-neutral-950'
  const headingClass = isLight ? 'text-[#1A1A1A]' : 'text-white'
  const textClass = isLight ? 'text-[#4A4A4A]' : 'text-neutral-300'

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${heroGradient}`} />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-semibold sm:text-6xl ${headingClass}`}
          >
            Portfolio
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed ${textClass}`}
          >
            Selected projects and outcomes that showcase our expertise across design, development, and digital marketing.
          </Motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass gradient-border group rounded-3xl border border-neutral-400/10 overflow-hidden transition hover:-translate-y-1 hover:border-primary-400/20"
              >
                <Link to={`/work/case-studies/${study.slug}`}>
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-white transition group-hover:text-primary-400">
                      {study.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-300">{study.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.impact.map((impact, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-medium text-primary-300"
                        >
                          {impact}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition group-hover:text-primary-300">
                      View Case Study <span>→</span>
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

export default Portfolio


