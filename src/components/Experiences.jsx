import { useI18n } from './i18n';
import { motion } from "framer-motion";

export default function Experiences() {
  const { t } = useI18n();
  return (
    <section id="experiences" className="py-16 bg-[#07072b] text-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 text-left">
          <span className="inline-block text-blue-900 border border-blue-900 font-bold px-6 py-2 rounded-full text-xl tracking-widest mb-2 shadow bg-white">
            {t('experiences')}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <h2 className="text-yellow-400 font-extrabold text-3xl mb-8">EDUCATION</h2>
            <div className="space-y-8">
              {/* IIT */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex items-start">
                <span className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mr-4 shrink-0 aspect-square shadow-lg">
                  <img src="/images/logo_iit.svg" alt="IIT Logo" className="w-12 h-12 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                </span>
                <div>
                  <h3 className="font-bold text-xl">{t('master_it_management_title')}</h3>
                  <p className="text-yellow-400 font-bold">{t('master_it_management_school')}</p>
                  <div className="text-white/80">{t('master_it_management_graduated')}</div>
                  <ul className="list-disc list-inside text-white/80 pl-4">
                    <li>{t('master_it_management_specialization')}</li>
                  </ul>
                </div>
              </motion.div>

              {/* ESIEA */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="flex items-start">
                <span className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mr-4 shrink-0 aspect-square shadow-lg">
                  <img src="/images/logo_esiea.svg" alt="ESIEA Logo" className="w-12 h-12 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                </span>
                <div>
                  <h3 className="font-bold text-xl">{t('master_bigdata_title')}</h3>
                  <p className="text-yellow-400 font-bold">{t('master_bigdata_school')}</p>
                  <div className="text-white/80">{t('master_bigdata_graduated')}</div>
                  <ul className="list-disc list-inside text-white/80 pl-4">
                    <li>{t('master_bigdata_major')}</li>
                    <li>{t('master_bigdata_minor_tech')}</li>
                    <li>{t('master_bigdata_minor_mgmt')}</li>
                  </ul>
                </div>
              </motion.div>

              {/* ARU */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="flex items-start">
                <span className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mr-4 shrink-0 aspect-square shadow-lg">
                  <img src="/images/logo_aru.svg" alt="Anglia Ruskin University Logo" className="w-12 h-12 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                </span>
                <div>
                  <h3 className="font-bold text-xl">{t('l3_exchange_title')}</h3>
                  <p className="text-yellow-400 font-bold">{t('l3_exchange_school')}</p>
                  <div className="text-white/80">{t('l3_exchange_validated')}</div>
                  <ul className="list-disc list-inside text-white/80 pl-4">
                    <li>{t('l3_exchange_student')}</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h2 className="text-yellow-400 font-extrabold text-3xl mb-8">EXPERIENCE</h2>
            <div className="space-y-8">
              {[
                {
                  logo: "logo_oris.svg",
                  title: "oris_title",
                  company: "oris_company",
                  duration: "oris_duration",
                  bullets: [
                    "oris_bullets"
                  ]
                },
                {
                  logo: "logo_pulselife.svg",
                  title: "pulselife_title",
                  company: "pulselife_company",
                  duration: "pulselife_duration",
                  bullets: [
                    "pulselife_roadmap",
                    "pulselife_workshop",
                    "pulselife_bi"
                  ]
                },
                {
                  logo: "logo_younited.svg",
                  title: "younited_title",
                  company: "younited_company",
                  duration: "younited_duration",
                  bullets: [
                    "younited_cross",
                    "younited_axis",
                    "younited_arch"
                  ]
                },
                {
                  logo: "logo_mydral.svg",
                  title: "mydral_title",
                  company: "mydral_company",
                  duration: "mydral_duration",
                  bullets: [
                    "mydral_dashboard",
                    "mydral_formatted"
                  ]
                }
              ].map((experience, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 * index }} viewport={{ once: true }} className="flex items-start">
                  <span className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mr-4 shrink-0 aspect-square shadow-lg">
                    <img src={`/images/${experience.logo}`} alt="Company Logo" className="w-12 h-12 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                  </span>
                  <div>
                    <h3 className="font-bold text-xl">{t(experience.title)}</h3>
                    <p className="text-yellow-400 font-bold">{t(experience.company)}</p>
                    <div className="text-white/80">{t(experience.duration)}</div>
                    <ul className="list-disc list-inside text-white/80 pl-4">
                      {experience.bullets.map((bullet, i) => (
                        <li key={i}>{t(bullet)}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
