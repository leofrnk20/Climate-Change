import Link from "next/link";
import {Button} from "./ui/button";
//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = ()=>{
    return (
    <header className="py-8 cl:py-12 text-white">
        <div className="container my-auto flex justify-between items-center">
            {/*logo*/}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    The Climate <span className="text-accent">Change</span>
                </h1>
            </Link>

            {/*desktop nav & button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/topics">
                    <Button>Topics</Button>
                </Link>
            </div>
            {/*mobile nav */}
            <div className="xl:hidden">
                <MobileNav/>
                
            </div>
        </div>
    </header>
)
    
}
export default Header
