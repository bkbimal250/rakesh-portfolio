import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import { blogPosts } from '../../data/content'

const Blogs = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Blogs" subtitle="Long-form insights and how-tos" />
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.id} className="rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
            <div className="h-36 w-full rounded-lg border border-dashed border-neutral-600/50" />
            <h3 className="mt-3 text-base font-semibold text-white">{post.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blogs


