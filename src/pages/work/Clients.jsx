import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import { clientLogos } from '../../data/clients'

const Clients = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Clients" subtitle="Global clientele across industries" />
      <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {clientLogos.map((c) => (
          <div key={c.name} className="flex h-20 items-center justify-center rounded-lg border border-neutral-700/30 bg-neutral-900/40 text-neutral-300">
            {c.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients


