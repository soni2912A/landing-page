import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const Hero = ({ onGetStarted }) => {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248,250,255,0.85), rgba(240,244,255,0.9)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        
        <div
          className="absolute top-20 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, #4361ee 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute bottom-0 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, #f72585 0%, transparent 70%)',
          }}
        />

        
        <motion.div
          className="absolute bottom-10 left-4 sm:left-8 opacity-10 pointer-events-none"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="48" height="48" sm-width="72" sm-height="72" viewBox="0 0 80 80" fill="none">
            <path
              d="M16 16 L64 16 L64 40"
              stroke="#4361ee"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M64 40 L40 64 L16 40"
              stroke="#4361ee"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-4 sm:right-8 opacity-10 pointer-events-none rotate-180"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          <svg width="48" height="48" sm-width="72" sm-height="72" viewBox="0 0 80 80" fill="none">
            <path
              d="M16 16 L64 16 L64 40"
              stroke="#f72585"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M64 40 L40 64 L16 40"
              stroke="#f72585"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
          
          <div className="flex flex-col items-start text-left">
            <motion.div
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 bg-brand-100 text-brand-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
              Award-Winning Studio
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              Great design is{' '}
              <span className="relative inline-block">
                <span className="text-brand-500">invisible</span>

                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                >
                  <path
                    d="M0 6 Q50 0 100 4 Q150 8 200 2"
                    stroke="#4361ee"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-md"
            >
              We craft digital experiences that feel effortless — so your
              users can focus on what matters. Beautiful, fast, and built
              to convert.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <motion.button
                onClick={onGetStarted}
                className="group flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-medium px-7 py-3.5 rounded-xl cursor-pointer w-full sm:w-auto transition-colors"
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    '0 16px 40px rgba(67,97,238,0.25)',
                }}
                whileTap={{ scale: 0.96 }}
              >
                Get Started

                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                  }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </motion.button>
            </motion.div>

            <motion.div
              {...fadeUp(0.55)}
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-slate-200/60 w-full"
            >
              {[
                { num: '12K+', label: 'Happy Clients' },
                { num: '5K+', label: 'Projects Delivered' },
                { num: '80%', label: 'Positive Ratings' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.1 }}
                >
                  <div className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    {s.num}
                  </div>

                  <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          
          <motion.div
            className="relative mt-8 lg:mt-0 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: 'easeOut',
            }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-brand-500/15 w-full"
              whileHover={{ scale: 1.02 }}
              transition={{
                type: 'spring',
                stiffness: 200,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1400&auto=format&fit=crop"
                alt="Creative Workspace"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            
            <motion.div
              className="absolute -bottom-6 left-4 sm:-left-6 bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-slate-100 flex items-center gap-3 max-w-[200px] sm:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{
                y: -4,
                boxShadow:
                  '0 20px 40px rgba(0,0,0,0.12)',
              }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  sm-width="20"
                  sm-height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4 10l4 4 8-8"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-900">
                  Project Delivered
                </div>

                <div className="text-[9px] sm:text-xs text-slate-500">
                  On time & on budget
                </div>
              </div>
            </motion.div>

            
            <motion.div
              className="absolute -top-4 right-4 sm:-right-4 bg-white rounded-xl p-2.5 sm:p-3 shadow-lg border border-slate-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{
                y: 4,
                boxShadow:
                  '0 20px 40px rgba(0,0,0,0.12)',
              }}
            >
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="12"
                    height="12"
                    sm-width="14"
                    sm-height="14"
                    viewBox="0 0 14 14"
                    fill="#f59e0b"
                  >
                    <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z" />
                  </svg>
                ))}
              </div>

              <div className="text-[10px] sm:text-xs font-semibold text-slate-700">
                4.9 / 5.0
              </div>

              <div className="text-[9px] sm:text-xs text-slate-400">
                Client rating
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero
