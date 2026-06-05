import { ArrowUpRight } from 'lucide-react';

function Button() {
  return (
    <div className="flex items-center gap-4 select-none">
      
      {/* SECONDARY BUTTON (Télécharger) - Placé en premier pour un équilibre visuel ou inversable */}
      <a href="#services" className="hidden sm:inline-block">
        <button className="group relative overflow-hidden rounded-full border border-black/20 bg-transparent px-6 py-3.5 text-black transition-colors duration-500 hover:border-black focus:outline-none">
          <span className="relative z-10 block text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 group-hover:text-white">
            Télécharger
          </span>
          {/* Remplissage fluide du bas vers le haut au survol */}
          <span className="absolute inset-0 z-0 bg-black translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
        </button>
      </a>

      {/* PRIMARY BUTTON (Se connecter) */}
      <a href="#about" className="inline-block">
        <button className="group relative overflow-hidden rounded-full bg-black px-6 py-3.5 text-white border border-black transition-transform duration-300 active:scale-95 focus:outline-none">
          <span className="relative z-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors duration-500 group-hover:text-black">
            Se connecter
            <div className="relative w-4 h-4 overflow-hidden">
              {/* Effet double flèche directionnelle typique Awwwards */}
              <ArrowUpRight
                size={14}
                className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-4 group-hover:-translate-y-4"
              />
              <ArrowUpRight
                size={14}
                className="absolute inset-0 -translate-x-4 translate-y-4 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0 group-hover:translate-y-0"
              />
            </div>
          </span>
          {/* Remplissage fluide du bas vers le haut au survol (Inversé blanc) */}
          <span className="absolute inset-0 z-0 bg-[#fcfbf9] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
        </button>
      </a>

    </div>
  );
}

export default Button;