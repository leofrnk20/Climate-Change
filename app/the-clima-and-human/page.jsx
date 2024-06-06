import Link from "next/link";
import { Button } from "@/components/ui/button"
const theclimaandhuman=()=>{
    return <sectrion className="h-full">
    <div className="container mx-auto h-full">
    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-×l">The Clima and Human</span>
              <h1 className="h1 mb-6">Anthropogenic<br/> <span className="text-accent">greenhouse gases</span> 
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">Global warming is human made. Growing anthropogenic greenhouse gas emissions, the increase in CO<sub>2</sub> levels, are responsible for the human-made climate Problem.</p>
              <p className="text-white/90"></p>
              <ul>
                <li>
                  <h3 className="h3">65% Carbon dioxide</h3>
                  <p className="text-white/80">from fossil fuels and industry</p>
                </li>
                <li>
                <h3 className="h3">11% Carbon dioxide</h3>
                <p className="text-white/80">from forestry and land use</p>
                </li>
                <li>
                 <h3 className="h3">16% Methane</h3>
                 <p className="text-white/80">from landfills, factory farming and sewage treatment plants</p>
                </li>
                <li>
                 <h3 className="h3">6% Nitrous oxide</h3> 
                 <p className="text-white/80">from the farming industry largely from fertilizers</p>
                </li>
                <li>
                  <h3 className="h3">2% F-Gases(Hydrofluorocarbons)</h3>
                  <p className="text-white/80">from the production of soundproofing and cooling/ fire extinguishing agents</p>
                </li>
              </ul><br/>
              <p className="text-white">With the exception of the F-gases, all the gases shown here were also present in the atmosphere in lower concentrations before the industrial age. Together with water steam, they used to create the natural greenhouse effect.</p>
                <h1 className="h1 text-accent">Footprint of tourism</h1>
               <br/> <p className="text-white">We produce a lot of CO2 as tourists that we produce a lot of CO2 when we fly and travel, but a big point is that every tourist produces 1.4kg trash per day.
               <br/><br/> <span className="text-accent">4500 MT of CO<sub>2</sub> is produced by tourists worldwide every year (8%)</span><br/><br/>
               Future forecasts for 2025 show growth in the tourist industry at +4% per year.
               </p>
               <h1 className="h1 text-accent">Energy giant Internet</h1>
              <br/> 
               <h3 className="h3">416 Terawatt hours 2015 for Servers</h3>
               <p className="text-white"> This is 2% of the global CO<sub>2</sub>. Australia in year 2025 have produced also 2%.<br/><br/>
                           Probaly 14% of CO<sub>2</sub> is produced in year 2024 by data center. 7 Millions cars have the same CO<sub>2</sub> like all mail traffic.</p><br/>
                           <h1 className="h1 text-accent">...More is possible and will be the future </h1>
                          <br/><br/> <div 
            className=" h-[400px]  xl:h-[500px] mix-blend-lighten relative">
                <h3 className="h3">Topic 3 ✅</h3>
                <br/>
               <Link href="/topics">
                    <Button>Topics</Button>
                </Link>
        </div>
          </div>
          <div className="order- xl:order-none mb-8 xl:mb-0"></div>
        </div>
    </div>
    </sectrion>
}
export default theclimaandhuman
