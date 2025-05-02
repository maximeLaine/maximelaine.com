import { motion } from 'framer-motion';
import { useI18n } from './i18n';

export default function Header() {
  const { setLang, t } = useI18n();

  return (
    <motion.header
      className="bg-white/80 backdrop-blur-md shadow-md fixed w-full z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center font-sans">
        <div className="flex items-center space-x-2">
          <img src="images/logo_blue.svg" alt="Logo" className="h-8 w-auto" />
          <h1 className="text-xl font-bold text-primary tracking-widest">Maxime Lainé</h1>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-primary">
          <a href="#accueil" className="hover:text-accent">{t('hello')}</a>
          <a href="#apropos" className="hover:text-accent">{t('about')}</a>
          <a href="#experiences" className="hover:text-accent">{t('experiences')}</a>
          <a href="#competences" className="hover:text-accent">{t('skills')}</a>
          <a href="#contact" className="hover:text-accent">{t('contact')}</a>
        </nav>
        <div className="space-x-2 text-sm">
          <button onClick={() => setLang('fr')} className="hover:underline">FR</button>
          <button onClick={() => setLang('en')} className="hover:underline">EN</button>
        </div>
      </div>
    </motion.header>
  );
}
