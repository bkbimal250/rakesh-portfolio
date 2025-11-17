import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { blogPosts } from '../data/content'
import CTASection from '../components/home/CTASection'

const Blog = () => {
  const categories = ['All', 'SEO', 'SEM & PPC', 'Social Media', 'Analytics']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900/30 via-neutral-900/60 to-neutral-950" />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-white sm:text-6xl"
          >
            Insights on digital marketing strategies and best practices.
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-300"
          >
            Practical guides, tips, and insights on SEO, SEM, social media marketing, and analytics to help you grow
            your online presence and achieve better marketing results.
          </Motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                  selectedCategory === category
                    ? 'border-primary-400/60 bg-primary-400/20 text-primary-300'
                    : 'border-neutral-400/10 bg-neutral-800/30 text-neutral-200 hover:border-primary-400/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="mt-12 text-center">
              <p className="text-neutral-400">No posts found in this category.</p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {filteredPosts.map((post, index) => (
                <Motion.article
                  key={post.id || post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="glass gradient-border rounded-3xl border border-neutral-400/10 overflow-hidden transition hover:-translate-y-1 hover:border-primary-400/20"
                >
                  {post.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
                        {post.category}
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                        {post.date} · {post.readingTime}
                      </p>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-300">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id || post.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition hover:text-primary-300"
                    >
                      Read Article <span>→</span>
                    </Link>
                  </div>
                </Motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
      <CTASection />
    </div>
  )
}

export default Blog

