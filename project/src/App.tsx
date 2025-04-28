import React from 'react';
import Header from './components/Header';
import SkillsShowcase from './components/SkillsShowcase';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen text-white">
      <ScrollProgress />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <SkillsShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;