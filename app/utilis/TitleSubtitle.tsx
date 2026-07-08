import { motion } from 'framer-motion';

function Title({ title ,titlecolors }: { title: string ,titlecolors:string }) {
  // On sépare le titre en lettres individuelles pour l'effet cinétique
  const letters = Array.from(title);

  // Configuration de l'animation pour les lettres
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: "blur(10px)" // Effet de flou cinétique au démarrage
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1] // Custom ease-out très fluide
      }
    }
  };

  return (
    <div className="relative flex justify-center items-center  mb-24 md:mb-32 group select-none">
    

      {/* 2. Titre Principal Massif */}
      <motion.h2 
        className="font-sans text-5xl md:text-7xl text-center lg:text-8xl font-normal tracking-tight text-neutral-800 leading-none flex flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={`inline-block hover:text-orange-500 ${titlecolors} transition-colors duration-300 transform hover:scale-105`}
            style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>

     

    </div>
  );
}

export default Title;