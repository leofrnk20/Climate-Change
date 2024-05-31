import Timeline from '@/components/Timeline'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 

const co2emissions = ()=>{
    return(
        <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-×l">Basis</span>
              <h1 className="h1 mb-6">How the climate <br/> <span className="text-accent">system works?</span> 
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">The climate system is an important basis for talking about co2 emissions</p>
          
          </div>
         
    {/* photo 1:05:00*/}
          <div className="order- xl:order-none mb-8 xl:mb-0"></div>
        </div>
        <br/>
        <Timeline/>
        <h3 className="h2"><span className="text-accent">CO<sub>2</sub> storage</span></h3>
    <Tabs defaultValue="forest">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="forest"><Card className="w-[2000px] hover:bg-accent/10">Forest</Card></TabsTrigger>
        <TabsTrigger value="ocean"><Card className="w-[2000px] hover:bg-accent/10">Ocean</Card></TabsTrigger>
      </TabsList>
      <TabsContent value="forest">
     
      <div className="w-full h-full relative">
            <div 
            className=" h-[298px]  xl:h-[498px] mix-blend-lighten relative">
                <Image src="/assets/Forest 70k Pexels.jpg" 
                priority 
                quality ={100} 
                fill 
                alt="" 
                className="object-contain"/>
        </div>
    </div> <br/>
          <h1 className='h3 text-accent'>The CO<sub>2</sub> storage Forest</h1>
          <p className="text-white/90">The greener the trees, the more CO2 the forest can absorb. This means that the forest can absorb different amounts depending on the season. Intact forests can therefore reduce the CO2 balance through photosynthesis. </p>
          <span className="text-×l text-white/90">28% of yearly CO<sub>2</sub> emissions are absorbed by forests </span>
      </TabsContent>
      <TabsContent value="ocean">
       
        <div className="w-full h-full relative">
            <div 
            className=" h-[298px]  xl:h-[498px] mix-blend-lighten relative">
                <Image src="/assets/Ocean Kellie Churchman.jpg" 
                priority 
                quality ={100} 
                fill 
                alt="" 
                className="object-contain"/>
        </div>
    </div> <br/>
   
        <h1 className='h3 text-accent'>The CO<sub>2</sub> storage Ocean</h1>
          <p className="text-white/90"> The oceans store almost 50 times as much as the rest of the atmosphere. The rapid increase in co2 triggers certain reactions. This affects many creatures in the ocean, including corals and plankton. They need the calcium carbonate to build their shells and bones.</p>
         
        <span className="text-×l text-white/90">30%-40% of yearly CO<sub>2</sub> emissions are absorbed by oceans.</span>
   <br></br>    <br></br>
   <AlertDialog>
  <AlertDialogTrigger> <span className='text-white/90'><Button>More about the ocean pumps</Button></span></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>The Ocean pumps</AlertDialogTitle>
      <AlertDialogDescription> 
      Biological pump<br/>
Tiny algae near the surface, so named phystoplankton, absorb CO2 to carry out photosynthesis. Dead algae sink to the depths, which also binds CO2 in the ocean for a longer period of time.
<br/><br/>
Physical pump<br/>
The ocean current transports Co2 into the deep sea and slowly around the globe until it reaches the surface again with a current.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction>Back</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      </TabsContent>
    </Tabs>
      <br/>
      <h1 className='h2 text-accent'>CO<sub>2</sub> emission in comparison</h1>
      <p className="text-white/90"> Worldwide <br/>
      1960 9.396 Mt CO<sub>2</sub><br/>
      2017 36.153 Mt CO<sub>2</sub></p>
      <AlertDialog>
  <AlertDialogTrigger><Button>County CO<sub>2 </sub> List 1960-2017</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>CO<sub>2</sub> emmsions ranking 2017 (1968)</AlertDialogTitle>
      <AlertDialogDescription> 
      1.China (779Mt CO<sub>2</sub>) 9839Mt CO<sub>2</sub><br/>
      2.USA (2888)5270<br/>
      3.India (121)5270<br/>
      4.Russia (890)1693<br/>
      5.Japan (233)1205<br/>
      6.Germany (814)799<br/>
      7.Iran (37)672<br/>
      8.Saudi Arabia (3)635<br/>
      9.South Korea (12)616 <br/>
      10.Canada (193)573</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction>Back</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog><br/><br/>
<h1 className='h2 text-accent'>The earth is warming up</h1>
<br/>
<div className="w-full h-full relative">
            <div 
            className=" h-[298px]  xl:h-[498px] mix-blend-lighten relative ">
                <Image src="/assets/Dia.jpg" 
                priority 
                quality ={100} 
                fill 
                alt="" 
                className="object-contain"/>
        </div>
    </div>
    <span className="text-×l text-white/40"> earthobservatory.nasa.gov </span><br/>
      <p className="text-white/90">The increase in CO<sub>2</sub> in the air caused by humans is heating up the earth. By the year 2100, the global average temperature is expected to rise by 1.6 to 4°C. An increase of up to 6°C is also possible. As we do not yet know how the economy and politics will act, further forecasts are not yet meaningful.  However, there are various models for estimating the <span className="font-extrabold">Representative Concentration Pathways</span>(RCP)
      <br/><br/>
      The RCP 8.5 scenario is the scenario that describes what happens if we do nothing. The best possible scenario is RCP 2.6, for which we would have to drastically reduce emissions with immediate effect. 
      <br/><br/>
      In addition, the global warming temperatures have been classified differently. From 1.5°C it is classified as dangerous. From 2.0°C it becomes complicated for humanity. From that point on, we can no longer stop the poles from melting. As a consequence, we would have rising sea levels, which would take away a lot of living space. The countries that already have drought and heat problems would have them even worse.<br/><br/>
      We now have a lot more heat, but it has to be absorbed in exactly the same way - but where does it go?</p>
      <br/><AlertDialog>
  <AlertDialogTrigger><Button>The distribution of heat</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>The distribution of heat</AlertDialogTitle>
      <AlertDialogDescription> 
        93,4% Oceans <br/>
        2,3% Atmosphere<br/>
        2,1% Continental areas<br/>
        2,1% ice<br/><br/>
        In the long term, global warming will also increase the temperature of the sea. In the last few years, almost 60% faster than previously assumed. Warmer water expands, so the sea level would also continue to rise. If all the ice in greenland were to melt, the sea level would be 7 meters higher than it is today. Researchers expect it to rise by 80-150 cm by 2100. However, not all factors can be precisely calculated. As a result, <br/>2 billion people would have to move inland within the next few years. 

      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction>Back</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog><br/><br/>
<div 
            className=" h-[400px]  xl:h-[500px] mix-blend-lighten relative">
                <h3 className="h3">Topic 2 ✅</h3>
                <br/>
               <Link href="/topics">
                    <Button>Topics</Button>
                </Link>
        </div> <br/><br/><br/>
      </div>
  </section>
    )
}
export default co2emissions