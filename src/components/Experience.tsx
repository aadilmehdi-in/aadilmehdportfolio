import { Briefcase, Calendar, Check, Compass, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Professional Practice
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mt-2">
            Work & Learning Practice
          </h2>
          <div className="h-1.5 w-16 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Cards / Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Tag with Icon */}
                <div className="flex items-center justify-between gap-4">
                  <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    {idx === 0 ? <Compass className="h-5 w-5" /> : <Star className="h-5 w-5" />}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30">
                    <Calendar className="h-3 w-3" />
                    {exp.year}
                  </span>
                </div>

                {/* Job Title / Role */}
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {exp.subtitle}
                  </p>
                </div>

                {/* Description Text */}
                <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights checkmarks */}
                {exp.details && (
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
                    {exp.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <span className="mt-1 h-4 w-4 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Focus Badge list footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex flex-wrap gap-1.5">
                {idx === 0 ? (
                  <>
                    <span className="text-[10px] uppercase font-bold tracking-wider font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-500">Website Blocker</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-500">KFC UI Case Study</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-500">Web Engineering Labs</span>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] uppercase font-bold tracking-wider font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-500">React.js Practice</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-500">Tailwind CSS</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-500">Git/GitHub Tools</span>
                  </>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
