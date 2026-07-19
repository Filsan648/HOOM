import { useState } from "react";
import BackgroundImage from "../../assets/gallery/4.jpeg";
import avart1 from "../../assets/avatars/avatar1.png";
import avart2 from "../../assets/avatars/avatar2.png";
import avart3 from "../../assets/avatars/avatar3.png";
import avart4 from "../../assets/avatars/avatar4.png";
import Button from "~/utilis/Button";
import PhoneMockup from "../../utilis/Phonemockup";
import { Apple, Download } from "lucide-react";
import PhoneMockupImage from "../../assets/Mockups/594shots_so.png"
import Motions from "~/utilis/Motion";
function Hero() {
  

  return (
 <Motions>
    <section 
      className="relative w-full bg-white px-6 md:px-16 lg:px-32 py-24 md:py-32 select-none overflow-hidden "
   
    >

      {/* Lignes de structure minimalistes en arrière-plan */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-neutral-100/60 pointer-events-none" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-neutral-100/60 pointer-events-none" />

      {/* Grille Principale (Texte gauche / Image droite) */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* BLOC GAUCHE : TEXTE ET CALL TO ACTIONS */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-start space-y-8">
          
          {/* Badge Social Proof (Témoignages-style) */}
          <div className="inline-flex items-center gap-3  border border-neutral-200/70 rounded-full py-1.5 pl-2 pr-4  group">
            <div className="flex items-center -space-x-2.5">
              <img src={avart1} className="w-7 h-7 rounded-full border border-white object-cover" alt="" />
              <img src={avart2} className="w-7 h-7 rounded-full border border-white object-cover" alt="" />
              <img src={avart3} className="w-7 h-7 rounded-full border border-white object-cover" alt="" />
              <img src={avart4} className="w-7 h-7 rounded-full border border-white object-cover animate-pulse" alt="" />
            </div>
            <p className="text-[11px] font-mono tracking-wider text-neutral-500 uppercase">
              Plus de <span className="text-yellow-600 font-bold font-sans tracking-normal">600 étudiants</span> connectés
            </p>
          </div>

          {/* Titre Éditorial (Exactement comme sur ta capture) */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2vw] font-serif font-light tracking-tighter text-neutral-950 leading-[0.95]">
            L'Excellence  Académique
           {" "}
            <span className="italic text-blue-600 font-serif font-light">à Djibouti.</span>
          </h1>

          {/* Description Fluide */}
          <p className="text-base md:text-lg font-light text-neutral-600 leading-relaxed max-w-xl">
            HOOM est la première plateforme éducative sur-mesure conçue pour simplifier, structurer et propulser le parcours de chaque étudiant vers la réussite.
          </p>

          {/* Boutons d'intégration */}
          <div className="pt-2 flex items-center justify-start w-full md:w-auto">
            <Button 
              text1="App Store" 
              text2="Google Play" 
              icone1={Apple} 
              icone2={Download} 
            />
          </div>

        </div>

        {/* BLOC DROIT : MOCKUP APPLICATION AVEC PERSPECTIVE 3D */}
        <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end relative">
          
          {/* Halo bleu en arrière-plan du téléphone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/[0.08] rounded-full blur-[120px] pointer-events-none" />
          
          {/* Conteneur de Perspective 3D (Effet Premium) */}
          <div 
            className="relative z-10 transition-all duration-500 ease-out"
          
          >
            {/* Ombre portée 3D au sol pour accentuer le relief */}
            <div className="absolute -bottom-6 left-10 right-10 h-10 bg-neutral-950/10 rounded-full blur-xl mix-blend-multiply transform translate-z-[-50px] pointer-events-none" />
            
            {/* Le Mockup de ton téléphone */}
            <div className="drop-shadow-[15px_35px_55px_rgba(0,0,0,0.12)]">
              <img src={PhoneMockupImage} />
            </div>
          </div>

        </div>

      </div>
    </section>
    </Motions>
  );
}

export default Hero;