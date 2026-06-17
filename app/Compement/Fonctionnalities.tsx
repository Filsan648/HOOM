import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FonctionalityCompement from "./FonctionnalityCompement";
import Image from "../assets/image.png"
// Vos données inchangées (ajustement esthétique : index formatté en "01", "02" automatiquement)
const data = [
  {
    id: 1,
    title: "Contenu pédagogique adapté à chaque niveau et filière",
    paragraphe: "Accédez à des ressources sur-mesure conçues par des experts pour maximiser votre potentiel académique.",
    image: Image,
  },
  {
    id: 2,
    title: "Échangez avec d'autres étudiants et enseignants",
    paragraphe: "Collaborez en temps réel, partagez vos doutes et grandissez au sein d'une communauté soudée.",
    image: Image,
  },
  {
    id: 3,
    title: "Analysez vos performances et identifiez vos points forts",
    paragraphe: "Un tableau de bord intelligent pour suivre votre progression pas à pas et cibler vos lacunes.",
    image: Image,
  },
  {
    id: 4,
    title: "Trouvez des opportunités d'études et de financement",
    paragraphe: "Des milliers de bourses et programmes internationaux à portée de main, centralisés pour vous.",
    image: Image,
  },
  {
    id: 5,
    title: "Programme progressif et accompagné pour réussir chaque étape",
    paragraphe: "Ne soyez plus jamais perdu. Suivez une roadmap claire avec des objectifs hebdomadaires.",
    image: Image,
  }
];

function Fontionalities() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 pour prev, 1 pour next

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div id="Fonctionnalite" className="w-full min-h-screen bg-black text-white flex items-center justify-center p-4 md:p-12 overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Background Glows (Style Awwwards immersif) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] p-6 md:p-16 backdrop-blur-3xl relative shadow-2xl">
        
  

        {/* Slider Container avec Animation d'AnimatePresence */}
        <div className="relative min-h-[500px] lg:min-h-[550px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              className="w-full"
            >
              <FonctionalityCompement
                id={data[index].id}
                title={data[index].title}
                paragraphe={data[index].paragraphe}
                image={data[index].image}
                index={(index + 1).toString().padStart(2, '0')}
                reverse={index % 2 !== 0} // Alterne automatiquement le layout de manière élégante
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Barre de contrôle : Nav + Indicateurs */}
        <div className="mt-32 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8">
          
          {/* Indicateurs de progression (Dots interactifs) */}
          <div className="flex gap-2">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className="h-1.5 transition-all duration-500 rounded-full relative overflow-hidden"
                style={{ width: i === index ? '40px' : '8px' }}
              >
                <div className={`absolute inset-0 ${i === index ? 'bg-blue-500' : 'bg-white/20'}`} />
              </button>
            ))}
          </div>

          {/* Boutons de Navigation Stylisés */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-4 bg-white/[0.03] hover:bg-white/[0.08] active:scale-95 border border-white/10 rounded-full transition-all group"
              aria-label="Previous unique feature"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" />
            </button>

            <button
              onClick={next}
              className="p-4 bg-blue-600 hover:bg-blue-500 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)] rounded-full transition-all group"
              aria-label="Next unique feature"
            >
              <ChevronRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Fontionalities;