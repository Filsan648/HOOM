import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "../Compement/Home/Hero";
import Menue from "../Generale/Menue";
import About from "~/Compement/Home/about";
import Fontionalities from "~/Compement/Home/Fonctionnalities";
import HoomCyclesGrid from "~/Compement/Home/pac";
import Gallerie from "~/Compement/Home/Galerie";
import Testimonials from "~/Compement/Home/Testimentale";
import PreFooter from "~/Compement/Home/prefooter";
import Footer from "~/Compement/Home/Footer";
import Faq from "~/Compement/Home/faq";
import Statistique from "~/Compement/Home/statistique";
import Pac from "~/Compement/Home/pac";
import Content from "~/Compement/Fonctionnality/Content";
import Blog from "~/Compement/Blog/Blog";
import Solution from "~/Compement/Home/solution";
import BackgroundImage from "../assets/BackgroundImage.png"
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
  return (
    <div className=" font-sora  flex flex-col  bg-yellow-600 overflow-hidden ">
      
      <div className="bg-white">
      <Menue />
      <Hero />
       <Statistique /> 

<div className="relative min-h-screen w-full overflow-hidden bg-black/98">
  {/* Texture de fond (équivalent à body::after) */}
 <div
  className="absolute inset-0 z-0 pointer-events-none opacity-[0.18]"
  style={{
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "repeat",
    backgroundSize: "128px 128px",
  }}
/>

  {/* Background Glows */}
  <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
  <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

  {/* Contenu */}
  <div className="relative z-10 pt-10 flex flex-col gap-24">
    <About />
    <Solution />
    <Fontionalities />
  </div>
</div>

      <Pac />
        <Testimonials />
  
       

            </div>
             <PreFooter />
        <Footer />
    </div>
  );
}
