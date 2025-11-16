export const designServices = [
  {
    slug: 'website-design',
    title: 'Website Design',
    summary: 'Modern, conversion-focused designs with accessibility and performance baked in.',
    bullets: ['Wireframes to hi-fi', 'Design systems', 'Component libraries', 'A11y and performance'],
  },
  {
    slug: 'website-speed-optimization',
    title: 'Website Speed Optimization',
    summary: 'Core Web Vitals improvements to reduce bounce and lift SEO.',
    bullets: ['Image strategy', 'Code splitting', 'Caching & CDN', 'CWV audits'],
  },
  {
    slug: 'conversion-rate-optimization',
    title: 'Conversion Rate Optimization',
    summary: 'A/B testing, UX heuristics, and analytics to improve conversions.',
    bullets: ['Experiment roadmap', 'Landing templates', 'Form optimization', 'Session insights'],
  },
  { slug: 'responsive-design', title: 'Responsive Design', summary: 'Device-agnostic layouts and inputs.', bullets: [] },
  { slug: 'wordpress-to-html', title: 'WordPress to HTML Migration', summary: 'Static-first performance wins.', bullets: [] },
  { slug: 'ui-ux-design', title: 'UI/UX Design', summary: 'User-centered product design.', bullets: [] },
  { slug: 'website-maintenance', title: 'Website Maintenance', summary: 'Updates, security, and fixes.', bullets: [] },
]

export const digitalMarketing = [
  { slug: 'seo', title: 'SEO', summary: 'Technical, on-page, and content SEO for sustainable growth.', bullets: [] },
  { slug: 'social-media', title: 'Social Media', summary: 'Channel-native creative and scheduling.', bullets: [] },
  { slug: 'content-marketing', title: 'Content Marketing', summary: 'Editorial strategy and long-form assets.', bullets: [] },
  { slug: 'email-marketing', title: 'Email Marketing', summary: 'Lifecycle and campaign email flows.', bullets: [] },
  { slug: 'personal-branding', title: 'Personal Branding', summary: 'Executive presence across platforms.', bullets: [] },
  { slug: 'growth-hacking', title: 'Growth Hacking', summary: 'Rapid testing and loops.', bullets: [] },
  { slug: 'cpl-campaigns', title: 'CPL Campaigns', summary: 'Lead gen with clear economics.', bullets: [] },
  { slug: 'social-listening', title: 'Social Listening', summary: 'Insights from audience and competitors.', bullets: [] },
  { slug: 'ppc-campaigns', title: 'PPC Campaigns', summary: 'Search and social performance at scale.', bullets: [] },
  { slug: 'influencer-marketing', title: 'Influencer Marketing', summary: 'Creators for credibility and reach.', bullets: [] },
]

export const technologyServices = [
  { slug: 'data-and-ai', title: 'Data & AI', summary: 'Analytics and AI-assisted workflows.', bullets: [] },
  { slug: 'ecommerce', title: 'E‑Commerce', summary: 'Storefronts and subscription engines.', bullets: [] },
  { slug: 'catalog', title: 'Catalog', summary: 'Manage product catalogs at scale.', bullets: [] },
  { slug: 'mobile-apps', title: 'Mobile Application Development', summary: 'Cross-platform apps.', bullets: [] },
  { slug: 'cms', title: 'CMS', summary: 'Headless and traditional CMS builds.', bullets: [] },
  { slug: 'iot', title: 'IoT', summary: 'Connected device experiences.', bullets: [] },
  { slug: 'vr', title: 'Virtual Reality', summary: 'Immersive training and demos.', bullets: [] },
  { slug: 'erp', title: 'ERP', summary: 'Business process systems.', bullets: [] },
  { slug: 'contract-staffing', title: 'Contract Staffing', summary: 'Augment your teams.', bullets: [] },
  { slug: 'ondc-development', title: 'ONDC Development Services', summary: 'Open commerce integrations.', bullets: [] },
  { slug: 'shopify-development', title: 'Shopify Development', summary: 'Custom Shopify builds.', bullets: [] },
  { slug: 'wordpress-development', title: 'WordPress Development', summary: 'Themes, plugins, performance.', bullets: [] },
]

export const industriesCatalog = [
  { slug: 'education', title: 'Education', summary: 'Student-first experiences.' },
  { slug: 'information-technology', title: 'Information Technology', summary: 'Product and service storytelling.' },
  { slug: 'hospitality', title: 'Hospitality', summary: 'Booking-friendly experiences.' },
  { slug: 'healthcare', title: 'Healthcare', summary: 'Compliant, accessible journeys.' },
  { slug: 'pharma', title: 'Pharma', summary: 'HCP and patient platforms.' },
]

export const solutionsCatalog = [
  { slug: 'fitmate', title: 'Fitmate', summary: 'Wellness engagement platform.' },
  { slug: 'cam360-studio', title: 'Cam360 Studio', summary: 'Interactive media studio.' },
  { slug: 'assessmo', title: 'Assessmo', summary: 'Assessment + resource repository.' },
  { slug: 'webino', title: 'Webino', summary: 'Lightweight CMS and starter.' },
  { slug: 'vr-magic', title: 'VR Magic', summary: 'Experiential VR demos.' },
  { slug: 'bizon', title: 'BizOn', summary: 'Lead-gen microsites.' },
]

export function findCatalogItem(kind, slug) {
  const pools = {
    'services-design': designServices,
    'services-digital-marketing': digitalMarketing,
    'services-technology': technologyServices,
    solutions: solutionsCatalog,
    industries: industriesCatalog,
  }
  const list = pools[kind] || []
  return list.find((x) => x.slug === slug)
}


