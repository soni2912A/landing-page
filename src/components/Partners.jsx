import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const partners = ['Acme Corp', 'Globex', 'Initech', 'Umbrella', 'Hooli', 'Pied Piper']

const Partners = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Trusted by leading companies
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              className="flex items-center gap-2 cursor-pointer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 0.4, y: 0 } : {}}
              whileHover={{ opacity: 1, scale: 1.08 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <motion.div
                className="w-8 h-8 bg-slate-300 rounded-md"
                whileHover={{ backgroundColor: '#4361ee' }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="font-display font-semibold text-slate-500 text-sm"
                whileHover={{ color: '#4361ee' }}
                transition={{ duration: 0.2 }}
              >
                {p}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
