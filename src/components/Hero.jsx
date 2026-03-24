import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px'
    }}>
      <div className="section-container" style={{ paddingTop: 0 }}>
        <p className="animate-fade-in-up" style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontSize: '1.2rem', letterSpacing: '2px' }}>
          {"> SYSTEM.INIT('Hi,I am');"}
        </p>

        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <h1 className="typewriter" style={{ fontSize: 'clamp(40px, 8vw, 80px)', color: 'var(--text-primary)', margin: 0, paddingRight: '10px' }}>
            ARCHA L A
          </h1>
        </div>

        <h2 className="animate-fade-in-up delay-2" style={{ fontSize: 'clamp(20px, 4vw, 38px)', color: 'var(--text-secondary)', marginBottom: '2.5rem', textTransform: 'none' }}>
          Mern Stack Developer &<span className="glitch-hover" style={{ color: 'var(--text-primary)', borderBottom: '2px dashed var(--accent-color)' }}> Antigravity AI Expert</span>
        </h2>

        <p className="text-secondary animate-fade-in-up delay-3" style={{ maxWidth: '650px', fontSize: '1.15rem', marginBottom: '3rem', lineHeight: '1.8', fontFamily: 'var(--font-main)', textTransform: 'none' }}>
          Bridging the gap between statistical data analysis, modern web architectures, and advanced AI technologies. I specialize in building scalable, high-performance applications leveraging the MERN stack and innovative Antigravity modeling to deliver cutting-edge digital experiences.
        </p>

        <div className="animate-fade-in-up delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            {"< Execute >"}
          </a>
          <a href="https://github.com/ARCHA-L-A" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            GitHub.Log
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
