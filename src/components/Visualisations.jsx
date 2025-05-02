import { motion } from 'framer-motion';

export default function Visualisations() {
  const projets = [
    { title: 'The Blue Gold', desc: 'Eau pure sur Terre', image: 'blue-gold.png' },
    { title: 'Drugs & Consequences', desc: 'Impacts de consommation', image: 'drugs.png' },
    { title: 'Green Cities', desc: 'Villes les plus vertes', image: 'green.png' }
  ];

  return (
    <motion.section id="visualisations" className="py-16 bg-white text-center"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Visualisations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projets.map((p, i) => (
            <div key={i} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img src={`/images/${p.image}`} alt={p.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
