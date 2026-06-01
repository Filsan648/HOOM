import image from "../assets/7.jpeg";

function Fonctionality(){
return(
    <section className="flex flex-row items-center justify-between gap-10 px-16 py-20">
          <div>
        <h1 className="text-6xl leading-tight mb-4 font-light">Ne manquez rien grâce aux appels vocaux et vidéo
</h1>
        <p>Que ce soit lors d’un appel de groupe avec des camarades de classe ou au téléphone avec votre mère, les appels vocaux et vidéo vous donneront l’impression d’être dans la même pièce.</p>
        <button className="underline m-3">En savoir plus</button>
          </div>
            <div>
        <img src={image} alt="Example" className="w-64 h-auto" />  </div>


    </section>
)
}
export default Fonctionality;