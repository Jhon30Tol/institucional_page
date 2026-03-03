
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-24 md:pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg9QCmq1NnvUkU6SKvWj6dFmTlU4r-jqXhnERATKgdOJ1Xnrkb6yIKG9Gsw5-w6zXVqthx4q6co5yA4cUb_lkLXINVmxtJD45InfvRn_jNE4rnOY3pVhQH4nDGa6pczK2siBddvG5Gn4l-NlsUFjH4-wB0cmeu2MTy7s0ZlvZVvSyfGLHeXBFEahtzBtty9CzRNLYSXVgJz_m0jAFwcwEOL4HD59p4jCWCjct9GGMDXP0waKlmXE5HhER5fk0rPPKwenvpXIpz2Gz_"
                alt="SafeTrust Logo"
                className="h-6 opacity-80 dark:invert transition-all hover:opacity-100"
              />
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary dark:text-white uppercase tracking-wider text-sm mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/about" className="hover:text-secondary transition-colors">{t('footer.links.about')}</Link></li>
              <li><Link to="/solutions" className="hover:text-secondary transition-colors">{t('footer.links.solutions')}</Link></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{t('footer.links.careers')}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{t('footer.links.privacy')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary dark:text-white uppercase tracking-wider text-sm mb-6">{t('footer.support')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/contact" className="hover:text-secondary transition-colors">{t('footer.links.help')}</Link></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{t('footer.links.docs')}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{t('footer.links.api')}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{t('footer.links.community')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-primary dark:text-white uppercase tracking-wider text-sm mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">mail</span>
                info@safetrust.tech
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Silicon Valley, CA
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">call</span>
                +1 (555) 000-SAFE
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-secondary transition-all">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-secondary transition-all">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-secondary transition-all">
              <span className="material-symbols-outlined">terminal</span>
            </a>
          </div>
          <p className="text-xs text-slate-400">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
