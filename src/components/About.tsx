import { CheckCircle, Award, BookOpen, User } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function About() {
  const { shortIntro, aboutBullets } = portfolioData.personalInfo;

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mt-2">
            Who Is <span className="text-indigo-600 dark:text-indigo-400">Aadil Mehdi</span>?
          </h2>
          <div className="h-1.5 w-16 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Decorative Collage Card */}
          <div className="lg:col-span-5">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-40 w-40 bg-indigo-500/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 bg-purple-500/5 rounded-full blur-2xl" />
              
              <div className="relative space-y-6">
                <div className="h-12 w-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <User className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                  Passionate Student & Aspiring Engineer
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  I love turning complex requirements into beautiful user interfaces. My primary target 
                  is becoming a highly competent Full Stack Web Developer.
                </p>

                {/* Sub Highlights */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  <div>
                    <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-display">3rd</p>
                    <p className="text-xs text-slate-400 uppercase mt-0.5">Year BS CS</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-purple-600 dark:text-purple-400 font-display">6+</p>
                    <p className="text-xs text-slate-400 uppercase mt-0.5">Frameworks</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* About Text Content and Bullet Checklist */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                {shortIntro}
              </p>

              {/* Character Attributes Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {aboutBullets.map((bullet, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/30 flex items-start gap-3 transition-all"
                  >
                    <div className="mt-0.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                        {bullet.label}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {bullet.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
