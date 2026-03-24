import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'Student Management System',
      tech: 'MERN Stack',
      description: 'A comprehensive full-stack application for managing student data securely. Built closely aligned with AVODHA course requirements.',
      link: '#'
    },
    {
      title: 'Sales Dashboard',
      tech: 'Power BI',
      description: 'An interactive data dashboard built using Power BI. Provides insightful analytics and business performance metrics for sales data.',
      link: '#'
    },
    {
      title: 'Personal Portfolio Website',
      tech: 'React.js, Vite',
      description: 'A custom-built, responsive portfolio website highlighting projects, skills, and experience with a modern glassmorphism design system.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects & Certificates</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projectData.map((project, index) => (
          <div key={index} className="glass-panel" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ color: 'var(--accent-color)', fontSize: '2rem' }}>📁</div>
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {project.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
              {project.description}
            </p>
            <div style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              {project.tech}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
