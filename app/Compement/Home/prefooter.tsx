import { ArrowUpRight } from "lucide-react";
import Faq from "./faq";
import Motions from "~/utilis/Motion";
import BackgroundImage from "../../assets/BackgroundImage.png"
import Button from "~/utilis/Button";
import { Apple, Download } from "lucide-react";

export default function PreFooter() {
  return (
    <section className="relative py-10 z-10 w-full bg-black/98 text-white md:rounded-b-[200px]  rounded-b-[100px]  md:px-32  px-10  overflow-hidden ">
         
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.18]"
            style={{
              backgroundImage: `url(${BackgroundImage})`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
    <Faq/>
    <Motions>   
      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* PETIT INDEX DE SECTION */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-[10px] font-mono opacity-40">(06)</span>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-400">
              Rejoindre l'excellence
            </span>
          </div>

          {/* TON TITRE DE L'IMAGE - REFAÇONNÉ EN TYPO ÉDITORIALE */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5vw] font-serif font-light text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Prêt à transformer votre parcours <span className="italic font-normal text-blue-600">scolaire</span> ?
          </h2>

          {/* TON SOUSTITRE DE L'IMAGE - ÉPURÉ */}
          <p className="text-sm md:text-base text-neutral-500 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            Rejoignez des centaines d'étudiants qui ont choisi <span className="font-medium text-white">Hoom</span> pour réussir.
          </p>

          {/* TES DEUX ACTIONS DE L'IMAGE - EN DUO BOUTONS HAUTE COUTURE */}
          <div className="flex  text-white flex-row items-center justify-center gap-6 md:pt-2">
              <div className="pt-2 flex items-center justify-center md:justify-start w-full md:w-auto">
            <Button 
              text1="App Store" 
              text2="Google Play" 
              link1=""
              link2="https://play.google.com/store/apps/details?id=com.saad2000.ebaro"
              icone1={Apple} 
              icone2={Download} 
            />
          </div>
           

          </div>

        </div>
      </div>
      </Motions>
    </section>
  
  );
}