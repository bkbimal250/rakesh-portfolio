import React, { useState } from 'react'
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-950" />
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
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300"
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
                    ? 'border-sky-400/60 bg-sky-400/20 text-sky-200'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:border-white/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="mt-12 text-center">
              <p className="text-slate-400">No posts found in this category.</p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {filteredPosts.map((post, index) => (
                <Motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="glass gradient-border rounded-3xl border border-white/10 p-8 transition hover:border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                      {post.category}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      {post.date} · {post.readingTime}
                    </p>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{post.excerpt}</p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300 transition hover:text-sky-100"
                  >
                    Read Article <span>→</span>
                  </button>
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

