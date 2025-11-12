import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { navLinks } from '../../data/content'
import useTheme from '../../hooks/useTheme'
import useUI from '../../hooks/useUI'
import { cn } from '../../utils/cn'

const Navbar = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { isMenuOpen, setIsMenuOpen } = useUI()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, setIsMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="relative text-lg font-semibold uppercase tracking-[0.4em] text-slate-100 hover:text-white"
          onClick={handleLinkClick}
        >
          Rakesh
          <span className="absolute -top-1 -right-3 h-1 w-1 rounded-full bg-sky-400" />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                cn(
                  'relative text-sm font-medium tracking-wide text-slate-300 transition hover:text-white',
                  isActive && 'text-white'
                )
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <Motion.span layoutId="nav-active" className="absolute -bottom-3 left-0 h-0.5 w-full bg-sky-400" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="glass flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-white/40"
          >
            <span className="sr-only">Toggle theme</span>
            <span className="text-slate-200">{theme === 'light' ? '☀️' : '🌙'}</span>
          </button>
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:scale-[1.02] hover:shadow-emerald-500/30 lg:flex"
          >
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 hover:border-white/40 lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <Motion.span
              animate={isMenuOpen ? { rotate: 45, y: 1 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-6 bg-white"
            />
            <Motion.span
              animate={isMenuOpen ? { rotate: -45, y: -1 } : { rotate: 0, y: 0 }}
              className="absolute block h-[2px] w-6 bg-white"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 bg-slate-900/90 px-6 pb-6 pt-4 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={cn(
                    'text-base font-medium text-slate-200',
                    location.pathname === item.path && 'text-sky-300'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="mt-4 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 px-6 py-3 text-center text-sm font-semibold text-slate-900"
              >
                Start a Project
              </Link>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

