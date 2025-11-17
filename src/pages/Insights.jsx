import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { blogPosts } from '../data/blogsData'
import { newsItems } from '../data/newsData'
import CTASection from '../components/home/CTASection'

const Insights = () => {
  const featuredPost = blogPosts[0]
  const latestBlogs = blogPosts.slice(0, 3)
  const latestNews = newsItems.slice(0, 3)

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900/30 via-neutral-900/60 to-neutral-950" />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-white sm:text-6xl"
          >
            Insights & Thought Leadership
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-300"
          >
            News, analysis, and deep dives from Rahadigital. Explore the latest trends across growth marketing,
            technology, and digital transformation.
          </Motion.p>
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/insights/news"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-primary-500/30 transition hover:scale-105"
            >
              Explore News
            </Link>
            <Link
              to="/insights/blogs"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition hover:text-primary-300"
            >
              Browse Blogs <span>→</span>
            </Link>
          </Motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <Motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass gradient-border grid gap-10 rounded-[3rem] border border-neutral-400/10 p-6 md:grid-cols-2 md:p-10"
            >
              <div className="relative h-64 overflow-hidden rounded-2xl md:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">{featuredPost.category}</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{featuredPost.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">{featuredPost.excerpt}</p>
                <div className="mt-4 text-xs text-neutral-400">
                  {featuredPost.date} · {featuredPost.readingTime}
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition hover:text-primary-300"
                >
                  Read Article <span>→</span>
                </Link>
              </div>
            </Motion.article>
          </div>
        </section>
      )}

      {/* Latest News & Blogs */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">Latest News</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">What&apos;s happening</h3>
                </div>
                <Link
                  to="/insights/news"
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition hover:text-primary-300"
                >
                  View All
                </Link>
              </div>
              <div className="mt-6 space-y-6">
                {latestNews.map((news, index) => (
                  <Motion.article
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl border border-neutral-400/10 bg-neutral-900/40 p-6"
                  >
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <span>{news.category}</span>
                      <span>•</span>
                      <span>{news.date}</span>
                    </div>
                    <Link to={`/insights/news/${news.id}`}>
                      <h4 className="mt-3 text-lg font-semibold text-white transition hover:text-primary-400">{news.title}</h4>
                    </Link>
                    <p className="mt-2 text-sm text-neutral-300 line-clamp-2">{news.excerpt}</p>
                    <Link
                      to={`/insights/news/${news.id}`}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition hover:text-primary-300"
                    >
                      Read More <span>→</span>
                    </Link>
                  </Motion.article>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">Latest Blogs</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Deep dives & analysis</h3>
                </div>
                <Link
                  to="/insights/blogs"
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition hover:text-primary-300"
                >
                  View All
                </Link>
              </div>
              <div className="mt-6 space-y-6">
                {latestBlogs.map((post, index) => (
                  <Motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl border border-neutral-400/10 bg-neutral-900/40 p-6"
                  >
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>
                        {post.date} · {post.readingTime}
                      </span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h4 className="mt-3 text-lg font-semibold text-white transition hover:text-primary-400">{post.title}</h4>
                    </Link>
                    <p className="mt-2 text-sm text-neutral-300 line-clamp-2">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition hover:text-primary-300"
                    >
                      Read Article <span>→</span>
                    </Link>
                  </Motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Insights


