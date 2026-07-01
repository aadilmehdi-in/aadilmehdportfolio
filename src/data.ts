import { Project, SkillCategory, TimelineItem, Service, Achievement } from './types';

export const portfolioData = {
  personalInfo: {
    name: "Aadil Mehdi",
    firstName: "Aadil",
    lastName: "Mehdi",
    titles: ["Computer Science Student", "Full Stack Developer", "Frontend Developer", "React Enthusiast"],
    shortIntro: "My name is Aadil Mehdi. I am a 3rd Year BS Computer Science student with a strong passion for web development and modern user interface design. I enjoy building responsive, user-friendly, and professional web applications using HTML, CSS, JavaScript, and React.js. I continuously improve my programming skills by developing real-world academic and personal projects.",
    avatarText: "AM",
    email: "adilmehdi400@gmail.com",
    location: "Pakistan",
    socials: {
      linkedin: "https://www.linkedin.com/in/aadilmehdi-in/?skipRedirect=true",
      github: "https://github.com/aadilmehdi-in",
      facebook: "https://www.facebook.com",
      email: "mailto:adilmehdi400@gmail.com"
    },
    aboutBullets: [
      { label: "University Student", detail: "3rd Year BS Computer Science" },
      { label: "Frontend Developer", detail: "HTML, CSS, JS, Tailwind, React" },
      { label: "React Learner", detail: "Building responsive modern SPA apps" },
      { label: "Problem Solver", detail: "Data structures & logical algorithm design" },
      { label: "Team Player", detail: "Collaborative, communicative & supportive" },
      { label: "Quick Learner", detail: "Eager to adopt new frameworks & workflows" }
    ]
  },
  
  education: [
    {
      year: "2023 - Present",
      title: "BS Computer Science",
      subtitle: "Shah Abdul Latif University (or equivalent) • 3rd Year",
      description: "Focusing on core computer science foundations, databases, and software design paradigms. Currently maintaining an excellent academic record while building practical projects.",
      details: [
        "Semester Progress: Currently in 6th Semester (3rd Year)",
        "Relevant Coursework: Data Structures, Database Systems (SQL), OOP, Software Engineering, Web Engineering",
        "Key Academic Projects: Website Blocker System (3rd Semester), Khairpur Food Center UI/UX Case Study"
      ]
    }
  ] as TimelineItem[],

  experience: [
    {
      year: "Academic Term",
      title: "Academic Projects Coordinator",
      subtitle: "University Web Engineering & OOP Labs",
      description: "Designed, planned, and implemented various system programs and user interface applications.",
      details: [
        "Website Blocker System: Engineered an administrative website redirector/blocker utilizing pure JavaScript.",
        "Khairpur Food Center (KFC): Led UI/UX prototyping efforts to establish a modern layout for local culinary brands."
      ]
    },
    {
      year: "Self-Paced Training",
      title: "Independent Web Developer Practice",
      subtitle: "Frontend Practice & Modern Workflows",
      description: "Dedicated hundreds of hours to mastering frontend frameworks, responsive layouts, and modern standards.",
      details: [
        "Built responsive, interactive landing pages using HTML, CSS, Tailwind CSS, and React.js.",
        "Experienced in working with Git, GitHub version control, and UI design workflows in Figma.",
        "Committed to continuous learning through implementing modern UI components and web APIs."
      ]
    }
  ] as TimelineItem[],

  skillCategories: [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 78 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 88 }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "C++", level: 80 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 82 },
        { name: "Java", level: 70 },
        { name: "Winforms", level: 75 },
        { name: ".NET Framework", level: 72 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "SQLite", level: 78 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Git", level: 82 },
        { name: "GitHub", level: 85 },
        { name: "Figma", level: 75 }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "website-blocker",
      title: "Website Blocker System",
      description: "Developed a Website Blocker System during the 3rd semester as a semester project. It allows users to block distracting websites to improve productivity and focus. The project features an elegant, easy-to-use control panel and demonstrates practical JavaScript logic and DOM manipulation.",
      tech: ["HTML", "CSS", "JavaScript"],
      features: [
        "Block specific websites with simple custom lists",
        "Clean, intuitive and user-friendly control interface",
        "Responsive design adapting to mobile and desktop displays",
        "Active blocking status and list management logs"
      ],
      category: "web",
      imagePlaceholderColor: "from-blue-600 to-indigo-700"
    },
    {
      id: "khairpur-food-center",
      title: "Khairpur Food Center (KFC)",
      description: "Designed and developed a modern restaurant visual UI and architecture for Khairpur Food Center. The prototype includes structured culinary categories, active dynamic menu items, contact portal layouts, and a highly polished interactive interface optimizing localized restaurant sales.",
      tech: ["Figma", "UI/UX Design", "Responsive Layouts"],
      features: [
        "High-fidelity visual layout for Home Page and landing banner",
        "Responsive, scroll-linked dynamic menu showcase",
        "Segmented Food Categories and quick checkout templates",
        "Contact form and localization design for local culinary reach"
      ],
      category: "design",
      imagePlaceholderColor: "from-amber-500 to-red-600"
    }
  ] as Project[],

  services: [
    {
      title: "Website Design",
      description: "Crafting beautiful, high-fidelity user interface layouts in Figma and converting them into elegant web prototypes.",
      iconName: "Palette"
    },
    {
      title: "Frontend Development",
      description: "Developing robust, clean, and interactive websites using industry-standard semantic HTML5, CSS3, and JavaScript.",
      iconName: "Code"
    },
    {
      title: "Responsive Website Development",
      description: "Building responsive designs using Tailwind CSS or Bootstrap that look stunning on desktops, tablets, and phones.",
      iconName: "Smartphone"
    },
    {
      title: "React.js Development",
      description: "Implementing fluid, interactive modern single-page applications with dynamic states and component modularity in React.",
      iconName: "Cpu"
    },
    {
      title: "UI/UX Design",
      description: "Creating user-centric wireframes, user journeys, color pairings, and interactive mockups to optimize conversion rates.",
      iconName: "Layout"
    },
    {
      title: "Landing Page Development",
      description: "Developing fast, SEO-friendly, and lightweight marketing landing pages designed to clearly convey specific branding.",
      iconName: "Layers"
    }
  ] as Service[],

  achievements: [
    {
      title: "Frontend Projects Completed",
      description: "Successfully built and launched multiple responsive academic and personal web projects.",
      count: 12,
      suffix: "+"
    },
    {
      title: "Semester Progress Tracker",
      description: "Successfully progressing in the 3rd year of BS Computer Science with excellence.",
      count: 6,
      suffix: "th sem"
    },
    {
      title: "Key Projects Designed",
      description: "Successfully designed Website Blocker and KFC restaurant applications.",
      count: 2,
      suffix: ""
    },
    {
      title: "Technologies Mastered",
      description: "Possess a strong core foundation in HTML, CSS, JS, React, and databases.",
      count: 15,
      suffix: "+"
    }
  ] as Achievement[]
};
