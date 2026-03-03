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

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(category.replace(/\s+/g, '-').toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="mb-16 mt-20 md:mt-28 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 inline-block text-transparent bg-clip-text animate-gradient-xy">
          Paolo Ronco - TechSkills
        </h1>
        <p className="text-gray-400 md:text-lg mb-12 max-w-3xl">
          Expertise in cloud platforms, cybersecurity, networking, DevOps, Automation & more.
        </p>
        
        <div className="relative w-full max-w-md mb-8">
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

        <div className="flex flex-wrap justify-center gap-3 w-full max-w-5xl mb-12">
          {visibleCategories.map(category => (
            <button
              key={`pill-${category}`}
              type="button"
              onClick={() => scrollToCategory(category)}
              className="px-4 py-2 rounded-full border border-cyan-500/40 bg-gray-800/60 text-sm font-medium text-gray-200 hover:bg-cyan-500/15 hover:border-cyan-400 hover:text-white transition-all duration-200 shadow-sm shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              {category}
            </button>
          ))}
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
