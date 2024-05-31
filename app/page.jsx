
import Photo from "@/components/Photo"

import Stats from "../components/Stats"
import Clima from "../components/clima"
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-×l">Dr. James E. Hansen(1988)</span>
            <h1 className="h1 mb-6"> "We have no <br/> <span className="text-accent">more time to talk..."</span> 
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">We are all aware of climate change, but it was already there in 1988, but why are we allowing it, what is it and what can we do about it? </p>
        
        </div>
       
  {/* photo 1:05:00*/}
        <div className="order- xl:order-none mb-8 xl:mb-0"><Photo /></div>
      </div>
      <Stats/><br/><br/>
      <h3 className="h2"><span className="text-accent">The Clima</span></h3>
      <p>It is what makes life on earth possible. The natural greenhouse effect existed until 1880. Without the greenhouse effect would be the average temperature on earth -18C°.</p>
      <br/>
      <Clima/>
    </div>
</section>
  );
}
 
