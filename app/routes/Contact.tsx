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
import Concour from "~/Compement/Concour/Concour";
import Contacts from "~/Compement/Contact/Contact";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Contact() {
  return (
    <div className=" font-sora  flex flex-col gap-10 bg-yellow-600/5 overflow-hidden ">
      <Menue />
         <Contacts />
        <Footer />
    </div>
  );
}
