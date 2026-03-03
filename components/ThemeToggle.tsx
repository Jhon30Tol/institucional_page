
import React from 'react';

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-24 md:bottom-6 right-6 w-12 h-12 bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center z-50 transition-transform active:scale-90"
      aria-label="Toggle theme"
    >
      <span className={`material-symbols-outlined ${isDark ? 'text-secondary' : 'text-primary'}`}>
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
