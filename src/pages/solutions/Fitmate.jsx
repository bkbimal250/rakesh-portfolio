import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'

const Fitmate = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Fitmate" subtitle="Wellness engagement platform" />
      <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-48 w-full overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop" alt="Fitmate" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-neutral-300">
          Programs, assessments, and challenges designed to increase workplace wellness and participation.
        </p>
      </div>
    </section>
  )
}

export default Fitmate


