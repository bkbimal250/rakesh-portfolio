import React from 'react'
import { contactChannels } from '../../data/content'

const Header = () => {
  const [studio, email, phone] = contactChannels

  return (
    <header className="hidden md:block border-b border-white/10 bg-slate-900/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-xs text-slate-200">
        <p className="tracking-wide text-slate-400">
          Booking launch partnerships for{' '}
          <span className="font-semibold text-cyan-300">Q1 2026</span>
          &nbsp;&middot;&nbsp; Limited pods remaining
        </p>
        <div className="flex items-center gap-6">
          <span className="text-slate-400">{studio.value}</span>
          <a className="text-sky-300 transition hover:text-sky-100" href={`mailto:${email.value}`}>
            {email.value}
          </a>
          <a className="text-sky-300 transition hover:text-sky-100" href={`tel:${phone.value}`}>
            {phone.value}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

