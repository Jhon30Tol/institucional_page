import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.solutions'), path: '/solutions' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcMzme-eIZ2FREkscwArh2jee3le8yLVlMo_EyOICYFC7yrww_d0w213kz2KjVm49kZ41y4tFJcSKerSWmycpooXY_FemIDLCSxK0GUGuzF_yhWHMDd0XcycYr0MacdmbJmeyr3yf5wmKVpJ92qSiElXzxC6eBPu2M2GhjEfs-EGE0FkMaqbYW23JPSd50cuMV_Sh1OPjO9JM3F011M_oczIoKlW3SF90HWxZ6rC0QMTZZxTXO2iZoakyJXDXf-y6BpLuUH_tCNb7c"
              alt="SafeTrust Logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${isActive(link.path)
                    ? 'text-secondary'
                    : 'text-slate-600 dark:text-slate-300 hover:text-secondary'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <LanguageSelector />

            <Link
              to="/contact"
              className="bg-primary text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all shadow-md shadow-primary/20"
            >
              {t('nav.getStarted')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-semibold rounded-lg ${isActive(link.path)
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary text-white font-bold py-4 rounded-xl mt-4"
            >
              {t('nav.getStarted')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
