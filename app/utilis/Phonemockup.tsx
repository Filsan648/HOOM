interface DualPhoneMockupProps {
  images: [string, string]; // Attend un tableau de exactement 2 imagesdouble
}

function DualPhoneMockup({ images }: DualPhoneMockupProps) {
  const [imageLeft, imageRight] = images;

  // Composant interne réutilisable pour éviter la duplication de code
  const SinglePhone = ({ img, isFront }: { img: string; isFront?: boolean }) => (
    <div className={`relative w-full max-w-[240px] aspect-[9/19.5] rounded-[52px] p-[6px] bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 border border-white/50 select-none transition-transform duration-700
      ${isFront 
        ? "z-20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] md:hover:scale-105 -rotate-[-5deg] md:hover:rotate-0 " 
        : "z-10 -mr-10 scale-95 opacity-85 rotate-[-5deg] translate-y-4 md:hover:translate-y-2 md:hover:rotate-0 md:hover:opacity-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)]"
      }`}
    >
      {/* Écran Interne (Bordure noire de l'OLED + Châssis interne) */}
      <div className="relative w-full h-full bg-black rounded-[46px] p-[4px] shadow-inner overflow-hidden">
        
        {/* INTERFACE IOS (Status Bar Premium) */}
        <div className="absolute top-0 inset-x-0 h-11 px-6 z-40 flex items-center justify-between text-[11px] font-semibold text-zinc-900 pointer-events-none mix-blend-difference">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            {/* Signal Réseau */}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 19h2v-2H2v2zm4 0h2v-4H6v2zm4 0h2v-7h-2v5zm4 0h2V8h-2v11zm4 0h2V4h-2v15z"/>
            </svg>
            {/* Batterie */}
            <div className="w-5 h-2.5 border border-current rounded-[4px] p-[1px] flex items-center">
              <div className="w-full h-full bg-current rounded-[2px]" />
            </div>
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-50 flex items-center justify-between px-2.5 shadow-md border border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#080810] shadow-inner" />
          <div className="w-1 h-1 rounded-full bg-emerald-500/10" />
        </div>

        {/* Conteneur de l'image de l'application */}
        <div className="w-full h-full rounded-[41px] overflow-hidden bg-neutral-50 relative group">
          <img
            src={img}
            alt="Application HOOM sur iPhone"
            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />

          {/* Reflet de vitre 2.5D incurvé */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent mix-blend-overlay pointer-events-none" />
          <div className="absolute top-0 -left-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-[300%] transition-transform duration-[1.5s] ease-out pointer-events-none" />

          {/* iOS Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-900/60 rounded-full z-40 mix-blend-difference" />
        </div>
      </div>
      
      {/* Boutons Volume Latéraux */}
      <div className="absolute top-24 -left-[2px] w-[2px] h-8 bg-zinc-300 rounded-l-sm" />
      <div className="absolute top-36 -left-[2px] w-[2px] h-12 bg-zinc-300 rounded-l-sm" />
      <div className="absolute top-52 -left-[2px] w-[2px] h-12 bg-zinc-300 rounded-l-sm" />
      {/* Bouton Power Droite */}
      <div className="absolute top-36 -right-[2px] w-[2px] h-16 bg-zinc-300 rounded-r-sm" />
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full max-w-2xl mx-auto px-4 py-12 overflow-visible">
      {/* Téléphone Arrière (Gauche) */}
      <SinglePhone img={imageLeft} isFront={false} />
      
      {/* Téléphone Premier Plan (Droite) */}
      <SinglePhone img={imageRight} isFront={true} />
    </div>
  );
}

export default DualPhoneMockup;