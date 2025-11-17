import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import CTASection from '../components/home/CTASection'
import useTheme from '../hooks/useTheme'

const Work = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const heroGradient = isLight
    ? 'from-[#FFF1E0]/85 via-[#FFF8F0] to-white'
    : 'from-neutral-900/30 via-neutral-900/60 to-neutral-950'
  const headingClass = isLight ? 'text-[#1A1A1A]' : 'text-white'
  const textClass = isLight ? 'text-[#4A4A4A]' : 'text-neutral-300'

  const highlights = [
    {
      title: 'Cloud Logic AI – Corporate Site',
      note: 'Modern, capability-led presence',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      link: '/work/portfolio',
    },
    {
      title: 'Shopify Accelerator',
      note: 'E-commerce growth setup',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
      link: '/work/portfolio',
    },
    {
      title: 'Tata Elxsi Product Microsites',
      note: 'Experience-first product launches',
      image: 'https://images.unsplash.com/photo-1498050108023-7c3f8b0a3a2f?q=80&w=1200&auto=format&fit=crop',
      link: '/work/portfolio',
    },
  ]
  const stats = [
    { value: '25+', label: 'Projects Completed', icon: '✓' },
    { value: '100%', label: 'Successful Execution', icon: '★' },
    { value: '3.5 Years', label: 'Avg Client Retention', icon: '❤' },
    { value: '25+', label: 'Happy Clients', icon: '😊' },
  ]
  const workSections = [
    {
      title: 'Portfolio',
      description: 'Selected projects and outcomes',
      link: '/work/portfolio',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Case Studies',
      description: 'Detailed narratives of transformation',
      link: '/work/case-studies',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Clients',
      description: 'Global clientele across industries',
      link: '/work/clients',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
    },
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
            Selected Projects, Clients, and Case Studies
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed ${textClass}`}
          >
            Explore our portfolio of successful projects, detailed case studies, and the diverse range of clients we've had the privilege to work with.
          </Motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass gradient-border rounded-3xl border border-neutral-400/10 p-8 text-center"
              >
                <div className="text-4xl font-bold text-primary-400">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-neutral-300">{stat.label}</div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Sections */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">Explore Our Work</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Portfolio, Case Studies & Clients</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {workSections.map((section, index) => (
              <Motion.article
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass gradient-border group rounded-3xl border border-neutral-400/10 overflow-hidden transition hover:-translate-y-1 hover:border-primary-400/20"
              >
                <Link to={section.link}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-white transition group-hover:text-primary-400">
                      {section.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-300">{section.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400 transition group-hover:text-primary-300">
                      Explore <span>→</span>
                    </div>
                  </div>
                </Link>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">Featured Projects</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Recent Work Highlights</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((highlight, index) => (
              <Motion.article
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass gradient-border group rounded-3xl border border-neutral-400/10 overflow-hidden transition hover:-translate-y-1 hover:border-primary-400/20"
              >
                <Link to={highlight.link}>
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white transition group-hover:text-primary-400">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-300">{highlight.note}</p>
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

export default Work


