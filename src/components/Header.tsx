import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';

interface HeaderProps {
  visibleCategories: string[];
}

const Header: React.FC<HeaderProps> = ({ visibleCategories }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Derive categories from the skills data so the header updates automatically
  // when categories are added/removed in `src/data/skills.ts`.
  const categories = visibleCategories;

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(category.replace(/\s+/g, '-').toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-semibold">Paolo Ronco TechSkills</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => scrollToCategory(category)}
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline decoration-cyan-400 underline-offset-8"
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="mt-2 py-4 px-4 bg-gray-800/95 backdrop-blur-sm border border-blue-200 rounded-lg shadow-lg">
              <nav className="flex flex-col space-y-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => scrollToCategory(category)}
                    className="text-gray-200 hover:text-white transition-colors duration-200 py-2 text-left"
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;