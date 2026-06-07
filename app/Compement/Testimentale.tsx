import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  program: string;
  year: string;
  index: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      index: "01",
      quote: "L'approche pédagogique de HOOM a complètement redéfini ma vision du développement. Les projets pratiques s'alignent exactement sur les exigences des meilleures agences internationales.",
      author: "Filsan F. Youssouf",
      role: "Software Engineer",
      program: "Master IA & Modélisation",
      year: "Promo 2025"
    },
    {
      index: "02",
      quote: "Au-delà du code, c'est une véritable culture du design et du détail qui m'a été transmise. Chaque critique de projet nous pousse vers un standard d'excellence très élevé.",
      author: "Alexandre Mercier",
      role: "Creative Developer",
      program: "Spécialisation Front-End",
      year: "Promo 2026"
    },
    {
      index: "03",
      quote: "Une formation intense mais d'une clarté absolue. Les mentors ne se contentent pas de valider des acquis, ils nous apprennent à penser l'architecture logicielle comme une œuvre d'art.",
      author: "Sofia Alami",
      role: "Full-Stack Engineer",
      program: "Architecture logicielle",
      year: "Promo 2025"
    }
  ];

  // Gestion du changement d'index avec une micro-animation fluide
  const triggerChange = (nextIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsAnimating(false);
    }, 200); // Temps court pour l'effet de fondu
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % testimonials.length;
    triggerChange(next);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    triggerChange(prev);
  };

  return (
    // CORRECTION : Suppression de select-none globale qui pouvait interférer avec les événements de clics
    <section id="testimonials" className="w-full bg-[#fcfbf9] py-24 md:py-36 border-b border-b-black/5 overflow-hidden">
      <div className="w-full px-6 md:px-12">
        
        {/* EN-TÊTE ÉDITORIAL ASYMÉTRIQUE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono opacity-40">(05)</span>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-500">Témoignages</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-[#1a1a1a] tracking-tight leading-[1.1]">
              Ce que nos <span className="italic font-normal text-blue-600">étudiants</span> disent <br />
              de leur expérience chez nous.
            </h2>
          </div>
        </div>

        {/* AFFICHAGE DU TÉMOIGNAGE ACTIF */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Index Géant à gauche */}
          <div className="hidden lg:block lg:col-span-2">
            <span 
              className={`text-7xl font-serif font-light text-neutral-200 block transition-all duration-300
                ${isAnimating ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}`}
            >
              {testimonials[activeIndex].index}
            </span>
          </div>

          {/* Contenu principal du témoignage */}
          <div className="lg:col-span-7 space-y-10">
            <div className="relative">
              <Quote className="absolute -top-10 -left-6 w-12 h-12 text-black/[0.03] pointer-events-none" />
              <p 
                className={`text-xl md:text-2xl lg:text-3xl font-serif font-light text-[#1a1a1a] leading-relaxed tracking-tight min-h-[160px] md:min-h-[120px] transition-all duration-300 ease-out
                  ${isAnimating ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"}`}
              >
                “ {testimonials[activeIndex].quote} ”
              </p>
            </div>

            {/* Métadonnées de l'étudiant */}
            <div 
              className={`flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-black/10 transition-all duration-300
                ${isAnimating ? "opacity-30" : "opacity-100"}`}
            >
              <div>
                <h4 className="text-sm font-medium text-black tracking-wide">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">
                  {testimonials[activeIndex].role}
                </p>
              </div>
              <div className="hidden sm:block h-6 w-[1px] bg-black/10" />
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  {testimonials[activeIndex].program}
                </p>
                <p className="text-[11px] text-neutral-500 font-mono mt-0.5">
                  {testimonials[activeIndex].year}
                </p>
              </div>
            </div>
          </div>

          {/* CONTRÔLES ET NAVIGATION (Style Galerie d'Art) */}
          <div className="lg:col-span-3 flex lg:flex-col justify-end items-center lg:items-end gap-4 mt-8 lg:mt-0">
            
            {/* Indicateur de progression numérique */}
            <div className="font-mono text-xs text-neutral-400 mr-auto lg:mr-0 lg:mb-4">
              <span className="text-black font-medium">{activeIndex + 1}</span>
              <span className="opacity-40"> / </span>
              <span className="opacity-40">{testimonials.length}</span>
            </div>

            {/* Boutons fléchés épurés */}
            <div className="flex gap-2 relative z-10">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-black/10 hover:border-black flex items-center justify-center text-neutral-800 transition-colors duration-300 focus:outline-none group active:scale-95 cursor-pointer"
                aria-label="Témoignage précédent"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-black text-white border border-black flex items-center justify-center transition-transform focus:outline-none group active:scale-95 cursor-pointer"
                aria-label="Témoignage suivant"
              >
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}