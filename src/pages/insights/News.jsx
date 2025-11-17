import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import SectionTitle from '../../components/common/SectionTitle'
import { newsItems } from '../../data/content'

const News = () => {
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
            Latest News & Updates
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-300"
          >
            Stay updated with the latest news, announcements, and milestones from our digital marketing journey.
          </Motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {newsItems.map((news, index) => (
              <Motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="glass gradient-border rounded-3xl border border-neutral-400/10 overflow-hidden transition hover:-translate-y-1 hover:border-primary-400/20"
              >
                {news.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
                      {news.category}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                      {news.date}
                    </p>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-white">{news.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">{news.excerpt}</p>
                  <Link
                    to={`/insights/news/${news.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition hover:text-primary-300"
                  >
                    Read More <span>→</span>
                  </Link>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default News


