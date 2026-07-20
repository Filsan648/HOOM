import React, { useState } from 'react';
import Title from '~/utilis/TitleSubtitle';
import { TrendingUp } from "lucide-react";

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
    <section className="text-black py-32 rounded-b-[150px] bg-blue-600/5 px-6 md:px-24 lg:px-32 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête : Titre principal et paragraphe explicatif */}
        
          <Title 
          title="Défiez vos limites.Mesurez votre talent" 
          titlecolors="text-neutral-900" 
          subtitle="Blog"
          SubtitleStyle="text-yellow-600 bg-gray-400/5 text-xs font-mono border border-gray-400/20 px-3 py-1 rounded-full backdrop-blur-sm tracking-wider mb-4 inline-flex"
          description="Réflexions, guides pratiques et analyses de fond rédigés par nos enseignants et experts pour vous accompagner au-delà des cours." 
          descriptionstyle="text-black/60 text-base md:text-lg mt-4 max-w-xl"
          icone={TrendingUp} 
        />
   







            
        {/* Système d'onglets (Navigation latérale ou supérieure selon écran) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-4 md:gap-8">
            {['disponible', 'archive'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs text-black font-mono uppercase tracking-widest py-2 px-4 border rounded-full transition-all ${
                  activeTab === tab 
                    ? 'bg-blue-400 border-blue-500' 
                    : ' border-blue-100 bg-blue-100 '
                }`}
              >
                {tab === 'disponible' && `Sessions Ouvertes`}
                {tab === 'archive' && `Archives`}
              </button>
            ))}
          </div>
          
          <div className="text-xs font-mono text-yellow-500">
            {filteredConcours.length} élément(s) trouvé(s)
          </div>
        </div>

        {/* Liste Éditoriale (Design Typographique en lignes) */}
        <div className="border-t border-gray-200">
          {filteredConcours.length > 0 ? (
            filteredConcours.map((concour) => (
              <div 
                key={concour.id}
                className="group border-b border-gray-200 py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-all duration-300  px-2"
              >
                {/* Catégorie et métadonnées */}
                <div className="md:col-span-3">
                  <span className="text-xs font-mono text-gray-100 block mb-1">
                    {concour.category}
                  </span>
                  <span className="text-xs font-mono text-black/90">
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
                  <span className="text-[10px] font-mono tracking-wider uppercase border border-gray-300 px-2 py-0.5 text-black rounded-2xl hidden lg:inline-block">
                    {concour.badge}
                  </span>
                  
                 
                
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