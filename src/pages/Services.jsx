import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import { processSteps } from '../data/content'
import { designServices, digitalMarketing, technologyServices } from '../data/siteCatalog'
import CTASection from '../components/home/CTASection'

const Services = () => {
  const serviceCategories = [
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that drive measurable results',
      services: digitalMarketing,
      categorySlug: 'digital-marketing',
      route: '/services/digital-marketing',
    },
    {
      title: 'Design Services',
      description: 'Modern, conversion-focused designs with accessibility and performance',
      services: designServices,
      categorySlug: 'design',
      route: '/services/design',
    },
    {
      title: 'Technology Services',
      description: 'Cutting-edge technology solutions for your business needs',
      services: technologyServices,
      categorySlug: 'technology',
      route: '/services/technology',
    },
  ]

  const addOns = [
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking setup, custom dashboards, and detailed performance reports to measure and optimize your marketing ROI.',
    },
    {
      title: 'Content Strategy',
      description: 'SEO-optimized content creation, keyword research, and content planning to support your organic growth goals.',
    },
    {
      title: 'Landing Page Optimization',
      description: 'A/B testing, conversion rate optimization, and UX improvements to maximize the effectiveness of your campaigns.',
    },
  ]

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-neutral-900/40 via-neutral-900/60 to-neutral-950" />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-white sm:text-6xl"
          >
            Comprehensive Digital Services for Sustainable Growth
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-300"
          >
            From design and development to digital marketing and technology solutions, we deliver data-driven strategies that drive measurable results. Every project is optimized for maximum ROI and continuous improvement.
          </Motion.p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.categorySlug} className={categoryIndex === 0 ? 'py-20' : 'pb-20'}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">{category.title}</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">{category.title}</h2>
              <p className="mt-4 text-sm text-neutral-300">{category.description}</p>
              <Link
                to={category.route}
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition hover:text-primary-300"
              >
                View All {category.title} <span>→</span>
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.services.slice(0, 6).map((service, index) => (
                <Motion.article
                  key={service.name || service.title || service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass gradient-border group flex h-full flex-col rounded-3xl border border-neutral-400/10 overflow-hidden transition hover:-translate-y-1 hover:border-primary-400/20"
                >
                  <Link
                    to={
                      category.categorySlug === 'digital-marketing'
                        ? `/services/digital-marketing/${service.slug || service.name.toLowerCase().replace(/\s+/g, '-')}`
                        : `${category.route}/${service.slug}`
                    }
                  >
                    <div className="p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white transition group-hover:text-primary-400">
                            {service.name || service.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-neutral-300 line-clamp-3">
                            {service.description || service.summary}
                          </p>
                        </div>
                        <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300 flex-shrink-0">
                          {category.categorySlug === 'digital-marketing' ? 'Marketing' : category.categorySlug}
                        </span>
                      </div>
                      {(service.deliverables || service.bullets) && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {(service.deliverables || service.bullets || []).slice(0, 3).map((item, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border border-neutral-400/10 bg-neutral-800/30 px-3 py-1 text-xs text-neutral-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition group-hover:text-primary-300">
                        Learn More <span>→</span>
                      </div>
                    </div>
                  </Link>
                </Motion.article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20">
        <div className="mx-auto max-w-6xl rounded-[3rem] border border-neutral-400/10 bg-neutral-800/30 p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">My Process</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">A Proven Four-Phase Approach</h2>
              <p className="mt-6 text-sm leading-relaxed text-neutral-300">
                Every project follows a structured methodology that ensures strategic planning, proper execution,
                continuous optimization, and measurable results.
              </p>
            </div>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <Motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl border border-neutral-400/10 bg-neutral-800/30 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-400/40 bg-primary-400/10 text-xs font-semibold text-primary-300">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{step.description}</p>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[3rem] border border-neutral-500/20 bg-neutral-900/70 p-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-300">Additional Services</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">Complementary services to maximize results</h2>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-primary-500/40 transition hover:scale-[1.02]"
              >
                Discuss Your Needs
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {addOns.map((item, index) => (
                <Motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-neutral-400/10 bg-neutral-800/30 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">{item.description}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}

export default Services

