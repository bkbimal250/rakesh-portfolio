import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'

const Webino = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Webino" subtitle="Lightweight CMS and site starter" />
      <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-48 w-full overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop" alt="Webino" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-neutral-300">
          Launch fast with an opinionated starter, simple editing, great Lighthouse scores.
        </p>
      </div>
    </section>
  )
}

export default Webino


