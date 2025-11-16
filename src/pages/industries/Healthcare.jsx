import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'

const Healthcare = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Healthcare" subtitle="Compliant, accessible digital journeys" />
      <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-40 w-full overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop" alt="Healthcare" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-neutral-300">Patient portals, support programs, and HIPAA-aware workflows.</p>
      </div>
    </section>
  )
}

export default Healthcare


