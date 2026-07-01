import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  // Theme state synced with local storage and media preferences
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('aadil_portfolio_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    
    // Check system preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [activeSection, setActiveSection] = useState('home');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  // Apply theme class to document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('aadil_portfolio_theme', theme);
  }, [theme]);

  // Toggle theme action
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Active section tracking with IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'services', 'achievements', 'contact'];
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // focused viewport height trigger
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-slate-50 dark:bg-[#0A0A0B] transition-colors duration-300">
      
      {/* Dynamic Sticky Header Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection} 
      />

      {/* Structured Sections Grid */}
      <main className="relative">
        
        {/* Home Banner section */}
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
        
        {/* Personal profile overview */}
        <About />
        
        {/* Educational logs */}
        <Education />
        
        {/* Capabilities parameters */}
        <Skills />
        
        {/* Works portfolio filter card grid */}
        <Projects />
        
        {/* Practice tracker timeline */}
        <Experience />
        
        {/* Service listings bento */}
        <Services />
        
        {/* Milestones dynamic values counters panel */}
        <Achievements />
        
        {/* Message dispatch portal */}
        <Contact />

      </main>

      {/* Global page footer summary */}
      <Footer />

      {/* Interactive print-ready CV drawer overlay */}
      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />

    </div>
  );
}
