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
import Content from "~/Compement/Fonctionnality/Content";
import Blog from "~/Compement/Blog/Blog";
import Solution from "~/Compement/Home/solution";
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










          <div className="pt-10 flex flex-col gap-24  relative h-full w-full bg-black">
  <div className=""><div className="absolute z-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
<div className="z-10">
      <About /> 
      <Solution /> 
        <Fontionalities />
                       <Gallerie />
   </div>
 
            </div>
 <Content/>
      <Pac />
        <Testimonials />
  
       

            </div>
             <PreFooter />
        <Footer />
    </div>
  );
}
