import { useEffect, useRef, useState } from "react";

// Tes imports d'images inchangés
import image1 from "../assets/Fonctionallity/0.png";
import image2 from "../assets/Fonctionallity/1.jpeg";
import image3 from "../assets/Fonctionallity/2.jpeg";
import image4 from "../assets/Fonctionallity/3.jpeg";
import image5 from "../assets/Fonctionallity/4.jpeg";
import image6 from "../assets/Fonctionallity/5.jpeg";
import image7 from "../assets/Fonctionallity/6.jpeg";
import image8 from "../assets/Fonctionallity/7.jpeg";
import image9 from "../assets/Fonctionallity/8.jpeg";
import image10 from "../assets/Fonctionallity/9.jpeg";
import image11 from "../assets/Fonctionallity/10.jpeg";
import image12 from "../assets/Fonctionallity/11.jpeg";
import image13 from "../assets/Fonctionallity/12.jpeg";
import image14 from "../assets/Fonctionallity/13.jpeg";
import image15 from "../assets/Fonctionallity/14.jpeg";
import image16 from "../assets/Fonctionallity/15.jpeg";
import image17 from "../assets/Fonctionallity/16.png";

// Ajout d'une couleur d'arrière-plan unique et douce (Light) pour chaque ID
const images = [
  { image: image1, title: "Écran d'Accueil Premium", bgColor: "#f4f4f5" }, // Gris neutre très clair
  { image: image2, title: "Interface Fluide & Intuitive", bgColor: "#eff6ff" }, // Bleu très doux
  { image: image3, title: "Design Épuré & Minimaliste", bgColor: "#f5f3ff" }, // Violet très doux
  { image: image4, title: "Statistiques en Temps Réel", bgColor: "#f0fdf4" }, // Vert très doux
  { image: image5, title: "Sécurité Renforcée", bgColor: "#fff7ed" }, // Orange/Ambre très doux
  { image: image6, title: "Gestion du Profil", bgColor: "#fafaf9" },
  { image: image7, title: "Notifications Push", bgColor: "#fdf2f8" }, // Rose très doux
  { image: image8, title: "Paiement en Un Clic", bgColor: "#f0fdfa" }, // Turquoise très doux
  { image: image9, title: "Support Client Dédié", bgColor: "#f5f5f4" },
  { image: image10, title: "Historique Détaillé", bgColor: "#eff6ff" },
  { image: image11, title: "Filtres Avancés", bgColor: "#f5f3ff" },
  { image: image12, title: "Partage Facilité", bgColor: "#f0fdf4" },
  { image: image13, title: "Synchronisation Cloud", bgColor: "#fff7ed" },
  { image: image14, title: "Mode Hors-Ligne", bgColor: "#fafaf9" },
  { image: image15, title: "Outils de Personnalisation", bgColor: "#fdf2f8" },
  { image: image16, title: "Rapports Mensuels", bgColor: "#f0fdfa" },
  { image: image17, title: "Expérience Finale", bgColor: "#f4f4f5" },
];

function Gallerie() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className=" w-full min-h-screen p-20 text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white transition-colors duration-1000 ease-out"
      style={{ backgroundColor: images[activeIndex].bgColor }}
    >
      
    {/* EN-TÊTE ÉDITORIAL DE LA SECTION */}
      <div className="my-5" >
        
          <h2 className="text-4xl md:text-[4vw] font-serif font-light tracking-tight leading-tight text-[#1a1a1a]">
            Découvrez 
          <br className="md:hidden" />
            <span className="font-sans italic font-extralight text-blue-600"> l'interface </span>de Hoom en images.
          </h2>
            <p className="py-5 text-black/80 text-justify">Découvrez la galerie de Hoom à travers ses interfaces modernes et soigneusement conçues. Chaque écran a été pensé pour offrir une expérience utilisateur fluide, intuitive et agréable, favorisant ainsi un apprentissage optimal. Avec plus de 8 interfaces entièrement responsive et un design résolument moderne, Hoom s’adapte parfaitement à tous les appareils tout en garantissant une navigation simple et efficace.</p>
    
      </div>
        <div className="flex">
      {/* LEFT : Titres avec scroll fluide */}
      <div className="w-1/2 h-screen overflow-y-auto p-12 space-y-12 scrollbar-none snap-y snap-mandatory">
        {images.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              ref={(el) => { refs.current[index] = el; }}
              data-index={index}
              className="h-[80vh] flex flex-col justify-center snap-start relative pl-8 border-l border-neutral-300/40 transition-colors duration-500 first:mt-[10vh] last:mb-[10vh]"
            >
              {/* Petite ligne d'accentuation active sur la gauche */}
              <div 
                className={`absolute left-0 top-1/4 bottom-1/4 w-[2px] transition-all duration-500 origin-center bg-neutral-900 ${
                  isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                }`}
              />

              <span className={`text-xs font-mono mb-3 tracking-widest uppercase transition-opacity duration-500 ${
                isActive ? "text-neutral-900 opacity-100" : "text-neutral-400 opacity-60"
              }`}>
                {String(index + 1).padStart(2, '0')} / {images.length}
              </span>

              <h2
                className={`text-3xl font-semibold tracking-tight transition-all duration-500 sm:text-5xl lg:text-6xl ${
                  isActive 
                    ? "text-neutral-900 translate-x-2" 
                    : "text-neutral-400/40 scale-95 blur-[0.2px]"
                }`}
              >
                {item.title}
              </h2>
            </div>
          );
        })}
      </div>

      {/* RIGHT : Mockup / Images Sticky avec Crossfade */}
      <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center overflow-hidden border-l border-neutral-300/20 bg-white/10 backdrop-blur-md">
        
        {/* Conteneur de l'appareil */}
        <div className="relative w-[340px] h-[680px] flex items-center justify-center">
          {images.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <img
                key={index}
                src={item.image}
                alt={`Preview ${item.title}`}
                className={`absolute max-w-full max-h-full rounded-[2.5rem] 
                  shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08),0_15px_30px_-20px_rgba(0,0,0,0.05)] 
                  object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] 
                  border-4 border-white
                  ${isActive 
                    ? "opacity-100 scale-100 rotate-0 z-10 pointer-events-auto" 
                    : "opacity-0 scale-95 rotate-1 -z-10 pointer-events-none"
                  }`}
              />
            );
          })}
        </div>
        
      </div>
  </div>
    </section>
  );
}

export default Gallerie;