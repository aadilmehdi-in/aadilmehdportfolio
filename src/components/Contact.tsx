import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, Inbox, Trash2, AlertCircle, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const { email, location, socials } = portfolioData.personalInfo;
  
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showInboxes, setShowInboxes] = useState(false);
  const [localMessages, setLocalMessages] = useState<ContactMessage[]>([]);

  // Load sent messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('aadil_portfolio_messages');
    if (saved) {
      try {
        setLocalMessages(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to parse local messages", err);
      }
    }
  }, []);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = 'This field is required';
    } else if (name === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(value)) {
        error = 'Please enter a valid email address';
      }
    }
    return error;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some(err => err !== '');
    if (hasErrors) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleString()
      };

      const updatedMessages = [newMessage, ...localMessages];
      setLocalMessages(updatedMessages);
      localStorage.setItem('aadil_portfolio_messages', JSON.stringify(updatedMessages));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto clear success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const handleDeleteMessage = (id: string) => {
    const updated = localMessages.filter(msg => msg.id !== id);
    setLocalMessages(updated);
    localStorage.setItem('aadil_portfolio_messages', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Let's Talk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mt-2">
            Contact Me
          </h2>
          <div className="h-1.5 w-16 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact info details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {/* Email detail */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Email address
                    </p>
                    <a href={`mailto:${email}`} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all">
                      {email}
                    </a>
                  </div>
                </div>

                {/* Phone detail */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Phone Number
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">
                      +92 (322) 870-4472
                    </p>
                  </div>
                </div>

                {/* Location detail */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Location
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">
                      {location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connected Socials */}
              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                  Connect on Social Networks
                </p>
                <div className="flex gap-3">
                  <a 
                    href={socials.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="h-10 w-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500/50 flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href={socials.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="h-10 w-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-500/50 flex items-center justify-center transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Simulated Inbox Toggle Button (Premium interaction detail) */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Inbox className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-display uppercase text-slate-700 dark:text-slate-300">
                    Local Message Logs
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    View local inbox data ({localMessages.length} received)
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setShowInboxes(!showInboxes)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200/40 dark:border-slate-800/40"
              >
                {showInboxes ? 'Hide log' : 'Open log'}
              </button>
            </div>
          </div>

          {/* Right Column: Contact form with fields */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                {/* Form row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Your Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      placeholder="e.g. Aadil Mehdi"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border ${
                        formErrors.name 
                          ? 'border-rose-500 dark:border-rose-500/50 focus:ring-rose-500/20' 
                          : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-indigo-500/20'
                      } text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-4 transition-all`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Email Address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border ${
                        formErrors.email 
                          ? 'border-rose-500 dark:border-rose-500/50 focus:ring-rose-500/20' 
                          : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-indigo-500/20'
                      } text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-4 transition-all`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject-input" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Subject
                  </label>
                  <input
                    id="subject-input"
                    type="text"
                    name="subject"
                    placeholder="Brief subject of interest"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border ${
                      formErrors.subject 
                        ? 'border-rose-500 dark:border-rose-500/50 focus:ring-rose-500/20' 
                        : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-indigo-500/20'
                    } text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-4 transition-all`}
                  />
                  {formErrors.subject && (
                    <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message-input" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Your Message
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    rows={5}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border ${
                      formErrors.message 
                        ? 'border-rose-500 dark:border-rose-500/50 focus:ring-rose-500/20' 
                        : 'border-slate-200/60 dark:border-slate-800/80 focus:ring-indigo-500/20'
                    } text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-4 transition-all resize-none`}
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit button with states */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-75 disabled:pointer-events-none mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Toast Submission Success Screen inside card */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-white/95 dark:bg-slate-950/95 z-20 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <div className="h-14 w-14 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 shadow-sm animate-bounce">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                      Message Received!
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-2 max-w-sm">
                      Thank you for reaching out! Your message was saved locally and logged securely. 
                      Aadil will respond as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Floating Tray: Local messages inbox log display */}
        <AnimatePresence>
          {showInboxes && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="mt-12 max-w-4xl mx-auto glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <Inbox className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                    Simulated Incoming Message Ledger (Persistent in LocalStorage)
                  </h3>
                </div>
                <button
                  onClick={() => setShowInboxes(false)}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  Close Logs
                </button>
              </div>

              {localMessages.length === 0 ? (
                <div className="text-center py-12 text-slate-400 dark:text-slate-500">
                  <Inbox className="h-10 w-10 mx-auto stroke-1 mb-2.5" />
                  <p className="text-sm">No messages logged yet. Use the contact form to submit a live message!</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                  {localMessages.map((msg) => (
                    <motion.div
                      layout
                      key={msg.id}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/50 flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1.5 flex-grow">
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs">
                          <span className="font-bold text-slate-900 dark:text-white">{msg.name}</span>
                          <span className="text-slate-400 font-mono text-[10px]">&lt;{msg.email}&gt;</span>
                          <span className="text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded ml-auto">{msg.timestamp}</span>
                        </div>
                        <p className="text-xs font-bold font-display text-indigo-600 dark:text-indigo-400">
                          Subject: {msg.subject}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                          {msg.message}
                        </p>
                      </div>
                      
                      <button
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="text-slate-400 hover:text-rose-500 p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all flex-shrink-0"
                        title="Delete logged message"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
