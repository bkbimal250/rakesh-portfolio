import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'

const VRMagic = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="VR Magic" subtitle="Experiential demos for training and marketing" />
      <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-48 w-full overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" alt="VR Magic" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-neutral-300">
          Create VR walkthroughs and simulations to educate, onboard, and sell with impact.
        </p>
      </div>
    </section>
  )
}

export default VRMagic


