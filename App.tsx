
import React, { useState, useEffect } from 'react';
import './i18n'; // Import i18n configuration
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <ThemeToggle isDark={darkMode} toggle={toggleTheme} />

        {/* Floating Mobile Nav bar for specific pages or general access */}
        <MobileBottomNav />
      </div>
    </Router>
  );
};

const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-8 flex justify-between items-center z-50">
      <Link to="/" className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-primary dark:text-secondary' : 'text-slate-400'}`}>
        <span className={`material-symbols-outlined ${isActive('/') ? 'filled' : ''}`}>home</span>
        <span className="text-[10px] font-medium">Home</span>
      </Link>
      <Link to="/solutions" className={`flex flex-col items-center gap-1 ${isActive('/solutions') ? 'text-primary dark:text-secondary' : 'text-slate-400'}`}>
        <span className={`material-symbols-outlined ${isActive('/solutions') ? 'filled' : ''}`}>grid_view</span>
        <span className="text-[10px] font-medium">Solutions</span>
      </Link>
      <Link to="/about" className={`flex flex-col items-center gap-1 ${isActive('/about') ? 'text-primary dark:text-secondary' : 'text-slate-400'}`}>
        <span className={`material-symbols-outlined ${isActive('/about') ? 'filled' : ''}`}>info</span>
        <span className="text-[10px] font-medium">About</span>
      </Link>
      <Link to="/contact" className={`flex flex-col items-center gap-1 ${isActive('/contact') ? 'text-primary dark:text-secondary' : 'text-slate-400'}`}>
        <span className={`material-symbols-outlined ${isActive('/contact') ? 'filled' : ''}`}>mail</span>
        <span className="text-[10px] font-medium">Contact</span>
      </Link>
    </nav>
  );
};

export default App;
