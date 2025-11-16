import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import { caseStudies } from '../../data/content'

const Portfolio = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Portfolio" subtitle="Selected projects and outcomes" />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <div key={study.title} className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
            <div className="h-40 w-full rounded-lg border border-dashed border-neutral-600/50" />
            <h3 className="mt-3 text-base font-semibold text-white">{study.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{study.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio


