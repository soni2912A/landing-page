import React, { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import RegisterModal from './RegisterModal'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const Hero = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248,250,255,0.85), rgba(240,244,255,0.9)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, #4361ee 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute bottom-0 left-20 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, #f72585 0%, transparent 70%)',
          }}
        />

        
        <motion.div
          className="absolute bottom-10 left-8 opacity-10 pointer-events-none"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="72" height="72" viewBox="0 0 80 80" fill="none">
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
          className="absolute bottom-10 right-8 opacity-10 pointer-events-none rotate-180"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          <svg width="72" height="72" viewBox="0 0 80 80" fill="none">
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

        
        <motion.div
          className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-[0.06] pointer-events-none"
          animate={{ x: [0, 6, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
            <path
              d="M20 60 H90 M65 30 L100 60 L65 90"
              stroke="#4361ee"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {[
          {
            top: '8rem',
            left: '25%',
            color: 'bg-brand-500',
            delay: 0,
            dur: 3,
          },
          {
            top: '12rem',
            right: '33%',
            color: 'bg-accent-400',
            delay: 1,
            dur: 3,
          },
          {
            bottom: '8rem',
            left: '33%',
            color: 'bg-brand-500',
            delay: 2,
            dur: 3,
          },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className={`absolute w-2.5 h-2.5 ${dot.color} rounded-full opacity-40`}
            style={{
              top: dot.top,
              left: dot.left,
              right: dot.right,
              bottom: dot.bottom,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: dot.dur,
              delay: dot.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          
          <div>
            <motion.div
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 bg-brand-100 text-brand-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
              Award-Winning Studio
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              Great design is{' '}
              <span className="relative">
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
              className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md"
            >
              We craft digital experiences that feel effortless — so your
              users can focus on what matters. Beautiful, fast, and built
              to convert.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => setShowModal(true)}
                className="group flex items-center gap-2 bg-brand-500 text-white font-medium px-7 py-3.5 rounded-xl"
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    '0 16px 40px rgba(67,97,238,0.35)',
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

              <motion.button
                className="group flex items-center gap-2 text-slate-700 font-medium px-6 py-3.5 rounded-xl border border-slate-200 bg-white/80"
                whileHover={{
                  borderColor: '#4361ee',
                  color: '#4361ee',
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.96 }}
              >
                <Play size={14} className="fill-current" />
                Watch Reel
              </motion.button>
            </motion.div>

            <motion.div
              {...fadeUp(0.55)}
              className="flex gap-8 mt-12 pt-8 border-t border-slate-200/60"
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
                  <div className="font-display text-2xl font-bold text-slate-900">
                    {s.num}
                  </div>

                  <div className="text-xs text-slate-500 mt-0.5">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: 'easeOut',
            }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-brand-500/15"
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
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-slate-100 flex items-center gap-3"
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
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
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
                <div className="text-xs font-semibold text-slate-900">
                  Project Delivered
                </div>

                <div className="text-xs text-slate-500">
                  On time & on budget
                </div>
              </div>
            </motion.div>

            
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-slate-100"
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
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="#f59e0b"
                  >
                    <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z" />
                  </svg>
                ))}
              </div>

              <div className="text-xs font-semibold text-slate-700">
                4.9 / 5.0
              </div>

              <div className="text-xs text-slate-400">
                Client rating
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {showModal && (
        <RegisterModal onClose={() => setShowModal(false)} />
      )}
    </>
  )
}

export default Hero