import Title from '~/utilis/TitleSubtitle';
import image1 from "../../assets/about/image1.png"
import image from "../../assets/about/image.png"
import { Apple, Download } from "lucide-react";


const data=[
  { 
    icone : Apple,
    title :"Formats trop longs",
    description :"Les contenus s'étirent sur des heures sans découpage adapté. La charge cognitive devient insurmontable.",
    clasname:'bg-blue-600 '
 
  },
    { 
    icone : Apple,
    title :"Formats trop longs",
    description :"Les contenus s'étirent sur des heures sans découpage adapté. La charge cognitive devient insurmontable."
   ,clasname:'bg-blue-600'
  },
    { 
    icone : Apple,
    title :"Formats trop longs",
    description :"Les contenus s'étirent sur des heures sans découpage adapté. La charge cognitive devient insurmontable."
  ,clasname:''
  },
    { 
    icone : Apple,
    title :"Formats trop longs",
    description :"Les contenus s'étirent sur des heures sans découpage adapté. La charge cognitive devient insurmontable."
   ,clasname:'col-span-3'
  },

]



function About() {
  
  return (
    <section 
      id="about"
      // MODIFIÉ : Réduction de mb pour mieux gérer le défilement. h-auto est mieux ici.
      className='min-h-screen my-2.5  text-white px-16 '
    >
 
      <Title title="Probleme Et Solutions" titlecolors='text-neutral-50' />
 
  <div className='grid grid-cols-3 gap-10 '>
   {data.map((item, index) => {
    const Icon = item.icone;

    return (
      <div key={index} className={`flex bg-[#090b0e] h-[300px] ${item.clasname}  group transition-transform duration-500  flex-col p-5 border gap-5 border-white/20 rounded-2xl`}>
        <div className='p-5 transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-1  bg-gray-600/15 group-hover:bg-white/30   w-max rounded-2xl'>
        <Icon
          size={24}
          className=" "
        /></div>

        <h3 className='text-2xl font-meduim'>{item.title}</h3>
        <p className='text-lg text-white/60'>{item.description}</p>
      </div>
    );
  })}</div>

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