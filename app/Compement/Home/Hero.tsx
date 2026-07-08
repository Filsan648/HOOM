import { useState } from "react";
import BackgroundImage from "../../assets/gallery/4.jpeg";
import avart1 from "../../assets/avatars/avatar1.png";
import avart2 from "../../assets/avatars/avatar2.png";
import avart3 from "../../assets/avatars/avatar3.png";
import avart4 from "../../assets/avatars/avatar4.png";
import Button from "~/utilis/Button";
import PhoneMockup from "../../utilis/Phonemockup";
import { Apple, Download } from "lucide-react";

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMouse({ x, y });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
  };

  return (
<section className="relative  rounded-4xl overflow-hidden py-28 px-10  ">      
<div className="relative grid grid-cols-2 items-center gap-2">
 


        {/* Texte  */}
        <div
          className="  flex justify-center"
     
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >

      <div>
 <div className="flex justify-center items-center gap-4 mt-10">
            <div className="flex justify-center items-center -space-x-3 hover:-translate-y-2
hover:rotate-6
duration-300 ">
              <img src={avart1} className="w-12 h-12 rounded-full border-2 border-[#F8FBFF]" />
              <img src={avart2} className="w-12 h-12 rounded-full border-2 border-[#F8FBFF]" />
              <img src={avart3} className="w-12 h-12 rounded-full border-2 border-[#F8FBFF]" />
              <img src={avart4} className="w-12 h-12 rounded-full border-2 border-[#F8FBFF]" />
            </div>

            <p className="text-sm">
              Plus de <b className="text-blue-700 text-center">600 étudiants</b> nous font confiance
            </p>
          </div> 
<h1 className=" text-center  text-8xl
 p-2 ">
        <span className=" bg-neutral-100  font-bold  w-max
"> 
Excellence </span>
        <span className="px-5 italic text-neutral-600
">    Académique</span>
</h1>
<div   className=" mt-1.5  flex justify-center items-center     "> <p className='text-center text-lg'>  HOOM  est là pour vous accompagner vers la  réussite  grâce à des parcours sur mesure, des  modules    interactifs et des annales ciblées.
 </p>
  </div>
<div className='flex justify-center items-center my-10'> <Button text1="App Store" text2="Google Play" icone1={Apple} icone2={Download} /> </div>
  </div>
</div>
     <div className="">
   {/* Image */}
        <div
          className="relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <PhoneMockup images={[BackgroundImage, BackgroundImage]} />
        </div>


  {/* Glow background */}


     </div>
      </div>
  
    </section>
  );
}

export default Hero;