
"use client";

import React from "react";
import {
  ArrowUpRight,
  Gem,
  ShieldCheck,
  Trophy,
  Settings2,
  Wrench,
  Rows3,
} from "lucide-react";

const SnookerShowcase = () => {
  return (
    <section className="w-full bg-[#0c100e] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* LEFT HERO CARD */}
          <div className="relative min-h-[520px] md:min-h-[650px]  overflow-hidden rounded-2xl group">

            {/* Replace with your hero image */}
            <img
              src="/snooker/5.webp"
              alt="Premium Snooker Table"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />


            <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10">

              {/* Heading */}
              <div className="max-w-xl mt-auto pt-3">

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#d9b45b] text-[10px] sm:text-xs tracking-[0.35em] uppercase font-semibold">
                    Premium Snooker Tables
                  </span>
                  <span className="w-12 h-[1px] bg-[#d9b45b]" />
                </div>

                <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight">
                  
                  <br />
                  <span className="text-[#e4bd68]">
                    The Perfect Game.
                  </span>
                </h2>

                <p className="text-white/75 text-sm sm:text-base leading-relaxed mt-6 max-w-[390px]">
                  Experience the finest snooker tables crafted
                  for professionals and enthusiasts. Built for
                  precision, performance and lasting elegance.
                </p>

                <a
                  href="/categories/snooker-table"
                  className="inline-flex items-center gap-4 mt-7 px-6 py-3.5 rounded-full bg-[#e6bd68] text-[#17130a] text-sm font-semibold hover:bg-white transition-all duration-300"
                >
                  Explore Snooker Tables
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Bottom features */}
            
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* CARD 1 */}
            <FeatureCard
              badge="Snooker Tables"
              image="/snooker/1.jpeg"
              icon={<Gem size={21} />}
              title={<>Professional Grade<br />Slate Beds</>}
              subtitle="Unmatched stability & precision"
              description="Engineered with premium slate for a perfectly level playing surface."
            />

            {/* CARD 2 */}
            <FeatureCard
             badge="Premium Tables"
              image="/snooker/2.jpeg"
              icon={<ShieldCheck size={21} />}
              title={<>Premium<br />Finishing</>}
              subtitle="Elegance in every detail"
              description="Beautifully crafted with fine wood, quality cloth and superior cushion response."
            />

            {/* CARD 3 */}
            <FeatureCard
             badge="Custom Tables"
              image="/snooker/3.jpeg"
              icon={<Settings2 size={21} />}
              title={<>Multiple Sizes<br />& Custom Options</>}
              subtitle="Perfect fit for your space"
              description="Available in various sizes and custom configurations to match your needs."
            />

            {/* CARD 4 */}
         
            <FeatureCard
             badge="Tables Essentials"
              image="/snooker/4.webp"
              icon={<Rows3 size={21} />}
              title={<>Accessories<br />& Essentials</>}
              subtitle="Everything you need"
              description="From cues to chalk, we offer a complete range of snooker accessories."
            />

          </div>
        </div>
      </div>
    </section>
  );
};


/* REUSABLE FEATURE CARD */

function FeatureCard({
  image,
  icon,
  badge,
  title,
  subtitle,
  description,
}) {
  return (
    <div className="relative min-h-[310px] sm:min-h-0 sm:aspect-[1.12/1] overflow-hidden rounded-2xl group bg-[#101b14]">

      {/* Background Image */}
      <img
        src={image}
        alt="Snooker table feature"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10 opacity-15" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-5 sm:p-5 lg:p-6">

        <div className="flex justify-between items-start">

          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white/15 backdrop-blur-md border border-white/10 text-white">
            {icon}
          </div>

          <span className="border border-white/30 rounded-full px-3 py-1.5 text-[9px] tracking-[0.15em] text-white uppercase">
            {badge}
          </span>

        </div>

        <div className="mt-16">

          <h3 className="text-white text-2xl lg:text-[26px] font-semibold leading-tight">
            {title}
          </h3>

          <p className="text-[#a6df35] text-sm font-semibold mt-3">
            {subtitle}
          </p>

          
        </div>
      </div>

    </div>
  );
}

export default SnookerShowcase;
