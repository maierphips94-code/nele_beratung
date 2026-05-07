import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über mich', href: '/ueber-mich' },
  { label: 'Blog', href: '/blog' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isOnBusinessPage = location.pathname === '/fuer-unternehmen'
  const isOnHomePage = location.pathname === '/'

  // Business page hides all nav on hero; home page shows nav but white
  const isOnBusinessDarkHero = isOnBusinessPage && !isScrolled
  const isOnHomeDarkHero = isOnHomePage && !isScrolled
  const isHeroMode = isOnBusinessDarkHero || isOnHomeDarkHero

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? isOnBusinessPage
              ? 'bg-white/95 backdrop-blur-md shadow-sm'
              : 'bg-background-light/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          {/* Brand */}
          <Link
            to="/"
            className="flex flex-col leading-tight"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'instant' })
              }
            }}
          >
            <span className={`font-display text-xl font-semibold tracking-wide transition-colors duration-300 ${
              isHeroMode ? 'text-white' : 'text-text-main-light'
            }`}>
              Nele Stein
            </span>
            <span className={`text-[10px] tracking-[0.12em] uppercase font-medium transition-colors duration-300 ${
              isHeroMode ? 'text-white/50' : 'text-text-muted-light'
            }`}>
              Systemische Beratung
            </span>
          </Link>

          {/* Desktop nav – hidden on any hero (home or business), shown once scrolled */}
          {!isHeroMode && (
            <nav className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? isOnBusinessPage ? 'text-[#1a1f1e] font-semibold' : 'text-primary'
                      : isOnBusinessPage ? 'text-[#4b5563] hover:text-[#1a1f1e]' : 'text-text-main-light hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-3">
            {!isHeroMode && (
              <Link
                to="/kontakt"
                className={`hidden md:block text-sm font-medium py-3 px-6 rounded-full transition-all ${
                  isOnBusinessPage
                    ? 'bg-[#1a1f1e] hover:bg-[#2c3030] text-white'
                    : 'bg-primary hover:bg-opacity-90 text-white'
                }`}
              >
                Gespräch anfragen
              </Link>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 transition-colors ${isHeroMode ? 'text-white' : 'text-text-main-light'}`}
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 pt-24 bg-background-light backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.05 }}
              >
                <Link
                  to={link.href}
                  className={`text-xl font-semibold tracking-wide ${
                    location.pathname === link.href ? 'text-primary' : 'text-text-main-light'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-4"
            >
              <Link
                to="/kontakt"
                className="bg-primary text-white font-medium py-3 px-8 rounded-full text-sm"
              >
                Gespräch anfragen
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
