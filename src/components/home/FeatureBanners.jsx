import React from 'react'

const items = [
  {
    tag: 'Patient Support Program',
    lines: ['Connecting every', 'step of your', 'health journey'],
    cta: { label: 'GET A QUOTE', href: '/contact' },
    link: { label: 'View Case Study', href: '/work' },
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'Motel Industry',
    lines: ['Discover a', 'world of refined', 'elegance'],
    cta: { label: 'GET A QUOTE', href: '/contact' },
    link: { label: 'View Case Study', href: '/work' },
    image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'Gen AI',
    lines: ['Explore', 'Limitless', 'Possibilities'],
    cta: { label: 'GET A QUOTE', href: '/contact' },
    link: { label: 'LEARN MORE', href: '/services' },
    image: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1200&auto=format&fit=crop',
  },
]

const FeatureBanners = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.tag} className="rounded-3xl border border-neutral-700/30 bg-neutral-900/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">{item.tag}</p>
            <div className="mt-4 space-y-1 text-3xl font-semibold leading-tight text-white">
              {item.lines.map((l) => (
                <div key={l}>{l}</div>
              ))}
            </div>
            <div className="mt-6 h-28 w-full overflow-hidden rounded-xl">
              <img src={item.image} alt={item.tag} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={item.cta.href}
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-900 transition hover:opacity-90"
              >
                {item.cta.label}
              </a>
              <a href={item.link.href} className="text-xs font-semibold tracking-widest text-primary-300">
                {item.link.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureBanners


