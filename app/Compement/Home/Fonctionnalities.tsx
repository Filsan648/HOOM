import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Importations de tes mockups réels
import Mockup1 from "../../assets/Mockups/487shots_so.png";
import Mockup2 from "../../assets/Mockups/689shots_so.png";
import Mockup3 from "../../assets/Mockups/974shots_so.png";
import Mockup4 from "../../assets/Mockups/437shots_so.png";
import Title from "~/utilis/TitleSubtitle";

const data = [
  {
    id: 1,
    title: "Contenu pédagogique",
    paragraphe: "Ressources sur-mesure adaptées à vos besoins.",
    image: Mockup1,
    link: "/ressources",
    bgGradient: "from-blue-600 to-blue-700 border-blue-500/30",
    textClass: "text-white",
  },
  {
    id: 2,
    title: "Échange & Communauté",
    paragraphe: "Collaborez et échangez en temps réel avec vos pairs.",
    image: Mockup2,
    link: "/communaute",
    bgGradient: "from-neutral-900 via-slate-950 to-neutral-950 border-neutral-800",
    textClass: "text-white",
  },
  {
    id: 3,
    title: "Analyse des performances",
    paragraphe: "Suivez votre progression grâce à un tableau de bord intelligent.",
    image: Mockup3,
    link: "/analyses",
    bgGradient: "from-blue-50/60 via-neutral-50 to-neutral-100/50 border-neutral-200/60",
    textClass: "text-neutral-900",
  },
  {
    id: 4,
    title: "Assistante virtuelle AI",
    paragraphe: "Un support personnalisé disponible 24h/7 pour vous guider.",
    image: Mockup4,
    link: "/assistante",
    bgGradient: "from-indigo-900 via-slate-950 to-blue-950 border-neutral-800",
    textClass: "text-white",
  },
  {
    id: 5,
    title: "Programme progressif",
    paragraphe: "Une roadmap claire et structurée étape par étape.",
    image: Mockup2, 
    link: "/roadmap",
    bgGradient: "from-neutral-800 to-neutral-900 border-neutral-700",
    textClass: "text-white",
  }
];

export default function Fonctionnalities() {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = data[activeTab];

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Title title="Une plateforme complète pour votre réussite" titlecolors="text-neutral-50" /> 

        {/* Layout en colonnes : Onglets à gauche, Showcase à droite */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLONNE GAUCHE : Sélecteur de fonctionnalités (4 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {data.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col gap-1
                  ${activeTab === index 
                    ? "bg-neutral-800/40 border-neutral-700 shadow-lg shadow-black/10 translate-x-2" 
                    : "bg-transparent border-transparent opacity-50 hover:opacity-80 hover:translate-x-1"
                  }`}
              >
                <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
                  0{index + 1}.
                </span>
                <span className="text-xl font-bold text-neutral-100">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* COLONNE DROITE : La carte active animée (7 cols) */}
          <div className="lg:col-span-7 h-[550px] relative w-full group">
            {data.map((item, index) => {
              const isActive = index === activeTab;
              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 border bg-gradient-to-br rounded-[2.5rem] p-8 md:p-12 overflow-hidden 
                    flex flex-col justify-between transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)
                    ${isActive 
                      ? "opacity-100 scale-100 pointer-events-auto z-10 shadow-[0_50px_100px_rgba(0,0,0,0.3)]" 
                      : "opacity-0 scale-95 pointer-events-none z-0"
                    } 
                    ${item.bgGradient}`}
                >
                  {/* Contenu textuel de la carte active */}
                  <div className="space-y-4 max-w-md relative z-20">
                    <h3 className={`text-3xl font-extrabold tracking-tight ${item.textClass}`}>
                      {item.title}
                    </h3>
                    <p className={`text-base font-medium opacity-80 ${item.textClass}`}>
                      {item.paragraphe}
                    </p>
                    
                    <div className="pt-2">
                      <a
                        href={item.link}
                        className={`inline-flex items-center gap-2 border py-2.5 px-5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 backdrop-blur-md
                          ${item.textClass === 'text-white' 
                            ? 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-neutral-950' 
                            : 'bg-neutral-900/5 text-neutral-900 border-neutral-950/10 hover:bg-neutral-950 hover:text-white'
                          }`}
                      >
                        En savoir plus
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>

                  {/* Mockup Géant centré en bas */}
                  <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[85%] h-[60%] pointer-events-none transition-transform duration-700 group-hover:scale-105 group-hover:bottom-[-5%]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}