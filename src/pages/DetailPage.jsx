import React from 'react'
import { useParams } from 'react-router-dom'
import SectionTitle from '../components/common/SectionTitle'
import { findCatalogItem } from '../data/siteCatalog'

const DetailPage = ({ kind, heading }) => {
  const { slug } = useParams()
  const item = findCatalogItem(kind, slug)

  if (!item) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionTitle title="Not found" subtitle="This item is not available." />
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
      <SectionTitle title={`${heading}: ${item.title}`} subtitle={item.summary} />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
          <div className="h-64 w-full overflow-hidden rounded-xl">
            <img
              src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop`}
              alt={item.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-6 space-y-3 text-sm text-neutral-300">
            {(item.bullets && item.bullets.length ? item.bullets : ['Discovery & strategy', 'Implementation', 'QA & launch', 'Analytics & optimization']).map(
              (b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                  <span>{b}</span>
                </div>
              )
            )}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">Get a quote</div>
            <p className="mt-2 text-sm text-neutral-300">Tell us your goals and timelines. We’ll propose the best approach.</p>
            <a href="/contact" className="mt-4 inline-flex rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-neutral-900">
              Start a Project
            </a>
          </div>
          <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">Resources</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li>Case Studies</li>
              <li>Process & Playbooks</li>
              <li>FAQs</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default DetailPage


