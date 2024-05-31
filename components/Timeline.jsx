
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
const Timeline = ()=>{
    return (
        <div>
            <ul>
                <il className=""><div className="w-[50px] h-[50px] rounded-full bg-accent/60 transition-all duration-500 flex justify-center items-center">
                    <h1 className="h2 text-white/90">1</h1></div>
                <p className="text-white/60">The sun is the earth's energy supplier and the main component of the climate system.</p>
                </il><br/>
                <il className=""><div className="w-[50px] h-[50px] rounded-full bg-accent/60 transition-all duration-500 flex justify-center items-center">
                    <h1 className="h2 text-white/90">2</h1></div>
                <p className="text-white/60">Our earth is surrounded by a gas envelope (atmosphere) which makes life on earth possible by regulating our temperature. 
                <AlertDialog>
  <AlertDialogTrigger> <span className='text-white/90'>More about Atmosphere</span></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>The Atmosphere</AlertDialogTitle>
      <AlertDialogDescription>
      The atmosphere consists of several gases, which is why the greenhouse effect can arise in the first place. Without the gases, the average temperature would not be 15°C but -18°C.<br/><br/>
        <span classname="text-accent/80 font-semibold">Atmospheric composition</span><br/>  
        21% =O<sub>2</sub><br/>
        78% =N<sub>2</sub><br/>
        1% = Argon<br/>
        0.1% = CO<sub>2</sub><br/>

      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction>back</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog></p>
                </il><br/>
                <il className=""><div className="w-[50px] h-[50px] rounded-full bg-accent/60 transition-all duration-500 flex justify-center items-center">
                    <h1 className="h2 text-white/90">3</h1></div>
                <p className="text-white/60">Waters absorb the sun's energy and the water evaporates. This is how clouds and rain form.</p>
                </il><br/>
                <il className=""><div className="w-[50px] h-[50px] rounded-full bg-accent/60 transition-all duration-500 flex justify-center items-center">
                    <h1 className="h2 text-white/90">4</h1></div>
                <p className="text-white/60">Just like the oceans, the land masses absorb the sun's heat radiation. They exchange heat with the atmosphere, with darker soils and forests warming up more than lighter soils. </p>
                

                </il><br/>
                <il className=""><div className="w-[50px] h-[50px] rounded-full bg-accent/60 transition-all duration-500 flex justify-center items-center">
                    <h1 className="h2 text-white/90">5</h1></div>
                <p className="text-white/60">The biosphere, all living organisms, store and produce substances and exchange them with the inanimate environment. Plants, animals and also humans are part of the biosphere and thus change the climate to varying degrees.</p>
                

                </il><br/>
                
            </ul>

        </div>
    )
}
export default Timeline