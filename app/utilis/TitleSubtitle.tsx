import { motion } from "framer-motion";

interface TitleProps {
  title: string;
  titlecolors: string;
}

function Title({ title, titlecolors }: TitleProps) {
  // Découpe le titre en mots
  const words = title.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className="relative flex flex-col justify-center items-center mb-24 md:mb-32 group select-none">
      <div className=" bg-gray-200/25 border-orange-200/40 border py-1 px-4 rounded-2xl" >  dcvcx   </div>
      
      <motion.h2
        className="font-sans text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-neutral-800 leading-none text-center flex flex-wrap justify-center gap-x-3 gap-y-2"
   
      >
            
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-flex whitespace-nowrap"
          >
            {Array.from(word).map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                variants={letterVariants}
                className={`inline-block ${titlecolors} transition-colors duration-300 hover:text-orange-500 hover:scale-105`}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h2>
      <p className="py-5 text-center flex  flex-wrap text-xl w-3xl">

Non pas par manque de capacité, mais parce que les formats sont souvent trop longs, peu interactifs et difficiles à assimiler.

      </p>


    </div>
  );
}

export default Title;
