import React from 'react';
import { SERVICES_DATA, FOUNDERS_DATA } from '../data/ContentStore';

export const Hero: React.FC = () => (
    <section style={{ padding: 'clamp(6rem, 15vh, 12rem) 1.5rem 6rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'var(--primary-glow)', filter: 'blur(100px)', borderRadius: '50%', zIndex: -1 }}></div>
        <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.1 }}>
            Transformando <span style={{ color: 'var(--primary)' }}>Amizade</span> em <br />Inovação Ousada.
        </h1>
        <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '2rem auto', animationDelay: '0.2s' }}>
            Somos quatro amigos unidos pela inteligência e pelo desejo de criar softwares que desafiam o convencional.
        </p>
        <div className="animate-fade-in" style={{ marginTop: '2.5rem', animationDelay: '0.4s' }}>
            <a href="#servicos" className="btn-premium">Descubra nosso Processo</a>
        </div>
    </section>
);

export const Services: React.FC = () => (
    <section id="servicos" style={{ padding: '6rem 2rem', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Nossas Soluções</h2>
            <p style={{ color: 'var(--text-muted)' }}>Inteligência aplicada a cada linha de código.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {SERVICES_DATA.map(s => (
                <div key={s.id} className="glass-card" style={{ padding: '2.5rem' }}>
                    <div style={{ width: '50px', height: '50px', background: 'var(--primary)', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* icon placeholder */}
                        <span style={{ color: 'white', fontWeight: 'bold' }}>S</span>
                    </div>
                    <h3 style={{ marginBottom: '1rem' }}>{s.title}</h3>
                    <p style={{ color: 'var(--text-muted)' }}>{s.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export const FoundersBrief: React.FC = () => (
    <section style={{ padding: '6rem 2rem', background: 'var(--bg-surface)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '3rem' }}>
                <h2>Quatro Mentes, Um Objetivo</h2>
                <p style={{ color: 'var(--text-muted)' }}>Nossa história nasceu da amizade e se consolidou através da excelência técnica.</p>
            </div>
            {FOUNDERS_DATA.map(f => (
                <div key={f.id} style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundImage: f.image && f.image !== '/images/founder-placeholder.png' ? `url(${f.image})` : 'var(--grad-premium)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '50%',
                        margin: '0 auto 1.5rem',
                        border: '2px solid rgba(255,255,255,0.1)'
                    }}></div>
                    <h4>{f.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>{f.role}</p>
                </div>
            ))}
        </div>
    </section>
);
