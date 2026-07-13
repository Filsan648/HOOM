import * as React from "react";
import * as Icons from "lucide-react";
import Title from "~/utilis/TitleSubtitle";
interface CardData {
  id: number;
  level: string;
  description: string;
  bg:string;
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
    bg: "bg-blue-100/80",
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
    bg: "bg-blue-600",
    buttonText: "Explorer Terminale",
    features: [
      { icon: "FileCode", title: "Résumés de Cours", desc: "Synthèses complètes de tous vos cours" },
      { icon: "Award", title: "Annales du Bac", desc: "Sujets des années précédentes avec corrigés" },
      { icon: "Cpu", title: "IA de Suivi", desc: "Intelligence artificielle pour votre progression" }
    ],

  },
  {
    id: 3,
    level: "Université",
    description: "Ressources pour réussir à l'université avec des outils adaptés à votre spécialité.",
    bg: "bg-blue-100/80",
    buttonText: "Explorer Université",
    features: [
      { icon: "Layers", title: "Résumés de Cours", desc: "Synthèses par matière et spécialité" },
      { icon: "GitBranch", title: "Travaux Dirigés", desc: "TD corrigés et expliqués étape par étape" },
      { icon: "Trophy", title: "Contrôle Final", desc: "Révisions intensives pour les examens" }
    ]
  }
];

export default function Pac() {
  return (
    <section className="relative w-full     bg-white  px-32    select-none  overflow-hidden">

 {/* En-tête de la section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-gray-200 pb-16 mb-16">
          <div className="lg:col-span-7">
          
<Title title="Trois cycle,Une seule reussite" titlecolors='text-neutral-900'/>

           
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base text-gray-600 font-light leading-relaxed max-w-sm">
Quelle que soit votre étape scolaire, notre plateforme vous accompagne avec des ressources adaptées à votre niveau.   </p>
          </div>
        </div>

   

      
      <div className="relative z-20 w-full gap-10 grid grid-cols-1 md:grid-cols-12 ">
        
        {cardsData.map((card, index) => {
          return (
            <div
              key={card.id}
              className={`col-span-1 md:col-span-4 p-6 rounded-2xl md:p-8 flex flex-col justify-between transition-colors duration-500  ${card.bg}
                ${index === 0 ? "md:col-start-1" : ""} 
                ${index !== 2 ? "md:border-r md:border-black/10" : ""}`}
            >
              {/* Entête de Colonne */}
              <div className="space-y-6">
                
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl md:text-[1.8vw] font-serif font-normal tracking-tight text-blue-400">
                    {card.level}
                  </h3>
                </div>

                <p className="text-sm text-gray-800  font-light leading-relaxed min-h-[48px]">
                  {card.description}
                </p>


                {/* Liste des Fonctionnalités Minimalistes */}
                <div className="space-y-6 py-2">
                  {card.features.map((feat, i) => {
                    const IconComponent = (Icons as any)[feat.icon] || Icons.HelpCircle;
                    return (
                      <div key={i} className="flex gap-4 items-start group/item">
                        <div className="p-2 rounded-full bg-white  text-blue-500 transition-colors duration-300  ">
                          <IconComponent size={14} strokeWidth={1.5} />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className={`font-medium  ${card.bg === "bg-blue-600" ? "text-neutral-50" : "text-[#1a1a1a]"}  text-xs uppercase tracking-wider`}>{feat.title}</h4>
                          <p className={`text-xs ${card.bg === "bg-blue-600" ? "text-neutral-400/80" : "text-neutral-500"} font-light leading-relaxed`}>
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
                <button className="w-full py-3 px-4 rounded-full bg-transparent border  text-neutral-800 font-medium text-[11px] tracking-widest uppercase flex items-center justify-between transition-all duration-300 hover:bg-white  hover:text-black border-white group/btn">
                  <span className="pl-1">{card.buttonText}</span>
                  <div className="p-1 rounded-full bg-black/5 text-neutral-600 transition-colors duration-300 group-hover/btn:bg-white/10 group-hover/btn:text-black transform group-hover/btn:translate-x-0.5">
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
