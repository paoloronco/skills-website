import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="py-8 mt-16 border-t"
      style={{ borderColor: 'var(--footer-border)' }}
    >
      <div className="container mx-auto px-4 text-center text-sm text-[var(--text-secondary)]">
        <a
          href="mailto:info@paoloronco.it"
          className="text-[var(--text-primary)] hover:text-cyan-400 transition-colors duration-200"
        >
          info@paoloronco.it
        </a>
      </div>
    </footer>
  );
};

export default Footer;
