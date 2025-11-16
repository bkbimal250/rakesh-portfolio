import React from 'react'
import SectionTitle from '../components/common/SectionTitle'

const Consulting = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionTitle title="Consulting" subtitle="Workshops and Fractional CXO services" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
          <h3 className="text-lg font-semibold text-white">Workshops</h3>
          <p className="mt-2 text-sm text-neutral-300">
            Hands-on sessions tailored to your team: GTM playbooks, SEO/SEM masterclasses, analytics instrumentation,
            and experimentation frameworks.
          </p>
          <div className="mt-4 h-28 w-full rounded-lg border border-dashed border-neutral-600/50" />
        </div>
        <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
          <h3 className="text-lg font-semibold text-white">Fractional CXO</h3>
          <p className="mt-2 text-sm text-neutral-300">
            Senior leadership on-demand for growth, product marketing, and digital transformation—without full-time overhead.
          </p>
          <div className="mt-4 h-28 w-full rounded-lg border border-dashed border-neutral-600/50" />
        </div>
      </div>
    </section>
  )
}

export default Consulting


