import React from 'react'
import { resumeProfile } from '../../data/content'

const ResumeOverview = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_55%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row">
        <div className="glass gradient-border flex-1 rounded-3xl border border-white/10 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">About Me</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            {resumeProfile.name}, {resumeProfile.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-300">{resumeProfile.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {resumeProfile.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-6 lg:w-72">
          <div className="glass gradient-border rounded-3xl border border-white/10 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Based In</p>
            <p className="mt-2 text-sm font-semibold text-white">{resumeProfile.location}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Contact</p>
            <div className="mt-2 space-y-2 text-sm text-slate-300">
              <a className="block text-sky-300 transition hover:text-sky-100" href={`tel:${resumeProfile.phone}`}>
                {resumeProfile.phone}
              </a>
              <a className="block text-sky-300 transition hover:text-sky-100" href={`mailto:${resumeProfile.email}`}>
                {resumeProfile.email}
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-sky-400/40 bg-gradient-to-r from-sky-500/30 via-cyan-500/20 to-emerald-500/30 p-[1px]">
            <div className="rounded-[calc(1.5rem-2px)] bg-slate-950/90 px-6 py-7 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Available For</p>
              <p className="mt-3">
                Performance marketing mandates, SEO/SEM retainers, D2C growth sprints, launch partnerships, and
                analytics-led funnel optimisation.
              </p>
              <a
                href="mailto:rg828651@gmail.com?subject=Let%27s%20Collaborate"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-white/40"
              >
                Book a discovery call →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeOverview

