import BackgroundImage from "../assets/Fonctionallity/4.jpeg";
import avart1 from "../assets/avatars/avatar1.png"
import avart2 from "../assets/avatars/avatar2.png"
import avart3 from "../assets/avatars/avatar3.png"
import avart4 from "../assets/avatars/avatar4.png"

import Button from "../utilis/Button";
import PhoneMockup from "../utilis/Phonemockup";
import { Apple, Download } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

function Hero() {
  return (
    
    <section className="relative bg-blue-500 mx-6 my-20 min-h-screen rounded-4xl overflow-hidden flex flex-col justify-between p-6 md:p-12 font-sans select-none">

      {/*  CORE ZONE (Contenu Principal en split asymétrique) */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full my-auto ">

        {/* --- BLOC TEXTE & ACTIONS (7 Colonnes) --- */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full">
          <div>
            <div className="flex items-center gap-4 mt-10">

    <div className=" my-4 flex -space-x-3">

        <img src={avart1} className="w-12 h-12 rounded-full border-2 border-white"/>

        <img src={avart2} className="w-12 h-12 rounded-full border-2 border-white"/>

        <img src={avart3} className="w-12 h-12 rounded-full border-2 border-white"/>

        <img src={avart4} className="w-12 h-12 rounded-full border-2 border-white"/>

    </div>

    <p className="text-sm">
        Plus de <b className="text-yellow-300">600 étudiants</b> nous font confiance
    </p>

</div>
            {/* Titre avec lettrines de précision */}
            <h1 className=" text-white text-[11vw] md:text-[6.5vw] font-serif font-light leading-[0.95] tracking-tight text-[#1a1a1a]">
              <span className="block overflow-hidden py-1">
                <span className="block opacity-0 animate-reveal  [animation-delay:200ms] will-change-transform">
          L'Excellence Académique
                </span>
              </span>
              <span className="block  overflow-hidden py-1">
                <span className="block opacity-0 animate-reveal [animation-delay:400ms] will-change-transform">


                </span>
              </span>
            </h1>

            <p className="mt-8 text-blue-100 max-w-xl text-base md:text-lg font-light leading-relaxed opacity-0 animate-fade-up [animation-delay:650ms]">
              Réinvente les codes de la réussite. Découvrez une expérience
              d’apprentissage ultra-personnalisée et interactive, calibrée pour
              propulser vos compétences à votre propre rythme.
            </p>
            <div className="flex flex-wrap gap-10 mt-12">

    <div>
        <h3 className="text-3xl font-serif">600+</h3>
        <p className="text-yellow-300">
            Étudiants actifs
        </p>
    </div>

    <div>
        <h3 className="text-3xl font-serif">98%</h3>
        <p className="text-yellow-300">
            Taux de réussite
        </p>
    </div>

    <div>
        <h3 className="text-3xl font-serif">24/7</h3>
        <p className="text-yellow-300">
            Assistance
        </p>
    </div>

</div>

          </div>

          {/* Call To Action */}
          <div className="mt-10 opacity-0 animate-fade-up [animation-delay:800ms]">
            <Button text1="App Store" text2="Google Play" icone1={Apple} icone2={Download} />
          </div>
        </div>

        {/* --- BLOC IPHONE MOCKUP LUXE (5 Colonnes) --- */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative opacity-0 animate-image [animation-delay:700ms]">

          {/* Aura lumineuse diffuse derrière l'iPhone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-100 rounded-full blur-[100px] pointer-events-none -z-10 opacity-60" />

          {/* Conteneur iPhone avec micro-interactions et inclinaison */}
          <div className="relative group w-full max-w-[320px] md:max-w-[340px] transition-all duration-700 ease-out hover:scale-[1.02] hover:-rotate-1">

            {/* Badge flottant Awwwards n°1 */}
            <div className="absolute -left-10 top-1/4 z-30 bg-white/80 backdrop-blur-md border border-black/5 px-4 py-2.5 rounded-2xl shadow-xl shadow-black/[0.03] flex items-center gap-3 animate-bounce [animation-duration:4s]">
             <span className="text-amber-400 text-sm animate-pulse">✦</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1a1a1a]">4.8  Satisfaction</span>
            </div>


            {/* Châssis Premium de l'iPhone Mockup */}
             <PhoneMockup image={BackgroundImage} />

          </div>

        </div>
      </div> 
    </section>
  );
}

export default Hero;
