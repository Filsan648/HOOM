import React from 'react';
import { 
  BookOpen, 
  CheckSquare, 
  Sparkles, 
  Target, 
  BookMarked, 
  Dumbbell, 
  BrainCircuit, 
  Rocket,
  ArrowRight
} from 'lucide-react';

function About() {
  const floatingWords = [
    { id: 1, text: 'Cours sur-mesure', icon: <BookOpen className="w-4 h-4 text-yellow-600" />, pos: 'top-[12%] left-[6%]', bg: 'bg-white text-gray-800' },
    { id: 2, text: 'QCM interactifs', icon: <CheckSquare className="w-4 h-4 text-blue-700" />, pos: 'top-[26%] left-[14%]', bg: 'bg-blue-100 text-[#111b21]' },
    { id: 3, text: 'Réussite', icon: <Sparkles className="w-4 h-4 text-white" />, pos: 'top-[8%] left-[45%]', bg: 'bg-blue-600 text-white' },
    { id: 4, text: 'Objectif Bac / Examens', icon: <Target className="w-4 h-4 text-red-500" />, pos: 'top-[15%] right-[15%]', bg: 'bg-white text-gray-800' },
    { id: 5, text: 'Annales corrigées', icon: <BookMarked className="w-4 h-4 text-blue-700" />, pos: 'top-[28%] right-[5%]', bg: 'bg-blue-100 text-[#111b21]' },
    { id: 6, text: 'Exercices ciblés', icon: <Dumbbell className="w-4 h-4 text-yellow-500" />, pos: 'bottom-[18%] left-[4%]', bg: 'bg-white text-gray-800' },
    { id: 7, text: 'Accompagnement', icon: <BrainCircuit className="w-4 h-4 text-gray-300" />, pos: 'bottom-[10%] left-[32%]', bg: 'bg-gray-800 text-white' },
    { id: 8, text: 'Progression', icon: <Rocket className="w-4 h-4 text-yellow-600" />, pos: 'bottom-[15%] right-[8%]', bg: 'bg-yellow-100 text-yellow-800' },
  ];

  return (
    <section className="relative w-full min-h-screen  overflow-hidden flex flex-col items-center justify-center px-6 py-24 select-none">
      
      {/* --- Mots-clés Flottants --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {floatingWords.map((word) => (
          <div 
            key={word.id} 
            className={`absolute ${word.pos} px-4 py-2.5 rounded-full shadow-sm border border-black/5 text-sm font-medium tracking-wide flex items-center gap-2 transition-transform duration-700 hover:scale-105 ${word.bg}`}
            style={{
              animation: `float-slow ${4 + (word.id % 3)}s ease-in-out infinite alternate`,
              animationDelay: `${word.id * 0.15}s`
            }}
          >
            {word.icon}
            <span>{word.text}</span>
          </div>
        ))}
      </div>

      {/* --- Contenu Unique (Paragraphe unique géant) --- */}
      <div className="relative z-10 max-w-5xl text-center mx-auto space-y-12">
        <p className="text-3xl md:text-5xl lg:text-6xl font-light text-[#111b21] tracking-tight leading-[1.25] md:leading-[1.2] max-w-4xl mx-auto">
          <span className="font-semibold text-yellow-500">Hoom</span> est là pour vous accompagner vers la réussite, avec des sujets, des cours personnalisés, des QCM, des exercices et des annales spécialement conçus pour vous.
        </p>

       
      </div>

    </section>
  );
}

export default About;