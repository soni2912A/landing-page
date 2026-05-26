import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { name: 'Jacqueline Wright', role: 'CEO, TechFlow Inc.', initials: 'JW', color: 'bg-violet-100 text-violet-600', text: 'DesignCo completely transformed how we think about our product. The attention to detail is extraordinary — every interaction feels intentional. Our user retention went up 40% within two months of launch.', rating: 5 },
  { name: 'Marcus Chen', role: 'Product Manager, Volta', initials: 'MC', color: 'bg-blue-100 text-blue-600', text: "Working with this team was a genuinely delightful experience. They pushed back when our ideas weren't optimal, brought solutions we hadn't considered, and delivered ahead of schedule. Rare combination.", rating: 5 },
  { name: 'Priya Sharma', role: 'Founder, Bloom Studio', initials: 'PS', color: 'bg-rose-100 text-rose-600', text: 'From the first wireframe review to the final handoff, I felt like a true partner in the process. The design system they built has made our in-house team 3x more productive.', rating: 5 },
  { name: 'David Okonkwo', role: 'CTO, Meridian Labs', initials: 'DO', color: 'bg-amber-100 text-amber-600', text: 'The accessibility work alone was worth every penny. They helped us reach an entirely new segment of users we had been inadvertently excluding. The business impact has been significant.', rating: 5 },
]

const SkeletonCard = () => (
  <div className="animate-pulse bg-white rounded-2xl p-8 border border-slate-100">
    <div className="flex gap-1 mb-5">{[...Array(5)].map((_,i) => <div key={i} className="w-4 h-4 bg-slate-200 rounded" />)}</div>
    <div className="space-y-2 mb-6">
      <div className="h-3 bg-slate-100 rounded w-full" />
      <div className="h-3 bg-slate-100 rounded w-5/6" />
      <div className="h-3 bg-slate-100 rounded w-4/5" />
    </div>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-slate-200" />
      <div>
        <div className="h-3 w-28 bg-slate-200 rounded mb-1.5" />
        <div className="h-2.5 w-20 bg-slate-100 rounded" />
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1000)
    return () => clearTimeout(t)
  }, [])

  const go = (d) => {
    setDir(d)
    setActive(a => (a + d + testimonials.length) % testimonials.length)
  }

  const visible = [
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="font-display text-4xl font-bold text-slate-900">Our happy clients</h2>
        </motion.div>

        <div className="relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[260px]">
            {!loaded
              ? [0, 1].map(i => <SkeletonCard key={i} />)
              : (
                <AnimatePresence mode="popLayout" initial={false}>
                  {visible.map((t, i) => (
                    <motion.div
                      key={`${active}-${i}`}
                      className="testimonial-card bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
                      initial={{ opacity: 0, x: dir * 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -dir * 40 }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
                      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(67,97,238,0.12)' }}
                    >
                      <div className="flex gap-1 mb-5">
                        {[...Array(t.rating)].map((_, j) => (
                          <motion.span
                            key={j}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 + j * 0.05, type: 'spring', stiffness: 400 }}
                          >
                            <Star size={16} className="fill-amber-400 text-amber-400" />
                          </motion.span>
                        ))}
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-6 text-sm">"{t.text}"</p>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${t.color}`}>
                          {t.initials}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                          <div className="text-slate-400 text-xs">{t.role}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )
            }
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <motion.button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 cursor-pointer hover:bg-white"
              whileHover={{ borderColor: '#4361ee', color: '#4361ee', scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={18} />
            </motion.button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setDir(i > active ? 1 : -1); setActive(i) }}
                  className={`h-2 rounded-full transition-colors duration-300 cursor-pointer ${i === active ? 'bg-brand-500' : 'bg-slate-300'}`}
                  animate={{ width: i === active ? 20 : 8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 cursor-pointer hover:bg-white"
              whileHover={{ borderColor: '#4361ee', color: '#4361ee', scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
