import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Acme E-Commerce Platform',
    category: 'Web Development',
    desc: 'A next-generation digital storefront built with React and Tailwind CSS, featuring smooth animations and high-performance design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    link: 'https://tailwindcss.com',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Volta Fintech Dashboard',
    category: 'UI/UX Design',
    desc: 'A premium corporate financial analytics portal offering real-time transaction tracking, predictive modeling, and interactive charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    link: 'https://vite.dev',
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Bloom Creative Studio Website',
    category: 'Branding & Identity',
    desc: 'An immersive digital portfolio showcasing interactive layouts, fluid grid transitions, and responsive typography structures.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    link: 'https://react.dev',
    color: 'from-rose-500 to-pink-600',
  },
]

const Portfolio = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-slate-50 border-t border-slate-100" id="portfolio">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="font-display text-4xl font-bold text-slate-900">Featured projects</h2>
          </motion.div>
          
          <motion.p
            className="text-slate-500 text-sm md:max-w-xs"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A curated selection of our digital creations, crafted with precision, user-centric strategies, and beautiful details.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-500 hover:text-brand-600 font-semibold text-sm transition-all duration-200 group-hover:gap-2.5"
                >
                  Explore Project
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
