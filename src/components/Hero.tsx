import { MouseEvent } from 'react';
import { Github, Linkedin, Facebook, Mail, Download, ArrowRight, Award, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';
import TypedText from './TypedText';
import profileImage from '../assets/profile.jpeg';

interface HeroProps {
  onOpenCVModal: () => void;
}

export default function Hero({ onOpenCVModal }: HeroProps) {
  const { name, titles, socials } = portfolioData.personalInfo;

  const handleHireMeClick = (e: MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Background Effects */}
      <div className="gradient-mesh" />

      {/* Floating Blobs for Immersive Modern Vibe */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-indigo-400/10 blur-3xl animate-blob" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-pink-400/10 blur-3xl animate-blob" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Main Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">

            {/* Greeting Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white"
            >
              Hi, I am <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">{name}</span>
            </motion.h1>

            {/* Animated Typing Role */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-700 dark:text-slate-300 min-h-[40px] flex items-center justify-center lg:justify-start"
            >
              <span className="mr-2 font-light">I'm a</span>
              <TypedText words={titles} speed={100} delay={1800} />
            </motion.div>

            {/* Short Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              A 3rd Year BS Computer Science student passionate about crafting fluid, responsive,
              and visually stunning web applications. I turn ideas into clean, maintainable, production-ready code.
            </motion.p>

            {/* CTA Interaction Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#contact"
                onClick={handleHireMeClick}
                className="btn-primary w-full sm:w-auto"
              >
                Hire Me
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={onOpenCVModal}
                className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </button>
            </motion.div>

            {/* Social Icons Panel */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-6"
            >
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socials.email}
                className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Profile Photo Placeholder & Interactive Badge */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96"
            >
              {/* Spinning Accent Outer Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30 dark:border-indigo-400/20 animate-[spin_40s_linear_infinite]" />

              {/* Floating inner gradient border circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl animate-float">

                {/* Visual Avatar Panel */}
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center overflow-hidden relative group">

                  {/* Digital backdrop grid */}
                  <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1] bg-[radial-gradient(#4f46e5_1.5px,transparent_1.5px)] [background-size:16px_16px]" />

                  <img
                    src={profileImage}
                    alt="Aadil Mehdi"
                    className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-500 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Student Title Indicator */}
                  <div className="mt-4 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                    BS CS Student
                  </div>

                  {/* Glass Card Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-950/40 dark:bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <p className="font-display font-semibold text-base mb-1">Aadil Mehdi</p>
                    <p className="text-xs text-slate-300">3rd Year Computer Science</p>
                    <div className="flex gap-2 mt-3">
                      <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">React.js</span>
                      <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">Figma</span>
                      <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">C++</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Float badge 1: Academic Focus */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -right-4 top-1/4 glass-panel p-3.5 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-800/50 flex items-center gap-2.5 max-w-[150px] pointer-events-none"
              >
                <div className="h-8 w-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase">Education</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">BS CS student</p>
                </div>
              </motion.div>

              {/* Float badge 2: Web Dev Focus */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -left-4 bottom-1/4 glass-panel p-3.5 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-800/50 flex items-center gap-2.5 max-w-[150px] pointer-events-none"
              >
                <div className="h-8 w-8 rounded-lg bg-pink-100 dark:bg-pink-950/50 flex items-center justify-center text-pink-600 dark:text-pink-400">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase">Expertise</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Full Stack Web</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
