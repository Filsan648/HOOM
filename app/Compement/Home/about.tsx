import Title from '~/utilis/TitleSubtitle';
import image1 from "../../assets/about/image1.png"
import image from "../../assets/about/image.png"
// Import des nouvelles icônes plus parlantes
import { UserCheck, Layers, ZapOff, TrendingDown } from "lucide-react";

const constat = [
  { 
    icone: UserCheck, // Évoque l'accompagnement / le suivi de l'élève
    title: "Le manque de suivi et d'accompagnement scolaire personnalisé",
    description: "Dans un système scolaire classique, les élèves peuvent vite se sentir perdus ou manquer de soutien sur-mesure.",
    clasname: ''
  },
  { 
    icone: Layers, // Évoque l'empilement et la dispersion des supports
    title: "La dispersion des outils d'apprentissage",
    description: "Les étudiants et les parents doivent souvent jongler entre différents livres, cahiers d'exercices, fiches de révision et plateformes en ligne.",
    clasname: ''
  },
  { 
    icone: ZapOff, // Évoque la perte d'énergie, l'absence d'interactivité dynamique
    title: "La démotivation et le manque d'interactivité",
    description: "Les méthodes d'apprentissage traditionnelles et passives finissent par lasser les élèves.",
    clasname: ''
  }
];



function About() {
  
  return (
    <section 
      id="about"
      // MODIFIÉ : Réduction de mb pour mieux gérer le défilement. h-auto est mieux ici.
      className='min-h-screen my-2.5  text-white px-16 '
    >
 
      <Title title="Probleme Et Solutions" titlecolors='text-neutral-50' />
 
  <div className='grid grid-cols-3 gap-10 '>
   {constat.map((item, index) => {
    const Icon = item.icone;

    return (
      <div key={index} className={`flex bg-[#090b0e] h-[350px] ${item.clasname}  group transition-transform duration-500  flex-col p-5 border gap-5 border-white/20 rounded-2xl`}>
        <div className='p-5 transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-1  bg-gray-600/15 group-hover:bg-white/30   w-max rounded-2xl'>
        <Icon
          size={24}
          className=" "
        /></div>

        <h3 className='text-2xl font-meduim'>{item.title}</h3>
        <p className='text-lg text-white/60'>{item.description}</p>
      </div>
    );
  })}
  
     
  
  
  </div>
<div className="flex flex-col md:flex-row bg-[#090b0e] min-h-[450px] w-full mt-5 group transition-all duration-500 p-6 border gap-6 border-white/20 rounded-2xl overflow-hidden shadow-2xl shadow-red-950/10">
      
      {/* Colonne Gauche : Votre texte (Prend un peu moins d'espace pour laisser l'animation briller) */}
      <div className="flex-1 flex flex-col justify-between gap-5 py-4">
        <div className="bg-red-400/5 border-red-400/20 w-max text-red-400 border py-1 px-4 rounded-2xl text-sm font-medium">
          Les conséquences
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl  text-white ">
            Le gaspillage du potentiel de l'apprenant
          </h3>
          <p className="text-lg text-white/60 leading-relaxed">
            L'élève se retrouve freiné dans son élan, perd confiance en ses capacités et finit par renoncer à ses ambitions académiques et professionnelles.
          </p>
        </div>
        
        <div>
        
        </div>
      </div>

      {/* Colonne Droite : L'animation immersive géante (Prend toute sa partie) */}
      <div className="flex-1 items-center flex justify-center w-full min-h-[350px] md:min-h-[400px] relative rounded-xl border border-white/5 bg-gradient-to-br from-red-950/30 via-transparent to-transparent overflow-hidden">
        
        {/* Grille d'arrière-plan géométrique qui se déforme au centre */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
          {Array.from({ length: 144 }).map((_, i: number) => (
            <div key={i} className="border-[0.5px] border-red-500/10" />
          ))}
        </div>

        {/* Halo rouge géant de fond qui pulse sur toute la zone */}
        <div className="absolute w-3/4 h-3/4 bg-red-900/10 rounded-full blur-3xl group-hover:bg-red-950/30 transition-all duration-1000" />

        {/* Conteneur principal de l'animation - Prend 100% de la largeur/hauteur disponible */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          
          <div className="relative w-full h-full max-w-[320px] max-h-[320px] flex items-center justify-center">
            
            {/* 1. Le Noyau du Vortex (Trou noir de potentiel) */}
            <div className="absolute w-16 h-16 bg-red-950 rounded-full border-2 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.6)] flex items-center justify-center z-20">
              {/* Point de singularité ultra brillant */}
              <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff] animate-ping" />
            </div>

            {/* 2. Disque d'accrétion (Anneaux rotatifs imbriqués qui simulent l'aspiration) */}
            {/* Grand anneau externe */}
            <div className="absolute w-64 h-64 border border-dashed border-red-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
            {/* Anneau moyen */}
            <div className="absolute w-48 h-48 border-2 border-dotted border-red-500/40 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
            {/* Petit anneau interne */}
            <div className="absolute w-32 h-32 border border-red-500/50 rounded-full animate-[spin_6s_linear_infinite]" />

            {/* 3. Les Lignes d'élan aspirées et brisées (SVG interactif) */}
            <svg 
              viewBox="0 0 200 200" 
              className="absolute inset-0 w-full h-full z-10 scale-110 pointer-events-none"
            >
              {/* Ligne 1 : L'ambition aspirée */}
              <path 
                d="M 10 30 Q 80 40 100 100" 
                stroke="#f87171" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
                fill="none" 
                className="opacity-70 animate-[vortex-pull_3s_linear_infinite]"
              />
              {/* Ligne 2 : L'élan brisé */}
              <path 
                d="M 190 40 Q 120 70 100 100" 
                stroke="#ef4444" 
                strokeWidth="1.5" 
                fill="none" 
                className="opacity-80 animate-[vortex-pull_4s_linear_infinite_0.5s]"
              />
              {/* Ligne 3 : Les rêves qui s'effondrent */}
              <path 
                d="M 30 180 Q 90 140 100 100" 
                stroke="#b91c1c" 
                strokeWidth="2.5" 
                fill="none" 
                className="opacity-60 animate-[vortex-pull_5s_linear_infinite_1s]"
              />
            </svg>

            {/* 4. Particules de potentiel qui disparaissent dans le vortex */}
            <div className="absolute w-2 h-2 bg-red-400 rounded-full animate-[particle-suck-1_3s_infinite_linear]" />
            <div className="absolute w-3 h-3 bg-red-600 rounded-full animate-[particle-suck-2_4s_infinite_linear]" />
            <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-[particle-suck-3_2.5s_infinite_linear]" />

          </div>
        </div>

      </div>

      {/* Code d'animation CSS injecté proprement en JSX */}
      <style>{`
        @keyframes vortex-pull {
          0% { stroke-dasharray: 0 100; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 100 0; stroke-dashoffset: -100; }
        }
        @keyframes particle-suck-1 {
          0% { transform: rotate(0deg) translate(140px) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { transform: rotate(360deg) translate(0px) scale(0.1); opacity: 1; }
          100% { transform: rotate(360deg) translate(0px) scale(0); opacity: 0; }
        }
        @keyframes particle-suck-2 {
          0% { transform: rotate(120deg) translate(110px) scale(1.2); opacity: 0; }
          15% { opacity: 1; }
          90% { transform: rotate(480deg) translate(0px) scale(0.2); opacity: 1; }
          100% { transform: rotate(480deg) translate(0px) scale(0); opacity: 0; }
        }
        @keyframes particle-suck-3 {
          0% { transform: rotate(240deg) translate(160px) scale(0.8); opacity: 0; }
          5% { opacity: 1; }
          95% { transform: rotate(600deg) translate(0px) scale(0.1); opacity: 1; }
          100% { transform: rotate(600deg) translate(0px) scale(0); opacity: 0; }
        }
      `}</style>

    </div>
    </section>
  );
}

export default About;

