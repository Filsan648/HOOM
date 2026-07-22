import Title from "~/utilis/TitleSubtitle";
import { Brain } from "lucide-react";
import AnimatedCounter from "~/utilis/AnnimateCounter";
// Données nettoyées de la répétition du titre
const data = [
  { target: 3000, suffix: "+", description: "Élèves inscrits" },
  { target: 2000, suffix: "+", description: "Utilisateurs actifs" },
  { target: 190, suffix: "+", description: "Interactions réalisées" },
  { target: 37000, suffix: "+", description: "Sessions d'apprentissage" },
  { target: 1000, suffix: "h+", description: "Temps cumulé d'étude" },
  { target: 65000, suffix: "+", description: "Consultations des sujets" },
  { target: 15000, suffix: "+", description: "Utilisations de l'IA" },
];

function Statistique() {
  return (
    <section className="px-6 mb-10  md:px-16 lg:px-32 text-neutral-900 font-sans">
      {/* Conteneur principal en grille : Titre à gauche, stats à droite sur grand écran */}
         {/* Colonne Titre */}
        <div className="">
          <Title 
            title="Des résultats qui parlent d'eux-mêmes" 
            titlecolors="text-neutral-950 "
            subtitle="L'IMPACT EN CHIFFRES"
            SubtitleStyle="text-yellow-600 bg-gray-400/5 text-xs font-mono border border-gray-400/20 px-3 py-1 rounded-full backdrop-blur-sm tracking-wider mb-4 inline-flex"
            description="Découvrez l'évolution et l'engagement en temps réel de notre communauté sur la plateforme HOOM." 
            descriptionstyle="text-black/60 text-base md:text-lg mt-4 max-w-xl"
            icone={Brain}
          />
        </div>
      <div className=" lg:grid-cols-2 gap-16 md:mx-32  items-center justify-center">
        
     

      {/* Grille de Statistiques centrée */}
      <div className="md:mt-16  md:max-w-5xl  flex justify-center items-center">
        <div className="grid   grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-16 w-full justify-center">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="group border-t border-neutral-200 pt-6 flex flex-col items-center text-center transition-all duration-300 hover:border-blue-600"
            >
              {/* Le Chiffre : Centré avec micro-interaction verticale discrète au survol */}
              <div>
                <AnimatedCounter target={item.target} suffix={item.suffix} />
              </div>

              {/* La Description : Centrée */}
              <div className="mt-4">
                <p className="text-xs uppercase tracking-widest text-blue-600 font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>
    </section>
  );
}

export default Statistique;