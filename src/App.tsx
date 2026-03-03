import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import SkillsShowcase from './components/SkillsShowcase';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { skillsByCategory } from './data/skills';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const visibleCategories = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return Object.keys(skillsByCategory);

    return Object.keys(skillsByCategory).filter(category =>
      skillsByCategory[category].some(skill =>
        skill.name.toLowerCase().includes(term) ||
        skill.description.toLowerCase().includes(term)
      )
    );
  }, [searchTerm]);

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ background: 'var(--app-bg)', color: 'var(--text-primary)' }}
    >
      <ScrollProgress />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 py-16">
        <SkillsShowcase
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          visibleCategories={visibleCategories}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
