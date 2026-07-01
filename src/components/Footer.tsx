import { ArrowUp, Github, Linkedin, Facebook, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { portfolioData } from '../data';

export default function Footer() {
  const { name, socials } = portfolioData.personalInfo;
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 md:py-16">
      
      {/* Decorative vector background */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] bg-[radial-gradient(#4f46e5_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-200 dark:border-slate-900">
          
          {/* Logo & Brief Branding */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleBackToTop(); }}
              className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-black text-sm shadow-md shadow-indigo-500/20">
                AM
              </span>
              <span>
                Aadil<span className="text-indigo-600 dark:text-indigo-400">Mehdi</span>
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed font-light">
              3rd Year BS Computer Science student crafting premium user interfaces and modern full-stack web applications.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                    className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Connections Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Find Me On
            </h4>
            
            <div className="flex gap-2.5">
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="h-9 w-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500/50 flex items-center justify-center transition-colors shadow-sm"
                aria-label="LinkedIn profile link"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href={socials.github} 
                target="_blank" 
                rel="noreferrer"
                className="h-9 w-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500/50 flex items-center justify-center transition-colors shadow-sm"
                aria-label="GitHub profile link"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href={socials.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="h-9 w-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500/50 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Facebook profile link"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href={socials.email}
                className="h-9 w-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500/50 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Send direct email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed font-light">
              Available for internship and freelance opportunities. Feel free to contact.
            </p>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Aadil Mehdi. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 font-mono">
            Crafted with React, Tailwind & Motion
          </p>
        </div>
      </div>

      {/* Floating Back to Top Trigger Button ("Back to Top button") */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleBackToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 hover:-translate-y-1 transition-all focus:outline-none"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  );
}
