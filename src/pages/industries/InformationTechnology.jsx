import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'

const InformationTechnology = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Information Technology" subtitle="Product and service storytelling for tech brands" />
      <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-40 w-full overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" alt="Information Technology" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-neutral-300">Solutions pages, docs hubs, and demand-gen landing suites.</p>
      </div>
    </section>
  )
}

export default InformationTechnology


