import React, { useState } from 'react';
import Title from '~/utilis/TitleSubtitle';
const CONCOURS_DATA = [
  {
    id: 1,
    title: "Concours de Mathématiques Supérieures",
    category: "Niveau Universitaire",
    status: "disponible",
    date: "Clôture : 15 Octobre 2026",
    badge: "Inscriptions Ouvertes"
  },
  {
    id: 2,
    title: "Olympiades de Physique & Sciences de l'Ingénieur",
    category: "Classe de Terminale",
    status: "disponible",
    date: "Clôture : 01 Novembre 2026",
    badge: "Nouveau"
  },
  {
    id: 3,
    title: "Grand Prix d'Algorithmique et Développement Web",
    category: "Tout Niveau",
    status: "resultats",
    date: "Publié le 05 Juillet 2026",
    badge: "Résultats Disponibles"
  },
  {
    id: 4,
    title: "Session Éloquence, Littérature & Sciences Humaines",
    category: "Niveau Lycée",
    status: "archive",
    date: "Session Mai 2026",
    badge: "Archivé"
  }
];

function Concour() {
  const [activeTab, setActiveTab] = useState('disponible');

  const filteredConcours = CONCOURS_DATA.filter(item => item.status === activeTab);

  return (
    <section className="bg-white text-gray-900 py-24 px-6 md:px-12 lg:px-24 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête : Titre principal et paragraphe explicatif */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12  pb-16 mb-16">
          <div className="lg:col-span-7">
            <Title title="Défiez vos limites.Mesurez votre talent." titlecolors='text-neutral-900'/>
            
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-md">
              Bienvenue sur l'espace des défis académiques de la plateforme. Cette section centralise toutes les épreuves, des inscriptions en cours jusqu'aux archives historiques, pour vous permettre de vous positionner et de suivre vos performances en temps réel.
            </p>
          </div>
        </div>

        {/* Système d'onglets (Navigation latérale ou supérieure selon écran) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-4 md:gap-8">
            {['disponible', 'resultats', 'archive'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-mono uppercase tracking-widest py-2 px-4 border rounded-full transition-all ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-900'
                }`}
              >
                {tab === 'disponible' && `Sessions Ouvertes`}
                {tab === 'resultats' && `Derniers Résultats`}
                {tab === 'archive' && `Archives`}
              </button>
            ))}
          </div>
          
          <div className="text-xs font-mono text-gray-400">
            {filteredConcours.length} élément(s) trouvé(s)
          </div>
        </div>

        {/* Liste Éditoriale (Design Typographique en lignes) */}
        <div className="border-t border-gray-200">
          {filteredConcours.length > 0 ? (
            filteredConcours.map((concour) => (
              <div 
                key={concour.id}
                className="group border-b border-gray-200 py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-all duration-300 hover:bg-gray-50/60 px-2"
              >
                {/* Catégorie et métadonnées */}
                <div className="md:col-span-3">
                  <span className="text-xs font-mono text-gray-400 block mb-1">
                    {concour.category}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    {concour.date}
                  </span>
                </div>

                {/* Titre Principal */}
                <div className="md:col-span-6 py-2 md:py-0">
                  <h3 className="text-xl md:text-2xl font-normal tracking-tight text-gray-950 group-hover:translate-x-1 transition-transform duration-300">
                    {concour.title}
                  </h3>
                </div>

                {/* Statut et Action */}
                <div className="md:col-span-3 flex md:justify-end items-center gap-4">
                  <span className="text-[10px] font-mono tracking-wider uppercase border border-gray-300 px-2 py-0.5 text-gray-600 hidden lg:inline-block">
                    {concour.badge}
                  </span>
                  
                  {concour.status === 'disponible' && (
                    <button className="text-xs font-mono uppercase bg-transparent text-gray-950 border-b border-gray-950 py-1 hover:text-gray-600 hover:border-gray-400 transition-colors">
                      Postuler →
                    </button>
                  )}
                  {concour.status === 'resultats' && (
                    <button className="text-xs font-mono uppercase bg-transparent text-gray-950 border-b border-gray-950 py-1 hover:text-gray-600 hover:border-gray-400 transition-colors">
                      Voir la liste →
                    </button>
                  )}
                  {concour.status === 'archive' && (
                    <button className="text-xs font-mono uppercase bg-transparent text-gray-400 border-b border-transparent py-1 hover:text-gray-950 hover:border-gray-950 transition-colors">
                      Consulter
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="py-24 text-center">
              <p className="text-sm font-mono text-gray-400">Aucune session n'est enregistrée dans cette catégorie.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Concour;