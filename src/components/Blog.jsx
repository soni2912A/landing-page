import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Clock } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const posts = [
  { title: 'Why humans are always smarter than AI', excerpt: 'Exploring the boundaries of machine intelligence and what makes human creativity truly irreplaceable in the design world.', tag: 'AI & Design', time: '5 min read', color: 'from-violet-500 to-purple-600' },
  { title: 'The future of responsive design in 2025', excerpt: 'A deep dive into emerging techniques, container queries, and how the web layout paradigm is evolving faster than ever.', tag: 'Frontend', time: '7 min read', color: 'from-blue-500 to-indigo-600' },
  { title: 'Building products users actually love', excerpt: 'Practical frameworks for user research, iteration loops, and measuring success beyond vanity metrics.', tag: 'Product', time: '6 min read', color: 'from-rose-500 to-pink-600' },
]


const SkeletonPost = () => (
  <div className="animate-pulse">
    <div className="rounded-2xl h-52 bg-slate-200 mb-5" />
    <div className="h-3 w-20 bg-slate-200 rounded mb-3" />
    <div className="h-5 bg-slate-200 rounded mb-2 w-4/5" />
    <div className="h-3 bg-slate-100 rounded mb-1" />
    <div className="h-3 bg-slate-100 rounded w-3/4 mb-4" />
    <div className="h-3 w-24 bg-slate-200 rounded" />
  </div>
)

const Blog = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setLoaded(true), 900)
      return () => clearTimeout(t)
    }
  }, [inView])

  return (
    <section ref={ref} className="py-24 bg-white" id="blog">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-2">Our Blog</p>
            <h2 className="font-display text-4xl font-bold text-slate-900">Latest articles</h2>
          </motion.div>
          <motion.button
            className="group flex items-center gap-2 text-brand-500 font-medium text-sm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ gap: '12px' }}
          >
            View all posts
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {!loaded
            ? [0,1,2].map(i => <SkeletonPost key={i} />)
            : posts.map((post, i) => (
              <motion.article
                key={i}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <motion.div
                  className={`rounded-2xl h-52 bg-gradient-to-br ${post.color} mb-5 overflow-hidden relative shadow-lg`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="white">
                      <rect x="10" y="10" width="28" height="28" rx="4"/>
                      <rect x="42" y="10" width="28" height="28" rx="4" opacity="0.6"/>
                      <rect x="10" y="42" width="28" height="28" rx="4" opacity="0.6"/>
                      <rect x="42" y="42" width="28" height="28" rx="4"/>
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">{post.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                  <Clock size={12} /> {post.time}
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 mb-3 group-hover:text-brand-500 transition-colors duration-200 leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <motion.button
                  className="flex items-center gap-1.5 text-brand-500 text-sm font-medium"
                  whileHover={{ gap: '10px' }}
                >
                  Learn more
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.article>
            ))
          }
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="border border-slate-200 text-slate-600 font-medium px-8 py-3 rounded-xl"
            whileHover={{ borderColor: '#4361ee', color: '#4361ee', scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Load more articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
