import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 py-4 md:py-5 text-center">
          <nav className="flex items-center gap-4 text-sm font-medium text-gray-300">
            <a
              href="https://paoloronco.it"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Main Website
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://github.com/paoloronco/skills-website"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-semibold">Paolo Ronco - TechSkills</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
