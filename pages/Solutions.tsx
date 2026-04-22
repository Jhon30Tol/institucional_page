import React from 'react';
import riberfoodLogo from '../imagens/solucoes/riberfood_logo_delivery.jpeg';

const Solutions: React.FC = () => {
    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: 'var(--container-max)', margin: '0 auto', minHeight: '80vh' }}>
            <header style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2rem', lineHeight: 1.2 }}>
                    Nossas <span style={{ color: 'var(--primary)' }}>Soluções</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', maxWidth: '850px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.8 }}>
                    Conheça os projetos e plataformas desenvolvidos pela nossa equipe técnica, entregando arquitetura robusta e escala global.
                </p>
            </header>

            <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', justifyContent: 'center' }}>

                    {/* Projeto Riberfood */}
                    <a
                        href="https://riberfood-landing-page.jonathas-tpereira.workers.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card"
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '3rem',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            width: '180px',
                            height: '180px',
                            marginBottom: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '24px',
                            padding: '1rem',
                            boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.5)'
                        }}>
                            <img
                                src={riberfoodLogo}
                                alt="Logo Riberfood"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Riberfood</h3>
                        <p style={{
                            color: 'var(--primary)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontSize: '0.85rem'
                        }}>
                            App Delivery
                        </p>
                    </a>

                    {/* Espaço para futuros projetos... */}

                </div>
            </section>
        </main>
    );
};

export default Solutions;
