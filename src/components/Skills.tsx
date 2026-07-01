import { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { Cpu, Code, Database, Settings } from 'lucide-react';

export default function Skills() {
  const categories = portfolioData.skillCategories;
  const [activeTab, setActiveTab] = useState(0);

  // Return specific icon matching the skill category
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'frontend':
        return <Code className="h-5 w-5" />;
      case 'programming':
        return <Cpu className="h-5 w-5" />;
      case 'database':
        return <Database className="h-5 w-5" />;
      case 'tools':
        return <Settings className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            My Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mt-2">
            Technical Skills
          </h2>
          <div className="h-1.5 w-16 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Navigation Controls (Responsive & Interactive) */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === idx
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 scale-[1.02]'
                  : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-slate-800/40'
              }`}
            >
              {getCategoryIcon(cat.title)}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Animated Skill Bars Container */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="glass-panel p-6 sm:p-10 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-800/50 space-y-6"
          >
            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-200 dark:border-slate-800/80">
              <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                {getCategoryIcon(categories[activeTab].title)}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  {categories[activeTab].title} Mastery
                </h3>
                <p className="text-xs text-slate-400">Interactive proficiency ratings</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 pt-2">
              {categories[activeTab].skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-display">
                      {skill.name}
                    </span>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Skill track line */}
                  <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
