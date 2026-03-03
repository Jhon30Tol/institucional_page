import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <nav className="glass-card" style={{
            position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)',
            width: 'min(90%, var(--container-max))', zIndex: 1000,
            padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>SafeTrust</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Início</Link>
                <Link to="/sobre" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Sobre</Link>
                <Link to="/processo" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Processo</Link>
            </div>
            <a href="#contato" className="btn-premium" style={{ padding: '0.5rem 1.5rem' }}>Contato</a>
        </nav>
    );
};

export const Footer: React.FC = () => {
    return (
        <footer style={{ padding: '4rem 2rem', background: 'var(--bg-surface)', marginTop: '4rem' }}>
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div>
                    <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>SafeTrust</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Soluções inteligentes, amizade sólida e inovação ousada.</p>
                </div>
                <div>
                    <h4>Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                        <li><Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link></li>
                        <li><Link to="/sobre" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Founders</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
