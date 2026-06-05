import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    parcours: [
      { label: "9e Année", href: "#" },
      { label: "Terminale", href: "#" },
      { label: "Université", href: "#" },
    ],
    concept: [
      { label: "À propos", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Processus", href: "#process" },
    ],
    legal: [
      { label: "Confidentialité", href: "#" },
      { label: "Conditions", href: "#" },
      { label: "Mentions légales", href: "#" },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#fcfbf9] text-[#1a1a1a] pt-24 pb-12 font-sans select-none border-t border-black/10 overflow-hidden">
      
      {/* TRACE DE GRILLE INTERNE */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-12 gap-0 px-6 md:px-12 opacity-[0.02]">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="h-full border-r border-black last:border-r-0" />
        ))}
      </div>

      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-black/5">
          
          {/* COLONNE LOGO & MANIFESTE */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold">[ HOOM ]</span>
            <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xs">
              Une architecture éducative pensée pour propulser le potentiel des étudiants vers les standards d'excellence les plus élevés.
            </p>
          </div>

          {/* COLONNE LIENS 1 - PARCOURS */}
          <div className="md:col-span-2 md:col-start-6 space-y-4">
            <h4 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              / 01. Programmes
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.parcours.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-xs text-neutral-600 hover:text-black transition-colors duration-300 flex items-center gap-1 group/item">
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE LIENS 2 - EXPÉRIENCE */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              / 02. L'Espace
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.concept.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-xs text-neutral-600 hover:text-black transition-colors duration-300 flex items-center gap-1 group/item">
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE LIENS 3 - JURIDIQUE */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              / 03. Justice
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-xs text-neutral-600 hover:text-black transition-colors duration-300 flex items-center gap-1 group/item">
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RETOUR EN HAUT DESIGN */}
          <div className="md:col-span-1 flex justify-start md:justify-end items-start">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-black/10 hover:border-black flex items-center justify-center text-black transition-colors duration-300 focus:outline-none cursor-pointer group"
              aria-label="Retour en haut"
            >
              <span className="text-[10px] uppercase font-mono transform tracking-tighter group-hover:-translate-y-0.5 transition-transform">↑</span>
            </button>
          </div>

        </div>

        {/* SECTION MARQUE GÉANTE DE BASE */}
        <div className="pt-16 pb-4 relative">
          <h1 className="text-[14vw] font-sans font-bold tracking-tighter text-black/[0.03] leading-none text-center select-none pointer-events-none uppercase transition-colors duration-700 hover:text-black/[0.05]">
            HOOM
          </h1>
        </div>

        {/* MENTIONS COMPLÉMENTAIRES BAS DE PAGE */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-black/[0.03] text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
          <div>
            © {currentYear} HOOM. Tous droits réservés.
          </div>
          <div className="flex gap-2">
            <span>Conçu avec soin</span>
            <span className="opacity-40">//</span>
            <span className="text-black font-medium">Studio Éditorial</span>
          </div>
        </div>

      </div>
    </footer>
  );
}