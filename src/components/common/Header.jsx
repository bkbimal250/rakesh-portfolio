import React from 'react'
import { contactChannels } from '../../data/content'

const Header = () => {
  const [studio, email, phone] = contactChannels

  return (
    <header className="hidden md:block border-b border-neutral-400/10 bg-neutral-900/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-xs text-neutral-200">
        <p className="tracking-wide text-neutral-400">
          Available for new projects{' '}
          <span className="font-semibold text-primary-400">2025</span>
          &nbsp;&middot;&nbsp; Let&apos;s grow your digital presence
        </p>
        <div className="flex items-center gap-6">
          <span className="text-neutral-400">{studio.value}</span>
          <a className="text-primary-400 transition hover:text-primary-300" href={`mailto:${email.value}`}>
            {email.value}
          </a>
          <a className="text-primary-400 transition hover:text-primary-300" href={`tel:${phone.value}`}>
            {phone.value}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

