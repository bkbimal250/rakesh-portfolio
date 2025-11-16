import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import { Link } from 'react-router-dom'
import { technologyServices } from '../../data/siteCatalog'

const Technology = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Technology" subtitle="Robust, scalable systems built for growth" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologyServices.map((svc) => (
          <Link to={`/services/technology/${svc.slug}`} key={svc.slug} className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-5 transition hover:border-primary-400/40">
            <div className="h-24 w-full rounded-lg border border-dashed border-neutral-600/50" />
            <h3 className="mt-3 text-sm font-semibold text-white">{svc.title}</h3>
            <p className="mt-1 text-xs text-neutral-300">{svc.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Technology


