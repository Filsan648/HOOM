import { useState } from "react";
import FonctionalityCompement from "./FonctionnalityCompement";

const data = [
  {
    id:1,
    title: "Contenu pédagogique adapté à chaque niveau et filière",
    paragraphe: "ndsjncsdjncdnkd",
    className: "flex-row",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  {
    id:2,
    title: "Échangez avec d'autres étudiants et enseignants",
    paragraphe: "ndsjncsdjncdnkd",
    className: "flex-row-reverse",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },

  {
    id:3,
    title: "Analysez vos performances et identifiez vos points forts",
    paragraphe: "ndsjncsdjncdnkd",
    className: "flex-row",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id:4,
    title: "Trouvez des opportunités d'études et de financement dans le monde entier",
    paragraphe: "ndsjncsdjncdnkd",
    className: "flex-row-reverse",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  {
    id:5,
    title: "Programme progressif et accompagné pour réussir chaque étape",
    paragraphe: "ndsjncsdjncdnkd",
    className: "flex-row-reverse",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  {
    id:6,
    title: " Recommandations personnalisées grâce à une intelligence artificielle",
    paragraphe: "ndsjncsdjncdnkd",
    className: "flex-row-reverse",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  {
    id:7,
    title: "Supports visuels pour faciliter la compréhension des notions clés",
    paragraphe: "ndsjncsdjncdnkd",
    className: "flex-row-reverse",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  }


];

function Fontionalities() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="min-h-screen w-full text-white bg-blue-600  ml-7 relative overflow-hidden">
      {/* background glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)",
        }}
      />

      <section className="relative z-10 flex items-center justify-center h-screen">
        
        {/* Slider container */}
        <div className="w-full max-w-5xl transition-all duration-500">
          <FonctionalityCompement
            id={data[index].id}
            title={data[index].title}
            paragraphe={data[index].paragraphe}
            className={data[index].className}
            image={data[index].image}
          />
        </div>

        {/* Buttons */}
        <div className="absolute bottom-10 flex gap-5">
          <button
            onClick={prev}
            className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20"
          >
            Prev
          </button>

          <button
            onClick={next}
            className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}

export default Fontionalities;