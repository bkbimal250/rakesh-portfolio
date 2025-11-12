import React from 'react'
import { certificationEntries, educationEntries } from '../../data/content'

const EducationCertifications = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(34,197,94,0.12),_transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="glass gradient-border rounded-3xl border border-white/10 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Education</p>
            <ul className="mt-5 space-y-5 text-sm text-slate-200">
              {educationEntries.map((education) => (
                <li key={education.degree} className="border-b border-white/10 pb-5 last:border-none last:pb-0">
                  <p className="text-base font-semibold text-white">{education.degree}</p>
                  <p className="mt-1 text-slate-300">{education.institution}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-500">{education.period}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">Certifications</p>
            <ul className="mt-5 space-y-5 text-sm text-slate-200">
              {certificationEntries.map((certification) => (
                <li key={certification.title} className="border-b border-white/10 pb-5 last:border-none last:pb-0">
                  <p className="text-base font-semibold text-white">{certification.title}</p>
                  <p className="mt-1 text-slate-300">{certification.issuer}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-500">{certification.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationCertifications

