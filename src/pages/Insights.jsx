import React from 'react'
import SectionTitle from '../components/common/SectionTitle'
import { blogPosts } from '../data/content'

const Insights = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionTitle title="Insights" subtitle="News and blogs from Rahadigital" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 6).map((post) => (
          <article key={post.id} className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
            <div className="h-40 w-full rounded-lg border border-dashed border-neutral-600/50" />
            <h3 className="mt-4 text-lg font-semibold text-white">{post.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{post.excerpt}</p>
            <div className="mt-3 text-xs text-neutral-400">
              {post.date} · {post.readingTime}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Insights


