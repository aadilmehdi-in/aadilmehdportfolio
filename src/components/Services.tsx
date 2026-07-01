import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { Palette, Code, Smartphone, Cpu, Layout, Layers } from 'lucide-react';

export default function Services() {
  const services = portfolioData.services;

  // Retrieve matching icon
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="h-6 w-6" />;
      case 'Code':
        return <Code className="h-6 w-6" />;
      case 'Smartphone':
        return <Smartphone className="h-6 w-6" />;
      case 'Cpu':
        return <Cpu className="h-6 w-6" />;
      case 'Layout':
        return <Layout className="h-6 w-6" />;
      case 'Layers':
        return <Layers className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mt-2">
            Professional Services
          </h2>
          <div className="h-1.5 w-16 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Floating animated icon holder */}
                <div className="h-12 w-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6">
                  {getServiceIcon(srv.iconName)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
                  {srv.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {srv.description}
                </p>
              </div>

              {/* Action decoration */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between">
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-mono">
                  Freelance Ready
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
