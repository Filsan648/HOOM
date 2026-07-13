import { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";
import avart1 from "../../assets/avatars/avatar1.png";
import avart2 from "../../assets/avatars/avatar2.png";
import avart3 from "../../assets/avatars/avatar3.png";
import avart4 from "../../assets/avatars/avatar4.png";
import Title from "~/utilis/TitleSubtitle";
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  program: string;
  index: string;
  image: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // États pour la gestion du Drag
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const testimonials: Testimonial[] = [
    {
      index: "01",
      quote: "Grâce à Hoom, j'ai mieux compris les mathématiques et les sciences. Les QCM et les vidéos m'ont beaucoup aidée.",
      author: "Ayan Mohamed",
      role: "Etudiante",
      program: "Terminal S",
      image: avart4,
    },
    {
      index: "02",
      quote: "La plateforme est très utile pour les révisions. Les cours sont clairs, bien structurés et faciles d'accès.",
      author: "Youssouf Ali",
      role: "Etudiant",
      program: "L1 informatique",
      image: avart2,
    },
    {
      index: "03",
      quote: "J'adore l'interface et les fonctionnalités. C'est motivant et vraiment adapté à notre programme.",
      author: "Fatouma HAsssan",
      role: "Etudiante",
      program: "Terminale ES",
      image: avart3,
    }
  ];

  // Calculer dynamiquement quelle carte est la plus proche du centre lors du défilement
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const card = child as HTMLElement;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  };

  // --- LOGIQUE DU DRAG (SOURIS) ---
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDown.current = true;
    container.classList.add("cursor-grabbing");
    container.classList.remove("cursor-grab");
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    const container = scrollContainerRef.current;
    if (container) {
      container.classList.remove("cursor-grabbing");
      container.classList.add("cursor-grab");
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    const container = scrollContainerRef.current;
    if (container) {
      container.classList.remove("cursor-grabbing");
      container.classList.add("cursor-grab");
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Vitesse du scroll
    container.scrollLeft = scrollLeft.current - walk;
  };

  // Centrer la première carte au premier chargement
  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section id="testimonials" className="w-fu bg-white  px-32    border-b border-b-black/5 overflow-hidden select-none">
      <div className="w-full">
        
              <Title title="Ce que disent nos étudiants" titlecolors="text-neutreal-800" />


        {/* CONTENEUR DE CARTES CÔTE À CÔTE (Scrollable & Draggable) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 cursor-grab active:cursor-grabbing scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Masque la barre de défilement standard
        >
          {/* Espacements virtuels au début et à la fin pour permettre le centrage parfait des cartes de bord */}
          <div className="shrink-0 w-[10%] md:w-[25%]" />

          {testimonials.map((testimonial, idx) => {
            const isCenter = idx === activeIndex-1;

            return (
              <div
                key={testimonial.index}
                className={`shrink-0 w-[80%] md:w-[45%] lg:w-[40%] snap-center rounded-3xl p-8 md:p-12 transition-all duration-500 ease-out border shadow-sm
                  ${isCenter 
                    ? "bg-blue-600 border-blue-600 text-white scale-100 z-10 shadow-blue-500/10" 
                    : "bg-neutral-100 border-neutral-200/60 text-neutral-800 scale-95 opacity-70"
                  }`}
              >
                <div className="flex flex-col h-full justify-between space-y-8">
                  
                  {/* Corps du message */}
                  <div className="relative">
                    <Quote className={`absolute -top-8 -left-4 w-10 h-10 pointer-events-none ${isCenter ? "text-white/10" : "text-black/[0.03]"}`} />
                    <p className="text-lg md:text-xl font-serif font-light leading-relaxed tracking-tight min-h-[120px]">
                      “ {testimonial.quote} ”
                    </p>
                  </div>

                  {/* Profil & Informations */}
                  <div className="flex items-center justify-between pt-6 border-t border-current/10">
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt="" 
                        className={`w-12 h-12 rounded-xl object-cover transition-transform duration-500 ${isCenter ? "rotate-6 bg-white/10 p-0.5" : "bg-black/5 p-0.5"}`} 
                      />
                      <div>
                        <h4 className="text-sm font-medium tracking-wide">
                          {testimonial.author}
                        </h4>
                        <p className={`text-xs font-mono mt-0.5 ${isCenter ? "text-blue-200" : "text-neutral-500"}`}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    
                    <p className={`text-xs uppercase tracking-wider font-medium hidden sm:block ${isCenter ? "text-blue-200/80" : "text-neutral-400"}`}>
                      {testimonial.program}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

          <div className="shrink-0 w-[10%] md:w-[25%]" />
        </div>

        {/* INDICATEUR VISUEL DE NAVIGATION CENTRALISÉ */}
        <div className="flex justify-center items-center gap-2 mt-4 font-mono text-xs text-neutral-400">
          <span className="text-black font-medium">{activeIndex }</span>
          <span className="opacity-40">/</span>
          <span className="opacity-40">{testimonials.length}</span>
        </div>

      </div>
    </section>
  );
}