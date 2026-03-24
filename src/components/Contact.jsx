import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-container" style={{ textAlign: 'center', maxWidth: '600px' }}>
      <h2 className="section-title">Get In Touch</h2>
      <p className="text-secondary" style={{ marginBottom: '2rem' }}>
        I'm currently seeking an entry-level developer role to apply my technical and analytical skills to real-world projects. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', alignItems: 'center' }}>
        <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          📞 7592056961
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '400px', lineHeight: '1.6' }}>
          📍 THAIVILAKATHU VEEDU, VENGANOOR<br/>
          TRIVANDRUM, KERALA
        </p>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
        <a href="https://github.com/ARCHA-L-A" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.75rem 2rem' }}>
          GitHub
        </a>
        <a href="https://linkedin.com/in/archa-l-a-281659308" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.75rem 2rem' }}>
          LinkedIn
        </a>
      </div>
      
      <footer style={{ marginTop: '5rem', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        <p>Built by Archa L A.</p>
        <p>Powered by Vite & React</p>
      </footer>
    </section>
  );
};

export default Contact;
