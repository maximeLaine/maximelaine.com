import { useI18n } from './i18n';
import { motion } from 'framer-motion';

export default function Accueil() {
  const { t } = useI18n();

  return (
    <motion.section
      id="accueil"
      className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-r bg-[#07072b] text-white font-sans"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
    >

      <div className="w-full md:w-1/2 px-6 md:text-center space-y-6">
          <span className="inline-block bg-white text-blue-900 border border-blue-500 font-bold px-4 py-1 rounded-full text-sm tracking-widest mb-2 shadow">
          DATA ANALYST | PORTFOLIO
        </span>
        <h2 className="text-4xl md:text-5xl text-yellow-400 font-extrabold tracking-widest drop-shadow">MAXIME LAINE</h2>
        <p className="text-sm md:text-base text-white/90"> {t('accueil')} </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center space-y-4">  
        <img src="images/logo_white.svg" alt="Logo Maxime Laine" className="max-h-30" />
      </div>
    </motion.section>
  );
}
