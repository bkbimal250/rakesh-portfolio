import React from 'react'
import { Link } from 'react-router-dom'
import { contactChannels, navLinks } from '../../data/content'

const Footer = () => {
  return (
    <footer className="border-t border-neutral-400/10 bg-neutral-900/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="text-2xl font-semibold uppercase tracking-[0.4em] text-white">
            Rakesh
          </Link>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400">
            We partner with market-making brands to architect experiential marketing, product storytelling, and
            revenue systems built for compounding growth.
          </p>
          <form
            className="mt-6 flex w-full flex-col gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="h-11 flex-1 rounded-full border border-neutral-400/10 bg-neutral-950/70 px-4 text-sm text-neutral-200 outline-none transition focus:border-primary-400"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-neutral-900 shadow-lg shadow-primary-500/30 transition hover:scale-[1.02] hover:shadow-accent-500/30"
            >
              Join
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">Navigation</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-300">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link className="transition hover:text-primary-300" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">Connect</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-300">
            {contactChannels.map((channel) => (
              <li key={channel.label} className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">{channel.label}</span>
                <span className="text-neutral-300">{channel.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-400/10 py-4">
        <p className="text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Rakesh. Crafted with intention in Turbhe Navi Mumbai &amp; India.
        </p>
      </div>
    </footer>
  )
}

export default Footer

