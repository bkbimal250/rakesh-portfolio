import React from 'react'
import { languages, skillCategories } from '../../data/content'

const SkillsLanguages = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-full bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[3rem] border border-white/10 bg-white/5 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Skills & Expertise</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {skillCategories.map((category) => (
                  <div key={category.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">{category.label}</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-200">
                      {category.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">Languages</p>
              <ul className="mt-4 space-y-3 text-sm font-semibold text-white">
                {languages.map((language) => (
                  <li key={language} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {language}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Download Resume</p>
              <a
                href="mailto:rg828651@gmail.com?subject=Resume%20Request"
                className="mt-3 inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-white/40"
              >
                Request a PDF →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsLanguages

