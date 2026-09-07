import React from "react";
import { serviceCity } from "@/Data";
import Link from "next/link";

const Location = () => {
  return (
    <section className="w-full pb-4 md:py-8 ">
  <div className="px-2 md:px-4">
    
  
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold py-3  text-center md:text-left">
      Our Supply <span className="text-[#2f8f6b]">Network</span>
    </h2>

    
    <div className="flex flex-wrap  ">
      {serviceCity.map((city, index) => (
        <Link href={city.href}
          key={index}
          className="px-1 py-1 text-xs sm:text-base"
        >
         |&nbsp;{city.label} 
        </Link>
      ))}
    </div>

  </div>
</section>
  );
};

export default Location;
