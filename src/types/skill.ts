export interface Skill {
  name: string;
  description: string;
  level: number; // 0 to 100
  yearsExperience?: number;
  subSkills?: string[];
  translations?: {
    [lang: string]: {
      name?: string;
      description?: string;
      subSkills?: string[];
    };
  };
}

export interface SkillCategory {
  [category: string]: Skill[];
}
