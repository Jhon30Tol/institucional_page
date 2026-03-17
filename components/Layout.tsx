import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../imagens/LOGOTIPO VARIADO MARCA D AGUA.png';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="glass-card" style={{
                position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)',
                width: 'min(95%, var(--container-max))', zIndex: 1000,
                padding: '0.6rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src={logo} alt="SafeTrust Logo" style={{ height: '30px', objectFit: 'contain' }} />
                </Link>

                {/* Desktop Menu */}
                <div className="hide-mobile" style={{ gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Início</Link>
                    <Link to="/sobre" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Sobre</Link>
                    <Link to="/processo" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Processo</Link>
                    <a href="#contato" className="btn-premium" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Contato</a>
                </div>

                {/* Mobile Hamburger Icon */}
                <button className="show-mobile" onClick={toggleMenu} style={{
                    background: 'none', border: 'none', color: 'var(--primary)',
                    fontSize: '1.5rem', cursor: 'pointer', padding: '0.5rem'
                }}>
                    ☰
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="mobile-menu-overlay" onClick={toggleMenu}>
                    <button style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', fontSize: '2rem' }}>✕</button>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>Início</Link>
                    <Link to="/sobre" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>Sobre</Link>
                    <Link to="/processo" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>Processo</Link>
                    <a href="#contato" className="btn-premium" style={{ marginTop: '1rem' }}>Fale Conosco</a>
                </div>
            )}
        </>
    );
};

export const Footer: React.FC = () => {
    return (
        <footer style={{ padding: '4rem 2rem', background: 'var(--bg-surface)', marginTop: '4rem' }}>
            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div>
                    <img src={logo} alt="SafeTrust Logo" style={{ height: '40px', marginBottom: '1rem', objectFit: 'contain' }} />
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
