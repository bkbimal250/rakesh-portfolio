import React, { useState } from 'react'

const Tabs = ({ items = [], defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  if (!items.length) {
    return null
  }

  const activeItem = items[activeTab]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => {
          const isActive = index === activeTab
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                isActive
                  ? 'border-sky-400/60 bg-sky-400/15 text-sky-200'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/30'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate-200">
        {typeof activeItem.content === 'function' ? activeItem.content() : activeItem.content}
      </div>
    </div>
  )
}

export default Tabs

