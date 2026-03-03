import React from 'react';
import { FOUNDERS_DATA } from '../data/ContentStore';

const About: React.FC = () => {
    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <header style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Quatro Amigos, <br /><span style={{ color: 'var(--primary)' }}>Uma Visão Bold.</span></h1>
                <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                    Tudo começou em conversas sobre o futuro da tecnologia. Hoje, unimos nossas inteligências para construir soluções que fazem a diferença.
                </p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                {FOUNDERS_DATA.map(f => (
                    <div key={f.id} className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                        <div style={{ width: '150px', height: '150px', background: 'var(--grad-premium)', borderRadius: '50%', margin: '0 auto 2rem', border: '4px solid rgba(255,255,255,0.05)' }}></div>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{f.name}</h2>
                        <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>{f.role}</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>{f.story}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default About;
