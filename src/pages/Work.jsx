import React from 'react'
import SectionTitle from '../components/common/SectionTitle'

const Work = () => {
  const highlights = [
    {
      title: "Cloud Logic AI – Corporate Site",
      note: "Modern, capability-led presence",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Shopify Accelerator",
      note: "E-commerce growth setup",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Tata Elxsi Product Microsites",
      note: "Experience-first product launches",
      image: "https://images.unsplash.com/photo-1498050108023-7c3f8b0a3a2f?q=80&w=1200&auto=format&fit=crop"
    },
  ]
  const stats = [
    { value: '520', label: 'Projects Completed' },
    { value: '100%', label: 'Successful Execution' },
    { value: '6.2 Years', label: 'Avg Client Retention' },
    { value: '5 Years', label: 'Project Success' },
  ]
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Work" subtitle="Selected projects, clients, and case studies" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6 text-center">
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="mt-1 text-sm text-neutral-300">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.title} className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
            <div className="h-40 w-full overflow-hidden rounded-lg">
              <img src={h.image} alt={h.title} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">{h.title}</h3>
            <p className="mt-1 text-sm text-neutral-300">{h.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work


