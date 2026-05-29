import BackgroundImage from "../assets/BackroundImageHero.png";
import Button from "../utilis/Button";
function Hero() {
  return (
    <section className="h-screen m-10 my-30">
      
      <div
        className="rounded-4xl h-full flex items-center px-16 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/40 rounded-4xl"></div>

        {/* Contenu */}
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-6xl  leading-tight">
Apprenez autrement, évoluez sans limites.          </h1>

          <p className="mt-6 text-lg opacity-90">
HOOM vous accompagne vers la réussite en vous offrant une expérience d’apprentissage personnalisée, interactive et adaptée à vos besoins pour progresser efficacement à votre rythme.          </p>

          <Button />
        </div>

      </div>
    </section>
  );
}

export default Hero;