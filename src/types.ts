export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  category: 'web' | 'design';
  imagePlaceholderColor: string;
}

export interface Skill {
  name: string;
  level: number; // percentage
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface Achievement {
  title: string;
  description: string;
  count: number;
  suffix?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
