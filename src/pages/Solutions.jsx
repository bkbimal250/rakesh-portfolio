import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { solutions } from '../data/solutionsData'
import CTASection from '../components/home/CTASection'
import useTheme from '../hooks/useTheme'

const Solutions = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const heroGradient = isLight
    ? 'from-[#FFF1E0]/85 via-[#FFF8F0] to-white'
    : 'from-neutral-900/30 via-neutral-900/60 to-neutral-950'
  const headingClass = isLight ? 'text-[#1A1A1A]' : 'text-white'
  const textClass = isLight ? 'text-[#4A4A4A]' : 'text-neutral-300'

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${heroGradient}`} />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-semibold sm:text-6xl ${headingClass}`}
          >
            Purpose-Built Solutions to Accelerate Your Growth
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed ${textClass}`}
          >
            Discover our suite of innovative solutions designed to solve specific business challenges and drive measurable results across wellness, media, education, and marketing.
          </Motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Motion.article
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="glass gradient-border group rounded-3xl border border-neutral-400/10 overflow-hidden transition hover:-translate-y-1 hover:border-primary-400/20"
              >
                <Link to={`/solutions/${solution.slug}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
                        {solution.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-semibold text-white transition group-hover:text-primary-400">
                      {solution.title}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-primary-300">{solution.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-300 line-clamp-3">
                      {solution.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {solution.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-neutral-400/10 bg-neutral-800/30 px-3 py-1 text-xs text-neutral-300"
                        >
                          {feature}
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

export default Solutions


