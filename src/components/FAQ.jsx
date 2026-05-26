import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'What does a typical project look like from start to finish?', a: 'Every project begins with a discovery phase — we learn your goals, users, and constraints. Then we move to strategy and wireframing, visual design, development, testing, and finally launch and support. Most projects run 6–12 weeks depending on scope.' },
  { q: 'Do you work with startups or only established companies?', a: 'We love working with companies at every stage. Startups benefit from our ability to move fast and make strategic design decisions early. Established companies leverage our systems thinking and ability to scale existing products.' },
  { q: "What's your pricing model?", a: "We offer both project-based and retainer pricing. For defined scopes, we provide a fixed quote. For ongoing partnerships, monthly retainers give you flexible access to our team. Reach out for a custom estimate." },
  { q: 'Can you work with our existing design system?', a: "Absolutely. We're fluent in Figma, Storybook, and most major design systems. We can extend, audit, or rebuild your system depending on what serves your goals best." },
]

const FAQ = () => {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            className="rounded-2xl aspect-square max-h-80 sm:max-h-96 shadow-lg shadow-brand-500/10 overflow-hidden w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Business consultation"
              className="w-full h-full object-cover"
            />
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-8">Frequently asked questions</h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                    open === i 
                      ? 'border-brand-500/30 bg-brand-50 shadow-md shadow-brand-500/5' 
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                  layout
                  transition={{ layout: { duration: 0.3 } }}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer select-none"
                    onClick={() => setOpen(open === i ? -1 : i)}
                  >
                    <span className={`font-semibold text-sm sm:text-base leading-snug pr-4 ${open === i ? 'text-brand-500' : 'text-slate-800'}`}>
                      {faq.q}
                    </span>
                    <motion.span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${open === i ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-500'}`}
                      animate={{ rotate: open === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {open === i ? <Minus size={14} /> : <Plus size={14} />}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="px-5 pb-5 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
