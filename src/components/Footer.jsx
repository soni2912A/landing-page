import React from 'react'
import { ArrowRight, Twitter, Linkedin, Github, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Blog', 'Contact'],
  Services: ['UI Design', 'UX Research', 'Development', 'Branding', 'Strategy'],
  Resources: ['Case Studies', 'Templates', 'Webinars', 'Newsletter', 'FAQ'],
}

const Footer = () => (
  <>
  
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="rounded-2xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4361ee 100%)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">Need more information?</h3>
            <p className="text-slate-300 text-sm">Write your concern to us and our specialist will get back to you within 24 hours.</p>
          </div>
          <motion.button
            className="flex-shrink-0 flex items-center gap-2 bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl"
            whileHover={{ scale: 1.05, boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>


    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">D</span>
              </div>
              <span className="font-display font-semibold text-white text-lg">DesignCo</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">Creating digital experiences that are invisible in the best way — seamless, intuitive, and beautiful.</p>
            <div className="flex gap-3">
              {[{ icon: Twitter, label: 'Twitter' }, { icon: Linkedin, label: 'LinkedIn' }, { icon: Github, label: 'GitHub' }, { icon: Instagram, label: 'Instagram' }].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center"
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
                {links.map(link => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-sm"
                      whileHover={{ color: '#4361ee', x: 4 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {link}
                    </motion.a>
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
              <motion.a key={item} href="#" className="hover:text-brand-500 transition-colors" whileHover={{ y: -1 }}>
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
