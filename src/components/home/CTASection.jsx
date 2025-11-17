import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'

const CTASection = () => {
  const highlights = ['Strategy First', 'Execution Support', 'Transparent Reporting']

  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-gradient-to-r from-sky-500/20 via-cyan-400/10 to-emerald-400/20 blur-3xl" />
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-[3.5rem] border border-white/10 bg-neutral-950/80 p-[2px] shadow-[0_0_50px_rgba(56,189,248,0.1)]"
      >
        <div className="rounded-[calc(3.5rem-4px)] bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950 px-8 py-16 sm:px-14">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.6em] text-cyan-300">Let&apos;s collaborate</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Ready to grow your digital presence?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-200">
              Let&apos;s discuss how I can help you achieve your marketing goals with data-driven strategies, rapid
              experimentation, and execution pods that deliver measurable results.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-8 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-cyan-500/40 transition hover:scale-[1.02]"
              >
                Get In Touch
              </Link>
              <Link
                to="/work/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  )
}

export default CTASection

