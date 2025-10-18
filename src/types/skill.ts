export interface Skill {
  name: string;
  description: string;
  level: number; // 0 to 100
  yearsExperience?: number;
}

export interface SkillCategory {
  [category: string]: Skill[];
}