import React from 'react'
import SectionTitle from '../components/common/SectionTitle'

const VideoProduction = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionTitle title="Video Production" subtitle="Cutting-edge, visually stunning brand films" />
      <div className="mt-8 rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-48 w-full rounded-lg border border-dashed border-neutral-600/50" />
        <p className="mt-4 text-sm text-neutral-300">
          From concept to final cut, we deliver high-impact product videos, explainers, testimonials, and event reels—optimized for performance across channels.
        </p>
      </div>
    </section>
  )
}

export default VideoProduction


