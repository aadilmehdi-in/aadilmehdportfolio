import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data';
import { ExternalLink, Check, Layers, Monitor, Sparkles } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'design'>('all');
  const projects = portfolioData.projects;

  const filteredProjects = projects.filter(proj => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mt-2">
            My Creative Projects
          </h2>
          <div className="h-1.5 w-16 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Project Filters ("Project filtering") */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              filter === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-50'
            }`}
          >
            All Works
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              filter === 'web'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-50'
            }`}
          >
            Web Applications
          </button>
          <button
            onClick={() => setFilter('design')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              filter === 'design'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-50'
            }`}
          >
            UI/UX Designs (Figma)
          </button>
        </div>

        {/* Project Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/50 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Visual Header / Cover */}
                <div className={`h-48 sm:h-56 bg-gradient-to-br ${proj.imagePlaceholderColor} relative flex items-center justify-center p-6 text-white overflow-hidden`}>
                  {/* Backdrop Matrix grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                  
                  {/* Floating geometric blobs for aesthetic depth */}
                  <div className="absolute -top-12 -right-12 h-40 w-40 bg-white/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute -bottom-12 -left-12 h-40 w-40 bg-black/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />

                  {/* Context Icon */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                    {proj.category === 'web' ? (
                      <Monitor className="h-10 sm:h-12 w-10 sm:w-12 text-white/90 stroke-1" />
                    ) : (
                      <Layers className="h-10 sm:h-12 w-10 sm:w-12 text-white/90 stroke-1" />
                    )}
                    <span className="font-display font-black text-2xl tracking-tighter sm:text-3xl">
                      {proj.title}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/20 uppercase tracking-widest">
                      {proj.category === 'web' ? 'Full Frontend App' : 'Figma Prototype UI'}
                    </span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t, idx) => (
                        <span 
                          key={idx} 
                          className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {proj.description}
                    </p>

                    {/* Highlights Features Checklist */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Key Features
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {proj.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="mt-0.5 h-4 w-4 rounded bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                              <Check className="h-3 w-3" />
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Footer Action Anchor */}
                  <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-display">
                      {proj.category === 'web' ? 'Semester 3 Project' : 'Restaurant UI Project'}
                    </span>
                    <a
                      href={proj.category === 'web' ? 'https://github.com/aadilmehdi-in' : 'https://figma.com'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 hover:underline"
                    >
                      <span>{proj.category === 'web' ? 'View Repository' : 'View Prototype'}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
