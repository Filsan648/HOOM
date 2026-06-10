
function PhoneMockup ({image}:{image:string}) {

return(    <div className="relative mx-auto border-[10px]  rounded-[50px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] bg-[#1a1a1a] p-1 overflow-hidden aspect-[9/19.5]">

              {/* Dynamic Island (Encoche iPhone) */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-800" />
              </div>

              {/* L'image du Mockup */}
              <div className="w-full h-full rounded-[38px] overflow-hidden bg-neutral-100 relative">
                <img
                  src={image}
                  alt="Application HOOM sur iPhone"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Reflet de vitre haut de gamme */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>

            </div>)

}
export default PhoneMockup