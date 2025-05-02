import { useI18n } from './i18n';
import { FaTheaterMasks } from 'react-icons/fa';
import { GiRugbyConversion } from 'react-icons/gi';
import { MdOutlineSailing, MdTravelExplore } from 'react-icons/md';
import { IoBeer } from 'react-icons/io5';
import { BiWinkSmile } from 'react-icons/bi';

export default function APropos() {
  const { t } = useI18n();

  const passions = [
    { 
      icon: <GiRugbyConversion className="text-3xl mb-2" />, 
      title: "Rugby", 
      description: t('rugby_description')
    },
    { 
      icon: <MdOutlineSailing className="text-3xl mb-2" />, 
      title: "Sailing", 
      description: t('sailing_description')
    },
    { 
      icon: <MdTravelExplore className="text-3xl mb-2" />, 
      title: "Travelling", 
      description: t('travelling_description')
    },
    { 
      icon: <FaTheaterMasks className="text-3xl mb-2" />, 
      title: "Improv", 
      description: t('theater_description')
    },
    { 
      icon: <IoBeer className="text-3xl mb-2" />, 
      title: "After Work", 
      description: t('afterwork_description')
    },
    { 
      icon: <BiWinkSmile className="text-3xl mb-2" />, 
      title: "Positive Spirit", 
      description: t('positive_description')
    }
  ];

  const traits = ["Determined", "Passionate", "Creative", "Motivated", "Team Player"];

  return (
    <section id="apropos" className="py-16 bg-white text-[#07072b] font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 text-left">
          <span className="inline-block text-blue-900 border border-blue-900 border-[5px] font-bold px-6 py-2 rounded-full text-xl tracking-widest mb-2 shadow">  {t('about')}</span>
        </div>
        
        {/* Professional Bio */}
        <div className="mb-16">
          <p className="text-xl leading-relaxed mb-6">{t('bio_summary')}</p>
        </div>
        
        {/* My Passions */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">{t('my_passions')}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {passions.map((passion, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-yellow-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-3xl mr-2">{passion.icon}</div>
                <h4 className="text-xl font-bold">{passion.title}</h4>
              </div>
              <p className="text-gray-700">{passion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
