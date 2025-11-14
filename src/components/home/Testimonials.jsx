import React from 'react'
import { motion as Motion } from 'framer-motion'
import { testimonials } from '../../data/content'

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-neutral-900/0 via-neutral-900/70 to-neutral-950" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-400">Client Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Trusted by businesses for measurable results
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass gradient-border flex h-full flex-col justify-between rounded-3xl border border-neutral-400/10 p-8 text-left"
            >
              <p className="text-sm leading-relaxed text-neutral-200">"{testimonial.quote}"</p>
              <footer className="mt-8">
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">{testimonial.role}</p>
              </footer>
            </Motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

