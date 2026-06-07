import BackgroundImage from "../assets/BackroundImageHero.png"; 
import Button from "../utilis/Button"; 

function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#fcfbf9] text-[#1a1a1a] overflow-hidden flex flex-col justify-between p-6 md:p-12 font-sans select-none">
      
      {/* LIGNES DE GRILLE STRUCTURELLES */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-12 gap-0 px-6 md:px-12 opacity-[0.04]">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="h-full border-r border-black last:border-r-0" />
        ))}
      </div>

      {/* TOP HEADER / META DATA (Apparaît en premier) */}
      <div className="opacity-0 animate-fade-up [animation-delay:100ms] relative z-20 flex justify-between items-center w-full border-b border-yellow-600 pb-6">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-neutral-500">
          [ ARCHITECTURE DE L'APPRENTISSAGE ]
        </span>
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-neutral-500">
          HOOM ©2026
        </span>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-16 md:mt-0 mb-auto md:mb-0 w-full">
        
        {/* TITRE MASSIF ÉDITORIAL AVEC EFFET MASQUE (REVEAL) */}
        <div className="md:col-span-10 lg:col-span-11 ">
          <h1 className="text-[12vw] md:text-[8vw] font-serif font-light leading-[0.9] tracking-tight text-[#1a1a1a]">
            
            {/* Ligne 1 */}
            <span className="block overflow-hidden w-max py-1">
              <span className="block opacity-0 animate-reveal [animation-delay:200ms]">
                Apprenez
              </span>
            </span>

            {/* Ligne 2 */}
            <span className="block overflow-hidden w-max py-1">
              <span className="block opacity-0 animate-reveal [animation-delay:350ms] font-sans italic font-extralight tracking-tighter text-blue-600">
                autrement
              </span>
            </span>

            {/* Ligne 3 */}
            <span className="block overflow-hidden w-max py-1">
              <span className="block opacity-0 animate-reveal [animation-delay:500ms]">
                <span className="font-sans font-thin text-neutral-300 hidden md:inline"> — </span> 
                évoluez <span className="font-serif italic font-normal text-blue-600">sans limites.</span>
              </span>
            </span>

          </h1>
        </div>

        {/* IMAGE FLOTTANTE ASYMÉTRIQUE (Effet d'entrée + Hover fluide) */}
        <div className="opacity-0 animate-image [animation-delay:650ms] absolute top-[-10%] right-[-5%] w-[70vw] md:w-[40vw] h-[45vh] md:h-[65vh] pointer-events-auto z-0 mix-blend-multiply group/img cursor-pointer">
          <img 
            src={BackgroundImage} 
            alt="HOOM Concept" 
            className="w-full h-full object-cover rounded-2xl filter sepia-[15%] contrast-[1.05] saturate-[0.85] transition-all duration-1000 ease-premium group-hover/img:scale-105 group-hover/img:filter-none"
          />
        </div>

      </div>

      {/* PARAGRAPHE + BOUTON EN BAS */}
      <div className="opacity-0 animate-fade-up [animation-delay:800ms] relative z-20 grid grid-cols-1 md:grid-cols-12 gap-6 w-full border-t border-black/10 pt-8 items-start">
        
        <div className="md:col-span-5 lg:col-span-4">
          <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed tracking-wide">
            HOOM vous accompagne vers la réussite en vous offrant une expérience d’apprentissage personnalisée, interactive et adaptée à vos besoins pour progresser efficacement à votre rythme.
          </p>
        </div>

        <div className="md:col-span-4 md:col-start-9 flex md:justify-end items-center h-full pt-2 md:pt-0">
          {/* Bouton interactif en CSS pur */}
         +100
        </div>

      </div>

    </section>
  );
}

export default Hero;