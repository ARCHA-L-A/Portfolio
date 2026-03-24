import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        <div>
          <p className="text-secondary" style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Hello! My name is <span className="highlight">Archa L A</span>. I am a BSc Statistics graduate with a strong interest in Full Stack Web Development and Data Analysis. I enjoy combining analytical thinking with software engineering to build robust solutions.
          </p>
          <p className="text-secondary" style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            I am highly skilled in <span className="highlight">HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB</span> for building modern web applications. Additionally, I am experienced in dashboard creation, database handling, and REST API development.
          </p>
          <p className="text-secondary" style={{ fontSize: '1.05rem' }}>
            My recent professional journey involved serving as a DMS Executive at SV TVS Motor Company, where I managed sales dashboards, handled inventory using MySQL, and successfully navigated complex billing operations. I bring strong time management, self-motivation, and collaborative teamwork skills to any engineering challenge.
          </p>
        </div>
        <div style={{ position: 'relative', height: '300px', borderRadius: '16px', overflow: 'hidden', border: '2px solid var(--accent-color)', boxShadow: '0 0 20px rgba(102, 252, 241, 0.3)' }}>
          <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--accent-secondary)', opacity: 0.2, position: 'absolute', top: 0, left: 0, zIndex: 1, transition: 'all 0.3s ease' }} className="hover-clear"></div>
          <img 
            src="/portrait.jpeg" 
            alt="Archa L A Portrait" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
