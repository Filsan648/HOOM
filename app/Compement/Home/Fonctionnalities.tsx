import { useState } from "react";
import { ArrowUpRight ,Plus } from "lucide-react";

// Importations de tes mockups réels
import Mockup1 from "../../assets/Mockups/487shots_so.png";
import Mockup2 from "../../assets/Mockups/689shots_so.png";
import Mockup3 from "../../assets/Mockups/974shots_so.png";
import Mockup4 from "../../assets/Mockups/437shots_so.png";
import Title from "~/utilis/TitleSubtitle";

const data = [
  {
    id: 1,
    title: "Contenu pédagogique adapté",
    paragraphe: "Ressources sur-mesure",
    image: Mockup1,
    link: "/ressources",
    gridClass: "md:col-span-7 h-[560px]",
    // Bleu Électrique / Royal Royal
    bgGradient: "from-blue-600 to-blue-700 border-blue-500/30",
    textClass: "text-white",
    imgClass: "bottom-0 right-0 w-[85%] md:w-[72%] "
  },
  {
    id: 2,
    title: "Échange avec la communauté",
    paragraphe: "Collaboration en temps réel",
    image: Mockup2,
    link: "/communaute",
    gridClass: "md:col-span-5 h-[560px]",
    // Neutre Lumineux (Gris très clair)
    bgGradient: "from-white to-neutral-50 border-neutral-200/60",
    textClass: "text-neutral-900",
    imgClass: "bottom-[-15%] left-1/2 -translate-x-1/2 w-[95%] "
  },
  {
    id: 3,
    title: "Analyse des performances",
    paragraphe: "Suivi intelligent",
    image: Mockup3,
    link: "/analyses",
    gridClass: "md:col-span-4 h-[540px]",
    // Bleu Glacier / Cyan très subtil sur fond neutre
    bgGradient: "from-blue-50/60 via-neutral-50 to-neutral-100/50 border-neutral-200/60",
    textClass: "text-neutral-900",
    imgClass: "bottom-[-12%] left-0 w-[90%]"
  },
  {
    id: 4,
    title: "Assistante virtuelle",
    paragraphe: "Support personnalisé AI",
    image: Mockup4,
    link: "/assistante",
    gridClass: "md:col-span-8 h-[540px]",
    // Bleu Nuit / Profond
    bgGradient: "from-neutral-900 via-slate-950 to-blue-950 border-neutral-800",
    textClass: "text-white",
    imgClass: "bottom-[-18%] right-[-5%] w-[80%] md:w-[85%]"
  },
  {
    id: 5,
    title: "Programme progressif",
    paragraphe: "Roadmap claire",
    image: Mockup2, 
    link: "/roadmap",
    gridClass: "md:col-span-12 h-[580px]",
    // Neutre / Anthracite Mat
    bgGradient: "from-neutral-800 to-neutral-900 border-neutral-700",
    textClass: "text-white",
    imgClass: "bottom-[-20%] left-1/2 -translate-x-1/2 w-[70%] md:w-[50%] group-hover:translate-y-[-15px]"
  }
];

export default function Fonctionnalities() {
  return (
    <section className=" min-h-screen px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Title title="Une plateforme complète pour votre réussite" /> 

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {data.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-[2.5rem] border bg-gradient-to-br p-8 md:p-12 overflow-hidden flex flex-col justify-between transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) hover:shadow-[0_50px_100px_rgba(30,41,59,0.06)] hover:border-blue-500/30 ${item.bgGradient} ${item.gridClass}`}
            >
              {/* Lueur au survol qui passe au bleu discret sur les cartes sombres */}
              <div className={`absolute inset-0 bg-gradient-to-tr from-blue-500/0 ${item.textClass === 'text-white' ? 'via-blue-400/10' : 'via-neutral-950/5'} to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* Bloc Texte supérieur de la carte */}
              <div className="relative z-20 flex justify-between items-start">
                <div className="space-y-4 max-w-md">
                  <div className="space-y-1">
                    <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight leading-none ${item.textClass}`}>
                      {item.title}
                    </h3>
                    <p className={`text-base md:text-lg font-medium opacity-75 ${item.textClass}`}>
                      {item.paragraphe}
                    </p>
                  </div>
                  
                  {/* Boutons Harmonises */}
                  <div className="pointer-events-auto pt-2">
                    <a
                      href={item.link}
                      className={`inline-flex items-center gap-2 border py-3 px-5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-md
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
              </div>

              {/* ZONE MOCKUP GÉANTE */}
              <div className={`absolute transition-all duration-700 ease-out transform pointer-events-none ${item.imgClass}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(15,23,42,0.08)] group-hover:drop-shadow-[0_35px_60px_rgba(15,23,42,0.14)]"
                  style={{ willChange: "transform, filter" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}