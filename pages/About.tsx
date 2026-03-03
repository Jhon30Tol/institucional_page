
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50 dark:bg-slate-900/10 min-h-screen">
      {/* Header */}
      <section className="px-6 py-20 md:py-32 text-center bg-white dark:bg-[#051124]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary dark:text-white mb-6">
            <Trans i18nKey="about.title">
              Redefining Digital <span className="text-secondary">Trust</span>
            </Trans>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 transform hover:scale-[1.02] transition-all">
            <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-2xl mb-8">
              <span className="material-symbols-outlined text-secondary text-4xl">rocket_launch</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-4">{t('about.mission.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {t('about.mission.desc')}
            </p>
          </div>

          <div className="bg-primary p-10 rounded-[2.5rem] shadow-2xl text-white transform hover:scale-[1.02] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[120px]">verified</span>
            </div>
            <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-2xl mb-8">
              <span className="material-symbols-outlined text-secondary text-4xl">visibility</span>
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">{t('about.vision.title')}</h2>
            <p className="text-blue-100/80 leading-relaxed text-lg">
              {t('about.vision.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-display font-bold text-primary dark:text-white">{t('about.team.title')}</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">{t('about.team.subtitle')}</p>
          </div>
          <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember
            name="Alex Sterling"
            role="CEO & Founder"
            image="https://picsum.photos/seed/alex/400/400"
          />
          <TeamMember
            name="Sarah Chen"
            role="CTO"
            image="https://picsum.photos/seed/sarah/400/400"
          />
          <TeamMember
            name="David Miller"
            role="Head of Security"
            image="https://picsum.photos/seed/david/400/400"
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto bg-secondary p-12 rounded-[3rem] text-center shadow-2xl shadow-secondary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 relative z-10">{t('about.cta.title')}</h2>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white font-bold py-4 px-12 rounded-full shadow-xl hover:scale-105 transition-all active:scale-95 relative z-10"
          >
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

const TeamMember: React.FC<{ name: string; role: string; image: string }> = ({ name, role, image }) => (
  <div className="flex items-center gap-6 bg-white dark:bg-slate-800 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-lg">
    <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0 border-4 border-slate-50 dark:border-slate-900 shadow-inner">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div>
      <h3 className="font-bold text-slate-900 dark:text-white text-lg">{name}</h3>
      <p className="text-secondary font-semibold text-sm">{role}</p>
    </div>
  </div>
);

export default About;
