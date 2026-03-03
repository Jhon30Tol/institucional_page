
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you shortly.");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen px-6 py-12 md:py-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-slate-900 dark:text-white">{t('contact.title')}</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form Section */}
          <section className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300" htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    required
                    className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800 border border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-secondary rounded-2xl outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-white"
                    id="name"
                    placeholder={t('contact.form.placeholders.name')}
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300" htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    required
                    className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800 border border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-secondary rounded-2xl outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-white"
                    id="email"
                    placeholder={t('contact.form.placeholders.email')}
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300" htmlFor="subject">{t('contact.form.subject')}</label>
                <select className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800 border border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-secondary rounded-2xl outline-none transition-all appearance-none cursor-pointer text-slate-900 dark:text-white" id="subject">
                  <option>{t('contact.form.options.product')}</option>
                  <option>{t('contact.form.options.support')}</option>
                  <option>{t('contact.form.options.sales')}</option>
                  <option>{t('contact.form.options.other')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300" htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  required
                  className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-800 border border-transparent focus:bg-white dark:focus:bg-slate-700 focus:border-secondary rounded-2xl outline-none transition-all placeholder:text-slate-400 min-h-[160px] text-slate-900 dark:text-white"
                  id="message"
                  placeholder={t('contact.form.placeholders.message')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-brandGreen-600 text-white font-bold py-5 px-8 rounded-2xl shadow-xl shadow-secondary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg"
              >
                {t('contact.form.send')}
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </section>

          {/* Info Section */}
          <section className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-display font-bold text-xl mb-8 uppercase tracking-widest text-slate-400 flex items-center gap-4">
                <span className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></span>
                {t('contact.info.title')}
                <span className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></span>
              </h2>
              <div className="space-y-6">
                <ContactInfo
                  icon="location_on"
                  title={t('contact.info.hq.title')}
                  desc={t('contact.info.hq.desc')}
                  color="bg-primary/10"
                  iconColor="text-primary"
                />
                <ContactInfo
                  icon="call"
                  title={t('contact.info.call.title')}
                  desc={t('contact.info.call.desc')}
                  color="bg-secondary/10"
                  iconColor="text-secondary"
                />
                <ContactInfo
                  icon="mail"
                  title={t('contact.info.email.title')}
                  desc={t('contact.info.email.desc')}
                  color="bg-accent/10"
                  iconColor="text-accent"
                />
              </div>
            </div>

            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl group cursor-pointer">
              <img
                src="https://picsum.photos/seed/map/800/800"
                alt="Map Placeholder"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-xl animate-bounce mb-4">
                  <span className="material-symbols-outlined text-secondary text-3xl filled">location_on</span>
                </div>
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-primary dark:text-secondary shadow-lg">
                  {t('contact.info.map')}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

interface ContactInfoProps {
  icon: string;
  title: string;
  desc: string;
  color: string;
  iconColor: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, desc, color, iconColor }) => (
  <div className="flex items-start gap-5 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shrink-0`}>
      <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
    </div>
    <div>
      <h3 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

export default Contact;
