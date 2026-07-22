import * as React from "react";
import * as Icons from "lucide-react";
import Title from "~/utilis/TitleSubtitle";
import { Layers, ArrowUpRight } from "lucide-react";
import Motions from "~/utilis/Motion";
interface CardData {
  id: number;
  level: string;
  description: string;
  buttonText: string;
  features: {
    icon: string;
    title: string;
    desc: string;
  }[];
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
    ],
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

export default function Pac() {
  return (
    <section className="relative px-10 w-full mt-10 bg-white  select-none overflow-hidden">
      <div className="w-full">
        
        {/* En-tête de la section parfaitement calqué sur Témoignages */}
        <Title 
          title="Trois cycle,Une seule reussite" 
          titlecolors="text-neutral-950" 
          subtitle="PARCOURS SCOLAIRE"
          SubtitleStyle="text-yellow-600 bg-gray-400/5 text-xs font-mono border border-gray-400/20 px-3 py-1 rounded-full backdrop-blur-sm tracking-wider mb-4 inline-flex"
          description="Peu importe votre niveau actuel, HOOM s'adapte aux spécificités de chaque étape de votre cursus pour vous guider vers l'excellence." 
          descriptionstyle="text-black/60 text-base md:text-lg mt-4 max-w-xl"
          icone={Layers} 
        />

        {/* Grille Uniforme des Cartes de Cycles */}
         
        <div className="mt-4  md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
          {cardsData.map((card) => {
            return (
              <Motions>
              <div
                key={card.id}
                className="group shrink-0 rounded-3xl p-8 md:p-12 transition-all duration-500 ease-out border border-neutral-200/60 bg-white shadow-sm hover:border-blue-600 hover:shadow-blue-500/5 flex flex-col justify-between min-h-[560px]"
              >
                <div className="space-y-8">
                  
                  {/* Entête avec l'indexation identique au style de l'application */}
                  <div className="flex justify-between items-baseline border-b border-black/5 pb-4">
                    <h3 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-neutral-950 group-hover:text-blue-600 transition-colors duration-300">
                      {card.level}
                    </h3>
                 
                  </div>

                  {/* Description stylisée en Light Sans/Serif */}
                  <p className="text-base text-neutral-600 font-light leading-relaxed min-h-[48px]">
                    {card.description}
                  </p>

                  {/* Liste des Fonctionnalités */}
                  <div className="space-y-6 pt-2">
                    {card.features.map((feat, i) => {
                      const IconComponent = (Icons as any)[feat.icon] || Icons.HelpCircle;
                      return (
                        <div key={i} className="flex gap-4 items-start group/item">
                          {/* Conteneur d'icône arrondi identique aux avatars de Testimonials */}
                          <div className="p-2.5 rounded-xl bg-black/5 text-neutral-500 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:rotate-6 shrink-0">
                            <IconComponent size={15} strokeWidth={1.5} />
                          </div>
                          
                          <div className="space-y-0.5">
                            <h4 className="font-medium text-xs uppercase tracking-wider text-neutral-950">
                              {feat.title}
                            </h4>
                            <p className="text-xs font-light leading-relaxed text-neutral-500">
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      );
                   })}
                  </div>

                </div>

      

              </div>
                </Motions>
            );
          })}
        </div>
 
      </div>
    </section>
  );
}