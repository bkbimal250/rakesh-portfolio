import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { caseStudies } from '../../data/caseStudies'
import CTASection from '../../components/home/CTASection'
import useTheme from '../../hooks/useTheme'

const CaseStudyDetail = () => {
  const { slug } = useParams()
  const study = caseStudies.find((item) => item.slug === slug)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!study) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white">Case Study Not Found</h1>
          <Link
            to="/work/case-studies"
            className="mt-4 inline-flex items-center gap-2 text-primary-400 transition hover:text-primary-300"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }

  const relatedStudies = caseStudies.filter((item) => item.slug !== slug).slice(0, 3)

  const heroGradient = isLight
    ? 'from-[#FFF1E0]/92 via-[#FFF8F0] to-white'
    : 'from-neutral-900/30 via-neutral-900/60 to-neutral-950'
  const headingClass = isLight ? 'text-[#1A1A1A]' : 'text-white'
  const bodyClass = isLight ? 'text-[#4A4A4A]' : 'text-neutral-300'
  const metaClass = isLight ? 'text-[#7A4C1E]' : 'text-neutral-400'
  const badgeClass = isLight
    ? 'rounded-full border border-[#FF6F00]/25 bg-[#FF6F00]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#B34D00]'
    : 'rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300'
  const tileClass = isLight
    ? 'rounded-2xl border border-[#F4A300]/30 bg-white/85 p-6 shadow-lg shadow-[#FF6F00]/10'
    : 'rounded-2xl border border-neutral-400/10 bg-neutral-800/30 p-6'

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${heroGradient}`} />
        <div className="absolute inset-0 -z-[1] bg-[radial-gradient(circle_at_top,_rgba(255,111,0,0.12),_transparent_55%)] opacity-70" />
        <div className="mx-auto max-w-6xl px-6">
          <Motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/work/case-studies"
              className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] ${metaClass} transition ${
                isLight ? 'hover:text-[#FF6F00]' : 'hover:text-primary-400'
              }`}
            >
              ← Back to Case Studies
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className={badgeClass}>{study.category}</span>
              <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${metaClass}`}>
                {study.projectType} · {study.timeline}
              </span>
            </div>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr,1fr]">
              <div className="space-y-8">
                <div>
                  <h1 className={`text-4xl font-semibold sm:text-5xl lg:text-6xl ${headingClass}`}>{study.title}</h1>
                  <p className={`mt-4 text-xl ${isLight ? 'text-[#CC5800]' : 'text-primary-300'}`}>{study.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {[study.projectType, study.industry, study.timeline].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-primary-400/20 bg-primary-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Client', value: study.client, sub: study.location || 'Global' },
                    { label: 'Focus', value: study.category, sub: study.projectType },
                  ].map((info) => (
                    <div key={info.label} className="rounded-2xl border border-neutral-400/10 bg-neutral-900/20 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-400">{info.label}</p>
                      <p className={`mt-2 text-lg font-semibold ${headingClass}`}>{info.value}</p>
                      <p className={`text-sm ${metaClass}`}>{info.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative h-full rounded-[2rem] border border-neutral-400/20 bg-neutral-900/40 p-3">
                  <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-primary-400/20 via-transparent to-transparent" />
                  <div className="relative h-full overflow-hidden rounded-[1.4rem]">
                    {study.image ? (
                      <img src={study.image} alt={study.title} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-primary-400/30 via-primary-500/30 to-primary-700/40" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {study.image && (
        <section className="relative -mt-12 mb-20">
          <div className="mx-auto max-w-5xl px-6">
            <Motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-neutral-400/10"
            >
              <img src={study.image} alt={study.title} className="h-[460px] w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
            </Motion.div>
          </div>
        </section>
      )}

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {study.metricsDetail.map((metric) => (
              <div key={metric.label} className={tileClass}>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">{metric.label}</p>
                <p className={`mt-4 text-3xl font-semibold ${headingClass}`}>{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`text-2xl font-semibold ${headingClass}`}>The Challenge</h2>
              <p className={`mt-4 leading-relaxed ${bodyClass}`}>{study.challenge}</p>
              <div className="mt-8 rounded-2xl border border-neutral-400/10 bg-neutral-900/30 p-6">
                <h3 className={`text-lg font-semibold ${headingClass}`}>Approach</h3>
                <ul className="mt-4 space-y-3">
                  {study.approach.map((step) => (
                    <li key={step} className={`flex gap-3 text-sm ${bodyClass}`}>
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </Motion.div>

            <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`text-2xl font-semibold ${headingClass}`}>Results</h2>
              <ul className="mt-4 space-y-4">
                {study.results.map((result) => (
                  <li key={result} className={`rounded-2xl border border-neutral-400/10 bg-neutral-900/20 p-4 ${bodyClass}`}>
                    {result}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h3 className={`text-lg font-semibold ${headingClass}`}>Services</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-primary-400/20 bg-primary-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </Motion.div>
          </div>

          {study.testimonial && (
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 rounded-[2rem] border border-neutral-400/10 bg-neutral-900/40 p-10 text-center"
            >
              <p className="text-xl leading-relaxed text-white">“{study.testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-primary-300">
                {study.testimonial.author} · {study.testimonial.role}
              </p>
            </Motion.div>
          )}
        </div>
      </section>

      {relatedStudies.length > 0 && (
        <section className="border-t border-neutral-400/10 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">More Work</p>
              <h2 className={`mt-4 text-3xl font-semibold ${headingClass}`}>Related Case Studies</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedStudies.map((item, index) => (
                <Motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass gradient-border rounded-3xl border border-neutral-400/10 overflow-hidden transition hover:-translate-y-1 hover:border-primary-400/30"
                >
                  <Link to={`/work/case-studies/${item.slug}`}>
                    {item.image && (
                      <div className="relative h-40 w-full overflow-hidden">
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                    )}
                    <div className="p-6">
                      <span className={badgeClass}>{item.category}</span>
                      <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-300 line-clamp-3">{item.summary}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400">
                        View Project <span>→</span>
                      </div>
                    </div>
                  </Link>
                </Motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  )
}

export default CaseStudyDetail


