import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { services, processSteps } from '../data/content'
import CTASection from '../components/home/CTASection'

const Services = () => {
  const addOns = [
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking setup, custom dashboards, and detailed performance reports to measure and optimize your marketing ROI.',
    },
    {
      title: 'Content Strategy',
      description: 'SEO-optimized content creation, keyword research, and content planning to support your organic growth goals.',
    },
    {
      title: 'Landing Page Optimization',
      description: 'A/B testing, conversion rate optimization, and UX improvements to maximize the effectiveness of your campaigns.',
    },
  ]

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-950" />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-white sm:text-6xl"
          >
            Comprehensive digital marketing services for sustainable growth.
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300"
          >
            From SEO to paid advertising, I deliver data-driven marketing strategies that drive measurable results. Every
            campaign is optimized for maximum ROI and continuous improvement.
          </Motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {services.map((service, index) => (
              <Motion.article
                key={service.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass gradient-border flex h-full flex-col rounded-3xl border border-white/10 p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{service.name}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">{service.description}</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                    Service
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {service.deliverables.map((deliverable) => (
                    <span
                      key={deliverable}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
                    >
                      {deliverable}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300"
                >
                  Get Started <span>→</span>
                </Link>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl rounded-[3rem] border border-white/10 bg-white/5 p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">My Process</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">A Proven Four-Phase Approach</h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-300">
                Every project follows a structured methodology that ensures strategic planning, proper execution,
                continuous optimization, and measurable results.
              </p>
            </div>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <Motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/40 bg-sky-400/10 text-xs font-semibold text-sky-200">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[3rem] border border-slate-500/20 bg-slate-900/70 p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">Additional Services</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">Complementary services to maximize results</h2>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/40 transition hover:scale-[1.02]"
              >
                Discuss Your Needs
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {addOns.map((item, index) => (
                <Motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}

export default Services

