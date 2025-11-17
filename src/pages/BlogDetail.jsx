import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { blogPosts } from '../data/content'
import CTASection from '../components/home/CTASection'
import useTheme from '../hooks/useTheme'

const BlogDetail = () => {
  const { id } = useParams()
  const article = blogPosts.find((post) => post.id === id)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const heroGradient = isLight
    ? 'from-[#FFF1E0]/90 via-[#FFF8F0] to-white'
    : 'from-neutral-900/30 via-neutral-900/60 to-neutral-950'
  const headingClass = isLight ? 'text-[#FF6F00]' : 'text-white'
  const subtitleClass = isLight ? 'text-[#7A4C1E]' : 'text-neutral-400'
  const bodyTextClass = isLight ? 'text-[#4A4A4A]' : 'text-neutral-300'
  const metaTextClass = isLight ? 'text-[#7A4C1E]' : 'text-neutral-400'
  const badgeClass = isLight
    ? 'rounded-full border border-[#FF6F00]/25 bg-[#FF6F00]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#B34D00]'
    : 'rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300'
  const shareButtonClass = isLight
    ? 'rounded-full border border-[#F4A300]/25 bg-white/80 p-3 text-[#7A4C1E] shadow-sm shadow-[#FF6F00]/10 transition hover:border-[#FF6F00]/40 hover:text-[#FF6F00]'
    : 'rounded-full border border-neutral-400/20 bg-neutral-800/30 p-3 text-neutral-400 transition hover:border-primary-400/40 hover:text-primary-400'
  const backButtonClass = isLight
    ? 'inline-flex items-center gap-2 rounded-full border border-[#F4A300]/25 bg-white/85 px-6 py-3 text-sm font-semibold text-[#7A4C1E] shadow-sm shadow-[#FF6F00]/10 transition hover:border-[#FF6F00]/40 hover:text-[#FF6F00]'
    : 'inline-flex items-center gap-2 rounded-full border border-neutral-400/20 bg-neutral-800/30 px-6 py-3 text-sm font-semibold text-neutral-300 transition hover:border-primary-400/40 hover:text-primary-300'
  const proseClass = isLight ? 'prose prose-lg max-w-none' : 'prose prose-invert prose-lg max-w-none'
  const articleContentVariant = isLight ? 'article-content--light' : 'article-content--dark'

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white">Article Not Found</h1>
          <Link to="/blog" className="mt-4 inline-block text-primary-400 hover:text-primary-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Find related articles (same category, excluding current)
  const relatedArticles = blogPosts
    .filter((post) => post.category === article.category && post.id !== article.id)
    .slice(0, 3)

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${heroGradient}`} />
        <div className="mx-auto max-w-4xl px-6">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] ${metaTextClass} transition ${
                isLight ? 'hover:text-[#FF6F00]' : 'hover:text-primary-400'
              }`}
            >
              ← Back to Blog
            </Link>
            <div className="mt-8 flex items-center gap-3">
              <span className={badgeClass}>
                {article.category}
              </span>
              <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${metaTextClass}`}>
                {article.date} · {article.readingTime}
              </p>
            </div>
            <h1 className={`mt-6 text-4xl font-semibold sm:text-5xl lg:text-6xl ${headingClass}`}>{article.title}</h1>
            <div className="mt-6 flex items-center gap-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                  isLight ? 'bg-[#FF6F00] text-white' : 'bg-gradient-primary text-neutral-900'
                }`}
              >
                {article.author.charAt(0)}
              </div>
              <div>
                <p className={`text-sm font-semibold ${headingClass}`}>{article.author}</p>
                <p className={`text-xs ${metaTextClass}`}>Digital Marketing Executive</p>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {article.image && (
        <section className="relative -mt-10 mb-16">
          <div className="mx-auto max-w-5xl px-6">
            <Motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl border border-neutral-400/10"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-[400px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
            </Motion.div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={proseClass}
          >
            <div
              className={`article-content ${articleContentVariant}`}
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
              }}
            />
          </Motion.article>

          {/* Share Section */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 border-t border-neutral-400/10 pt-8"
          >
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${metaTextClass}`}>Share This Article</p>
                <div className="mt-4 flex gap-4">
                  <button
                    type="button"
                    className={shareButtonClass}
                    aria-label="Share on Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={shareButtonClass}
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={shareButtonClass}
                    aria-label="Copy link"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href)
                      alert('Link copied to clipboard!')
                    }}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <Link
                to="/blog"
                className={backButtonClass}
              >
                ← Back to All Articles
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-neutral-400/10 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">Related Articles</p>
              <h2 className={`mt-4 text-3xl font-semibold ${headingClass}`}>Continue Reading</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedArticles.map((related, index) => (
                <Motion.article
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass gradient-border rounded-3xl border border-neutral-400/10 p-6 transition hover:-translate-y-1 hover:border-primary-400/20"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={
                        isLight
                          ? 'rounded-full border border-[#FF6F00]/25 bg-[#FF6F00]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#B34D00]'
                          : 'rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300'
                      }
                    >
                      {related.category}
                    </span>
                    <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${metaTextClass}`}>
                      {related.date} · {related.readingTime}
                    </p>
                  </div>
                  <h3 className={`mt-4 text-xl font-semibold ${headingClass}`}>{related.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${bodyTextClass}`}>{related.excerpt}</p>
                  <Link
                    to={`/blog/${related.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition hover:text-primary-300"
                  >
                    Read Article <span>→</span>
                  </Link>
                </Motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  )
}

export default BlogDetail

