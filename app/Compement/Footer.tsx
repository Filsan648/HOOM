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
          
          {/* COLONNE LOGO & MANIFESTE + CONTACT US HYPERLIENT */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">[ HOOM ]</span>
              <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-sm">
                Une architecture éducative pensée pour propulser le potentiel des étudiants vers les standards d'excellence les plus élevés.
              </p>
            </div>

            {/* SECTION CONTACT GRANDE TYPOGRAPHIE */}
            <div className="space-y-3 pt-4">
              <h4 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                / 00. Une idée ? Un projet ?
              </h4>
              <a 
                href="mailto:hello@hoom.education" 
                className="inline-flex items-end gap-2 text-xl md:text-2xl font-light tracking-tight hover:text-blue-600 transition-colors duration-300 group cursor-magnetic"
              >
                <span className="border-b border-black/20 group-hover:border-blue-600 transition-colors duration-300">
                  hello@hoom.education
                </span>
                <ArrowUpRight size={20} className="text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* COLONNE LIENS 1 - PARCOURS */}
          <div className="md:col-span-2 md:col-start-7 space-y-4">
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

          {/* COLONNE LIENS 3 - INFO DE CONTACT DIRECTES (Remplaçant l'ancien bloc justice) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              / 03. Contact
            </h4>
            <ul className="space-y-3 text-xs text-neutral-500 font-light leading-relaxed">
              <li>
                <span className="block text-[9px] font-mono text-neutral-400 lowercase">téléphone</span>
                <a href="tel:+33100000000" className="hover:text-black transition-colors">+33 (0)1 00 00 00 00</a>
              </li>
              <li>
                <span className="block text-[9px] font-mono text-neutral-400 lowercase">bureau</span>
                <span>8 Rue de l'Éducation<br />75005 Paris, France</span>
              </li>
            </ul>
          </div>

          {/* RETOUR EN HAUT DESIGN */}
          <div className="md:col-span-1 flex justify-start md:justify-end items-start">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-black/10 hover:border-black flex items-center justify-center text-black transition-colors duration-300 focus:outline-none cursor-pointer group cursor-magnetic"
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

        {/* MENTIONS COMPLÉMENTAIRES BAS DE PAGE (Avec le juridique réintégré discrètement) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4 border-t border-black/[0.03] text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span>© {currentYear} HOOM. Tous droits réservés.</span>
            <div className="flex gap-4 normal-case font-sans text-xs tracking-normal text-neutral-500">
              {footerLinks.legal.map((link, i) => (
                <a key={i} href={link.href} className="hover:text-black transition-colors text-[10px] font-mono uppercase tracking-widest">{link.label}</a>
              ))}
            </div>
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