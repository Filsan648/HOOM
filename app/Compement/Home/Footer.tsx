import { ArrowUpRight } from "lucide-react";
import {
  FaTiktok,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Reseaux: [
      { icone: FaYoutube, href: "https://www.youtube.com/@Hoom_Officiel" },
      { icone: FaLinkedin, href: "https://www.linkedin.com/company/hoomspace/posts/?feedView=all" },
      { icone: FaTiktok, href: "https://www.tiktok.com/@hoom_edtech?_r=1&_t=ZS-98EvGA8XoyD "},
    ],
    concept: [
      { label: "Acceuil", href: "#" },
      { label: "Concour", href: "/concour" },
      { label: "Articles", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="Contact" className="relative w-full md:mx-32 mx-10 text-black my-10  font-sans select-none overflow-hidden">
      <div className="relative z-10 w-full ">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center  gap-12 md:gap-8 pb-16 ">
          
          {/* COLONNE LOGO & MANIFESTE + CONTACT US HYPERLIENT */}
          <div className="md:col-span-1   space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">[ HOOM ]</span>
                <p className=" max-w-sm md:max-w-md  sm:text-sm md:text-base font-light leading-6 sm:leading-7 text-balance">
    Une architecture éducative pensée pour propulser le potentiel des
    étudiants vers les standards d'excellence les plus élevés.
  </p> </div>

            {/* SECTION CONTACT GRANDE TYPOGRAPHIE */}
            <div className="space-y-3 pt-4">
              <h4 className="text-[10px] font-mono  uppercase tracking-widest">
             Une idée ? Un projet ?
              </h4>
              <a 
                href="mailto:hello@hoom.education" 
                className="inline-flex items-end gap-2 text-xl md:text-2xl font-light tracking-tight hover:text-blue-600 transition-colors duration-300 group cursor-magnetic"
              >
                <span className="border-b border-black/20 group-hover:border-blue-600 transition-colors duration-300">
                  info@hoom.space
                </span>
                <ArrowUpRight size={20} className=" group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* COLONNE LIENS 2 - EXPÉRIENCE */}
           <div className="md:col-span-1 flex justify-between  space-y-4">
          <div className="">
            <h4 className="text-[10px] font-mono py-2 uppercase tracking-widest">
           L'Espace
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.concept.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm  hover:text-black transition-colors duration-300 flex items-center gap-1 group/item">
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* COLONNE LIENS 3 - INFO DE CONTACT DIRECTES (Remplaçant l'ancien bloc justice) */}
          <div >
          
            <h4 className="text-[10px] font-mono py-2 uppercase tracking-widest">
           Contact
            </h4>
            <ul className="space-y-3 text-xs  font-light leading-relaxed">
              <li>
                <span className="block text-[11px] font-mono  lowercase">téléphone</span>
                <a href="tel:+33100000000" className="hover:text-black transition-colors">+253 77 12 96 08</a>
              </li>
              
              <li>
                <span className="block text-[11px] font-mono  lowercase">bureau</span>
                <span>Djibouti , Djibouti Ville Barwaqo 2</span>
              </li>
            </ul>
               <span className="block text-[11px] font-mono pt-4 pb-2 lowercase">Reseaux</span>
                <ul className="space-y-2.5 flex">
            {footerLinks.Reseaux.map((link, i) => {
              const Icon = link.icone;

                   return (
             <li key={i}>
             <a
              href={link.href}
              className="text-xs transition-colors flex duration-300  items-center gap-2 group/item hover:text-black"
            >
              <Icon size={18} />
              <ArrowUpRight
                size={10}
                className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
              />
            </a>
          </li>
        );
          })}
       </ul>
         </div>
   </div>
        </div>
     </div>
    </footer>
  );
}