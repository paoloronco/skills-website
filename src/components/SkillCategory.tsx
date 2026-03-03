import React, { useEffect, useRef, useState } from 'react';
import SkillCard from './SkillCard';
import { Skill } from '../types/skill';
import { getCategoryIcon } from '../utils/categoryIcons';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { categoryLabels } from '../locales/translations';

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  searchTerm: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills, searchTerm }) => {
  const CategoryIcon = getCategoryIcon(category);
  const categoryId = category.replace(/\s+/g, '-').toLowerCase();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const { language } = useLanguage();

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredSkills = normalizedSearch
    ? skills.filter(skill => {
        const candidates = [
          skill.name,
          skill.description,
          skill.translations?.[language]?.name,
          skill.translations?.[language]?.description
        ];
        return candidates.some(text => text?.toLowerCase().includes(normalizedSearch));
      })
    : skills;

  const localizedCategory = categoryLabels[language]?.[category] ?? category;

  useEffect(() => {
    const updateLayout = () => {
      if (typeof window === 'undefined') return;
      const desktop = window.matchMedia('(min-width: 768px)').matches;
      setIsDesktop(desktop);
      if (desktop) {
        setIsCollapsed(false);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [filteredSkills.length]);

  if (searchTerm && filteredSkills.length === 0) {
    return null;
  }

  return (
    <section id={categoryId} className="scroll-mt-20">
      <button
        type="button"
        className="flex w-full items-center justify-between mb-4 group md:mb-8 md:cursor-default"
        onClick={() => {
          if (isDesktop) return;
          setIsCollapsed(prev => !prev);
        }}
        aria-expanded={!isCollapsed}
        aria-controls={`${categoryId}-content`}
      >
        <div className="flex items-center">
          <div
            className="p-4 rounded-lg mr-4 transition-transform duration-500 group-hover:scale-110 border border-transparent"
            style={{ backgroundColor: 'var(--icon-bg)', borderColor: 'var(--divider)' }}
          >
            <CategoryIcon className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">{localizedCategory}</h2>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-[var(--text-secondary)] transition-transform duration-300 md:hidden ${
            isCollapsed ? 'rotate-0' : 'rotate-180'
          }`}
        />
      </button>
      
      <div
        id={`${categoryId}-content`}
        ref={contentRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch transition-all duration-500 ease-in-out ${
          isDesktop ? 'opacity-100' : isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={
          isDesktop
            ? undefined
            : {
                maxHeight: isCollapsed ? 0 : contentHeight ?? 'none',
                overflow: 'hidden'
              }
        }
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
