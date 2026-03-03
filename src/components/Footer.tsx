import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="py-8 mt-16 border-t"
      style={{ borderColor: 'var(--footer-border)' }}
    >
      <div className="container mx-auto px-4 text-center text-sm text-[var(--text-secondary)]">
        <p>© {new Date().getFullYear()} Paolo Ronco Skills</p>
        <p>Contact me at: info@paoloronco.it</p>
      </div>
    </footer>
  );
};

export default Footer;
