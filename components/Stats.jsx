"use client";

import CountUp from "react-countup";



const stats = [
    
    {
        num: 15.3, 
        text: "Millions People threatened by rising sea levels",
    },
    {
        num: 9.705, 
        text: "Billions tons CO2 emissions per year",
    },
    {
        num: 219, 
        text: "Billions tons of ice melt per year",
    },
];

const Stats =() =>{
    return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none"> 
                {stats.map((item, index) => {
                    return (
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                        <CountUp 
                        end={item.num} 
                        duration={5} 
                        delay={2} 
                        className="text-4xl xl:text-6xl font-extrabold"
                        />
                        <p className={`${item.text.length < 26 ? "max-w-[200px]" : "max-w-[250px]"}leading-snug text-white/80`}>{item.text}</p>
                     </div>
              );  })}
            </div>
        </div>
    </section>
};
export default Stats;