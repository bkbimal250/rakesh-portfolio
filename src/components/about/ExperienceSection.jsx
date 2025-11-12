import React from 'react'
import { experienceEntries } from '../../data/content'

const ExperienceSection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.14),_transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Driving measurable digital growth</h2>
        </div>
        <div className="mt-10 space-y-8">
          {experienceEntries.map((item) => (
            <div
              key={item.company}
              className="glass gradient-border rounded-3xl border border-white/10 p-8 sm:p-10 transition hover:-translate-y-1"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-sm font-semibold text-slate-300">
                    {item.company} • {item.location}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.4em] text-slate-400">{item.period}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.focus}</p>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Key Responsibilities</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Impact & Wins</p>
                  <ul className="mt-3 space-y-2 text-sm text-sky-200">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

