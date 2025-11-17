import React from 'react'
import { Link, useParams } from 'react-router-dom'
import SectionTitle from '../components/common/SectionTitle'
import CTASection from '../components/home/CTASection'
import { findCatalogItem, designServices, digitalMarketing, technologyServices, industriesCatalog } from '../data/siteCatalog'
import useTheme from '../hooks/useTheme'

const getCollectionByKind = (kind) => {
  switch (kind) {
    case 'services-design':
      return designServices
    case 'services-digital-marketing':
      return digitalMarketing
    case 'services-technology':
      return technologyServices
    case 'industries':
      return industriesCatalog
    default:
      return []
  }
}

const DetailPage = ({ kind, heading }) => {
  const { slug } = useParams()
  const item = findCatalogItem(kind, slug)
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const heroGradient = isLight
    ? 'from-[#FFF1E0]/85 via-[#FFF8F0] to-white'
    : 'from-neutral-900/30 via-neutral-900/60 to-neutral-950'
  const headingClass = isLight ? 'text-[#1A1A1A]' : 'text-white'
  const subHeadingClass = isLight ? 'text-[#CC5800]' : 'text-primary-200'
  const bodyTextClass = isLight ? 'text-[#4A4A4A]' : 'text-neutral-300'

  if (!item) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionTitle title="Not found" subtitle="This item is not available." />
      </section>
    )
  }

  const slugQuery = slug.replace(/-/g, '+')
  const heroImage =
    item.image ||
    `https://source.unsplash.com/1600x900/?${slugQuery},${kind === 'industries' ? 'industry' : 'digital'}`
  const galleryImages =
    item.gallery && item.gallery.length > 0
      ? item.gallery
      : [
          `https://source.unsplash.com/800x600/?${slugQuery},workflow`,
          `https://source.unsplash.com/800x600/?${slugQuery},team`,
          `https://source.unsplash.com/800x600/?${slugQuery},dashboard`,
        ]

  const description =
    item.description ||
    `We craft ${item.title} engagements that blend strategy, execution, and measurement to help you move faster with confidence.`

  const features = item.features || item.bullets || []
  const benefits = item.benefits || []
  const deliverables = item.deliverables || []
  const useCases = item.useCases || []
  const stats = item.metrics || []
  const relatedItems = getCollectionByKind(kind).filter((entry) => entry.slug !== slug).slice(0, 3)

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-12 sm:pt-20">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${heroGradient}`} />
        <div className="absolute inset-0 -z-[1] bg-[radial-gradient(circle_at_top,_rgba(255,111,0,0.12),_transparent_55%)] opacity-70" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr,1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">{heading}</p>
              <h1 className={`mt-4 text-4xl font-semibold sm:text-5xl ${headingClass}`}>{item.title}</h1>
              <p className={`mt-4 text-lg ${subHeadingClass}`}>{item.summary}</p>
              <p className={`mt-4 text-base leading-relaxed ${bodyTextClass}`}>{description}</p>
              {stats.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-neutral-400/10 bg-neutral-900/20 px-5 py-4 shadow-lg shadow-black/10"
                    >
                      <p className={`text-2xl font-semibold ${headingClass}`}>{stat.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-primary-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-neutral-400/20 shadow-2xl shadow-primary-500/20">
              <img src={heroImage} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Cards */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-neutral-400/10 bg-neutral-900/40 p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">Engagement</div>
              <p className="mt-3 text-sm text-neutral-200">
                Tell us your goals and timelines. We’ll propose the operating model, pod structure, and success metrics.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-neutral-900"
              >
                Start a Project
              </Link>
            </div>
            <div className="rounded-3xl border border-neutral-400/10 bg-neutral-900/40 p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">Includes</div>
              <ul className="mt-3 space-y-3 text-sm text-neutral-200">
                <li>Discovery & opportunity mapping</li>
                <li>Execution pod with weekly rituals</li>
                <li>Scorecard & reporting stack</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Deliverables */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-neutral-400/10 bg-neutral-900/40 p-8">
              <h2 className="text-2xl font-semibold text-white">Key Capabilities</h2>
              <div className="mt-6 space-y-4">
                {(features.length ? features : ['Roadmap & strategy', 'Execution pods', 'QA & optimization']).map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400" />
                    <span className="text-sm text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-neutral-400/10 bg-neutral-900/40 p-8">
              <h2 className="text-2xl font-semibold text-white">What You Get</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {(deliverables.length ? deliverables : ['Playbooks', 'Dashboards', 'Weekly sprints']).map((deliverable) => (
                  <span
                    key={deliverable}
                    className="rounded-full border border-neutral-400/10 bg-neutral-800/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300"
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Use cases */}
      {(benefits.length > 0 || useCases.length > 0) && (
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              {benefits.length > 0 && (
                <div className="rounded-3xl border border-neutral-400/10 bg-neutral-900/40 p-8">
                  <h2 className="text-2xl font-semibold text-white">Benefits</h2>
                  <div className="mt-6 space-y-3">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="rounded-2xl border border-neutral-400/10 bg-neutral-800/40 p-4">
                        <p className="text-sm text-neutral-200">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {useCases.length > 0 && (
                <div className="rounded-3xl border border-neutral-400/10 bg-neutral-900/40 p-8">
                  <h2 className="text-2xl font-semibold text-white">Use Cases</h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {useCases.map((useCase) => (
                      <div key={useCase} className="rounded-2xl border border-neutral-400/10 bg-neutral-800/40 p-4 text-sm text-neutral-200">
                        {useCase}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-white">Inspiration & Artifacts</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {galleryImages.map((image, index) => {
              const separator = image.includes('?') ? '&' : '?'
              const versioned = `${image}${separator}sig=${index}`
              return (
              <div key={image} className="relative h-56 overflow-hidden rounded-2xl border border-neutral-400/10">
                <img src={versioned} alt={`${item.title} gallery ${index + 1}`} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedItems.length > 0 && (
        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Related {heading}</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Explore more {heading.toLowerCase()}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedItems.map((related) => {
                const relatedImage =
                  related.image || `https://source.unsplash.com/600x500/?${related.slug.replace(/-/g, '+')},digital`
                return (
                  <Link
                    key={related.slug}
                    to={
                      kind === 'industries'
                        ? `/industries/${related.slug}`
                        : kind === 'services-design'
                          ? `/services/design/${related.slug}`
                          : kind === 'services-digital-marketing'
                            ? `/services/digital-marketing/${related.slug}`
                            : `/services/technology/${related.slug}`
                    }
                    className="group overflow-hidden rounded-3xl border border-neutral-400/10 bg-neutral-900/40 transition hover:-translate-y-1 hover:border-primary-400/20"
                  >
                    <div className="h-40 overflow-hidden">
                      <img src={relatedImage} alt={related.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white transition group-hover:text-primary-300">{related.title}</h3>
                      <p className="mt-2 text-sm text-neutral-300 line-clamp-2">{related.summary}</p>
                      <div className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-400">Learn More →</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  )
}

export default DetailPage


