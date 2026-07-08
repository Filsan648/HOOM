function Title({ title }: {title:string}) {
  // Séparation du titre en deux parties égales
  const words = title.split(" ");
  const midpoint = Math.ceil(words.length / 2);
  const firstPart = words.slice(0, midpoint).join(" ");
  const secondPart = words.slice(midpoint).join(" ");

  return (
    <div className="relative mb-20 md:mb-24 flex items-center justify-center group overflow-hidden">
      {/* 
          GRAND CERCLE DE FOND :
          Un grand cercle en gris très léger (neutral-100) pour créer de la texture,
          placé en arrière-plan (z-0).
          Il ajoute une touche de design géométrique doux.
      */}
   

      {/* 
          BLOC DE TITRE PRINCIPAL :
          - flex-col et md:flex-row pour le responsive.
          - items-center et relative z-10 pour le positionnement.
      */}
      <h2 className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-6 md:gap-8 text-5xl md:text-7xl leading-none">
        
        {/* PREMIÈRE PARTIE : GRAS & COULEUR FONCÉE (ex: Excellence) */}
        <span className="font-bold  tracking-tighter">
          {firstPart}
        </span>
        
        {/* 
            POINT DE FOCUS GÉOMÉTRIQUE :
            Un petit cercle plein bleu roi (#0055D7) pour séparer les deux mots.
            C'est une référence directe au bouton Google Play et à l'identité visuelle de l'app.
            On le rend invisible en mobile pour alléger le layout.
        */}
        <div className="hidden md:block h-6 w-6 rounded-full bg-[#0055D7]" />

        {/* 
            DEUXIÈME PARTIE : FIN & COULEUR MOYENNE (ex: Académique)
            - En mobile, on force un retour à la ligne (`md:ml-auto`).
        */}
        <span className="font-extralight text-neutral-600 dark:text-neutral-400 tracking-tight md:ml-2">
          {secondPart}
        </span>
      </h2>
    </div>
  )
}

export default Title