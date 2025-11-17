import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import CTASection from '../components/home/CTASection'
import useTheme from '../hooks/useTheme'

const Consulting = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const heroGradient = isLight
    ? 'from-[#FFF1E0]/85 via-[#FFF8F0] to-white'
    : 'from-neutral-900/30 via-neutral-900/60 to-neutral-950'
  const headingClass = isLight ? 'text-[#1A1A1A]' : 'text-white'
  const textClass = isLight ? 'text-[#4A4A4A]' : 'text-neutral-300'

  const consultingServices = [
    {
      title: 'Workshops',
      subtitle: 'Hands-on training sessions for your team',
      description:
        'Interactive workshops tailored to your team\'s needs. From GTM playbooks to SEO/SEM masterclasses, analytics instrumentation, and experimentation frameworks—we deliver practical, actionable insights.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
      features: [
        'GTM Strategy Playbooks',
        'SEO/SEM Masterclasses',
        'Analytics Instrumentation',
        'Experimentation Frameworks',
        'Customized Content',
        'Interactive Sessions',
      ],
      benefits: [
        'Practical, hands-on learning',
        'Team-specific customization',
        'Immediate implementation',
        'Expert guidance and support',
      ],
    },
    {
      title: 'Fractional CXO',
      subtitle: 'Senior leadership on-demand',
      description:
        'Access senior-level expertise without the full-time overhead. We provide strategic leadership for growth, product marketing, and digital transformation initiatives—when you need it, how you need it.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      features: [
        'Growth Strategy',
        'Product Marketing Leadership',
        'Digital Transformation',
        'Strategic Planning',
        'Team Mentoring',
        'Flexible Engagement',
      ],
      benefits: [
        'Senior expertise without full-time cost',
        'Flexible engagement models',
        'Strategic guidance and execution',
        'Scalable leadership support',
      ],
    },
  ]

  const workshopTopics = [
    'GTM Strategy & Execution',
    'SEO & SEM Optimization',
    'Analytics & Data Insights',
    'Conversion Rate Optimization',
    'Content Marketing Strategy',
    'Social Media Mastery',
  ]

  const cxoRoles = [
    'Chief Growth Officer',
    'Chief Marketing Officer',
    'Chief Digital Officer',
    'VP of Product Marketing',
  ]

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
            Consulting Services
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed ${textClass}`}
          >
            Workshops and Fractional CXO services designed to accelerate your growth. Get expert guidance, strategic leadership, and hands-on training tailored to your team's needs.
          </Motion.p>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {consultingServices.map((service, index) => (
              <Motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass gradient-border rounded-3xl border border-neutral-400/10 overflow-hidden"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-semibold text-white">{service.title}</h2>
                    <p className="mt-2 text-sm font-medium text-primary-300">{service.subtitle}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm leading-relaxed text-neutral-300">{service.description}</p>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                          <span className="text-sm text-neutral-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Benefits</h3>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                          <span className="text-sm text-neutral-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Topics */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass gradient-border rounded-3xl border border-neutral-400/10 p-10"
          >
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">Workshop Topics</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Popular Workshop Topics</h2>
              <p className="mt-4 text-sm text-neutral-300">
                We offer workshops on a wide range of topics. All workshops can be customized to your team's specific needs.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {workshopTopics.map((topic, index) => (
                <Motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-xl border border-neutral-400/10 bg-neutral-800/30 p-4 text-center"
                >
                  <p className="text-sm font-medium text-neutral-300">{topic}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Fractional CXO Roles */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass gradient-border rounded-3xl border border-neutral-400/10 p-10"
          >
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">Fractional Leadership</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Available CXO Roles</h2>
              <p className="mt-4 text-sm text-neutral-300">
                We provide fractional leadership across key executive roles to support your growth and transformation initiatives.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {cxoRoles.map((role, index) => (
                <Motion.div
                  key={role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-xl border border-neutral-400/10 bg-neutral-800/30 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{role}</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Strategic leadership and execution support for {role.toLowerCase()} responsibilities.
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-neutral-400/10 bg-neutral-800/30 p-10 text-center"
          >
            <h2 className="text-3xl font-semibold text-white">Ready to Get Started?</h2>
            <p className="mt-4 text-neutral-300">
              Let's discuss how our consulting services can help accelerate your growth and transformation.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-neutral-900 transition hover:scale-105"
            >
              Schedule a Consultation <span>→</span>
            </Link>
          </Motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Consulting


