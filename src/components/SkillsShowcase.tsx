import React from 'react';
import { Search } from 'lucide-react';
import { skillsByCategory } from '../data/skills';
import SkillCategory from './SkillCategory';

interface SkillsShowcaseProps {
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  visibleCategories: string[];
}

const SkillsShowcase: React.FC<SkillsShowcaseProps> = ({ searchTerm, setSearchTerm, visibleCategories }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="mb-16 mt-20 md:mt-28">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 inline-block text-transparent bg-clip-text animate-gradient-xy">
          Paolo Ronco - TechSkills 
        </h1>
        <p className="text-gray-400 text-center md:text-lg mb-12 max-w-3xl mx-auto">
          Expertise in cloud platforms, cybersecurity, networking, DevOps, Automation & more.
        </p>
        
        <div className="relative max-w-md mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search skills..."
            className="block w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-10 pr-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="space-y-24">
        {visibleCategories.map(category => (
          <SkillCategory 
            key={category} 
            category={category} 
            skills={skillsByCategory[category]}
            searchTerm={searchTerm}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;