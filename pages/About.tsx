import React from 'react';
import { FOUNDERS_DATA } from '../data/ContentStore';

const About: React.FC = () => {
    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2rem', lineHeight: 1.2 }}>
                    Liderança <span style={{ color: 'var(--primary)' }}>Técnica</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', maxWidth: '850px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.8 }}>
                    Consolidada a partir de uma visão compartilhada sobre a evolução digital, nossa liderança técnica une inteligências para desenvolver tecnologias centradas no usuário.
                    Comprometemo-nos com a excelência na engenharia e na entrega de soluções inteligentes que endereçam os desafios complexos do mercado atual.
                </p>
            </header>

            <section style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '1.2rem', color: 'var(--text-main)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '3rem', opacity: 0.8, textAlign: 'center' }}>
                    Time Técnico
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {FOUNDERS_DATA.map(f => (
                        <div key={f.id} className="glass-card" style={{
                            padding: '2.5rem',
                            display: 'flex',
                            gap: '2.5rem',
                            alignItems: 'flex-start',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{
                                width: '160px',
                                height: '160px',
                                flexShrink: 0,
                                backgroundImage: f.image && f.image !== '/images/founder-placeholder.png' ? `url(${f.image})` : 'var(--grad-premium)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                            }}></div>

                            <div style={{ flex: '1', minWidth: '300px' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{f.name}</h3>
                                <p style={{
                                    color: 'var(--primary)',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    fontSize: '0.85rem'
                                }}>
                                    {f.role}
                                </p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                    {f.story}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default About;
