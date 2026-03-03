import { Language } from '../contexts/LanguageContext';

export const languageLabels: Record<Language, string> = {
  en: 'EN',
  it: 'IT'
};

export const uiTranslations = {
  en: {
    heroTitle: 'Paolo Ronco - TechSkills',
    heroSubtitle: 'Cybersecurity analyst specialized in cloud defense, resilient networking, automation, AI operations, and digital platforms.',
    searchPlaceholder: 'Search skills…',
    header: {
      mainWebsite: 'Main Website',
      github: 'GitHub'
    },
    accessibility: {
      languageToggle: 'Switch language'
    },
    labels: {
      proficiency: 'Proficiency'
    }
  },
  it: {
    heroTitle: 'Paolo Ronco - TechSkills',
    heroSubtitle: 'Analista di cybersecurity specializzato in difesa cloud, networking resiliente, automazione, AI operations e piattaforme digitali.',
    searchPlaceholder: 'Cerca competenze…',
    header: {
      mainWebsite: 'Sito principale',
      github: 'GitHub'
    },
    accessibility: {
      languageToggle: 'Cambia lingua'
    },
    labels: {
      proficiency: 'Competenza'
    }
  }
} as const;

export const categoryLabels: Record<Language, Record<string, string>> = {
  en: {
    'Security & Zero Trust': 'Security & Zero Trust',
    'Cloud Platforms & Architecture': 'Cloud Platforms & Architecture',
    'Networking & Edge': 'Networking & Edge',
    'DevOps & Platform Engineering': 'DevOps & Platform Engineering',
    'Automation & Orchestration': 'Automation & Orchestration',
    'Observability & Analytics': 'Observability & Analytics',
    'AI & Machine Intelligence': 'AI & Machine Intelligence',
    'Infrastructure & Operations': 'Infrastructure & Operations',
    'Software Development & Digital Platforms': 'Software Development & Digital Platforms',
    'Professional & Core Skills': 'Professional & Core Skills'
  },
  it: {
    'Security & Zero Trust': 'Sicurezza & Zero Trust',
    'Cloud Platforms & Architecture': 'Cloud Platforms & Architecture',
    'Networking & Edge': 'Networking & Edge',
    'DevOps & Platform Engineering': 'DevOps & Platform Engineering',
    'Automation & Orchestration': 'Automazione & Orchestrazione',
    'Observability & Analytics': 'Osservabilità & Analytics',
    'AI & Machine Intelligence': 'AI & Machine Intelligence',
    'Infrastructure & Operations': 'Infrastruttura & Operations',
    'Software Development & Digital Platforms': 'Sviluppo Software & Digital Platforms',
    'Professional & Core Skills': 'Competenze Professionali & Core'
  }
};
