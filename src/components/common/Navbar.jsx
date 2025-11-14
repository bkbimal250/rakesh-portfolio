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
            className="glass group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 transition-all duration-300 hover:border-sky-400/60 hover:bg-sky-400/10"
          >
            <span className="sr-only">Toggle theme</span>
            <div className="relative h-5 w-5">
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <Motion.svg
                    key="moon"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute inset-0 h-5 w-5 text-sky-300 transition-colors group-hover:text-sky-200"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </Motion.svg>
                ) : (
                  <Motion.svg
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute inset-0 h-5 w-5 text-amber-400 transition-colors group-hover:text-amber-300"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </Motion.svg>
                )}
              </AnimatePresence>
            </div>
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
              <div className="mt-2 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <span className="text-sm font-medium text-slate-300">Theme</span>
                <button
                  type="button"
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                  className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 transition-all duration-300 hover:border-sky-400/60 hover:bg-sky-400/10"
                >
                  <div className="relative h-4 w-4">
                    <AnimatePresence mode="wait">
                      {theme === 'dark' ? (
                        <Motion.svg
                          key="moon-mobile"
                          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                          animate={{ opacity: 1, rotate: 0, scale: 1 }}
                          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="absolute inset-0 h-4 w-4 text-sky-300 transition-colors group-hover:text-sky-200"
                        >
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </Motion.svg>
                      ) : (
                        <Motion.svg
                          key="sun-mobile"
                          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                          animate={{ opacity: 1, rotate: 0, scale: 1 }}
                          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="absolute inset-0 h-4 w-4 text-amber-400 transition-colors group-hover:text-amber-300"
                        >
                          <circle cx="12" cy="12" r="5" />
                          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                        </Motion.svg>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </div>
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

