import React from 'react'
import { motion as Motion } from 'framer-motion'
import { services, processSteps } from '../../data/content'

const ServiceSection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">My Services</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Comprehensive digital marketing solutions</h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-400">
            I deliver comprehensive digital marketing services with a focus on measurable results. From SEO to paid
            advertising, every strategy is data-driven and optimized for maximum ROI and sustainable growth.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:mt-16 lg:grid-cols-2">
          <div className="space-y-6">
            {services.map((service, index) => (
              <Motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass gradient-border rounded-3xl border border-white/10 p-8 transition hover:-translate-y-1 hover:border-white/30"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  <span className="rounded-full border border-sky-400/50 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                    Service {index + 1}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {service.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>

          <div className="glass gradient-border sticky top-32 h-fit space-y-8 rounded-3xl border border-white/10 p-8 sm:p-10">
            <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">My Approach</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-100">
                I follow a proven four-phase methodology that ensures every campaign is strategic, measurable, and
                optimized for continuous improvement and growth.
              </p>
            </div>
            <div className="space-y-6">
              {processSteps.map((step, idx) => (
                <Motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="group relative rounded-2xl border border-white/5 bg-white/5 p-6 transition hover:border-sky-400/40"
                >
                  <div className="absolute -left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/40 bg-sky-400/10 text-sm font-semibold text-sky-200">
                    0{idx + 1}
                  </div>
                  <h4 className="pl-10 text-lg font-semibold text-white">{step.title}</h4>
                  <p className="mt-3 pl-10 text-sm leading-relaxed text-slate-400">{step.description}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection

