import defaultImage from "../assets/7.jpeg";
import { ArrowUpRight } from "lucide-react";

interface FonctionalityCompementProps {
  id: number;
  className?: string;
  image?: string;
  title: string;
  paragraphe: string;
  index?: string; // Ajout d'un index optionnel (ex: "01", "02") pour le look éditorial
  reverse?: boolean; // Pour alterner facilement l'ordre image/texte d'une section à l'autre
}

function FonctionalityCompement({ 
  id,
  className = "", 
  image, 
  title, 
  paragraphe,
  index = "01",
  reverse = false 
}: FonctionalityCompementProps) {
  
  return (
    <section 
      className={`group relative w-full border-b border-black/10 bg-[#fcfbf9] text-[#1a1a1a] transition-colors duration-700 hover:bg-[#f5f4f0] px-6 md:px-12 py-16 md:py-24 font-sans overflow-hidden ${className}`}
    >
      
      {/* STRUCTURE GRID ASYMÉTRIQUE */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* INDEX NUMÉRIQUE CHIC */}
        <div className={`hidden md:block md:col-span-1 text-xs font-mono text-neutral-400 self-start pt-2 ${reverse ? 'md:order-12 md:text-right' : ''}`}>
          [{id.toString().padStart(2, '0')}]
        </div>

        {/* COLONNE TEXTE */}
        <div className={`col-span-1 md:col-span-5 space-y-6 ${reverse ? 'md:col-start-7 md:order-2' : 'md:col-start-2'}`}>
          
          {/* Titre avec mix de polices Serif/Sans-serif */}
          <h2 className="text-3xl md:text-[3.2vw] font-serif font-light leading-[1.1] tracking-tight text-[#1a1a1a]">
            {title.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "font-sans italic font-extralight text-blue-600 mr-2" : "mr-2"}>
                {word}{" "}
              </span>
            ))}
          </h2>
         
          
          {/* Bouton style Galerie d'Art avec interaction de la ligne */}
          <div className="inline-flex items-center gap-2 cursor-pointer pt-4 relative group/btn">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-800 transition-colors duration-300 group-hover/btn:text-blue-600">
              Explorer le module
            </span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-black" />
            
            {/* Ligne sous le bouton */}
            <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-black/10 origin-right scale-x-100 transition-transform duration-500 group-hover/btn:scale-x-0" />
            <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-black origin-left scale-x-0 transition-transform duration-500 group-hover/btn:scale-x-100" />
          </div>

        </div>

        {/* COLONNE IMAGE ARCHITECTURALE */}
        <div className={`col-span-1 md:col-span-5 ${reverse ? 'md:col-start-2 md:col-span-5 md:order-1' : 'md:col-start-8'}`}>
          <div className="relative overflow-hidden w-full aspect-[4/3] md:aspect-[16/11] bg-neutral-100 border border-black/[0.04]">
            
            {/* Overlay subtil qui s'estompe au survol global de la section */}
            <div className="absolute inset-0 bg-[#fcfbf9]/10 z-10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
            
            <img 
              src={image } 
              alt={title} 
              className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] scale-100 filter contrast-[1.02] saturate-[0.9] group-hover:scale-105"
            />
          </div>
        </div>

      </div>

    </section>
  );
}

export default FonctionalityCompement;