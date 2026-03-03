import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const menuLinks = [
  { label: 'Main Website', href: 'https://paoloronco.it' },
  { label: 'GitHub', href: 'https://github.com/paoloronco/skills-website' }
];

const Header: React.FC = () => {
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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-semibold">Paolo Ronco - TechSkills</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-300">
            {menuLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="mt-2 py-4 px-4 bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-lg">
              <nav className="flex flex-col space-y-3 text-gray-200">
                {menuLinks.map(({ label, href }) => (
                  <a
                    key={`${label}-mobile`}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
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
