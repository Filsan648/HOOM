import type { Route } from "./+types/home";
import Menue from "~/Generale/Menue";
import Content from "~/Compement/Fonctionnality/Content";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Fonctionnality() {
  return (
    <div className=" font-sora bg-white overflow-hidden ">
        <Menue/>
         <Content/>

     
    </div>
  );
}
