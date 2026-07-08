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
import BackgroundImage from "../assets/BackgroundImage.png";
import Pac from "~/Compement/Home/pac";
import Mission from "~/Compement/Home/Mission";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
  return (
    <div className=" font-sora bg-white overflow-hidden ">
      <Menue />
      <Hero />
       <Statistique /> 
          <div className="pt-10 flex flex-col gap-24 text-neutral-50/65 bg-black">
  
      <About /> 
        <Fontionalities />
                       <Gallerie />
        <Pac />
 
            </div>
 
        <Testimonials />
        <PreFooter />
        <Footer />
    </div>
  );
}
