import { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { portfolioData } from '../data';
import { Trophy, Check, Award, GraduationCap, Code } from 'lucide-react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

function AnimatedCounter({ value, duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={elementRef} className="font-display font-black text-4xl sm:text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      {count}
    </span>
  );
}

export default function Achievements() {
  const achievements = portfolioData.achievements;

  const corePillars = [
    "Successfully completed multiple frontend projects",
    "Built a Website Blocker System (Semester Project)",
    "Developed the Khairpur Food Center restaurant layout",
    "Strong core foundation in HTML, CSS, JavaScript, and React.js",
    "Passionate Software Engineering student in my 3rd year"
  ];

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mt-2">
            My Key Achievements
          </h2>
          <div className="h-1.5 w-16 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left panel: Bullet checklist of achievements */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Trophy className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Academic Milestones
                </h3>
              </div>

              <div className="space-y-4">
                {corePillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 shadow-sm">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-light">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right panel: Animated numeric counters */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {achievements.map((ach, idx) => (
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline gap-0.5">
                    <AnimatedCounter value={ach.count} />
                    {ach.suffix && (
                      <span className="font-display font-extrabold text-lg text-indigo-600 dark:text-indigo-400">
                        {ach.suffix}
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mt-2">
                    {ach.title}
                  </h4>
                </div>

                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2 font-light">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
