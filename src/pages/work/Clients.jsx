import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { clientLogos } from '../../data/clients'
import CTASection from '../../components/home/CTASection'
import useTheme from '../../hooks/useTheme'

const Clients = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const heroGradient = isLight
    ? 'from-[#FFF1E0]/85 via-[#FFF8F0] to-white'
    : 'from-neutral-900/30 via-neutral-900/60 to-neutral-950'
  const headingClass = isLight ? 'text-[#1A1A1A]' : 'text-white'
  const textClass = isLight ? 'text-[#4A4A4A]' : 'text-neutral-300'

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${heroGradient}`} />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-semibold sm:text-6xl ${headingClass}`}
          >
            Our Clients
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed ${textClass}`}
          >
            Global clientele across industries. We've had the privilege of working with innovative companies and organizations worldwide.
          </Motion.p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">Trusted Partners</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Global Clientele Across Industries</h2>
          </div>
          
          {/* Client Cards with Descriptions */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clientLogos.map((client, index) => (
              <Motion.article
                key={client.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass gradient-border group rounded-3xl border border-neutral-400/10 overflow-hidden transition hover:-translate-y-1 hover:border-primary-400/20"
              >
                <Link to={`/work/clients/${client.slug}`} className="block p-8">
                  {/* Client Logo/Name Section */}
                  <div
                    className={`flex h-20 items-center justify-center rounded-xl border border-neutral-400/10 bg-neutral-800/30 mb-6 transition-all ${
                      client.website
                        ? 'cursor-pointer hover:border-primary-400/40 hover:bg-neutral-800/50'
                        : ''
                    }`}
                    onClick={client.website ? () => window.open(client.website, '_blank') : undefined}
                  >
                    {client.image ? (
                      <img
                        src={client.image}
                        alt={client.name}
                        className="max-h-16 max-w-full object-contain px-4"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-lg font-semibold text-center px-4 text-white">{client.name}</span>
                    )}
                  </div>

                  {/* Client Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{client.name}</h3>
                    {client.industry && (
                      <div className="mt-3 flex items-center gap-2">
                        <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
                          {client.category}
                        </span>
                        <span className="text-xs text-neutral-400">{client.industry}</span>
                      </div>
                    )}
                    {client.description && (
                      <p className="mt-4 text-sm leading-relaxed text-neutral-300 line-clamp-3">
                        {client.description}
                      </p>
                    )}
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400">
                      View Engagement <span>→</span>
                    </div>
                  </div>
                </Link>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Clients


