import React, { useState } from 'react';
import Title from '~/utilis/TitleSubtitle';
import { Newspaper } from "lucide-react";
import Motions from '~/utilis/Motion';
const ARTICLES_DATA = [
  {
    id: 1,
    category: "Méthodologie",
    date: "08 Juillet 2026",
    readingTime: "4 min read",
    title: "Comment structurer ses révisions pour l'examen du Brevet",
    excerpt: "Découvrez des techniques d'organisation éprouvées et des plannings types pour aborder les épreuves de la classe de 9ème en toute sérénité sans céder à la panique de dernière minute.",
    isFeatured: true
  },
  {
    id: 2,
    category: "Orientation",
    date: "25 Juin 2026",
    readingTime: "6 min read",
    title: "Les filières porteuses dans le numérique en 2026",
    excerpt: "Analyse des compétences les plus recherchées par le marché et des parcours universitaires recommandés pour s'imposer dans l'écosystème de la tech.",
    isFeatured: false
  },
  {
    id: 3,
    category: "Sciences",
    date: "14 Juin 2026",
    readingTime: "5 min read",
    title: "Comprendre les bases de l'Algorithmique sans ordinateur",
    excerpt: "Une approche conceptuelle et logique de la programmation à travers des exercices mentaux simples, idéale pour les élèves du secondaire.",
    isFeatured: false
  },
  {
    id: 4,
    category: "Conseils",
    date: "02 Juin 2026",
    readingTime: "3 min read",
    title: "Vaincre le stress de la page blanche en rédaction",
    excerpt: "Trois déclencheurs psychologiques et structures narratives simples pour libérer votre écriture lors des compositions de français.",
    isFeatured: false
  }
];

function Blog() {
  const [activeFilter, setActiveFilter] = useState('Tous'); 
  const categories = ['Tous', 'Méthodologie', 'Orientation', 'Sciences', 'Conseils'];

  // Filtrage des articles

  const filteredArticles = activeFilter === 'Tous' 
    ? ARTICLES_DATA 
    : ARTICLES_DATA.filter(art => art.category === activeFilter);

  // Séparation de l'article mis en avant s'il est présent dans le filtre actuel
  const featuredArticle = filteredArticles.find(art => art.isFeatured);
  const regularArticles = filteredArticles.filter(art => !art.isFeatured || activeFilter !== 'Tous');

  return (
    <Motions>
    <section className="text-gray-950 py-24 px-6 md:px-12 lg:px-24 ">
  
        
          <Title 
          title="Le Journal de la Réussite" 
          titlecolors="text-neutral-900" 
          subtitle="Blog"
          SubtitleStyle="text-yellow-600 bg-gray-400/5 text-xs font-mono border border-gray-400/20 px-3 py-1 rounded-full backdrop-blur-sm tracking-wider mb-4 inline-flex"
          description="Réflexions, guides pratiques et analyses de fond rédigés par nos enseignants et experts pour vous accompagner au-delà des cours." 
          descriptionstyle="text-black/60 text-base md:text-lg mt-4 max-w-xl"
          icone={Newspaper} 
        />
   
        

        {/* Barre de navigation / Filtres par catégories */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs font-mono uppercase tracking-wider py-2 px-5 transition-all rounded-full ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white border border-blue-600'
                  : 'text-gray-500 border border-gray-200 hover:border-gray-900 hover:text-gray-950'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Layout Principal : Grid Typographique */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* ZONE GAUCHE : Article Vedette (Grand format textuel si filtre sur "Tous") */}
          {activeFilter === 'Tous' && featuredArticle && (
            <div className="lg:col-span-6 lg:border-r lg:border-gray-100 lg:pr-12 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-4 text-xs font-mono text-yellow-600 mb-6">
                  <span className="text-yellow-950 font-medium tracking-widest uppercase">[ À LA UNE ]</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-950 leading-tight mb-6 group-hover:text-gray-800 transition-colors">
                  {featuredArticle.title}
                </h2>
                
                <p className="text-base lg:text-lg leading-relaxed font-light text-neutral-700 mb-8">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-gray-200 pt-6 mt-6">
                <span className="text-xs font-mono text-gray-400">{featuredArticle.readingTime}</span>
                <button className="text-xs font-mono uppercase tracking-wider text-gray-950 border-b border-gray-950 pb-0.5 hover:text-gray-600 hover:border-gray-400 transition-colors">
                  Lire l'article →
                </button>
              </div>
            </div>
          )}

          {/* ZONE DROITE : Liste minimaliste des autres articles */}

          <div className={`${activeFilter === 'Tous' ? 'lg:col-span-6' : 'lg:col-span-12'} flex flex-col gap-12`}>
            {regularArticles.map((article) => (
              <div 
                key={article.id} 
                className="group border-b border-gray-100 pb-10 flex flex-col justify-between last:border-none last:pb-0"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-yellow-600 mb-4">
                    <span className="text-gray-950 uppercase tracking-wider">{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-normal tracking-tight text-gray-950 mb-3 group-hover:text-gray-700 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-yellow-600">{article.readingTime}</span>
                  <button className="text-xs font-mono uppercase text-gray-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 underline underline-offset-4">
                    Lire la suite
                  </button>
                </div>
              </div>
            ))}

            {filteredArticles.length === 0 && (
              <div className="py-12 text-center border border-dashed border-gray-200">
                <p className="text-xs font-mono text-gray-400">Aucun article publié sous cette thématique pour le moment.</p>
              </div>
            )}
          </div>

        </div>


    </section>
    </Motions>
  );
}

export default Blog;


