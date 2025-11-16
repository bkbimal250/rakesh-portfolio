import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'

const Pharma = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Pharma" subtitle="HCP and patient engagement platforms" />
      <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-40 w-full overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" alt="Pharma" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-neutral-300">Program microsites, adherence tools, and compliant communications.</p>
      </div>
    </section>
  )
}

export default Pharma


