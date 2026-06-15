import { useRef, useState, useEffect } from "react";
import PhoneMockup from "../utilis/Phonemockup";

// Importation de tes images
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

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8,
  image9, image10, image11, image12, image13, image14, image15, image16, image17
];

function Gallerie() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftBtn(scrollLeft > 10);
      setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.6 : clientWidth * 0.6;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white py-24 overflow-hidden font-sans selection:bg-white selection:text-black">
      {/* Giga Typo en Arrière-plan (Signature Awwwards) */}
     <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
       <div className="lg:col-span-8">
            <h2 className="text-3xl  md:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-[1.1]">
Découvrez l'interface
de Hoom  <span className="italic font-normal text-blue-600">étudiants</span> en images <br />
              
            </h2>
             <p className="text-lg text-zinc-300 font-light mt-4">
              Une expérience utilisateur soignée, des designs intuitifs pour une apprentissage optimal
             </p>
          </div>
        
        {/* Boutons de navigation minimalistes et haut de gamme */}
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            disabled={!showLeftBtn}
            className={`w-14 w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
              showLeftBtn 
                ? "border-white/20 text-white hover:bg-white hover:text-black hover:scale-105" 
                : "border-white/5 text-white/20 cursor-not-allowed"
            }`}
            aria-label="Précédent"
          >
            <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!showRightBtn}
            className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
              showRightBtn 
                ? "border-white/20 text-white hover:bg-white hover:text-black hover:scale-105" 
                : "border-white/5 text-white/20 cursor-not-allowed"
            }`}
            aria-label="Suivant"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slider avec Effets de Perspective */}
      <div
        ref={containerRef}
        className="flex gap-8 md:gap-12 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-[5%] md:px-[10%] py-12 perspective-container"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .perspective-container { perspective: 1200px; }
        `}</style>

        {images.map((img, index) => (
          <div
            key={index}
            className={`flex-none w-72 sm:w-80 snap-center transition-all duration-500 ease-out transform dynamic-card
              /* Effet de rythme Awwwards : On décale une carte sur deux vers le bas */
              ${index % 2 === 0 ? "translate-y-0" : "translate-y-8 md:translate-y-12"}
            `}
          >
            {/* Wrapper de la carte pour gérer la 3D au survol */}
            <div className="relative group/card rounded-[2.5rem] bg-zinc-950 p-3 border border-white/[0.06] shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.03)] hover:-translate-y-4 hover:rotate-2">
              
              {/* Reflet de lumière premium au survol */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Le Mockup de ton téléphone */}
              <div className="relative z-10 transition-transform duration-500 group-hover/card:scale-[1.02]">
                <PhoneMockup image={img} />
              </div>

              {/* Index de l'image ultra-stylisé en bas à droite */}
              <div className="absolute bottom-6 right-8 text-6xl font-black text-white/[0.02] group-hover/card:text-white/[0.07] transition-colors duration-500 pointer-events-none font-mono">
                {(index + 1).toString().padStart(2, '0')}
              </div>
            </div>
          </div>
        ))}
      </div>
  
    </div>
  );
}

export default Gallerie;