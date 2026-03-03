import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { languageLabels, uiTranslations } from '../locales/translations';

const menuLinks = [
  { key: 'mainWebsite' as const, href: 'https://paoloronco.it' },
  { key: 'github' as const, href: 'https://github.com/paoloronco/skills-website' },
  { key: 'linkedin' as const, href: 'https://www.linkedin.com/in/paolo-ronco-685a5722a/' }
];

const languageOrder: Array<keyof typeof languageLabels> = ['en', 'it'];

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const copy = uiTranslations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderThemeToggle = (variant: 'desktop' | 'mobile' = 'desktop') => (
    <label
      className={`relative inline-flex items-center cursor-pointer ${
        variant === 'desktop' ? '' : 'mt-4'
      }`}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        aria-label={copy.accessibility.themeToggle}
      />
      <div
        className="w-14 h-7 rounded-full transition-all duration-300 relative flex items-center px-1"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.95))'
            : 'linear-gradient(135deg, #e2e8f0, #f8fafc)',
          border: theme === 'dark'
            ? '1px solid rgba(148, 163, 184, 0.6)'
            : '1px solid rgba(15, 23, 42, 0.2)',
          boxShadow: theme === 'dark'
            ? '0 0 12px rgba(56, 189, 248, 0.35)'
            : 'inset 0 2px 6px rgba(15, 23, 42, 0.15)'
        }}
      >
        <span
          className="absolute top-1 left-1 w-5 h-5 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center border"
          style={{
            transform: theme === 'dark' ? 'translateX(28px)' : 'translateX(0)',
            color: theme === 'dark' ? '#0f172a' : '#f8fafc',
            backgroundColor: theme === 'dark' ? '#e2e8f0' : '#0f172a',
            borderColor: theme === 'dark' ? 'rgba(15,23,42,0.15)' : 'rgba(248,250,252,0.35)'
          }}
        >
          {theme === 'dark' ? (
            <Moon className="w-3.5 h-3.5" />
          ) : (
            <Sun className="w-3.5 h-3.5" />
          )}
        </span>
      </div>
    </label>
  );

  const renderLanguageToggle = (variant: 'desktop' | 'mobile' = 'desktop') => (
    <div
      className={`flex items-center rounded-full border border-[var(--divider)] bg-[var(--toggle-track)] p-0.5 ${
        variant === 'mobile' ? 'md:hidden mt-4' : ''
      }`}
      role="group"
      aria-label={copy.accessibility.languageToggle}
    >
      {languageOrder.map(code => (
        <button
          key={`language-${code}-${variant}`}
          type="button"
          onClick={() => setLanguage(code)}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
            language === code
              ? 'bg-cyan-400 text-slate-900'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`}
        >
          {languageLabels[code]}
        </button>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--header-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? `1px solid var(--divider)` : '1px solid transparent'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-semibold">Paolo Ronco - TechSkills</span>
            </div>
            {renderLanguageToggle('desktop')}
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-[var(--text-secondary)]">
            {menuLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                {copy.header[key]}
              </a>
            ))}
            {renderThemeToggle()}
          </div>

          <button
            className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="mt-2 py-4 px-4 bg-[var(--header-bg)] backdrop-blur-sm border border-[var(--divider)] rounded-lg shadow-lg">
              <nav className="flex flex-col space-y-3 text-[var(--text-secondary)]">
                {menuLinks.map(({ key, href }) => (
                  <a
                    key={`${key}-mobile`}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--text-primary)] transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {copy.header[key]}
                  </a>
                ))}
              </nav>
              {renderLanguageToggle('mobile')}
              {renderThemeToggle('mobile')}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
