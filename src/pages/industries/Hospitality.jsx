import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'

const Hospitality = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Hospitality" subtitle="Booking-friendly hotel and resort websites" />
      <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-40 w-full overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop" alt="Hospitality" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-neutral-300">Visual galleries, booking engine integrations, and local SEO.</p>
      </div>
    </section>
  )
}

export default Hospitality


