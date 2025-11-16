import React from 'react'
import SectionTitle from '../components/common/SectionTitle'

const Packages = () => {
  const tiers = [
    { name: 'Website', desc: 'High-performance business websites optimized for conversion.' },
    { name: 'Catalog', desc: 'Product catalog sites with easy content management.' },
    { name: 'eCommerce', desc: 'Storefronts with secure checkout and growth tooling.' },
  ]
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionTitle title="Website Packages" subtitle="Choose the right starting point for your business" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">{t.name}</h3>
            <p className="mt-2 text-sm text-neutral-300">{t.desc}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-300">
              <li>Responsive design</li>
              <li>SEO-friendly structure</li>
              <li>Performance-focused build</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Packages


