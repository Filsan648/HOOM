import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import KyronetIcone from "../assets/HomLogos.png";
import Button from "~/utilis/Button";

export default function Menue() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const links = [
    { label: "À propos", id: "about" },
    { label: "Fonctionnalités", id: "Fonctionnalite" },
    { label: "Témoignages", id: "testimonials" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? "top-4 mx-auto max-w-5xl bg-[#FEFBF6]/80 backdrop-blur-xl border border-black/5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.03)] py-3 px-6" 
            : "top-0 bg-transparent py-6 px-8 md:px-12"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          
          {/* LOGO (Avec effet magnétique pour ton curseur) */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group cursor-magnetic"
          >
            <div id="#" className="w-12 h-12 rounded-full overflow-hidden border border-black/5 bg-white shadow-sm transition-transform duration-500 group-hover:scale-105">
              <img src={KyronetIcone} alt="Kyronet Icon" className="w-full h-full object-cover" />
            </div>
            {!scrolled && (
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-black/40 group-hover:text-black transition-colors duration-300">
                HOOM
              </span>
            )}
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-black/60 hover:text-black tracking-tight transition-colors duration-300 relative py-2 group/link"
              >
                {link.label}
                {/* Barre de soulignement animée style Awwwards */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block cursor-magnetic">
            <Button text1="S'inscrire " text2="Se connecter" icone1={undefined} icone2={ArrowUpRight} />
          </div>

          {/* MOBILE MENU TRIGGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 bg-black text-white hover:scale-105 active:scale-95 shadow-md"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* OVERLAY NAVIGATION MOBILE (Plein écran immersif style Awwwards) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-sm h-full bg-[#FEFBF6] p-8 pt-28 flex flex-col justify-between shadow-2xl"
            >
              {/* Liens Mobiles Animés un par un */}
              <div className="space-y-6">
                <p className="text-xs font-mono uppercase tracking-widest text-black/30 mb-8">Navigation</p>
                {links.map((link, i) => (
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    key={i}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-3xl font-light tracking-tight text-black hover:translate-x-2 transition-transform duration-300"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              {/* Pied du menu mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 border-t border-black/5 pt-6"
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-4 rounded-full bg-black text-white text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
                >
                  Nous contacter
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}