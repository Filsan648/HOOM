import imagse from "../assets/7.jpeg";
import { ChevronRight } from "lucide-react";
function FonctionalityCompement({className,image,title,paragraphe}: {className?: string, image: string, title: string,paragraphe:string}) {
return(
    <section className={`flex flex-row items-center justify-between gap-10 px-16 py-20 ${className || ''}`}>
          <div className="w-1/2">
        <h1 className="text-6xl leading-tight mb-4 font-light">Ne manquez rien grâce aux appels vocaux et vidéo
</h1>
        <p>Que ce soit lors d’un appel de groupe avec des camarades de classe ou au téléphone avec votre mère, les appels vocaux et vidéo vous donneront l’impression d’être dans la même pièce.</p>
      <div className="flex gap-5 hover:gap-12 transition-all duration-300 ease-out group-hover:translate-x-1  border-b-4 border-yellow-500 pb-2 w-max">   <button className=" ">En savoir plus   </button> <ChevronRight size={20} /> 
      
      </div>
          </div>
            <div className="w-1/2 flex justify-center items-center">
        <img src={imagse} alt="Example" className="w-80 h-auto rounded-xl shadow-xl  " />  
        </div>


    </section>
)
}
export default FonctionalityCompement;