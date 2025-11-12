import React, { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'

const Accordion = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!items.length) {
    return null
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isActive = index === activeIndex
        return (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <span className="text-sm font-semibold text-white">{item.title}</span>
              <span className="text-sky-300">{isActive ? '−' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {isActive && (
                <Motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden px-6 pb-6"
                >
                  <p className="text-sm leading-relaxed text-slate-300">{item.content}</p>
                </Motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion

