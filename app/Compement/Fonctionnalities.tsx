import Image from "../assets/Image.png";

// Remplis les liens avec tes URL réelles
const data = [
  { id: 1, title: "Contenu pédagogique adapté", paragraphe: "Ressources sur-mesure", image: Image, link: "/ressources" },
  { id: 2, title: "Échange avec la communauté", paragraphe: "Collaboration en temps réel", image: Image, link: "/communaute" },
  { id: 3, title: "Analyse des performances", paragraphe: "Suivi intelligent", image: Image, link: "/analyses" },
  { id: 4, title: "Opportunités d'études", paragraphe: "Bourses et programmes", image: Image, link: "/opportunites" },
  { id: 5, title: "Programme progressif", paragraphe: "Roadmap claire", image: Image, link: "/roadmap" },
];

function Fontionalities() {
  // Structure asymétrique avancée pour créer le "Bento" avec les images
  const itemClasses = [
    "md:col-span-2 md:row-span-2 h-[500px] md:h-[650px]", // Grande Image Star
    "md:col-span-1 md:row-span-1 h-[240px] md:h-[310px]",
    "md:col-span-1 md:row-span-2 h-[400px] md:h-[650px]", // Image Verticale
    "md:col-span-2 md:row-span-1 h-[240px] md:h-[310px]", // Image Horizontale large
    "md:col-span-1 md:row-span-1 h-[240px] md:h-[310px]",
  ];

  return (
    <section className="  py-24 mx-6  ">
      
      {/* EN-TÊTE ÉDITORIAL DE LA SECTION */}
      <div className="my-5" >
        
          <h2 className="text-4xl md:text-[4vw] font-serif font-light tracking-tight leading-tight text-[#1a1a1a]">
            Une plateforme complète pour <br className="md:hidden" />
            <span className="font-sans italic font-extralight text-blue-600">votre réussite.</span>
          </h2>
            <p className="py-5 text-black/80 text-justify">Notre plateforme réunit tous les outils essentiels pour favoriser votre réussite académique. Profitez de cours interactifs, d'un parcours d'apprentissage structuré, d'un suivi personnalisé de vos progrès et de recommandations basées sur l'intelligence artificielle. Échangez avec une communauté active d'étudiants et d'enseignants, accédez à des vidéos de cours et découvrez des opportunités d'admissions et de bourses pour construire votre avenir.</p>
    
      </div>

      {/* Grille Bento Immersive */}
      {/* max-w-[1700px] pour un effet 'edge-to-edge' sans être collé à l'écran */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1700px] mx-auto px-2">
        {data.map((item, index) => (
            <a
            key={item.id}
            href={item.link || "#"}
            className={`
              group relative  overflow-hidden  md:rounded-none
              transition-all duration-700 ease-out
              ${itemClasses[index] || "md:col-span-1 h-[300px]"}
            `}
          >
            {/* L'IMAGE : LE SUJET PRINCIPAL */}
            {/* filter:brightness-[0.9] au repos pour une ambiance premium, [1.15] au hover */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute rounded-4xl inset-0 w-full h-full object-cover z-0 
              transition-all duration-[1200ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)]
              scale-100 group-hover:scale-110 filter  brightness-[0.9] group-hover:brightness-[1.15]"
            />

            {/* OVERLAY SOMBRE (Seulement au survol pour faire ressortir le texte) */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

            {/* LE CONTENU (Caché par défaut, se révèle en glissant du bas) */}
            <div className="relative z-20 h-full w-full p-8 md:p-12 flex flex-col justify-between">
              
              {/* Top: Numéro stylisé au repos */}
              <div className="self-end">
                <span className="font-mono text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10 group-hover:border-white/30 group-hover:text-white transition-all duration-500">
                  [{index + 1}]
                </span>
              </div>

              {/* Bottom: Textes (Se révèlent au hover) */}
              <div className="max-w-[90%] transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-100">
                <h3 className="text-2xl md:text-3xl font-sans font-medium tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base mt-3 font-light max-w-md">
                  {item.paragraphe}
                </p>
                
                {/* Micro-interaction CTA */}
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-yellow-500">
                    Découvrir
                    <div className="w-6 h-px bg-yellow-500 group-hover:w-10 transition-all duration-500"></div>
                </div>
              </div>

            </div>

            {/* Signature Visuelle (Optionnelle) : Bordure de focus au hover */}
            <div className="absolute inset-2 border border-white/0 group-hover:border-white/15 rounded-xl z-15 transition-all duration-700 pointer-events-none" />

          </a>
        ))}
      </div>
    </section>
  );
}

export default Fontionalities;