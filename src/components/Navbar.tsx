import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeSection: string;
}

const navLinks = [
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

export default function Navbar({ theme, toggleTheme, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      
      // Scrolled past hero detection for styling
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-lg shadow-slate-900/5 dark:shadow-slate-950/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress-indicator"
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
            className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white group"
          >
            <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-black text-sm shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              AM
            </span>
            <span className="hidden sm:inline-block">
              Aadil<span className="text-indigo-600 dark:text-indigo-400">Mehdi</span>
            </span>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  activeSection === link.id
                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/40'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-indigo-600 dark:bg-indigo-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Controls: Theme Toggle + Contact CTA */}
          <div className="flex items-center gap-3">
            {/* Dark/Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors focus:outline-none"
              aria-label="Toggle theme mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ y: -10, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun className="h-4.5 w-4.5 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: -10, opacity: 0, rotate: 45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon className="h-4.5 w-4.5 text-indigo-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Quick Contact CTA */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/70 transition-colors"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Hire Me
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-6 space-y-1.5 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-4">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-600/10"
              >
                Let's Work Together
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
