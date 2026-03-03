import React, { useEffect, useRef, useState } from 'react';
import { Skill } from '../types/skill';
import { motion } from '../utils/motionProxy';

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
        ? <span key={i} className="bg-cyan-500/30 text-cyan-200">{part}</span> 
        : part
    );
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20, rotateX: 0, rotateY: 0 }}
      animate={{ opacity: 1, y: 0, rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
      transition={{ duration: 0.4, delay: index * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: '0 30px 60px -25px rgba(6, 182, 212, 0.45)',
        filter: 'drop-shadow(0 15px 35px rgba(14, 165, 233, 0.35))'
      }}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform', perspective: 1200 }}
      className={`h-full min-h-[260px] flex flex-col bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 ${
        hovered ? 'shadow-xl shadow-cyan-500/20' : 'shadow-md shadow-black/30'
      }`}
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
          <h3 className="text-lg font-semibold text-white">
            {highlightText(skill.name)}
          </h3>
          <div 
            className={`h-2 w-2 rounded-full ${skill.level >= 75 ? 'bg-green-400' : skill.level >= 50 ? 'bg-yellow-400' : 'bg-blue-400'}`}
          />
        </div>
        
        <p 
          className="text-sm text-gray-400 mb-4 flex-1 overflow-hidden"
          style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
        >
          {highlightText(skill.description)}
        </p>

        <div className="mt-auto">
          <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: showProficiency ? `${skill.level}%` : '0%',
                transitionDelay: '0.1s'
              }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-xs text-gray-500">Proficiency</span>
            <span className="text-xs text-gray-400">{skill.level}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
