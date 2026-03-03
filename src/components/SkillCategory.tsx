import React, { useState } from 'react';
import SkillCard from './SkillCard';
import { Skill } from '../types/skill';
import { getCategoryIcon } from '../utils/categoryIcons';

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  searchTerm: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills, searchTerm }) => {
  const CategoryIcon = getCategoryIcon(category);
  const categoryId = category.replace(/\s+/g, '-').toLowerCase();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Filter skills based on search term
  const filteredSkills = searchTerm
    ? skills.filter(
        skill =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : skills;

  // Skip rendering if no skills match the search term
  if (searchTerm && filteredSkills.length === 0) {
    return null;
  }

  return (
    <section id={categoryId} className="scroll-mt-20">
      <button
        type="button"
        className="flex w-full items-center justify-between mb-4 group md:mb-8"
        onClick={() => setIsCollapsed(prev => !prev)}
      >
        <div className="flex items-center">
          <div
            className="p-4 rounded-lg mr-4 transition-transform duration-500 group-hover:scale-110 border border-transparent"
            style={{ backgroundColor: 'var(--icon-bg)', borderColor: 'var(--divider)' }}
          >
            <CategoryIcon className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">{category}</h2>
        </div>
        <span
          className="text-sm font-medium text-[var(--text-secondary)] md:hidden"
        >
          {isCollapsed ? 'Apri' : 'Chiudi'}
        </span>
      </button>
      
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch transition-all duration-300 ${
          isCollapsed ? 'max-h-0 overflow-hidden md:max-h-full' : 'max-h-full'
        }`}
      >
        {filteredSkills.map((skill, index) => (
          <SkillCard 
            key={`${category}-${skill.name}`} 
            skill={skill} 
            index={index}
            highlight={searchTerm}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillCategory;
