import React from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-sky-400/40 bg-gradient-to-r from-sky-500/40 via-cyan-500/30 to-emerald-500/40 p-[1px]">
        <div className="relative z-10 rounded-[calc(3rem-2px)] bg-slate-950 px-8 py-16 text-center sm:px-14">
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Ready to grow your digital presence?
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base leading-relaxed text-slate-200"
          >
            Let&apos;s discuss how I can help you achieve your marketing goals with data-driven strategies that deliver
            measurable results.
          </Motion.p>
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/40 transition hover:scale-[1.02]"
            >
              Get In Touch
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              View Portfolio
            </Link>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection

