import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(3, 3, 3, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 0 15px rgba(0, 255, 65, 0.1)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 255, 65, 0.2)' : 'none'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.5rem', color: 'var(--accent-color)' }}>
          Archa L A
        </div>
        <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#about" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', letterSpacing: '1px' }}>About</a>
          <a href="#experience" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', letterSpacing: '1px' }}>Experience</a>
          <a href="#education" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', letterSpacing: '1px' }}>Education</a>
          <a href="#skills" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', letterSpacing: '1px' }}>Skills</a>
          <a href="#projects" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', letterSpacing: '1px' }}>Projects</a>
          <a href="#contact" className="btn-primary" style={{ padding: '0.4rem 1rem' }}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
