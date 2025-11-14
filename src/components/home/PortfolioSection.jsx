import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { caseStudies } from '../../data/content'

const PortfolioSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">Featured Projects</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Successful campaigns with measurable results</h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/40"
          >
            View All Work
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:mt-16 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Motion.article
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                    {study.category}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">2025</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{study.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{study.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-sky-200">
                  {study.impact.map((impact) => (
                    <li key={impact} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> {impact}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <span>View Narrative</span>
                  <span className="text-sky-300 transition group-hover:text-sky-100">→</span>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection

