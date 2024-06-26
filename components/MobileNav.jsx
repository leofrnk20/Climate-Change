"use client";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const link = [
    {
        name:"home",
        path:"/",
    },
    {
        name:"climate and people",
        path:"/the-clima-and-human",
    },
    {
        name:"solutions",
        path:"/comming soon",
    },
    {
        name: "topics",
        path: "/topics",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
               <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/*logo*/}
                <div className="mt-32 mb-40 text-center text-2xl"> <h1 className="text-4xl font-semibold">
                    The Climate <span className="text-accent">Change</span>
                </h1></div>
               
                {/*nav*/}
                <nav className='flex flex-col justify-center items-center gap-8'>{link.map((link,index)=>{
                    return <Link href={link.path} key={index} className={`${
                    link.path === pathname && "text-accent border-b-2 border-accent"
                }text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
                })}</nav>
            </SheetContent>
        </Sheet>
    );
};


export default MobileNav;
