import { useEffect, useRef, useState } from "react";

// Imports d'images
import image from "../../assets/gallery/image1.png";


// Division des images en 3 groupes pour alimenter les 3 colonnes


function Gallerie() {
 

  return (
    <section
className="h-screen relative   mask-t-from-0.5 mask-b-from-10 "
    >
       <div>
          <img src={image} className="h-full w-full"  /> </div>
    
    </section>
  );
}

export default Gallerie;