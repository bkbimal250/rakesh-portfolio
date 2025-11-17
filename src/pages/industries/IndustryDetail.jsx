import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { industries } from '../../data/industriesData'
import CTASection from '../../components/home/CTASection'

const IndustryDetail = () => {
  const { slug } = useParams()
  const industry = industries.find((i) => i.slug === slug)

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!industry) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white">Industry Not Found</h1>
          <p className="mt-4 text-neutral-400">The industry you're looking for doesn't exist.</p>
          <Link
            to="/industries"
            className="mt-6 inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition"
          >
            ← Back to Industries
          </Link>
        </div>
      </div>
    )
  }

  // Find related industries (same category, excluding current)
  // If no same category, show other industries
  const relatedIndustries = industries
    .filter((i) => i.id !== industry.id)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === industry.category && b.category !== industry.category) return -1
      if (a.category !== industry.category && b.category === industry.category) return 1
      return 0
    })
    .slice(0, 3)

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900/30 via-neutral-900/60 to-neutral-950" />
        <div className="mx-auto max-w-4xl px-6">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400 transition hover:text-primary-400"
            >
              ← Back to Industries
            </Link>
            <div className="mt-8 flex items-center gap-3">
              <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
                {industry.category}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">Industry</p>
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">{industry.title}</h1>
            <p className="mt-4 text-xl text-primary-300">{industry.subtitle}</p>
            <p className="mt-6 text-base leading-relaxed text-neutral-300">{industry.description}</p>
          </Motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {industry.image && (
        <section className="relative -mt-10 mb-16">
          <div className="mx-auto max-w-5xl px-6">
            <Motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl border border-neutral-400/10"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="h-[500px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
            </Motion.div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Features */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white">Key Features</h2>
              <div className="mt-6 space-y-4">
                {industry.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-400" />
                    <span className="text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>
            </Motion.div>

            {/* Benefits */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-white">Benefits</h2>
              <div className="mt-6 space-y-4">
                {industry.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-400" />
                    <span className="text-neutral-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </Motion.div>
          </div>

          {/* Services */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold text-white">Our Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industry.services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-neutral-400/10 bg-neutral-800/30 p-4 text-center"
                >
                  <p className="text-sm font-medium text-neutral-300">{service}</p>
                </div>
              ))}
            </div>
          </Motion.div>

          {/* Use Cases */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold text-white">Use Cases</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industry.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-neutral-400/10 bg-neutral-800/30 p-4 text-center"
                >
                  <p className="text-sm font-medium text-neutral-300">{useCase}</p>
                </div>
              ))}
            </div>
          </Motion.div>

          {/* CTA Section */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 rounded-3xl border border-neutral-400/10 bg-neutral-800/30 p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-white">Ready to Get Started?</h3>
            <p className="mt-4 text-neutral-300">
              Let's discuss how we can help transform your {industry.title.toLowerCase()} business with tailored digital solutions.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:scale-105"
            >
              Contact Us <span>→</span>
            </Link>
          </Motion.div>
        </div>
      </section>

      {/* Related Industries */}
      {relatedIndustries.length > 0 && (
        <section className="border-t border-neutral-400/10 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">Related Industries</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Explore More Industries</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedIndustries.map((related, index) => (
                <Motion.article
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass gradient-border rounded-3xl border border-neutral-400/10 overflow-hidden transition hover:-translate-y-1 hover:border-primary-400/20"
                >
                  <Link to={`/industries/${related.slug}`}>
                    {related.image && (
                      <div className="relative h-40 w-full overflow-hidden">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
                          {related.category}
                        </span>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-white">{related.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{related.subtitle}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition hover:text-primary-300">
                        Learn More <span>→</span>
                      </div>
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

export default IndustryDetail

