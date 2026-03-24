import React from 'react';

const Skills = () => {
  const skillsList = [
    { category: 'Programming Languages', items: 'JavaScript, Python, R' },
    { category: 'Frontend Development', items: 'HTML5, CSS, JavaScript, React.js' },
    { category: 'Backend Development', items: 'Node.js, Express.js' },
    { category: 'Database', items: 'MongoDB, MySQL' },
    { category: 'Tools & Platforms', items: ' Antigravity,Git, GitHub, VS Code, Power BI, Excel' },
    { category: 'Other Skills', items: 'Photoshop Lr Editing, Data Visualization, Video editing, AI Tools (ChatGPT, Google LLM, Replit)' },
    { category: 'Soft Skills', items: 'Time Management, Quick Learner, Self Learning, Self Motivator, Team Work' }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills Summary</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {skillsList.map((skill, index) => (
          <div key={index} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.8rem', fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>
              {skill.category}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
              {skill.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
