import React from 'react';
import { SERVICES_DATA, FOUNDERS_DATA } from '../data/ContentStore';

export const Hero: React.FC = () => (
    <section style={{ padding: 'clamp(6rem, 15vh, 12rem) 1.5rem 6rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'var(--primary-glow)', filter: 'blur(100px)', borderRadius: '50%', zIndex: -1 }}></div>
        <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.1 }}>
            Segurança de nível <span style={{ color: 'var(--primary)' }}>Institucional</span><br />
            <span style={{ fontSize: '0.6em', opacity: 0.8, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Arquitetura & Futuros Digitais Seguros</span>
        </h1>
        <p className="animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '2rem auto', animationDelay: '0.2s' }}>
            Uma equipe de liderança técnica de alto desempenho que oferece soluções empresariais robustas para os ambientes mais exigentes do mundo.
        </p>
        <div className="animate-fade-in" style={{ marginTop: '2.5rem', animationDelay: '0.4s' }}>
            <a href="#solucoes" className="btn-premium">Descubra nosso Processo</a>
        </div>
    </section>
);

export const MissionStatement: React.FC = () => (
    <section style={{ padding: '4rem 2rem', background: 'var(--bg-deep)' }}>
        <div style={{ 
            maxWidth: '1000px', 
            margin: '0 auto', 
            borderLeft: '4px solid var(--primary)', 
            paddingLeft: '2.5rem',
            position: 'relative'
        }}>
            <div style={{ position: 'absolute', left: '-10px', top: '-10px', fontSize: '4rem', opacity: 0.1, color: 'var(--primary)', fontFamily: 'serif' }}>"</div>
            <p style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                lineHeight: 1.5, 
                color: 'var(--text-main)', 
                fontStyle: 'italic',
                fontWeight: 300
            }}>
                "Nossa missão é traduzir requisitos técnicos complexos em uma arquitetura resiliente e de nível empresarial que resista ao teste da escala global."
            </p>
        </div>
    </section>
);

export const Services: React.FC = () => (
    <section id="solucoes" style={{ padding: '6rem 2rem', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Pilares Técnicos</h2>
            <p style={{ color: 'var(--text-muted)' }}>Excelência em engenharia para escalas globais.</p>
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

