import { FaPython, FaDatabase, FaAws } from "react-icons/fa";
import { SiTableau, SiLooker, SiGooglecloud, SiGooglebigquery, SiDbt, SiAirbyte, SiApacheairflow } from "react-icons/si";
import { BiLogoAws } from "react-icons/bi";
import { useI18n } from './i18n';


export default function Competences() {
  const { t } = useI18n();
  
  return (
    <section
      id="competences"
      className="py-16 bg-gray-100 text-black font-sans"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
    >
    
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-left">
          <span className="inline-block text-blue-900 border border-blue-900 border-[5px] font-bold px-6 py-2 rounded-full text-xl tracking-widest mb-2 shadow"> {t('skills')}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          {/* Column 1: Analytic Tools */}
          <div className="flex flex-col items-start">
            <h3 className="font-extrabold text-2xl mb-6 text-left">
              <span className="text-blue-900">Analytic</span><br/><span className="text-yellow-400">Tools</span>
            </h3>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <SiGooglebigquery className="text-blue-900 text-3xl" />
              </span>
              <span className="text-lg text-blue-900">Google BigQuery</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <SiDbt className="text-blue-900 text-3xl" />
              </span>
              <span className="text-lg text-blue-900">dbt</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <SiAirbyte className="text-blue-900 text-3xl" />
              </span>
              <span className="text-lg text-blue-900">Airbyte</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <SiApacheairflow className="text-blue-900 text-3xl" />
              </span>
              <span className="text-lg text-blue-900">Airflow</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <BiLogoAws className="text-blue-900 text-3xl" />
              </span>
              <span className="text-lg text-blue-900">AWS Athena</span>
            </div>
          </div>
          {/* Column 2: Programming Languages */}
          <div className="flex flex-col items-start">
            <h3 className="font-extrabold text-2xl mb-6 text-left">
              <span className="text-blue-900">Programming</span> <span className="text-yellow-400">Languages</span>
            </h3>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <FaDatabase className="text-blue-900 text-3xl" />
              </span>
              <span className="text-lg text-blue-900">SQL</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <FaPython className="text-blue-900 text-3xl" />
              </span>
              <span className="text-lg text-blue-900">Python</span>
            </div>
          </div>
          {/* Column 3: Cloud Platform */}
          <div className="flex flex-col items-start">
            <h3 className="font-extrabold text-2xl mb-6 text-left">
              <span className="text-blue-900">Cloud</span> <span className="text-yellow-400">Platform</span>
            </h3>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <FaAws className="text-blue-900 text-3xl" />
              </span>
              <span className="text-lg text-blue-900">AWS Cloud</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <SiGooglecloud className="text-blue-900 text-3xl" />
              </span>
              <span className="text-lg text-blue-900">GCP</span>
            </div>
          </div>
          {/* Column 4: Data Visualization Tools */}
          <div className="flex flex-col items-start">
            <h3 className="font-extrabold text-2xl mb-6 text-left">
              <span className="text-blue-900">Data Visualization</span> <span className="text-yellow-400">Tools</span>
            </h3>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <SiTableau className="text-blue-900 text-3xl" />
              </span>
              <span className="text-lg text-blue-900">Tableau</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                <SiLooker className="text-blue-900 text-3xl" />
              </span>
              <span className="text-lg text-blue-900">Looker Studio</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}