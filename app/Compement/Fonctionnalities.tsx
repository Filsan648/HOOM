import Image from "../assets/Image.png";

const data = [
  { id: 1, title: "Contenu pédagogique adapté", paragraphe: "Ressources sur-mesure", image: Image },
  { id: 2, title: "Échange avec la communauté", paragraphe: "Collaboration en temps réel", image: Image },
  { id: 3, title: "Analyse des performances", paragraphe: "Suivi intelligent", image: Image },
  { id: 4, title: "Opportunités d'études", paragraphe: "Bourses et programmes", image: Image },
  { id: 5, title: "Programme progressif", paragraphe: "Roadmap claire", image: Image },
];

function Fontionalities() {
  return (
    <section className="w-full bg-[#f8f7f4] py-24 px-6 md:px-12">

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-light">
          Fonctionnalités
        </h2>
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">

        {data.map((item, index) => (
          <div
            key={item.id}
            className={`
              relative group overflow-hidden rounded-2xl break-inside-avoid cursor-pointer
              shadow-sm hover:shadow-2xl transition
              ${index === 0 ? "h-[420px]" : ""}
              ${index === 1 ? "h-[300px]" : ""}
              ${index === 2 ? "h-[380px]" : ""}
              ${index === 3 ? "h-[260px]" : ""}
              ${index === 4 ? "h-[340px]" : ""}
            `}
          >

            {/* IMAGE */}
            <img
              src={item.image}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500 flex items-end p-6">

              <div className="translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">

                <h3 className="text-white text-lg font-medium">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm mt-2">
                  {item.paragraphe}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Fontionalities;