import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { display: '12K', label: 'Clients', desc: 'Worldwide' },
  { display: '55%', label: 'Annual Growth', desc: 'Year over year' },
  { display: '5K', label: 'Projects', desc: 'Delivered' },
  { display: '80%', label: 'Positive Ratings', desc: 'Verified reviews' },
]

const SkeletonCard = () => (
  <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 animate-pulse">
    <div className="h-10 w-16 bg-white/10 rounded-lg mx-auto mb-3" />
    <div className="h-3 w-20 bg-white/10 rounded mx-auto mb-2" />
    <div className="h-2.5 w-14 bg-white/5 rounded mx-auto" />
  </div>
)

const Stats = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setLoaded(true), 800) 
      return () => clearTimeout(t)
    }
  }, [inView])

  return (
    <section ref={ref} className="py-24 bg-slate-900" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Our business strategy has helped many{' '}
            <span className="text-brand-500">businesses across the globe</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Numbers that speak for themselves — from startups to Fortune 500 companies.
          </p>
        </motion.div>

        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) =>
            !loaded ? (
              <SkeletonCard key={i} />
            ) : (
              <motion.div
                key={s.label}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(67,97,238,0.5)', y: -4 }}
              >
                <motion.div
                  className="font-display text-4xl font-bold text-white mb-1"
                  whileHover={{ color: '#4361ee' }}
                  transition={{ duration: 0.2 }}
                >
                  {s.display}
                </motion.div>
                <div className="text-sm font-semibold text-slate-300 mb-1">{s.label}</div>
                <div className="text-xs text-slate-500">{s.desc}</div>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          className="rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="w-full h-72 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 30%, #2563eb 60%, #3b82f6 100%)' }}
          >
            <div className="text-center">
              <div className="flex items-end gap-2 justify-center mb-4">
                {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-8 rounded-t-md"
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${h}px` } : {}}
                    transition={{ duration: 0.7, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
                    style={{ background: i === 5 ? '#4361ee' : 'rgba(255,255,255,0.2)' }}
                  />
                ))}
              </div>
              <p className="text-white/60 text-sm">Revenue Growth Chart</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
