import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import { caseStudies } from '../../data/content'

const CaseStudies = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Case Studies" subtitle="Detailed narratives of transformation" />
      <div className="mt-8 space-y-6">
        {caseStudies.map((study) => (
          <div key={study.title} className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
            <div className="h-40 w-full rounded-lg border border-dashed border-neutral-600/50" />
            <h3 className="mt-3 text-base font-semibold text-white">{study.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{study.description}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-neutral-300">
              {study.impact.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaseStudies


