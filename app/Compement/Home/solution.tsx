import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Title from "~/utilis/TitleSubtitle";
import video from "../../assets/about/9034534-uhd_3840_2160_24fps.mp4";
import { Activity } from "lucide-react";function Solution() {
  const containerRef = useRef<HTMLDivElement>(null);

  // On suit la progression du scroll sur l'ensemble de la section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animation 1 : Le titre s'estompe et monte au scroll
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Animation 2 : La vidéo commence petite avec des bords très arrondis,
  // puis prend tout l'écran (scale: 1) et perd ses arrondis (radius: 0)
  const videoScale = useTransform(scrollYProgress, [0.1, 0.6], [0.6, 1]);
  const videoRadius = useTransform(scrollYProgress, [0.1, 0.6], ["24px", "0px"]);

  return (
    // h-[200vh] crée l'espace nécessaire pour scroller et animer l'élément fixe
    <section ref={containerRef} className="relative h-[200vh] text-white mt-24 ">
        <div className="mx-32">
      <Title 
      subtitle="LA SOLUTION"
      SubtitleStyle='text-green-600 bg-green-400/10 text-xs border border-green-500/40'
            title="La  réussite académique, enfin accessible et simplifiée." 
            titlecolors="text-neutral-50" description="HOOM réinvente l'apprentissage en apportant la personnalisation et la simplicité dont chaque étudiant djiboutien a besoin pour réussir."
            descriptionstyle='text-white/60'
            icone={Activity}
          />
  </div>
      {/* Conteneur collant (Sticky) qui reste à l'écran pendant le scroll */}
      <div className="sticky top-0 h-screenw-full overflow-hidden flex flex-col justify-center items-center px-4">
        
      

        {/* Vidéo animée style cinématographique / Awwwards */}
        <motion.div
          style={{ scale: videoScale, borderRadius: videoRadius }}
          className="w-full max-w-7xl aspect-video overflow-hidden will-change-transform shadow-2xl"
        >
          <video
            className="w-full h-full object-cover  rounded-3xl  "
            src={video}
            autoPlay
            loop
            controls
            muted
            playsInline // Important pour le bon fonctionnement sur mobile
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Solution;