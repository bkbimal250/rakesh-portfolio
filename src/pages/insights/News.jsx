import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'

const News = () => {
  const items = [
    { title: 'OWASP Web Security Audit Completed', date: 'Aug 2025' },
    { title: 'New Partnership Announced', date: 'Jul 2025' },
  ]
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="News" subtitle="Updates from Rahadigital" />
      <div className="mt-8 space-y-4">
        {items.map((n) => (
          <div key={n.title} className="flex items-center justify-between rounded-lg border border-neutral-700/30 bg-neutral-900/40 p-4">
            <span className="text-sm text-neutral-200">{n.title}</span>
            <span className="text-xs text-neutral-400">{n.date}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default News


