import React from 'react';
import { PROCESS_DATA } from '../data/ContentStore';

const Process: React.FC = () => {
    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <header style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Nosso <span style={{ color: 'var(--primary)' }}>Processo Inteligente</span></h1>
                <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                    Da imersão à entrega final, cada passo é movido pela ousadia de inovar.
                </p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {PROCESS_DATA.map((p, idx) => (
                    <div key={p.id} style={{
                        display: 'flex', gap: '3rem', alignItems: 'center',
                        flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse'
                    }}>
                        <div style={{
                            fontSize: '8rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)',
                            fontFamily: 'Outfit', flex: '0 0 200px', textAlign: 'center'
                        }}>
                            0{p.id}
                        </div>
                        <div className="glass-card" style={{ padding: '3rem', flex: 1 }}>
                            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{p.title}</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>{p.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Process;
