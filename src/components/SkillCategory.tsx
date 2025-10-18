import React from 'react';
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
      <div className="flex items-center mb-8 group">
        <div className="bg-gradient-to-r from-gray-800 to-gray-800/30 p-4 rounded-lg mr-4 transition-transform duration-500 group-hover:scale-110">
          <CategoryIcon className="w-8 h-8 text-cyan-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">{category}</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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