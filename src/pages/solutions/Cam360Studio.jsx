import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'

const Cam360Studio = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Cam360 Studio" subtitle="Interactive media studio" />
      <div className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-48 w-full overflow-hidden rounded-lg">
          <img src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1200&auto=format&fit=crop" alt="Cam360 Studio" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="mt-4 text-sm text-neutral-300">
          Build immersive product galleries and walkthroughs with responsive performance and analytics.
        </p>
      </div>
    </section>
  )
}

export default Cam360Studio


