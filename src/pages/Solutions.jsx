import React from 'react'
import SectionTitle from '../components/common/SectionTitle'

const Solutions = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionTitle title="Solutions" subtitle="Purpose-built tools to accelerate your growth" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { name: 'Fitmate', desc: 'Wellness engagement platform for healthier organizations.' },
          { name: 'Cam360 Studio', desc: 'Interactive media studio for immersive showcases.' },
          { name: 'Assessmo', desc: 'Assessment and learning repository for skills development.' },
          { name: 'Webino', desc: 'Lightweight CMS and site starter for fast launches.' },
          { name: 'VR Magic', desc: 'Experiential VR demos for training and marketing.' },
          { name: 'BizOn', desc: 'Lead-gen microsites that convert.' },
        ].map((s) => (
          <div key={s.name} className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">{s.name}</h3>
            <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
            <div className="mt-4 h-40 w-full rounded-lg border border-dashed border-neutral-600/50" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Solutions


