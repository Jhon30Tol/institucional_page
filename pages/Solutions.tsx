
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Solutions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen px-6 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-6 border border-secondary/20">
            {t('solutions.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-primary dark:text-white mb-6">
            <Trans i18nKey="solutions.title">
              Scalable security for <br />
              <span className="text-accent">modern</span> digital assets.
            </Trans>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {t('solutions.subtitle')}
          </p>
        </section>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SolutionCard
            icon="shield_lock"
            title={t('solutions.items.zeroTrust.title')}
            desc={t('solutions.items.zeroTrust.desc')}
            color="secondary"
          />
          <SolutionCard
            icon="data_exploration"
            title={t('solutions.items.threatIntel.title')}
            desc={t('solutions.items.threatIntel.desc')}
            color="accent"
          />
          <SolutionCard
            icon="cloud_sync"
            title={t('solutions.items.cloudCompliance.title')}
            desc={t('solutions.items.cloudCompliance.desc')}
            color="primary"
          />
          <SolutionCard
            icon="key_visualizer"
            title={t('solutions.items.identityMgmt.title')}
            desc={t('solutions.items.identityMgmt.desc')}
            color="secondary"
          />
        </div>

        {/* Call to Action */}
        <section className="mt-20 p-12 md:p-20 rounded-[3rem] bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t('solutions.cta.title')}</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              {t('solutions.cta.subtitle')}
            </p>
            <button className="bg-secondary hover:bg-opacity-90 text-primary font-bold py-5 px-12 rounded-2xl shadow-2xl shadow-secondary/20 transition-all active:scale-95 text-lg">
              {t('solutions.cta.button')}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

interface SolutionCardProps {
  icon: string;
  title: string;
  desc: string;
  color: 'primary' | 'secondary' | 'accent';
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, desc, color }) => {
  const { t } = useTranslation();

  const colorMap = {
    primary: 'bg-primary/10 dark:bg-white/10 text-primary dark:text-white',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent'
  };

  return (
    <div className="p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group hover:-translate-y-1">
      <div className={`w-16 h-16 rounded-2xl ${colorMap[color]} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
        <span className="material-symbols-outlined text-4xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-4">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
        {desc}
      </p>
      <a href="#" className="inline-flex items-center text-accent font-bold group-hover:translate-x-2 transition-transform">
        {t('solutions.cta.learnMore')} <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
      </a>
    </div>
  );
};

export default Solutions;
