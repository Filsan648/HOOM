import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Hero from "../Compement/Hero";
import Menue from "../Generale/Menue";
import About from "~/Compement/about";
import Fontionalities from "~/Compement/Fonctionnalities";
import HoomCyclesGrid from "~/Compement/pac";
import Gallerie from "~/Compement/Galerie";
import Testimonials from "~/Compement/Testimentale";
import PreFooter from "~/Compement/prefooter";
import Footer from "~/Compement/Footer";
import Faq from "~/Compement/faq";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
  return (
    <div className="  overflow-hidden ">
      <Menue />
      <Hero />
        <About />
        <Fontionalities />
        <HoomCyclesGrid />
         <Gallerie />
        <Testimonials />
    
        <PreFooter />
        <Footer />
        
    </div>
  );
}
