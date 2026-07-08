import Title from '~/utilis/TitleSubtitle';
import image1 from "../../assets/about/image1.png"
import image from "../../assets/about/image.png"

function About() {
  return (
    <section 
      id="about"
      // MODIFIÉ : Réduction de mb pour mieux gérer le défilement. h-auto est mieux ici.
      className='min-h-screen my-2.5 px-10'
    >
   
      <Title title="Probleme Et Solutions" />

      {/* --- Section Haut (Image 1 + Texte descriptif) --- */}
      <div className='grid grid-cols-3 gap-10 mb-20'> {/* Ajout de mb pour l'espace */}
        <div className="col-span-1 h-[300px] flex justify-center items-center">
          <img src={image1} alt="Image 1" className="w-full h-full object-cover rounded-4xl" />
        </div>
        <div className='col-span-2  flex items-center'> {/* Centrer le texte verticalement */}
          <p>
            Découvrez la galerie de Hoom à travers ses interfaces modernes et soigneusement conçues. 
            Chaque écran a été pensé pour offrir une expérience utilisateur fluide, intuitive et agréable. 
            Avec plus de 8 interfaces entièrement responsive et un design résolument moderne, Hoom 
            s’adapte parfaitement à tous les appareils.
          </p>
        </div>
      </div>

      {/* --- Cart1 (Haut Centre, Optionnel selon ton image exemple, je l'ai commenté) --- */}
      {/* <div className='flex justify-center items-center mb-10'>
        <Cards title="Problème" text="Ce que nos étudiants disent de leur expérience chez nous." color="red" />
      </div>
      */}

      {/* --- Section Bas (Cartes + Image centrale + Popover) --- */}
      {/* NOUVEAU : Conteneur principal en 'relative' pour le positionnement du popover */}
      <div className="relative pt-10 grid grid-cols-3 gap-8 items-start">

        {/* --- Carte gauche --- */}
        <div className="z-10"> {/* NOUVEAU : z-10 pour être sûr d'être devant s'il y a superposition */}
          <Cards 
            title="Problème " 
            text="Fragmented expérience and missed opportunities." 
            color="red" 
            founderName="Kyronet"
            founderTitle="Founder of Hoom app"
          />
        </div>

        {/* --- Image au centre --- */}
        <div className="w-full h-[500px] -mt-10 z-0"> {/* Réglé -mt et z-0 */}
          <img
            src={image}
            alt="Image 2"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* --- Carte droite --- */}
        <div className="z-10"> {/* z-10 pour être devant */}
          <Cards 
            title="Solution " 
            text="Novora combines banking, budgeting, and analytics into one seamless app." 
            color="green" 
            founderName="Kyronet"
            founderTitle="Founder of Hoom app"
          />
        </div>


      </div>
    </section>
  );
}

export default About;


// --- Composant Cards (Légèrement adapté) ---
function Cards( {title ,text ,color, founderName, founderTitle}:
  {title:string, text:string, color:string, founderName:string, founderTitle:string}) {
  return(
    // MODIFIÉ : bg-blue-100 pour être plus clair, shadow, h-auto, gap-4
    <div className='bg-blue-100/80 w-[400px] h-auto min-h-[300px] rounded-2xl p-6 flex flex-col justify-between gap-4 shadow-lg'>
      
      {/* Titre avec le point de couleur */}
      <div className='flex gap-2 items-center'>
        <div className='bg-white rounded-full w-7 h-7 flex justify-center items-center shadow-inner'> 
          {/* MODIFIÉ : J'ai mis des classes fixes au lieu de bg-${color}-600 pour éviter les problèmes de compilation Tailwind si la couleur n'est pas connue. J'ai utilisé 'red' et 'green'. */}
          <div className={`rounded-full w-3 h-3 ${color === 'red' ? 'bg-red-600' : 'bg-green-600'}`}></div> 
        </div>
        <div>
          <h3 className='text-xl font-serif font-normal tracking-tight text-gray-800'>{title}</h3>
        </div>
      </div>

      {/* Texte principal */}
      <div className='py-4'>
        <p className='text-lg text-gray-700 leading-relaxed'>{text}</p>
      </div>

      {/* Info Fondateur (en bas) */}
      <div className='border-t border-blue-200/50 pt-4'>
        <h4 className='text-base font-bold text-gray-900'>{founderName}</h4>
        <p className="text-sm text-gray-600">{founderTitle} of Hoom app</p>
      </div>

    </div>
  )
}