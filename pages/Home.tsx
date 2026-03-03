
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-32 text-center overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-secondary uppercase bg-secondary/10 rounded-full border border-secondary/20">
            {t('hero.badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-primary dark:text-white mb-8 leading-tight">
            <Trans i18nKey="hero.title">
              Secure Solutions for a <br />
              <span className="text-secondary">Digital World</span>
            </Trans>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-secondary hover:bg-opacity-90 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-secondary/25 active:scale-95 text-lg"
            >
              {t('hero.ctaPrimary')}
            </Link>
            <Link
              to="/solutions"
              className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-primary dark:text-white font-bold py-4 px-10 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-lg active:scale-95 text-lg"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-4">{t('features.title')}</h2>
            <p className="text-slate-500 dark:text-slate-400">{t('features.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="verified_user"
              title={t('features.security.title')}
              desc={t('features.security.desc')}
              color="text-secondary bg-secondary/10"
            />
            <FeatureCard
              icon="monitoring"
              title={t('features.monitoring.title')}
              desc={t('features.monitoring.desc')}
              color="text-accent bg-accent/10"
            />
            <FeatureCard
              icon="dns"
              title={t('features.compliance.title')}
              desc={t('features.compliance.desc')}
              color="text-primary bg-primary/10 dark:bg-white/10 dark:text-white"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-8">
          <div className="text-center p-10 bg-primary text-white rounded-[2.5rem] shadow-2xl shadow-primary/20 transform hover:-translate-y-2 transition-transform">
            <div className="text-5xl font-extrabold mb-2">99.9%</div>
            <div className="text-sm font-bold text-white/70 uppercase tracking-widest">{t('stats.uptime')}</div>
          </div>
          <div className="text-center p-10 bg-secondary text-white rounded-[2.5rem] shadow-2xl shadow-secondary/20 transform hover:-translate-y-2 transition-transform">
            <div className="text-5xl font-extrabold mb-2">500+</div>
            <div className="text-sm font-bold text-white/70 uppercase tracking-widest">{t('stats.clients')}</div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-12 text-center opacity-40 grayscale">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-20">
          <div className="text-2xl font-bold dark:text-white">TECHSTREAM</div>
          <div className="text-2xl font-bold dark:text-white">QUANTUM</div>
          <div className="text-2xl font-bold dark:text-white">VELOCITY</div>
          <div className="text-2xl font-bold dark:text-white">NEXUS</div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc, color }) => (
  <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl hover:border-transparent group">
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-3">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Home;
