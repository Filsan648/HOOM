import { ArrowUpRight } from "lucide-react";
import Faq from "./faq";
export default function PreFooter() {
  return (
    <section className="relative w-full bg-blue-600 rounded-b-[200px] text-[#1a1a1a] py-32 md:py-48  overflow-hidden font-sans select-none">
      
       {/* Background Glows (Style Awwwards immersif) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
    <Faq/>
        

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            
            {/* ACTION 1 : Essai gratuit 7 jours */}
            <a href="#register" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-black px-8 py-4 text-white border border-black transition-transform duration-300 active:scale-95 focus:outline-none">
                <span className="relative z-10 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors duration-500 group-hover:text-black">
                  Essai gratuit 7 jours
                  <div className="relative w-4 h-4 overflow-hidden">
                    <ArrowUpRight
                      size={14}
                      className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-4 group-hover:-translate-y-4"
                    />
                    <ArrowUpRight
                      size={14}
                      className="absolute inset-0 -translate-x-4 translate-y-4 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0 group-hover:translate-y-0"
                    />
                  </div>
                </span>
                <span className="absolute inset-0 z-0 bg-[#fcfbf9] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
              </button>
            </a>

            {/* ACTION 2 : Demander une démo */}
            <a href="#demo" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto overflow-hidden rounded-full border border-black/20 bg-transparent px-8 py-4 text-black transition-colors duration-500 hover:border-black focus:outline-none">
                <span className="relative z-10 block text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 group-hover:text-white">
                  Demander une démo
                </span>
                <span className="absolute inset-0 z-0 bg-black translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0" />
              </button>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}