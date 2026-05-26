import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Services', 'Portfolio', 'Blog', 'Contact']

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-bold text-lg">D</span>
          </div>
          <span className="font-display font-semibold text-lg text-slate-900">DesignCo</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors duration-200"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <motion.button
            className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(67,97,238,0.35)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        <button className="md:hidden p-2 text-slate-700" onClick={() => setMenuOpen(!menuOpen)}>
          <AnimatePresence mode="wait">
            <motion.span
              key={menuOpen ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-brand-500"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </motion.a>
            ))}
            <motion.button
              className="bg-brand-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg w-full"
              whileTap={{ scale: 0.97 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
