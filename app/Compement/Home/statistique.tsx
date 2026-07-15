import Title from "~/utilis/TitleSubtitle";


const data =[
  {
    title : "Des résultats qui parlent d'eux-mêmes",
    numeber : "600+",
    description :" Des résultats qui parlent d'eux-mêmes"
  },
    {
    title : "Des résultats qui parlent d'eux-mêmes",
    numeber : "6000+",
    description :" Des résultats qui parlent d'eux-mêmes"
  },
    {
    title : "Des résultats qui parlent d'eux-mêmes",
    numeber : "600+",
    description :" Des résultats qui parlent d'eux-mêmes"
  },
  
  {
    title : "Des résultats qui parlent d'eux-mêmes",
    numeber : "600+",
    description :" Des résultats qui parlent d'eux-mêmes"
  },
]



function Statistique() {return( 
    <section className="  bg-white   my-20   text-neutral-900">
         <Title title="Des résultats qui parlent d'eux-mêmes" titlecolors="text-neutral-900" />
     <div className="grid grid-cols-4   mx-32   gap-32 ">
    
{
  data.map((item,index)=>(
 <div
  className="
    rounded-2xl
    border
    border-black/20
    p-3
 
    grid
    grid-rows-5
    
    w-72
    h-80
    transition-all
    duration-300
    ease-out
    hover:-translate-y-3
  "
>
<div className="row-span-3 italic text-lg "> Des résultats qui parlent d'eux-mêmes
</div>
 
  <div className="row-span-2">
    
    <div>
      <h3 className="text-4xl font-bold font-serif">{item.numeber}</h3>
    </div>

    <div className="bg-black/20 w-full h-[0.5px]" />

    <div>
      <p className="text-neutral-950">
     {item.description}
      </p>
    </div>
  </div>
</div>
    
  ))
}




 
</div>
</section>
)}
export default Statistique;
