import { useMemo, useState } from 'react';
import Header from './components/Header';
import SkillsShowcase from './components/SkillsShowcase';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { skillsByCategory } from './data/skills';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

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
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen text-white">
      <ScrollProgress />
      <Header visibleCategories={visibleCategories} />
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