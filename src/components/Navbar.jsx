import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ onGetStarted }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScrollEvent = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScrollEvent)
    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Blog', path: '#blog' },
    { name: 'Contact', path: '#contact' },
  ]

  const handleLinkClick = (e, path) => {
    e.preventDefault()
    setMenuOpen(false)
    const targetId = path.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      const navbarHeight = scrolled ? 72 : 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div 
          onClick={(e) => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setMenuOpen(false)
          }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="text-lg font-semibold text-slate-900 group-hover:text-brand-500 transition-colors duration-200">
            DesignCo
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
              className="text-sm font-medium text-slate-600 hover:text-brand-500 transition nav-link cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={onGetStarted}
            className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 shadow-sm hover:shadow-brand-500/20"
          >
            Get Started
          </button>
        </div>

        <button
          className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-4 overflow-hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className="text-sm font-medium text-slate-700 hover:text-brand-500 transition cursor-pointer"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMenuOpen(false)
                onGetStarted()
              }}
              className="bg-brand-500 hover:bg-brand-600 active:scale-95 transition-all text-white px-5 py-2.5 rounded-lg text-sm font-medium w-full cursor-pointer"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar