import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'

const Education = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Education" subtitle="Student-first digital experiences" />
      <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-40 w-full overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1200&auto=format&fit=crop" alt="Education" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-neutral-300">Admissions funnels, content hubs, program pages, and CRM handoffs.</p>
      </div>
    </section>
  )
}

export default Education


