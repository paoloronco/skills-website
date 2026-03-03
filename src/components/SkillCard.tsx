import React, { useEffect, useRef, useState } from 'react';
import { Skill } from '../types/skill';
import { motion } from '../utils/motionProxy';
import { useLanguage } from '../contexts/LanguageContext';
import { uiTranslations } from '../locales/translations';

interface SkillCardProps {
  skill: Skill;
  index: number;
  highlight: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, highlight }) => {
  const [hovered, setHovered] = useState(false);
  const [showProficiency, setShowProficiency] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const progressRaf = useRef<number | null>(null);
  const { language } = useLanguage();
  const copy = uiTranslations[language];

  const triggerProgress = () => {
    setShowProficiency(false);
    if (progressRaf.current) cancelAnimationFrame(progressRaf.current);
    progressRaf.current = requestAnimationFrame(() => setShowProficiency(true));
  };

  useEffect(() => {
    triggerProgress();
    return () => {
      if (progressRaf.current) cancelAnimationFrame(progressRaf.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const ROTATION_STRENGTH = 14;

    setTilt({
      rotateX: (0.5 - y) * ROTATION_STRENGTH,
      rotateY: (x - 0.5) * ROTATION_STRENGTH
    });
  };

  const resetTilt = () => setTilt({ rotateX: 0, rotateY: 0 });
  
  // Highlight matching text if search term is present
  const highlightText = (text: string) => {
    if (!highlight) return text;
    
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() 
        ? (
          <span
            key={i}
            className="px-0.5 rounded"
            style={{
              backgroundColor: 'var(--highlight-bg)',
              color: 'var(--highlight-text)'
            }}
          >
            {part}
          </span>
        )
        : part
    );
  };

  const localized = skill.translations?.[language];
  const descriptionText = localized?.description ?? skill.description;
  const subSkills = localized?.subSkills ?? skill.subSkills;

  const cardStyle = {
    transformStyle: 'preserve-3d' as const,
    willChange: 'transform' as const,
    perspective: 1200,
    background: 'var(--card-bg)',
    borderColor: 'var(--card-border)',
    boxShadow: hovered ? 'var(--card-shadow-strong)' : 'var(--card-shadow)'
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20, rotateX: 0, rotateY: 0 }}
      animate={{ opacity: 1, y: 0, rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
      transition={{ duration: 0.4, delay: index * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ 
        scale: 1.05, 
        filter: 'var(--card-hover-filter)'
      }}
      style={cardStyle}
      className="h-full flex flex-col border rounded-xl overflow-hidden transition-all duration-300"
      onMouseEnter={() => {
        setHovered(true);
        triggerProgress();
      }}
      onMouseLeave={() => {
        setHovered(false);
        resetTilt();
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {highlightText(skill.translations?.[language]?.name ?? skill.name)}
            </h3>
            {skill.handsOn && (
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-emerald-400/40 text-emerald-300 bg-emerald-400/10 w-fit">
                {copy.labels.handsOn}
              </span>
            )}
          </div>
          <div 
            className={`h-2 w-2 rounded-full ${skill.level >= 75 ? 'bg-green-400' : skill.level >= 50 ? 'bg-yellow-400' : 'bg-blue-400'}`}
          />
        </div>
        
        <p className="text-sm text-[var(--text-secondary)] mb-4">
          {highlightText(descriptionText)}
        </p>
        {subSkills && subSkills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {subSkills.map(sub => (
              <span
                key={`${skill.name}-sub-${sub}`}
                className="text-xs font-semibold px-2 py-1 rounded-full border border-[var(--divider)] text-[var(--text-secondary)] bg-[var(--pill-bg)]"
              >
                {sub}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <div
            className="w-full rounded-full h-1.5 overflow-hidden"
            style={{ backgroundColor: 'var(--proficiency-track)' }}
          >
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: showProficiency ? `${skill.level}%` : '0%',
                transitionDelay: '0.1s'
              }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-xs text-[var(--text-secondary)]">{copy.labels.proficiency}</span>
            <span className="text-xs text-[var(--text-secondary)]">{skill.level}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
