import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const languages = [
        { code: 'en', label: 'EN', flag: '🇺🇸' },
        { code: 'pt', label: 'PT', flag: '🇧🇷' },
        { code: 'es', label: 'ES', flag: '🇪🇸' }
    ];

    return (
        <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-secondary transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-lg">language</span>
                <span className="uppercase">{i18n.language.split('-')[0]}</span>
            </button>

            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top-right z-50">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${i18n.language.startsWith(lang.code) ? 'text-secondary font-bold bg-slate-50 dark:bg-slate-800' : 'text-slate-600 dark:text-slate-300'
                            }`}
                    >
                        <span className="text-lg">{lang.flag}</span>
                        {lang.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;
