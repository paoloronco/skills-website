import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Paolo Ronco Skills</p>
        <p>Contact me at: info@paoloronco.it</p>
      </div>
    </footer>
  );
};

export default Footer;