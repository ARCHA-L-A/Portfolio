import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education & Certification</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div className="glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Bachelor of Science - Statistics</h3>
            <span className="highlight" style={{ fontSize: '0.9rem', fontFamily: 'var(--font-heading)' }}>2021 - 2024</span>
          </div>
          <p className="text-secondary" style={{ marginBottom: '1rem' }}>
            Christian College Kattakada Trivandrum, Kerala
          </p>
          <ul style={{ listStyleType: 'none' }}>
            <li style={{ position: 'relative', paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)' }}>▹</span>
              Percentage: 75%
            </li>
          </ul>
        </div>

        <div className="glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>MERN Stack Development</h3>
            <span className="highlight" style={{ fontSize: '0.9rem', fontFamily: 'var(--font-heading)' }}>Certification</span>
          </div>
          <p className="text-secondary" style={{ marginBottom: '1rem' }}>
            Avodha Education
          </p>
          <ul style={{ listStyleType: 'none' }}>
            <li style={{ position: 'relative', paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)' }}>▹</span>
              Intensive full-stack curriculum encompassing MongoDB, Express.js, React.js, and Node.js.
            </li>
          </ul>
        </div>

        <div className="glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>NCC ARMY C CERTIFICATE</h3>
            <span className="highlight" style={{ fontSize: '0.9rem', fontFamily: 'var(--font-heading)' }}>Certification</span>
          </div>
          <p className="text-secondary" style={{ marginBottom: '1rem' }}>
            National Cadet Corps
          </p>
          <ul style={{ listStyleType: 'none' }}>
            <li style={{ position: 'relative', paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)' }}>▹</span>
              Demonstrated leadership, discipline, and basic military training skills.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Education;
