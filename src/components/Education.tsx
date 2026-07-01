import { GraduationCap, Calendar, BookOpen, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function Education() {
  const educationItems = portfolioData.education;

  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mt-2">
            Academic Education
          </h2>
          <div className="h-1.5 w-16 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Timeline Center Axis line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

          {educationItems.map((item, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-stretch mb-12 last:mb-0">
              
              {/* Timeline Center Bullet Marker */}
              <div className="absolute left-4 md:left-1/2 h-8 w-8 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-indigo-600 dark:bg-indigo-400 transform -translate-x-1/2 z-10 flex items-center justify-center text-white">
                <GraduationCap className="h-3.5 w-3.5" />
              </div>

              {/* Left / Odd column spacing for desktop layout */}
              <div className="w-full md:w-1/2 pr-0 md:pr-12 pl-12 md:pl-0 text-left md:text-right hidden md:block">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="pt-1.5"
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30">
                    <Calendar className="h-3 w-3" />
                    {item.year}
                  </span>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-2">The Benazir Bhutto Shaheed University of Technology and Skills Development Khairpur Mirs</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Undergraduate Program</p>
                </motion.div>
              </div>

              {/* Right column / Main Card Content column */}
              <div className="w-full md:w-1/2 pl-12 md:pl-12 text-left">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-panel p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-800/50"
                >
                  {/* Mobile Mobile-only Date Tag */}
                  <div className="md:hidden mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30">
                    <Calendar className="h-3 w-3" />
                    {item.year}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Coursework & details bullets */}
                  {item.details && (
                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/80 space-y-3.5">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3">
                          <span className="mt-1 h-4 w-4 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                </motion.div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
