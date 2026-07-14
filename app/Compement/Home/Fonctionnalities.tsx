import { useState } from "react";
import { ArrowUpRight, BookOpen, Users, BarChart3, Bot, Compass, ChevronDown } from "lucide-react";
import Title from "~/utilis/TitleSubtitle";

const data = [
  {
    id: 1,
    title: "Contenu pédagogique",
    paragraphe: "Ressources sur-mesure adaptées à vos besoins.",
    descriptionDetaillee: "Accédez à une bibliothèque de ressources exclusives, constamment mise à jour par nos experts. Notre algorithme analyse vos lacunes pour vous proposer des parcours d'apprentissage personnalisés et progressifs, maximisant ainsi l'impact de chaque minute de formation.",
    icon: BookOpen,
    link: "/ressources",
    animationType: "pédagogie",
    color: {
      primary: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      activeBorder: "border-violet-500/40",
      buttonActive: "text-violet-400 border-violet-500/30 hover:bg-violet-500/10",
      gradient: "from-violet-600 to-fuchsia-400",
      shadow: "shadow-violet-500/5",
      halo: "bg-violet-500/10"
    }
  },
  {
    id: 2,
    title: "Échange & Communauté",
    paragraphe: "Collaborez et échangez en temps réel avec vos pairs.",
    descriptionDetaillee: "Ne progressez plus jamais seul. Rejoignez des salons de discussion thématiques, participez à des sessions de peer-learning, et échangez directement avec des mentors certifiés. Notre système de matchmaking vous connecte avec les profils complémentaires au vôtre.",
    icon: Users,
    link: "/communaute",
    animationType: "communauté",
    color: {
      primary: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      activeBorder: "border-emerald-500/40",
      buttonActive: "text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10",
      gradient: "from-emerald-600 to-teal-400",
      shadow: "shadow-emerald-500/5",
      halo: "bg-emerald-500/10"
    }
  },
  {
    id: 3,
    title: "Analyse des performances",
    paragraphe: "Suivez votre progression grâce à un tableau de bord intelligent.",
    descriptionDetaillee: "Visualisez vos forces et identifiez vos axes d'amélioration d'un seul coup d'œil. Grâce à des indicateurs de performance clés (KPI) précis et un historique interactif, vous ajustez votre méthode de travail sur la base de données concrètes.",
    icon: BarChart3,
    link: "/analyses",
    animationType: "analyse",
    color: {
      primary: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      activeBorder: "border-pink-500/40",
      buttonActive: "text-pink-400 border-pink-500/30 hover:bg-pink-500/10",
      gradient: "from-pink-600 to-rose-400",
      shadow: "shadow-pink-500/5",
      halo: "bg-pink-500/10"
    }
  },
  {
    id: 4,
    title: "Assistante virtuelle AI",
    paragraphe: "Un support personnalisé disponible 24h/7 pour vous guider.",
    descriptionDetaillee: "Une question technique à 3h du matin ? Notre IA entraînée sur nos bases de connaissances internes vous répond instantanément. Elle est capable de générer des exercices pratiques, de résumer des concepts complexes ou de vous débloquer sur un problème précis.",
    icon: Bot,
    link: "/assistante",
    animationType: "ai",
    color: {
      primary: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      activeBorder: "border-cyan-500/40",
      buttonActive: "text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10",
      gradient: "from-cyan-500 to-blue-400",
      shadow: "shadow-cyan-500/5",
      halo: "bg-cyan-500/10"
    }
  },
  {
    id: 5,
    title: "Programme progressif",
    paragraphe: "Une roadmap claire et structurée étape par étape.",
    descriptionDetaillee: "Fini la surcharge d'informations. Suivez un fil d'ariane structuré où chaque concept acquis débloque le suivant. Visualisez votre avancement global et vos prochaines étapes majeures à travers un parcours ludique et balisé.",
    icon: Compass,
    link: "/roadmap",
    animationType: "roadmap",
    color: {
      primary: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      activeBorder: "border-amber-500/40",
      buttonActive: "text-amber-400 border-amber-500/30 hover:bg-amber-500/10",
      gradient: "from-amber-500 to-orange-400",
      shadow: "shadow-amber-500/5",
      halo: "bg-amber-500/10"
    }
  }
];

import { CheckCircle2, Sparkles, Award, Zap, GraduationCap } from "lucide-react";

// =====================================================================
// 1. ANIMATION PÉDAGOGIE
// =====================================================================
const PedagogieAnimation = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
    <div className="relative w-full max-w-sm h-[220px] flex items-center justify-center [perspective:1000px]">
      <div className="absolute left-0 w-[180px] sm:w-[200px] h-[120px] bg-[#101216] border border-neutral-900 rounded-2xl p-4 opacity-25 origin-right transition-all duration-750 pointer-events-none animate-[cardLeft_6s_infinite_ease-in-out]">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-neutral-800/50 rounded-lg text-neutral-500">
            <GraduationCap className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-neutral-500">Module 1</span>
        </div>
        <div className="h-1.5 w-16 bg-neutral-850 rounded-full" />
      </div>

      <div className="absolute right-0 w-[180px] sm:w-[200px] h-[120px] bg-[#101216] border border-neutral-900 rounded-2xl p-4 opacity-25 origin-left transition-all duration-750 pointer-events-none animate-[cardRight_6s_infinite_ease-in-out]">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-neutral-800/50 rounded-lg text-neutral-500">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-neutral-500">Module 2</span>
        </div>
        <div className="h-1.5 w-20 bg-neutral-850 rounded-full" />
      </div>

      <div className="absolute z-20 w-[270px] sm:w-[290px] bg-[#14161c] border border-violet-500/30 rounded-2xl p-5 shadow-[0_15px_40px_rgba(139,92,246,0.12)] transition-all duration-500 animate-[cardCenter_6s_infinite_ease-in-out]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white tracking-wide">Module 3 : Masterclass</div>
              <div className="text-[10px] text-neutral-400 mt-0.5">4 chapitres • 1h30</div>
            </div>
          </div>
          <span className="text-[9px] font-bold bg-violet-950/40 text-violet-400 px-2 py-0.5 rounded-full border border-violet-500/20">
            En cours
          </span>
        </div>

        <div className="space-y-2 pt-2 border-t border-neutral-850">
          <div className="flex justify-between text-[10px] text-neutral-400 font-medium">
            <span>Progression</span>
            <span className="text-violet-400 font-bold">75%</span>
          </div>
          <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden p-[1px]">
            <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-400 rounded-full animate-[progressSweep_6s_infinite_ease-out]" style={{ width: '75%' }} />
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes cardLeft {
        0%, 100% { transform: translateX(-25px) translateZ(-80px) rotateY(12deg); opacity: 0.2; }
        50% { transform: translateX(-20px) translateZ(-60px) rotateY(8deg); opacity: 0.35; }
      }
      @keyframes cardRight {
        0%, 100% { transform: translateX(25px) translateZ(-80px) rotateY(-12deg); opacity: 0.2; }
        50% { transform: translateX(25px) translateZ(-60px) rotateY(-8deg); opacity: 0.35; }
      }
      @keyframes cardCenter {
        0%, 100% { transform: translateY(0) translateZ(0) rotateX(2deg); }
        50% { transform: translateY(-5px) translateZ(8px) rotateX(0deg); }
      }
      @keyframes progressSweep {
        0%, 10% { width: 0%; }
        45%, 90% { width: 75%; }
        95%, 100% { width: 0%; }
      }
    `}</style>
  </div>
);

// =====================================================================
// 2. ANIMATION COMMUNAUTÉ
// =====================================================================
import {  Check } from "lucide-react";

const CommunauteAnimation = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden">
    
    {/* 1. Radar concentrique en arrière-plan */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="absolute w-56 h-56 rounded-full border border-neutral-900/40 animate-[spin_20s_linear_infinite]" />
      <div className="absolute w-40 h-40 rounded-full border border-emerald-500/5 animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute w-24 h-24 rounded-full border border-dashed border-neutral-900/60 animate-[spin_12s_linear_infinite_reverse]" />
    </div>

    {/* 2. Flux de connexion diagonal (La ligne de transmission) */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
      <line x1="25%" y1="30%" x2="75%" y2="70%" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#059669" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>

    {/* Micro-particules lumineuses qui voyagent le long du réseau */}
    <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 bg-emerald-400 rounded-full blur-[2px] animate-[pingTravel_3s_infinite_linear]" />
    <div className="absolute bottom-[30%] right-[25%] w-1.5 h-1.5 bg-emerald-400 rounded-full blur-[2px] animate-[pingTravel_3s_infinite_linear_1.5s]" />

    {/* 3. Conteneur des Nodes de Peer-to-Peer */}
    <div className="relative w-full max-w-[320px] h-[220px] flex items-center justify-between z-10">
      
      {/* Node Utilisateur Gauche */}
      <div className="absolute left-0 top-6 w-[130px] bg-[#090a0d] border border-neutral-900 rounded-xl p-3 shadow-2xl animate-[peerFloatLeft_6s_infinite_ease-in-out]">
        <div className="flex items-center gap-2 mb-2">
          <div className="relative w-7 h-7 bg-emerald-950/40 border border-emerald-500/20 rounded-lg flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold text-emerald-400">Y_B</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#090a0d]" />
          </div>
          <div className="overflow-hidden">
            <div className="text-[9px] font-bold text-white truncate">Yanis B.</div>
            <div className="text-[7px] font-mono text-neutral-500 uppercase tracking-wider">DEV_REACT</div>
          </div>
        </div>
        <div className="h-1 w-12 bg-emerald-500/10 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-400 w-3/4 animate-[pulse_2s_infinite]" />
        </div>
      </div>

      {/* Node Matchmaking central */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
        <div className="relative w-12 h-12 bg-[#0c0e12] border border-emerald-500/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
          <Users className="w-5 h-5 text-emerald-400 animate-pulse" />
        </div>
        <div className="bg-emerald-950/30 border border-emerald-500/15 px-2 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-sm">
          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[7px] font-mono text-emerald-400 tracking-widest uppercase">MATCH_FOUND</span>
        </div>
      </div>

      {/* Node Utilisateur Droite */}
      <div className="absolute right-0 bottom-6 w-[130px] bg-[#090a0d] border border-emerald-500/10 rounded-xl p-3 shadow-2xl animate-[peerFloatRight_6s_infinite_ease-in-out]">
        <div className="flex items-center gap-2 mb-2">
          <div className="relative w-7 h-7 bg-violet-950/40 border border-violet-500/20 rounded-lg flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold text-violet-400">S_L</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#090a0d]" />
          </div>
          <div>
            <div className="text-[9px] font-bold text-white">Sarah L.</div>
            <div className="text-[7px] font-mono text-neutral-500 uppercase tracking-wider">UX_DESIGNER</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[7px] font-mono text-neutral-400 bg-neutral-900/40 px-1.5 py-0.5 rounded border border-neutral-900/60">
          <Check className="w-2.5 h-2.5 text-emerald-400" />
          <span>Partage de code</span>
        </div>
      </div>

    </div>

    {/* Styles CSS injectés */}
    <style>{`
      @keyframes peerFloatLeft {
        0%, 100% { transform: translateY(0px) rotate(-1deg); }
        50% { transform: translateY(-6px) rotate(0.5deg); }
      }
      @keyframes peerFloatRight {
        0%, 100% { transform: translateY(0px) rotate(1deg); }
        50% { transform: translateY(6px) rotate(-0.5deg); }
      }
      @keyframes pingTravel {
        0% {
          transform: translate(0, 0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translate(160px, 88px);
          opacity: 0;
        }
      }
    `}</style>
  </div>
);

// =====================================================================
// 3. ANIMATION ANALYSE
// =====================================================================
const AnalyseAnimation = () => (
  <div className="relative w-full h-full flex flex-col justify-between p-6">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-10" />

    <div className="relative z-10 flex justify-between items-center">
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
        <span className="text-[8px] font-mono text-neutral-400 tracking-wider">LIVE FEED</span>
      </div>
      <div className="flex items-center bg-pink-950/20 border border-pink-500/25 px-2 py-0.5 rounded-lg">
        <span className="text-[9px] font-bold text-pink-400">+18.4%</span>
      </div>
    </div>

    <div className="relative w-full h-24 my-3 z-10">
      <svg className="w-full h-full" viewBox="0 0 100 35" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartPink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 0 35 Q 25 15 50 20 T 100 5 L 100 35 Z" fill="url(#chartPink)" />
        <path
          d="M 0 35 Q 25 15 50 20 T 100 5"
          fill="none"
          stroke="#ec4899"
          strokeWidth="1.5"
          strokeDasharray="150"
          strokeDashoffset="150"
          className="animate-[draw_4s_infinite_linear]"
        />
      </svg>
    </div>

    <div className="relative z-10 flex gap-6 pt-3 border-t border-neutral-850">
      <div>
        <div className="text-[9px] text-neutral-400">Score Moyen</div>
        <div className="text-xs sm:text-sm font-bold text-white">94.8%</div>
      </div>
      <div>
        <div className="text-[9px] text-neutral-400">Objectif atteint</div>
        <div className="text-xs sm:text-sm font-bold text-white">92%</div>
      </div>
    </div>

    <style>{`
      @keyframes draw {
        to { stroke-dashoffset: 0; }
      }
    `}</style>
  </div>
);

// =====================================================================
// 4. ANIMATION AI
// =====================================================================
const AiAnimation = () => (
  <div className="relative w-full h-full flex flex-col justify-center gap-4 p-6">
    <div className="relative z-10 self-start max-w-[85%] bg-white/5 border border-neutral-850 rounded-2xl rounded-tl-sm p-3 animate-[seqQ_9s_infinite_ease-in-out]">
      <div className="flex items-center gap-1 mb-1 text-[9px] text-cyan-400 font-bold uppercase tracking-wider">
        <Sparkles className="w-3 h-3" />
        <span>Question</span>
      </div>
      <p className="text-[11px] text-neutral-200">
        "Comment planifier ma semaine ?"
      </p>
    </div>

    <div className="relative z-10 self-end w-[90%] min-h-[90px] bg-cyan-950/10 border border-cyan-500/20 rounded-2xl rounded-tr-sm p-4.5 shadow-xl flex flex-col justify-center animate-[seqC_9s_infinite_ease-in-out]">
      <div className="absolute inset-0 flex items-center justify-center gap-1.5 animate-[seqL_9s_infinite_ease-in-out]">
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 animate-[bounce_1s_infinite_0ms]" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 animate-[bounce_1s_infinite_200ms]" />
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 animate-[bounce_1s_infinite_400ms]" />
      </div>

      <div className="w-full opacity-0 animate-[seqR_9s_infinite_ease-in-out]">
        <div className="flex items-center gap-1.5 mb-1.5 text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Assistant IA</span>
        </div>
        <div className="space-y-1 text-[11px] text-neutral-300">
          <ul className="space-y-1 pl-1 text-neutral-400">
            <li className="flex items-center gap-1.5">
              <span className="text-cyan-400 font-bold">•</span> Priorise 3 concepts clés.
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-cyan-400 font-bold">•</span> Sessions Focus de 50m.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes seqQ {
        0% { opacity: 0; transform: translateY(8px); }
        5%, 92% { opacity: 1; transform: translateY(0); }
        96%, 100% { opacity: 0; transform: translateY(-8px); }
      }
      @keyframes seqC {
        0%, 12% { opacity: 0; transform: translateY(10px); }
        18%, 92% { opacity: 1; transform: translateY(0); }
        96%, 100% { opacity: 0; transform: translateY(-6px); }
      }
      @keyframes seqL {
        0%, 15% { opacity: 0; }
        20%, 38% { opacity: 1; filter: blur(0px); }
        43%, 100% { opacity: 0; filter: blur(4px); pointer-events: none; }
      }
      @keyframes seqR {
        0%, 42% { opacity: 0; transform: scale(0.97); }
        48%, 92% { opacity: 1; transform: scale(1); }
        96%, 100% { opacity: 0; }
      }
    `}</style>
  </div>
);

// =====================================================================
// 5. ANIMATION ROADMAP
// =====================================================================
const RoadmapAnimation = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
    <div className="relative flex justify-between items-center w-full max-w-xs">
      <div className="absolute left-4 right-4 h-[2px] bg-neutral-900 z-0 rounded-full" />
      <div className="absolute left-4 h-[2px] bg-gradient-to-r from-amber-500 to-orange-400 z-0 rounded-full animate-[line_5s_infinite_ease-in-out]" />

      <div className="relative z-10 flex flex-col items-center gap-1.5 animate-[sOne_5s_infinite_ease-in-out]">
        <div className="w-14 h-14 rounded-2xl bg-[#11141a] border border-neutral-850 flex flex-col items-center justify-center gap-1 shadow-lg">
          <CheckCircle2 className="w-4 h-4 text-amber-500" />
        </div>
        <span className="text-[9px] text-neutral-400">Concept</span>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-1.5 animate-[sTwo_5s_infinite_ease-in-out]">
        <div className="w-14 h-14 rounded-2xl bg-[#11141a] border border-amber-500/40 flex flex-col items-center justify-center gap-1 shadow-[0_0_20px_rgba(245,158,11,0.12)]">
          <div className="relative flex items-center justify-center">
            <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="absolute w-2 h-2 rounded-full bg-amber-400 animate-ping opacity-75" />
          </div>
        </div>
        <span className="text-[9px] text-white font-semibold">Pratique</span>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-1.5 animate-[sThree_5s_infinite_ease-in-out]">
        <div className="w-14 h-14 rounded-2xl bg-[#0b0c10] border border-neutral-900 flex flex-col items-center justify-center gap-1">
          <Award className="w-4 h-4 text-neutral-700" />
        </div>
        <span className="text-[9px] text-neutral-600">Réussite</span>
      </div>
    </div>

    <style>{`
      @keyframes line {
        0%, 10% { width: 0%; }
        45%, 90% { width: 50%; }
        95%, 100% { width: 0%; }
      }
      @keyframes sOne {
        0%, 10% { transform: scale(1); opacity: 0.8; }
        15%, 90% { transform: scale(1.02); opacity: 1; }
        95%, 100% { transform: scale(1); opacity: 0.8; }
      }
      @keyframes sTwo {
        0%, 35% { transform: scale(0.95); opacity: 0.35; }
        45%, 90% { transform: scale(1.04); opacity: 1; }
        95%, 100% { transform: scale(0.95); opacity: 0.35; }
      }
      @keyframes sThree {
        0%, 90% { opacity: 0.35; transform: scale(0.95); }
        95%, 100% { opacity: 0.35; transform: scale(0.95); }
      }
    `}</style>
  </div>
);

const renderAnimation = (type) => {
  switch (type) {
    case "pédagogie": return <PedagogieAnimation />;
    case "communauté": return <CommunauteAnimation />;
    case "analyse": return <AnalyseAnimation />;
    case "ai": return <AiAnimation />;
    case "roadmap": return <RoadmapAnimation />;
    default: return null;
  }
};

export default function Fonctionnalities() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = data[activeTab];

  return (
    <section className="min-h-screen py-24 px-6 text-white md:px-12 font-sans overflow-hidden ">
      <div className="max-w-6xl mx-auto">
        <Title title="Découvrez nos fonctionnalités" titlecolors="text-neutral-50" /> 

        {/* Layout en grille asymétrique (5 cols gauche / 7 cols droite) */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12  border-1  border-white/20 items-start">
          
          {/* COLONNE GAUCHE : Accordéon vertical interactif */}
          <div className="lg:col-span-5  border-r border-r-white/20 p-10 flex flex-col gap-4">
            {data.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === index;
              
              return (
                <div
                  key={item.id}
                  className={`relative rounded-2xl border transition-all duration-500 overflow-hidden group
                    ${isActive 
                      ? `bg-white/[0.02] ${item.color.activeBorder} ${item.color.shadow}` 
                      : "bg-transparent border-neutral-900/40 hover:border-neutral-800"
                    }`}
                >
                  {/* Ligne d'accentuation sur le côté gauche pour l'onglet actif */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500
                    ${isActive ? `bg-gradient-to-b ${item.color.gradient}` : "bg-transparent"}`} 
                  />

                  {/* Bouton d'en-tête (Déclencheur de l'accordéon) */}
                  <button
                    onClick={() => setActiveTab(index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
                        isActive 
                          ? `${item.color.bg} ${item.color.primary} ${item.color.border}` 
                          : "bg-neutral-900/50 border-neutral-850 text-neutral-400 group-hover:text-neutral-200"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div>
                        <span className={`text-base font-bold transition-colors block ${
                          isActive ? "text-white" : "text-neutral-300 group-hover:text-white"
                        }`}>
                          {item.title}
                        </span>
                        <span className="text-xs text-neutral-500 mt-0.5 block font-medium">
                          {item.paragraphe}
                        </span>
                      </div>
                    </div>

                    <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-500 shrink-0
                      ${isActive ? "rotate-180 text-white" : "group-hover:text-neutral-400"}`} 
                    />
                  </button>

                  {/* Contenu de l'accordéon avec transition de hauteur et d'opacité */}
                  <div className={`grid transition-all duration-500 ease-in-out
                    ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pl-[60px] flex flex-col gap-4">
                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-[95%]">
                          {item.descriptionDetaillee}
                        </p>
                        
                        <a 
                          href={item.link}
                          className={`self-start flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-300 hover:scale-[1.03] active:scale-95 ${item.color.buttonActive}`}
                        >
                          <span>Découvrir</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* COLONNE DROITE : Vitrine d'animations autonome */}
          <div className="lg:col-span-7  h-[380px] sm:h-[440px] lg:h-full lg:sticky  relative bg-[#090b0e] flex items-center justify-center overflow-hidden">
            
            {/* Halo lumineux d'ambiance d'arrière-plan */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] ${currentTab.color.halo} rounded-full blur-[100px] pointer-events-none transition-all duration-1000 z-0`} />

            {/* Grille de fond subtile */}
            <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.15] pointer-events-none" />

            {/* Système de superposition des animations (Transitions en glissement vertical & fondu) */}
            <div className="w-full h-full relative flex items-center justify-center z-10">
              {data.map((item, index) => {
                const isActive = index === activeTab;
                return (
                  <div
                    key={item.id}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform-gpu
                      ${isActive 
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto z-10" 
                        : "opacity-0 -translate-y-8 scale-95 pointer-events-none z-0"
                      }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      {renderAnimation(item.animationType)}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}