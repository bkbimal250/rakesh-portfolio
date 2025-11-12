import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const Breadcrumb = ({ items = [] }) => {
  if (!items.length) {
    return null
  }

  return (
    <nav aria-label="breadcrumb" className="text-xs uppercase tracking-[0.3em] text-slate-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link className="transition hover:text-white" to={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className={cn(isLast ? 'text-slate-200' : 'text-slate-400')}>{item.label}</span>
              )}
              {!isLast && <span className="text-slate-500">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb

