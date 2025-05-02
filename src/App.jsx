import './index.css';
import { I18nProvider } from './components/i18n';
import Header from './components/Header';
import Accueil from './components/Accueil';
import Experiences from './components/Experiences';
import Competences from './components/Competences';
import Visualisations from './components/Visualisations';
import APropos from './components/APropos';
import Contact from './components/Contact';

export default function App() {
  return (
    <I18nProvider>
      <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
        <Header />
        <main className="pt-24">
          <Accueil />
          <APropos />
          <Experiences />
          <Competences />
          <Contact />
        </main>
      </div>
    </I18nProvider>
  );
}
