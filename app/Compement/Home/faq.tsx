import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// Données de la FAQ adaptées à ton univers pédagogique / académique
const faqData = [
  {
    id: 1,
   question: "Qu'est-ce que Hoom ?",
 answer:"Hoom est une application éducative destinée aux élèves et étudiants francophones. Elle propose des quiz, des cours, des annales et des exercices pratiques alignés sur le programme du Bac, ainsi qu'un tuteur intelligent pour guider les révisions."
    },

    {
    id: 2,
    question: "Comment télécharger et installer l'application ?",
    answer: "Hoom est disponible sur Google Play et l'App Store. Recherchez Hoom, téléchargez l'application, puis suivez les instructions pour créer votre compte.."
  },
  {
     id: 3,
    question:"Quels sont les contenus disponibles ?",
    answer:"Fiches de révision, quiz interactifs, exercices corrigés, sujets des années précédentes, conseils d'examens, et modules de micro-apprentissage ajoutés régulièrement."   

  },
  {
    id: 4,
   question:" Comment fonctionne le paiement via Waafi ?",
   answer:" Pour activer l'accès complet, envoyez le montant de l'abonnement au numéro Waafi : 77219608. Indiquez votre nom d'utilisateur ou numéro de téléphone dans le message. Après réception, vous recevrez une clé de produit par SMS ou e-mail à saisir dans l'app."
  },
  {id:5,
   question: "Combien coûte l'abonnement ?",
answer:"Plusieurs formules (mensuelle, semestrielle, familiale). Les tarifs sont visibles dans l'application. Le contenu de base est gratuit, l'abonnement Premium débloque tous les cours et exercices. Nous offrons des prix réduits aux étudiants, bien inférieurs au marché."  }
,{
  id:6,
question:"  En combien de temps vais-je recevoir ma clé après paiement ?",

answer:"Généralement sous 24 heures après le paiement Waafi. Si vous ne recevez rien passé ce délai, contactez le support."
},
{
  id:7,
question:"Que se passe-t-il si je perds ma clé de produit ?",
answer:"Contactez l'assistance Hoom avec les détails du paiement (numéro Waafi et date). Nous vérifierons l'opération et vous fournirons une nouvelle clé."}
,{
  id:8,
  question :"Puis-je accéder à l'application hors connexion ?",
anser:"Oui. Vous pouvez télécharger des cours/exercices pour les consulter offline. La progression se synchronise dès le retour en ligne."},
{
  id:9,
question:"L'application est-elle sécurisée pour les mineurs ?",
answer:"Hoom intègre des contrôles parentaux et respecte la protection des données. Pas de publicité intrusive ni de contenu inapproprié."
},
{
  id:10,
question:"Qui contacter en cas de problème ?",
answer:"Support : info@hoom.space • Téléphone/WhatsApp : 77219608 • Et sur nos réseaux sociaux officiels."
}
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full min-h-screen  text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Background Glow Discret */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* COLONNE GAUCHE : Titre Éditorial Fixe */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32 h-fit">
         
          <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
            Des réponses à vos <br />
            <span className="font-serif italic font-normal text-blue-400 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              ambitions.
            </span>
          </h2>
          <p className="text-neutral-400 font-light text-lg max-w-sm leading-relaxed">
            Vous avez des doutes sur le fonctionnement de la plateforme ? Voici tout ce que vous devez savoir pour démarrer sereinement.
          </p>
          
          {/* CTA de support au look minimaliste */}
          <div className="pt-4">
            <a href="#Contact" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group cursor-magnetic">
              <span>Vous ne trouvez pas votre réponse ?</span>
              <span className="text-blue-400 underline underline-offset-4 group-hover:text-blue-300 transition-colors">Contactez-nous</span>
            </a>
          </div>
        </div>

        {/* COLONNE DROITE : Les Accordéons */}
        <div className="lg:col-span-7 divide-y divide-white/10">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-6 first:pt-0 last:pb-0">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-start justify-between text-left gap-6 group py-2 cursor-magnetic"
                >
                  {/* Numérotation + Question */}
                  <div className="flex items-start gap-6">
                    <span className="text-xs font-mono text-neutral-600 pt-1.5 transition-colors group-hover:text-blue-400">
                      {item.id.toString().padStart(2, '0')}
                    </span>
                    <span className={`text-lg md:text-xl font-light tracking-tight transition-colors duration-300 ${isOpen ? 'text-blue-400' : 'text-neutral-200 group-hover:text-white'}`}>
                      {item.question}
                    </span>
                  </div>

                  {/* Icône Plus/Moins animée */}
                  <div className={`mt-1 p-2 rounded-full border transition-all duration-500 flex items-center justify-center shrink-0 ${isOpen ? 'bg-blue-600 border-blue-500 rotate-45 text-white' : 'bg-white/[0.02] border-white/10 text-neutral-400 group-hover:border-white/30 group-hover:text-white'}`}>
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {/* Contenu de la réponse avec animation de hauteur fluide (sans saccades) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 pr-6 pb-4 pt-2 text-base text-neutral-400 font-light leading-relaxed max-w-2xl">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}