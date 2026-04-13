import React from 'react';

const MissionVision: React.FC = () => {
    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <header style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                    Nossa <span style={{ color: 'var(--primary)' }}>Identidade</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
                    O propósito que nos move e a bússola que orienta a SafeTrust na construção de um futuro digital seguro e escalável.
                </p>
            </header>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
                {/* Missão */}
                <div style={{ padding: '2rem', borderLeft: '4px solid var(--primary)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-20px', left: '10px', fontSize: '6rem', color: 'var(--primary)', opacity: 0.1, fontFamily: 'serif', lineHeight: 0.8 }}>"</div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)', letterSpacing: '0.05em' }}>Missão</h2>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 300 }}>
                        "Projetar e implementar arquiteturas digitais de alta performance e segurança institucional, transformando desafios tecnológicos complexos em soluções robustas, inteligentes e centradas no usuário."
                    </p>
                </div>

                {/* Visão */}
                <div style={{ padding: '2rem', borderLeft: '4px solid var(--secondary)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-20px', left: '10px', fontSize: '6rem', color: 'var(--secondary)', opacity: 0.1, fontFamily: 'serif', lineHeight: 0.8 }}>"</div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)', letterSpacing: '0.05em' }}>Visão</h2>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 300 }}>
                        "Ser a referência global em liderança técnica e engenharia de elite, moldando um futuro digital onde a segurança e a escalabilidade sejam os pilares fundamentais de todas as instituições de missão crítica."
                    </p>
                </div>
            </section>

            <section>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)' }}>Valores</h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--grad-premium)', margin: '1rem auto' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: 'Excelência em Engenharia', text: 'Compromisso intransigente com a qualidade técnica, padrões rigorosos de desenvolvimento e soluções de longevidade tecnológica.', color: 'var(--primary)' },
                        { title: 'Segurança Institucional', text: 'A proteção e a resiliência de dados e processos como a base inegociável de cada projeto entregue.', color: 'var(--secondary)' },
                        { title: 'Liderança Técnica', text: 'Equipes seniores com visão estratégica, unindo inteligências para resolver problemas de alta complexidade.', color: 'var(--accent)' },
                        { title: 'Inovação Responsável', text: 'Evolução digital constante, equilibrando o uso de tecnologias de ponta com a estabilidade necessária para ambientes empresariais exigentes.', color: 'var(--primary)' },
                        { title: 'Foco no Impacto Real', text: 'Entregar tecnologia como um instrumento de geração de valor, garantindo que cada solução enderece de forma prática as dores do mercado.', color: 'var(--secondary)' }
                    ].map((valor, idx) => (
                        <div key={idx} className="glass-card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: valor.color }}></div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{valor.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{valor.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default MissionVision;
