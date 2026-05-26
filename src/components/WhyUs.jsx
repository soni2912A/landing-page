import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  'We deeply understand your business goals and user needs before writing a single line of code.',
  'Our design process is collaborative — you\'re involved at every stage, from wireframes to launch.',
  'We build with performance and accessibility in mind, ensuring your product works for everyone.',
  'Post-launch, we\'re here for ongoing support, iterations, and continuous improvements.',
]

const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' ? 30 : 0, x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const WhyUs = () => (
  <section className="py-24 bg-white" id="about">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <FadeIn><p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">Our Approach</p></FadeIn>
        <FadeIn delay={0.1}><h2 className="font-display text-4xl font-bold text-slate-900 mb-4">Why our clients trust us</h2></FadeIn>
        <FadeIn delay={0.2}><p className="text-slate-500 text-lg max-w-2xl mx-auto">We combine strategic thinking with exceptional craft to create digital products that make a difference — not just visually, but in outcomes that matter.</p></FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <FadeIn direction="left" delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="img-placeholder rounded-2xl row-span-2 shadow-lg shadow-brand-500/10 col-span-1"
              style={{ gridRow: 'span 2', minHeight: '280px' }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="h-full min-h-[240px] flex items-center justify-center">
                <div className="text-brand-500 opacity-30">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                    <rect x="4" y="4" width="18" height="18" rx="3"/>
                    <rect x="26" y="4" width="18" height="18" rx="3" opacity="0.5"/>
                    <rect x="4" y="26" width="18" height="18" rx="3" opacity="0.5"/>
                    <rect x="26" y="26" width="18" height="18" rx="3"/>
                  </svg>
                </div>
              </div>
            </motion.div>
            {[0, 1].map(i => (
              <motion.div
                key={i}
                className="img-placeholder rounded-2xl aspect-video shadow-md shadow-brand-500/10"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="h-full min-h-[110px] flex items-center justify-center">
                  <div className="text-brand-500 opacity-30">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                      {i === 0 ? <rect width="32" height="32" rx="4"/> : <circle cx="16" cy="16" r="12" opacity="0.5"/>}
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

      
        <div>
          <ul className="space-y-4 mb-8">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="right">
                <motion.li
                  className="flex items-start gap-4 p-4 rounded-xl group cursor-default"
                  whileHover={{ backgroundColor: '#f0f4ff', x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.span whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 400 }}>
                    <CheckCircle2 size={22} className="text-brand-500 mt-0.5 flex-shrink-0" />
                  </motion.span>
                  <p className="text-slate-600 leading-relaxed">{f}</p>
                </motion.li>
              </FadeIn>
            ))}
          </ul>
          <FadeIn delay={0.45}>
            <motion.button
              className="bg-brand-500 text-white font-medium px-7 py-3.5 rounded-xl"
              whileHover={{ scale: 1.05, backgroundColor: '#3451d1', boxShadow: '0 12px 32px rgba(67,97,238,0.35)' }}
              whileTap={{ scale: 0.96 }}
            >
              Learn More
            </motion.button>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
)

export default WhyUs
