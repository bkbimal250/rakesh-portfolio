import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../../components/common/SectionTitle'
import { blogPosts } from '../../data/content'

const Blogs = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Blogs" subtitle="Long-form insights and how-tos" />
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.id} className="group rounded-xl border border-neutral-700/30 bg-neutral-900/40 overflow-hidden transition hover:border-primary-400/30 hover:-translate-y-1">
            {post.image ? (
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
              </div>
            ) : (
              <div className="h-36 w-full rounded-lg border border-dashed border-neutral-600/50 bg-neutral-800/30" />
            )}
            <div className="p-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-2 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-primary-300">
                  {post.category}
                </span>
                <span className="text-xs text-neutral-400">{post.date}</span>
              </div>
              <Link to={`/blog/${post.id}`}>
                <h3 className="text-base font-semibold text-white transition hover:text-primary-400">{post.title}</h3>
              </Link>
              <p className="mt-2 text-sm text-neutral-300 line-clamp-2">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 transition hover:text-primary-300"
              >
                Read Article <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blogs


