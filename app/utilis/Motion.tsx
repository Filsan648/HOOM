import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface MotionProps {
  children: React.ReactNode;
  duration?: number;
  yOffset?: number;
  delay?: number;
}

function Motions({
  children,
  duration = 1.4, // Un poil plus long pour savourer l'inertie
  yOffset = 80,   // Un slideUp est souvent plus naturel et premium qu'un slideDown
  delay = 0,
}: MotionProps) {
  
  // Courbe de bézier custom signature des sites Awwwards (Escale / Inertie dramatique)
  const awwwardsEase = [0.16, 1, 0.3, 1]; 

  const revealVariants: Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: awwwardsEase,
        // Optimisation matérielle pendant l'animation
        type: "tween",
      },
    },
  };

  return (
    <div className="overflow-hidden w-full h-full block">
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3, // Plus réactif dès que l'élément pointe le bout de son nez
        }}
        style={{ willChange: "transform, opacity" }} // Force l'accélération GPU
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Motions;