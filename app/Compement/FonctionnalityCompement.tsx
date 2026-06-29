import { ArrowUpRight } from "lucide-react";
import PhoneMockup from "../utilis/Phonemockup";

interface FonctionalityCompementProps {
  id: number;
  image?: string;
  title: string;
  paragraphe: string;
  index: string; 
  reverse?: boolean; 
}

function FonctionalityCompement({ 
  id,
  image, 
  title, 
  paragraphe,
  index,
  reverse = false 
}: FonctionalityCompementProps) {
  
  return (
    <section
      className={`
        w-full
        grid grid-cols-1 lg:grid-cols-12
        items-center
        bg-amber-800
        gap-10 lg:gap-16
      `}
    >
      {/* TEXTE (Prend 7 colonnes sur 12) */}
      <div className={`space-y-6 lg:col-span-7  ${reverse ? 'lg:order-last' : ''}`}>
        
        {/* Titre Principal Éditorial */}
   <h2 className="text-3xl md:text-4xl text-black font-serif font-light leading-[1.1] tracking-tight break-words">

      {title.split(" ").map((word, i) => (

        <span

          key={i}

          className={

            i === 1

              ? "font-sans italic font-extralight text-blue-600 mr-2"

              : "mr-2"

          }

        >

          {word}

        </span>

      ))}

    </h2>
        {/* Paragraphe descriptif indispensable au design global */}
        <p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
          {paragraphe}
        </p>

        {/* Bouton d'action Premium (Style minimaliste à micro-interaction) */}
        <div className="pt-4">
          <button className="inline-flex items-center gap-3 cursor-pointer group/btn bg-white/[0.03] hover:bg-blue-600 border border-white/5 hover:border-blue-500 px-6 py-3 rounded-full transition-all duration-300">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-200 group-hover/btn:text-white transition-colors">
              Explorer le module
            </span>
            <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>

 
    </section>
  );
}

export default FonctionalityCompement;