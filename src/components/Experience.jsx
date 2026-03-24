import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Where I've Worked</h2>
      <div className="glass-panel" style={{ borderLeft: '4px solid var(--accent-color)' }}>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
          DMS Executive <span className="highlight">@ SV TVS Motor Company</span>
        </h3>
        <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Trivandrum, Kerala | 2024 - current
        </p>
        
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ position: 'relative', paddingLeft: '30px', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)' }}>▹</span>
            Created sales dashboards using Power BI to monitor business performance.
          </li>
          <li style={{ position: 'relative', paddingLeft: '30px', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)' }}>▹</span>
            Managed inventory and stock tracking systems using Excel and MySQL.
          </li>
          <li style={{ position: 'relative', paddingLeft: '30px', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)' }}>▹</span>
            Processed vehicle registration, insurance documentation, and HSRP number plates.
          </li>
          <li style={{ position: 'relative', paddingLeft: '30px', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)' }}>▹</span>
            Handled dealer management system (DMS) billing and reporting operations.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
