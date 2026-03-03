import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="py-8 mt-16 border-t"
      style={{ borderColor: 'var(--footer-border)' }}
    >
      <div className="container mx-auto px-4 text-center text-sm text-[var(--text-secondary)] space-y-2">
        <a
          href="mailto:info@paoloronco.it"
          className="block text-[var(--text-primary)] hover:text-cyan-400 transition-colors duration-200"
        >
          info@paoloronco.it
        </a>
        <a
          href="https://www.linkedin.com/in/paolo-ronco-685a5722a/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-1 text-[var(--text-primary)] hover:text-cyan-400 transition-colors duration-200"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
