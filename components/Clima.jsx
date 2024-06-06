"use client";
import Image from "next/image";
import Link from "next/link";
import {Button} from "./ui/button";

const Clima = ()=> {
    return (<div>
        <h2 className="h3">The natural greenhouse effect</h2>
        <br></br>
        <div className="w-full h-full relative grid grid-cols-1 md:grid-cols-2 gap-[60px]" >
        <div 
            className=" h-[400px]  xl:h-[500px] mix-blend-lighten relative">
                <Image src="/assets/Greenhouse Effect Diagram NASA.jpg" 
                priority 
                quality ={100} 
                fill 
                alt="" 
                className="object-contain"/>   
        </div>
        <div><p>During the day, the sun shines through the atmosphere. The earths surface heats up due to the sunlight. At night, the earth's surface cools down and releases the heat back into the air. However, some of the heat is retained by greenhouse gases in the atmosphere. This ensures that the average temperature on earth is 14 degrees Celsius.</p>
          </div> <h2 className="h3">...the human</h2>
         </div> <br></br>
        <div className="w-full h-full relative grid grid-cols-1 md:grid-cols-2 gap-[60px]" >
       <div><p>Human activities are changing Earth's natural greenhouse effect. Burning fossil fuels like coal and oil puts more carbon dioxide into our atmosphere.

NASA has observed increases in the amount of carbon dioxide and some other greenhouse gases in our atmosphere. Too much of these greenhouse gases can cause Earth's atmosphere to trap more and more heat. This causes Earth to warm up.</p></div>
    <div 
            className=" h-[400px]  xl:h-[500px] mix-blend-lighten relative">
                <h3 className="h3">Topic 1 ✅</h3>
                <br/>
               <Link href="/topics">
                    <Button>Topics</Button>
                </Link>
        </div> 
 </div>
 
        </div>

    
            )
}
export default Clima
