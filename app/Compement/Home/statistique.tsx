import Title from "~/utilis/TitleSubtitle";
function Statistique() {return( 
    <section className="  bg-white  px-32   text-neutral-900">
         <Title title="Des résultats qui parlent d'eux-mêmes" titlecolors="text-neutral-900" />
     <div className="grid grid-cols-4  items-start  gap-3.5 pt-24">
    
  <div
  className="
    bg-neutral-100
    
    p-3
    rounded-2xl
    grid
    grid-rows-4
    -mt-16
    w-72
    h-80
    transition-all
    duration-300
    ease-out
    hover:-translate-y-3
  
    cursor-pointer
  "
>
  <div className="row-span-3 flex justify-center font-serif font-normal tracking-tight text-lg">
    <span>Des résultats qui parlent d'eux-mêmes</span>
  </div>

  <div>
    <div>
      <h3 className="text-4xl font-bold font-serif">6000+</h3>
    </div>

    <div className="bg-black/20 w-full h-[0.5px]" />

    <div>
      <p className="text-neutral-950">
        Étudiants actifs
      </p>
    </div>
  </div>
</div>
    <div className=" bg-neutral-100 transition-all
    duration-300
    ease-out
    hover:-translate-y-3  p-3 rounded-2xl grid grid-rows-4  shadow-md  mt-6  w-72 h-80 " >
       <div className="row-span-3 italic text-lg  "> Des résultats qui parlent d'eux-mêmes
</div>
        <div>
        <div> <h3 className="text-4xl  font-serif">4.8 <span className="text-amber-400 ">✦</span>
</h3> </div>
        <div className="bg-black/20 w-full  h-[0.5px] " /></div>

       <div>  <p className="text-neutral-1000">
            Statisfaction
        </p> </div>


    </div>


    <div className=" bg-blue-600 transition-all
    duration-300
    ease-out
    hover:-translate-y-3  p-3 rounded-2xl grid grid-rows-4  shadow-md  -mt-16  w-72 h-80 " >
       <div className="row-span-3 italic text-lg "> Des résultats qui parlent d'eux-mêmes
</div>
        <div>
        <div> <h3 className="text-4xl  font-bold font-serif  ">98%</h3> </div>
        <div className="bg-black/20 w-full  h-[0.5px] " /></div>

       <div>  <p className="text-neutral-1000">
            Taux de réussite
        </p> </div>


    </div>



<div className=" bg-neutral-100 transition-all
    duration-300
    ease-out
    hover:-translate-y-3  p-3 rounded-2xl grid grid-rows-4  shadow-md  mt-6  w-72 h-80 " >
       <div className="row-span-3 italic text-lg "> Des résultats qui parlent d'eux-mêmes
</div>
        <div>
        <div> <h3 className="text-4xl  font-bold font-serif  ">24/7</h3> </div>
        <div className="bg-black/20  w-full  h-[0.5px] " /></div>

       <div>  <p className="text-neutral-1000">
            Assistance
        </p> </div>


    </div>

</div>
</section>
)}
export default Statistique;
