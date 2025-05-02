import { useI18n } from './i18n';

export default function Formations() {
  const { t } = useI18n();

  return (
    <section id="formations" className="py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{t('formations')}</h2>
        <ul className="space-y-4">
          <li><strong>Master IT & Management</strong> – Illinois Institute of Technology (2015–2016)</li>
          <li><strong>Diplôme d'ingénieur IT & Big Data</strong> – ESIEA (2010–2015)</li>
          <li><strong>Programme d'échange</strong> – Anglia Ruskin University (2013)</li>
        </ul>
      </div>
    </section>
  );
}
