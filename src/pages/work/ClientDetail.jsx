import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { clientLogos } from '../../data/clients'
import CTASection from '../../components/home/CTASection'
import useTheme from '../../hooks/useTheme'

const ClientDetail = () => {
  const { slug } = useParams()
  const client = clientLogos.find((item) => item.slug === slug)
  const { theme } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!client) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white">Client Not Found</h1>
          <Link
            to="/work/clients"
            className="mt-4 inline-flex items-center gap-2 text-primary-400 transition hover:text-primary-300"
          >
            ← Back to Clients
          </Link>
        </div>
      </div>
    )
  }

  const heroGradient = isLight
    ? 'from-[#FFF1E0]/92 via-[#FFF8F0] to-white'
    : 'from-neutral-900/30 via-neutral-900/60 to-neutral-950'
  const headingClass = isLight ? 'text-[#1A1A1A]' : 'text-white'
  const bodyClass = isLight ? 'text-[#4A4A4A]' : 'text-neutral-300'
  const metaClass = isLight ? 'text-[#7A4C1E]' : 'text-neutral-400'
  const badgeClass = isLight
    ? 'rounded-full border border-[#FF6F00]/25 bg-[#FF6F00]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#B34D00]'
    : 'rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300'
  const tileClass = isLight
    ? 'rounded-2xl border border-[#F4A300]/30 bg-white/85 p-6 shadow-lg shadow-[#FF6F00]/10'
    : 'rounded-2xl border border-neutral-400/10 bg-neutral-800/30 p-6'

  const relatedClients = clientLogos.filter((item) => item.slug !== slug).slice(0, 3)

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${heroGradient}`} />
        <div className="absolute inset-0 -z-[1] bg-[radial-gradient(circle_at_top,_rgba(255,111,0,0.12),_transparent_55%)] opacity-80" />
        <div className="mx-auto max-w-6xl px-6">
          <Motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/work/clients"
              className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] ${metaClass} transition ${
                isLight ? 'hover:text-[#FF6F00]' : 'hover:text-primary-400'
              }`}
            >
              ← Back to Clients
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className={badgeClass}>{client.category}</span>
              <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${metaClass}`}>
                {client.industry} · {client.location}
              </span>
            </div>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-8">
                <div>
                  <h1 className={`text-4xl font-semibold sm:text-5xl lg:text-6xl ${headingClass}`}>{client.name}</h1>
                  <p className={`mt-4 text-xl ${isLight ? 'text-[#CC5800]' : 'text-primary-300'}`}>{client.engagement}</p>
                  <p className={`mt-4 leading-relaxed ${bodyClass}`}>{client.description}</p>
                  {client.website && (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400"
                    >
                      Visit Website <span>→</span>
                    </a>
                  )}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Industry', value: client.industry, sub: client.category },
                    { label: 'Region', value: client.location, sub: client.market || 'APAC' },
                  ].map((info) => (
                    <div key={info.label} className="rounded-2xl border border-neutral-400/10 bg-neutral-900/20 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-400">{info.label}</p>
                      <p className={`mt-2 text-lg font-semibold ${headingClass}`}>{info.value}</p>
                      <p className={`text-sm ${metaClass}`}>{info.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-[2rem] border border-neutral-400/20 bg-neutral-900/40 p-3">
                <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-primary-400/15 via-transparent to-transparent" />
                <div className="relative h-[320px] overflow-hidden rounded-[1.4rem]">
                  {client.image ? (
                    <img src={client.image} alt={client.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-400/30 via-primary-500/20 to-primary-700/40 text-4xl font-semibold text-white/60">
                      {client.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {client.stats.map((metric) => (
              <div key={metric.label} className={tileClass}>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">{metric.label}</p>
                <p className={`mt-4 text-3xl font-semibold ${headingClass}`}>{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`text-2xl font-semibold ${headingClass}`}>Services Delivered</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {client.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-primary-400/20 bg-primary-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <div className="mt-10 rounded-3xl border border-neutral-400/10 bg-neutral-900/30 p-6">
                <h3 className={`text-lg font-semibold ${headingClass}`}>Engagement Snapshot</h3>
                <p className={`mt-4 leading-relaxed ${bodyClass}`}>{client.engagement}</p>
              </div>
            </Motion.div>

            <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className={`text-2xl font-semibold ${headingClass}`}>Testimonial</h2>
              <div className="mt-6 rounded-[2rem] border border-neutral-400/10 bg-neutral-900/40 p-8">
                <p className="text-lg leading-relaxed text-white">“{client.testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-primary-300">
                  {client.testimonial.author} · {client.testimonial.role}
                </p>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {relatedClients.length > 0 && (
        <section className="border-t border-neutral-400/10 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">More Partnerships</p>
              <h2 className={`mt-4 text-3xl font-semibold ${headingClass}`}>Other Clients We Support</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedClients.map((item, index) => (
                <Motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass gradient-border rounded-3xl border border-neutral-400/10 p-6"
                >
                  <Link to={`/work/clients/${item.slug}`}>
                    <span className={badgeClass}>{item.category}</span>
                    <h3 className="mt-4 text-xl font-semibold text-white">{item.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-300 line-clamp-3">{item.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400">
                      View Details <span>→</span>
                    </div>
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

export default ClientDetail


