import React from "react";
import * as Icons from "lucide-react";

interface CardData {
  id: number;
  level: string;
  description: string;
  features: {
    icon: string;
    title: string;
    desc: string;
  }[];
  buttonText: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    level: "9e Année",
    description: "Prépare-toi pour le brevet avec des ressources interactives et adaptées à ton niveau.",
    buttonText: "Explorer les services 9e",
    features: [
      { icon: "BookOpen", title: "Cours Résumés", desc: "Fiches synthétiques pour chaque chapitre de math, SVT et physique" },
      { icon: "Target", title: "Exercices Ciblés", desc: "Entraînement par niveau de difficulté pour bien progresser" },
      { icon: "FileText", title: "Fiches de Révision", desc: "Tout ce qu'il faut retenir avant les contrôles" }
    ]
  },
  {
    id: 2,
    level: "Terminale",
    description: "Préparez-vous efficacement au bac avec nos contenus interactifs et nos outils d'IA.",
    buttonText: "Explorer Terminale",
    features: [
      { icon: "FileCode", title: "Résumés de Cours", desc: "Synthèses complètes de tous vos cours" },
      { icon: "Award", title: "Annales du Bac", desc: "Sujets des années précédentes avec corrigés" },
      { icon: "Cpu", title: "IA de Suivi", desc: "Intelligence artificielle pour votre progression" }
    ]
  },
  {
    id: 3,
    level: "Université",
    description: "Ressources pour réussir à l'université avec des outils adaptés à votre spécialité.",
    buttonText: "Explorer Université",
    features: [
      { icon: "Layers", title: "Résumés de Cours", desc: "Synthèses par matière et spécialité" },
      { icon: "GitBranch", title: "Travaux Dirigés", desc: "TD corrigés et expliqués étape par étape" },
      { icon: "Trophy", title: "Contrôle Final", desc: "Révisions intensives pour les examens" }
    ]
  }
];

export default function HoomCyclesGrid() {
  return (
    <section className="relative w-full  text-[#1a1a1a] px-6 md:px-12 py-24 font-sans select-none border-b border-black/5 overflow-hidden">
      
      {/* LIGNES DE GRILLE EN ARRIÈRE-PLAN */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-12 gap-0 px-6 md:px-12 opacity-[0.04]">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="h-full border-r border-yellow-600 last:border-r-0" />
        ))}
      </div>


      {/* EN-TÊTE ÉDITORIAL DE LA SECTION */}
      <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24 items-end">
        <div className="md:col-span-8 md:col-start-2">
          <h2 className="text-4xl md:text-[4vw] font-serif font-light tracking-tight leading-tight text-[#1a1a1a]">
            Trois cycles. <br className="md:hidden" />
            <span className="font-sans italic font-extralight text-blue-600">Une seule</span> et unique réussite.
          </h2>
        </div>
        <div className="hidden md:block md:col-span-2 md:col-start-11 h-[1px] bg-black/10 w-full mb-3" />
      </div>

      {/* COLONNES OUVERTES STYLE AWWWARDS */}
      <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-12 border-t border-black/10">
        
        {cardsData.map((card, index) => {
          return (
            <div
              key={card.id}
              className={`col-span-1 md:col-span-4 p-6 md:p-8 flex flex-col justify-between transition-colors duration-500 hover:bg-[#f5f4f0] border-b md:border-b-0 border-black/10 
                ${index === 0 ? "md:col-start-1" : ""} 
                ${index !== 2 ? "md:border-r md:border-black/10" : ""}`}
            >
              {/* Entête de Colonne */}
              <div className="space-y-6">
                
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl md:text-[1.8vw] font-serif font-normal tracking-tight text-blue-600">
                    {card.level}
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-400">[0{card.id}]</span>
                </div>

                <p className="text-sm text-neutral-500 font-light leading-relaxed min-h-[48px]">
                  {card.description}
                </p>

                <div className="w-full h-[1px] bg-black/[0.06]" />

                {/* Liste des Fonctionnalités Minimalistes */}
                <div className="space-y-6 py-2">
                  {card.features.map((feat, i) => {
                    const IconComponent = (Icons as any)[feat.icon] || Icons.HelpCircle;
                    return (
                      <div key={i} className="flex gap-4 items-start group/item">
                        <div className="p-2 rounded-full bg-white border border-black/[0.06] text-blue-500 transition-colors duration-300 group-hover:border-black/20 group-hover:text-black">
                          <IconComponent size={14} strokeWidth={1.5} />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="font-medium text-[#1a1a1a] text-xs uppercase tracking-wider">{feat.title}</h4>
                          <p className="text-xs text-neutral-400 font-light leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Bouton Intégré dans l'alignement de la grille */}
              <div className="pt-12">
                <button className="w-full py-3 px-4 rounded-full bg-transparent border border-black/10 text-neutral-800 font-medium text-[11px] tracking-widest uppercase flex items-center justify-between transition-all duration-300 hover:bg-black hover:text-white hover:border-black group/btn">
                  <span className="pl-1">{card.buttonText}</span>
                  <div className="p-1 rounded-full bg-black/5 text-neutral-600 transition-colors duration-300 group-hover/btn:bg-white/10 group-hover/btn:text-white transform group-hover/btn:translate-x-0.5">
                    <Icons.ArrowUpRight size={14} strokeWidth={2} />
                  </div>
                </button>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}