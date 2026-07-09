import React from 'react'
import image from '../../assets/Fonctionality/Content/506shots_so (1).png'

const data=[{

    title:"Cours Interactifs",

    description:"Découvrez la galerie de Hoom à travers ses interfaces modernes et soigneusement conçues. Chaque écran a été pensé pour offrir une expérience utilisateur fluide, intuitive et agréable. Avec plus de 8 interfaces entièrement responsive et un design résolument moderne, Hoom s’adapte parfaitement à tous les appareils."

    ,image:image,

    order :true,

     bg:"bg-tranparent",

    titleColor:"text-gray-600",

    textColor:"text-gray-500"
},

{  title:"Communauté Active",

    description:"Découvrez la galerie de Hoom à travers ses interfaces modernes et soigneusement conçues. Chaque écran a été pensé pour offrir une expérience utilisateur fluide, intuitive et agréable. Avec plus de 8 interfaces entièrement responsive et un design résolument moderne, Hoom s’adapte parfaitement à tous les appareils."

    ,image:image,

    order :false,

     bg:"bg-blue-600",

    titleColor:"text-gray-600",

    textColor:"text-gray-500"
},

{

    title:"Suivi des Progrès",

    description :"Découvrez la galerie de Hoom à travers ses interfaces modernes et soigneusement conçues. Chaque écran a été pensé pour offrir une expérience utilisateur fluide, intuitive et agréable. Avec plus de 8 interfaces entièrement responsive et un design résolument moderne, Hoom s’adapte parfaitement à tous les appareils."

    ,image:image,

     order :true,

    bg:"bg-tranparent",

    titleColor:"text-gray-600",

    textColor:"text-gray-500"

},

{

    title:"Admissions & Bourses",

    description : "Découvrez la galerie de Hoom à travers ses interfaces modernes et soigneusement conçues. Chaque écran a été pensé pour offrir une expérience utilisateur fluide, intuitive et agréable. Avec plus de 8 interfaces entièrement responsive et un design résolument moderne, Hoom s’adapte parfaitement à tous les appareils.",

     image:image,order :false,

      bg:"bg-blue-600",

    titleColor:"text-gray-600",

    textColor:"text-gray-500"

},

{

    title:"Apprentissage Structuré",

    description : "Découvrez la galerie de Hoom à travers ses interfaces modernes et soigneusement conçues. Chaque écran a été pensé pour offrir une expérience utilisateur fluide, intuitive et agréable. Avec plus de 8 interfaces entièrement responsive et un design résolument moderne, Hoom s’adapte parfaitement à tous les appareils.",

    image:image,

    order :true,

    bg:"bg-tranparent",

    titleColor:"text-gray-600",

    textColor:"text-gray-500"

},

{

    title:"IA Pédagogique",

    description:"Découvrez la galerie de Hoom à travers ses interfaces modernes et soigneusement conçues. Chaque écran a été pensé pour offrir une expérience utilisateur fluide, intuitive et agréable. Avec plus de 8 interfaces entièrement responsive et un design résolument moderne, Hoom s’adapte parfaitement à tous les appareils.",

    image:image,

    order :false,

     bg:"bg-blue-600",

    titleColor:"text-gray-600",

    textColor:"text-gray-500"
}

,{

    title:'Vidéos de Cours',

    image:image,

    description: "Découvrez la galerie de Hoom à travers ses interfaces modernes et soigneusement conçues. Chaque écran a été pensé pour offrir une expérience utilisateur fluide, intuitive et agréable. Avec plus de 8 interfaces entièrement responsive et un design résolument moderne, Hoom s’adapte parfaitement à tous les appareils."

    ,order :true,

    bg:"bg-tranparent",

    titleColor:"text-gray-600",

    textColor:"text-gray-500"

},{

    title : "Support Réactif",

    image:image,

    description:"Découvrez la galerie de Hoom à travers ses interfaces modernes et soigneusement conçues. Chaque écran a été pensé pour offrir une expérience utilisateur fluide, intuitive et agréable. Avec plus de 8 interfaces entièrement responsive et un design résolument moderne, Hoom s’adapte parfaitement à tous les appareils."

    ,order :false,

    bg:"bg-blue-600",

    titleColor:"text-gray-600",

    textColor:"text-gray-500"

}

]


export default function Content() {
  return (
    <section id="Fonctionnality" className=" mx-auto px-6 space-y-16 md:space-y-24">
      {data.map((item, index) => (
        <Section 
          key={index}
          title={item.title}
          text={item.description}
          image={item.image}
          order={item.order}
          bg={item.bg}
          titleColor={item.titleColor}
          textColor={item.textColor}
        />
      ))}
    </section>
  )
}

type SectionProps = {
  title: string
  text: string
  image: string
  order: boolean
  bg: string
  titleColor: string
  textColor: string
}

function Section({ title, text, image, order, bg, titleColor, textColor }: SectionProps) {
  return (
    <div 
      // L'effet de perspective est injecté directement via style ou classe arbitraire inline
      style={{ perspective: '1200px' }}
      className={`grid md:grid-cols-12 grid-cols-1 min-h-[480px] rounded-[32px] overflow-hidden group 
                  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  `}
    >
      {/* BLOC TEXTE (Prend 5 colonnes sur 12 pour un effet asymétrique haut de gamme) */}
      <div className={`md:col-span-5 flex flex-col gap-6 justify-center p-8 md:p-14 lg:p-20 ${
        order ? "order-2 md:col-start-8" : "order-1 md:col-start-1 " 
      }  `}>
        
       

        <h2 className={`font-serif text-4xl lg:text-5xl tracking-tight leading-[1.1] font-light text-neutral-800 `}>
          {title}
        </h2>

        <p className={`text-base lg:text-lg leading-relaxed font-light text-neutral-700`}>
          {text}
        </p>

        {/* Bouton avec micro-interaction flèche */}
        <div className="pt-4">
          <button className={`inline-flex items-center gap-3 text-sm font-medium tracking-wider uppercase group/btn ${
            bg.includes('blue') ? 'text-gray-600' : 'text-[#1a1a1a]'
          }`}>
            <span>Telecharger</span>
            <span className="inline-block transition-transform duration-300 ease-out transform group-hover/btn:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>

      {/* BLOC IMAGE (Prend 7 colonnes sur 12) */}
      <div className={`md:col-span-7 h-[350px] md:h-full overflow-hidden relative ${
        order ? "order-1 md:col-start-1" : "order-2 md:col-start-6"
      }`}>
        <img 
          className="w-full h-full object-cover object-top
                     transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] 
                     group-hover:scale-105 group-hover:rotate-1"
          src={image}
          alt={title}
        />
      </div>

    </div>
  )
}