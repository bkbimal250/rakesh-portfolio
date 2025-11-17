import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import { Link } from 'react-router-dom'
import { designServices } from '../../data/siteCatalog'

const Design = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionTitle title="Design Services" subtitle="Beautiful, fast, conversion-focused experiences" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {designServices.map((svc) => (
          <Link
            to={`/services/design/${svc.slug}`}
            key={svc.slug}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-700/30 bg-neutral-900/40 transition hover:border-primary-400/40"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src={svc.image}
                alt={svc.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold text-white">{svc.title}</h3>
              <p className="mt-2 text-sm text-neutral-300 flex-1">{svc.summary}</p>
              <span className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400">Learn More →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Design