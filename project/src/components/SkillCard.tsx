import React, { useState } from 'react';
import { Skill } from '../types/skill';
import { motion } from '../utils/motionProxy';

interface SkillCardProps {
  skill: Skill;
  index: number;
  highlight: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, highlight }) => {
  const [hovered, setHovered] = useState(false);
  
  // Highlight matching text if search term is present
  const highlightText = (text: string) => {
    if (!highlight) return text;
    
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() 
        ? <span key={i} className="bg-cyan-500/30 text-cyan-200">{part}</span> 
        : part
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.5)' 
      }}
      className={`bg-gradient-to-br from-gray-800 to-gray-850 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 ${
        hovered ? 'shadow-lg shadow-cyan-500/10' : 'shadow-md shadow-black/20'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-white">
            {highlightText(skill.name)}
          </h3>
          <div 
            className={`h-2 w-2 rounded-full ${skill.level >= 75 ? 'bg-green-400' : skill.level >= 50 ? 'bg-yellow-400' : 'bg-blue-400'}`}
          />
        </div>
        
        <p className="text-sm text-gray-400 mb-4">
          {highlightText(skill.description)}
        </p>
        
        <div className="w-full bg-gray-700 rounded-full h-1.5">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: hovered ? `${skill.level}%` : '0%',
              transitionDelay: '0.1s'
            }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-xs text-gray-500">Proficiency</span>
          <span className="text-xs text-gray-400">{skill.level}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;