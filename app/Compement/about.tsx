import React, { useEffect, useRef, useState } from 'react';
import { 
  BookOpen, 
  CheckSquare, 
  Sparkles, 
  Target, 
  BookMarked, 
  Dumbbell, 
  BrainCircuit, 
  Rocket,
  ArrowUpRight
} from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Déclenche l'animation au scroll quand la section entre dans le viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // On anime une seule fois
        }
      },
      { threshold: 0.15 } // Se déclenche quand 15% de la section est visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const floatingWords = [
    { id: 1, text: 'Cours sur-mesure', icon: <BookOpen className="w-3.5 h-3.5 text-blue-600" />, pos: 'top-[15%] left-[8%]' },
    { id: 2, text: 'QCM interactifs', icon: <CheckSquare className="w-3.5 h-3.5 text-blue-600" />, pos: 'top-[32%] left-[0%]' },
    { id: 3, text: 'Réussite', icon: <Sparkles className="w-3.5 h-3.5 text-blue-600" />, pos: 'top-[10%] left-[48%]' },
    { id: 4, text: 'Objectif Bac / Examens', icon: <Target className="w-3.5 h-3.5 text-blue-600" />, pos: 'top-[18%] right-[12%]' },
    { id: 5, text: 'Annales corrigées', icon: <BookMarked className="w-3.5 h-3.5 text-blue-600" />, pos: 'top-[35%] right-[0%]' },
    { id: 6, text: 'Exercices ciblés', icon: <Dumbbell className="w-3.5 h-3.5 text-blue-600" />, pos: 'bottom-[22%] left-[6%]' },
    { id: 7, text: 'Accompagnement', icon: <BrainCircuit className="w-3.5 h-3.5 text-blue-600" />, pos: 'bottom-[20%] left-[35%]' },
    { id: 8, text: 'Progression', icon: <Rocket className="w-3.5 h-3.5 text-blue-600" />, pos: 'bottom-[20%] right-[10%]' },
  ];

  return (
    <section 
    id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen  text-[#1a1a1a] overflow-hidden flex flex-col justify-between p-6 md:p-12 font-sans select-none"
    >
      
      {/* LIGNES DE GRILLE STRUCTURELLES */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-12 gap-0 px-6 md:px-12 opacity-[0.04]">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="h-full border-r border-blue-600 last:border-r-0" />
        ))}
      </div>

      {/* MOTS FLOTTANTS ÉPURÉS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {floatingWords.map((word) => (
          <div 
            key={word.id} 
            className={`absolute ${word.pos} px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-black/[0.06] text-xs uppercase tracking-wider font-light text-neutral-600 flex items-center gap-2.5 transition-all duration-700 pointer-events-auto cursor-pointer hover:scale-105 hover:bg-white hover:border-black/20 hover:shadow-md
              ${isVisible ? 'animate-badge-pop' : 'opacity-0'}
            `}
            style={{
              animationDelay: `${word.id * 0.1}s`,
              // On applique l'animation de flottement continu après l'apparition
              animation: isVisible 
                ? `badgePop 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${word.id * 0.1}s forwards, floatSlow ${6 + (word.id % 4)}s ease-in-out ${1.2 + (word.id * 0.1)}s infinite alternate` 
                : 'none'
            }}
          >
            {word.icon}
            <span>{word.text}</span>
          </div>
        ))}
      </div>

      {/* MANIFESTO / GRAND TEXTE RYTHMÉ (Apparition découpée en blocs) */}
      <div className="relative z-10 max-w-6xl mx-auto my-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-20">
        <div className="md:col-span-11 md:col-start-2">
          <p className="text-[7.5vw] md:text-[3.8vw] font-serif font-light text-[#1a1a1a] tracking-tight leading-[1.2] md:leading-[1.15]">
            
            {/* Bloc 1 */}
            <span className="inline-block overflow-hidden vertical-align-bottom">
              <span className={`inline-block transition-all ${isVisible ? 'animate-text-reveal' : 'opacity-0'}`}>
                <span className="font-sans  tracking-tighter   block mb-2 md:inline md:mr-4">
                  HOOM
                </span>
                est là pour vous accompagner vers la 
              </span>
            </span>

            {/* Bloc 2 */}
            <span className="inline-block overflow-hidden vertical-align-bottom mx-2">
              <span 
                className={`inline-block font-serif italic font-normal text-blue-600 ${isVisible ? 'animate-text-reveal' : 'opacity-0'}`}
                style={{ animationDelay: '200ms' }}
              >
                réussite.
              </span>
            </span>

            {/* Bloc 3 */}
            <span className="inline-block overflow-hidden vertical-align-bottom">
              <span 
                className={`inline-block ${isVisible ? 'animate-text-reveal' : 'opacity-0'}`}
                style={{ animationDelay: '350ms' }}
              >
                À travers des parcours 
                <span className="font-sans italic font-extralight text-blue-600 mx-2">sur-mesure</span>, 
                des modules interactifs et des annales ciblées,
              </span>
            </span>

            {/* Bloc 4 */}
            <span className="inline-block overflow-hidden vertical-align-bottom">
              <span 
                className={`inline-block ${isVisible ? 'animate-text-reveal' : 'opacity-0'}`}
                style={{ animationDelay: '500ms' }}
              >
                nous redéfinissons votre manière de 
                <span className="font-serif italic font-normal text-neutral-800 ml-2">progresser.</span>
              </span>
            </span>

          </p>
        </div>
      </div>



    </section>
  );
}

export default About;