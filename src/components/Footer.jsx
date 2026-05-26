import React from 'react'
import { ArrowRight, Twitter, Linkedin, Github, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  Company: [
    { label: 'About Us', targetId: 'about' },
    { label: 'Careers', url: 'https://linkedin.com' },
    { label: 'Press', url: 'https://google.com' },
    { label: 'Blog', targetId: 'blog' },
    { label: 'Contact', targetId: 'contact' },
  ],
  Services: [
    { label: 'UI Design', targetId: 'services' },
    { label: 'UX Research', targetId: 'services' },
    { label: 'Development', targetId: 'services' },
    { label: 'Branding', targetId: 'services' },
    { label: 'Strategy', targetId: 'services' },
  ],
  Resources: [
    { label: 'Case Studies', targetId: 'portfolio' },
    { label: 'Templates', url: 'https://github.com' },
    { label: 'Webinars', url: 'https://youtube.com' },
    { label: 'Newsletter', targetId: 'contact' },
    { label: 'FAQ', targetId: 'contact' },
  ],
}

const Footer = ({ onGetStarted }) => {
  const handleLinkClick = (e, item) => {
    if (item.targetId) {
      e.preventDefault()
      const element = document.getElementById(item.targetId)
      if (element) {
        const navbarHeight = 72
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <>
      
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="rounded-2xl p-8 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8"
            style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4361ee 100%)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">Need more information?</h3>
              <p className="text-slate-300 text-sm max-w-lg">Write your concern to us and our specialist will get back to you within 24 hours.</p>
            </div>
            <motion.button
              onClick={onGetStarted}
              className="flex-shrink-0 flex items-center gap-2 bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 mb-5 cursor-pointer group w-fit"
              >
                <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <span className="text-white font-display font-bold text-lg">D</span>
                </div>
                <span className="font-display font-semibold text-white text-lg group-hover:text-brand-500 transition-colors duration-200">DesignCo</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">Creating digital experiences that are invisible in the best way — seamless, intuitive, and beautiful.</p>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
                  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
                  { icon: Github, label: 'GitHub', url: 'https://github.com' },
                  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' }
                ].map(({ icon: Icon, label, url }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:text-white"
                    whileHover={{ backgroundColor: '#4361ee', scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {Object.entries(footerLinks).map(([heading, links], col) => (
              <motion.div
                key={heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (col + 1) * 0.1, duration: 0.5 }}
              >
                <h4 className="text-white font-semibold mb-5 text-sm">{heading}</h4>
                <ul className="space-y-3">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      {link.targetId ? (
                        <motion.a
                          href={`#${link.targetId}`}
                          onClick={(e) => handleLinkClick(e, link)}
                          className="text-sm hover:text-white cursor-pointer inline-block"
                          whileHover={{ color: '#4361ee', x: 4 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          {link.label}
                        </motion.a>
                      ) : (
                        <motion.a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-white cursor-pointer inline-block"
                          whileHover={{ color: '#4361ee', x: 4 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          {link.label}
                        </motion.a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs">© 2025 DesignCo. All rights reserved.</p>
            <div className="flex gap-6 text-xs">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                <motion.a 
                  key={item} 
                  href="#" 
                  onClick={(e) => e.preventDefault()} 
                  className="hover:text-brand-500 transition-colors" 
                  whileHover={{ y: -1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
