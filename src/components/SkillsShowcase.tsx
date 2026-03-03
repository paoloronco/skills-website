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
        <h1
          className="text-4xl md:text-6xl font-bold mb-8 inline-block text-transparent bg-clip-text animate-gradient-xy"
          style={{ backgroundImage: 'var(--hero-gradient)' }}
        >
          Paolo Ronco - TechSkills
        </h1>
        <p className="text-[var(--text-secondary)] md:text-lg mb-12 max-w-3xl">
          Cybersecurity analyst specialized in cloud defense, resilient networking, automation, AI operations, and digital platforms.
        </p>
        
        <div className="relative w-full max-w-md mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[var(--text-secondary)]" />
          </div>
          <input
            type="text"
            placeholder="Search skills..."
            className="block w-full rounded-lg py-3 pl-10 pr-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            style={{
              backgroundColor: 'var(--input-bg)',
              borderColor: 'var(--input-border)'
            }}
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
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--pill-bg)',
                borderColor: 'var(--pill-border)',
                color: 'var(--pill-text)',
                boxShadow: 'var(--pill-shadow)'
              }}
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
