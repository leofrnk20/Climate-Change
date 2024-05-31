"use client";
import{BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const Topics= [
    {
        num:'01',
        title:"The Climate",//Introduction
        Description:"What is the climate? What is the Clima System? ",
        href:"/",
    },
    {
        num:'02',
        title:"CO2 Emissions ",
        Description:"Co2 storage and the comparison of emissions",
        href:"/co2-emissions",
    },
    {
        num:'03',
        title:"Climate and people",
        Description:"What do humans have to do with the climate? ",
        href:"/the-clima-and-human",
    },
    {
        num:'04',
        title:"Global Impact",
        Description:"(Comming Soon) The whole world is affected, but what exactly is at risk? ",
        href:"/global-impact",
    },
    {
        num:'05',
        title:"Solutions",
        Description:"(Comming Soon) Is there a way out of this problem?",
        href:"/solutions",
    },
]
import {motion} from "framer-motion";

const topics = () => {
    return (<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
            {Topics.map((Topics, index)=> {
                return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                    <div className="w-full flex justify-between items-center">
                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{Topics.num}</div>
                        <Link href={Topics.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                            <BsArrowDownRight className="text-primary text-3xl"/>
                        </Link>
                    </div>
                    <h2 className="text-[42px] 
                    font-bold leading-none
                     text-white 
                     group-hover:text-accent transition-all duration-500">{Topics.title}</h2>
                    <p className="text-white/60">{Topics.Description}</p>
                    <div className="border-b border-white/20 w-full"></div>
                </div>})}
            </motion.div>
        </div>
    </section>
    )
}
export default topics