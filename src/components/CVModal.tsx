import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, GraduationCap, Briefcase, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const { name, titles, shortIntro, email, location, socials, aboutBullets } = portfolioData.personalInfo;
  const education = portfolioData.education;
  const experience = portfolioData.experience;
  const skillsData = portfolioData.skillCategories;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm print:p-0 print:bg-white print:relative">
      
      {/* Modal Card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-4xl h-[90vh] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden print:border-none print:shadow-none print:h-auto print:static print:bg-white print:text-slate-900"
      >
        {/* Header Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 print:hidden">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-xs font-bold font-display uppercase tracking-widest text-slate-700 dark:text-slate-300">
              Interactive Resume Exporter
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/70 text-xs font-semibold border border-indigo-100 dark:border-indigo-900/30 transition-all cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800/80 text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
              aria-label="Close CV preview"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* CV Content (Scrollable & print-optimized) */}
        <div className="flex-grow overflow-y-auto p-6 sm:p-10 space-y-8 print:overflow-visible print:p-0">
          
          {/* Printable styles block */}
          <style dangerouslySetInnerHTML={{__html: `
            @media print {
              header, footer, nav, button, #navbar-header, #scroll-progress-indicator { display: none !important; }
              body { background: white !important; color: black !important; }
              .print\\:hidden { display: none !important; }
              .print\\:text-slate-900 { color: #0f172a !important; }
              .print\\:border-none { border: none !important; }
              .print\\:shadow-none { box-shadow: none !important; }
              .dark { background: white !important; color: black !important; }
              .dark .glass-panel { background: white !important; border: none !important; }
              .dark h1, .dark h2, .dark h3, .dark h4, .dark p, .dark span { color: #0f172a !important; }
            }
          `}} />

          {/* CV Header: Name & Contact details */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-2">
              <h1 className="text-3xl font-black font-display text-slate-900 dark:text-white">
                {name}
              </h1>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                3rd Year Computer Science Student & Frontend Developer
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
                {shortIntro}
              </p>
            </div>
            
            {/* Quick connection pills */}
            <div className="md:col-span-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-400 md:text-right">
              <div className="flex items-center md:justify-end gap-2">
                <Mail className="h-3.5 w-3.5 text-slate-400" />
                <a href={`mailto:${email}`} className="hover:underline">{email}</a>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Phone className="h-3.5 w-3.5 text-slate-400" />
                <span>+92 (312) 345-6789</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                <span>{location}</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Linkedin className="h-3.5 w-3.5 text-slate-400" />
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn Profile</a>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Github className="h-3.5 w-3.5 text-slate-400" />
                <a href={socials.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub Profile</a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Main Side Column: Education & Experience */}
            <div className="md:col-span-8 space-y-8">
              
              {/* Education section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <GraduationCap className="h-4.5 w-4.5 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="font-display font-bold text-base uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Education
                  </h2>
                </div>

                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-baseline flex-wrap">
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">{edu.title}</h3>
                      <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400">{edu.year}</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">{edu.subtitle}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">{edu.description}</p>
                    
                    {edu.details && (
                      <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-500 dark:text-slate-400 pl-2">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Experience section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Briefcase className="h-4.5 w-4.5 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="font-display font-bold text-base uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Practice & Projects
                  </h2>
                </div>

                {experience.map((exp, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-baseline flex-wrap">
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">{exp.title}</h3>
                      <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400">{exp.year}</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">{exp.subtitle}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">{exp.description}</p>
                    
                    {exp.details && (
                      <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-500 dark:text-slate-400 pl-2">
                        {exp.details.map((detail, dIdx) => (
                          <li key={dIdx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* Right Side Column: Technical Skills */}
            <div className="md:col-span-4 space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Award className="h-4.5 w-4.5 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="font-display font-bold text-base uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Core Skills
                  </h2>
                </div>

                <div className="space-y-4">
                  {skillsData.map((cat, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                        {cat.title}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {cat.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded"
                          >
                            {skill.name} ({skill.level}%)
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal characteristics bullets */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/40">
                <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5">
                  Professional Traits
                </h4>
                <ul className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                  {aboutBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-indigo-600" />
                      <strong>{bullet.label}:</strong> {bullet.detail}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
