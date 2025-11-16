import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'

const Assessmo = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Assessmo" subtitle="Assessment + learning repository" />
      <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-48 w-full overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" alt="Assessmo" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-neutral-300">
          Online tests, progress tracking, and resource libraries to develop skills at scale.
        </p>
      </div>
    </section>
  )
}

export default Assessmo


