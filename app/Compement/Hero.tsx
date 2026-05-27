import BackgroundImage from "../assets/image.png";

function Hero() {
  return (
    <section className="h-screen m-10">
      
      <div
        className="rounded-4xl h-full flex items-center px-16 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/40 rounded-4xl"></div>

        {/* Contenu */}
        <div className="relative z-10 max-w-xl text-white">
          <h1 className="text-6xl font-bold leading-tight">
            Bienvenue sur notre plateforme
          </h1>

          <p className="mt-6 text-lg opacity-90">
            Découvrez une expérience moderne avec un design élégant et
            professionnel.
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Commencer
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;