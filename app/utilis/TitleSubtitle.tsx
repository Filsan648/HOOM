import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Motions from "./Motion";
interface TitleProps {
  title: string;
  titlecolors: string;description:string;
  descriptionstyle:string;
  subtitle:string,
  SubtitleStyle:string
   icone: LucideIcon;
}

function Title({ title, titlecolors,description , descriptionstyle,subtitle,SubtitleStyle  , icone: Icon, }: TitleProps) {
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
    <Motions> 
    <div className="relative flex flex-col justify-center items-center mb-10 group select-none">
     <div className= {`py-1 px-4 flex gap-2 rounded-2xl ${SubtitleStyle}`}>  {Icon && <Icon size={15} />}  <span> {subtitle}  </span> </div>
      
      <motion.h2
        className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[5.2vw] font-normal tracking-tight text-neutral-800 leading-none text-center flex flex-wrap justify-center gap-x-3 gap-y-2"
   
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
      <p className={`my-10 text-center max-w-sm md:max-w-md  flex ${descriptionstyle}  flex-wrap text-lg `}>
{description}      </p>


    </div>
    </Motions>
  );
}

export default Title;
