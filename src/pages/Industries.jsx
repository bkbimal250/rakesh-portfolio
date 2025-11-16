import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import { Link } from 'react-router-dom'
import { industriesCatalog } from '../data/siteCatalog'

const Industries = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionTitle title="Industries" subtitle="Domain depth with cross-industry best practices" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industriesCatalog.map((i) => (
          <Link to={`/industries/${i.slug}`} key={i.slug} className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6 transition hover:border-primary-400/40">
            <h3 className="text-lg font-semibold text-white">{i.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{i.summary}</p>
            <div className="mt-4 h-40 w-full rounded-lg border border-dashed border-neutral-600/50" />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Industries


