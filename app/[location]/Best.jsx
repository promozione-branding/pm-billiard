"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { handleWhatsappClick } from "@/track";

const bestSellers = [
  {
    id: 1,
    name: "Professional Snooker Accessory",
    img: "/try/acc.png",
    link: "/categories/billiards-accessories",
  },
  {
    id: 2,
    name: "Premium Pool Table",
    img: "/try/office2.webp",
    link: "/categories/snooker-table",
  },
  {
    id: 3,
    name: "Luxury Billiards Table",
    img: "/pm Billards Product/3_org.webp",
    link: "/categories/snooker-table",
  },
  {
    id: 6,
    name: "Snooker Balls Set",
    img: "/try/acc2.png",
    link: "/categories/billiard-balls",
  },
  {
    id: 4,
    name: "Tournament Snooker Table",
    img: "/pm Billards Product/try7_org.webp",
    link: "/categories/snooker-table",
  },
  {
    id: 5,
    name: "Classic Snooker Table",
    img: "/pm Billards Product/unnamed_2.webp",
    link: "/categories/snooker-table",
  },
];

export default function BestSellerSection() {
  return (
    <section className="w-full bg-white py-4 relative overflow-hidden">
      {/* GOLD SPOTLIGHT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EDBC41] blur-[260px] opacity-10 pointer-events-none" />

      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-13 px-4">
        <p className="text-yellow-500 uppercase tracking-[0.35em] text-xs font-bold mb-3">
          Top Picks ✨
        </p>

        <h2 className="text-4xl md:text-5xl text-black font-semibold leading-tight">
          Best Selling <span className="text-yellow-500">Tables</span>
        </h2>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        loop
        centeredSlides
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.4 },
          1024: { slidesPerView: 2.2 },
          1280: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-4"
      >
        {bestSellers.map((item) => (
          <SwiperSlide key={item.id}>
            <PremiumShowcase item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

/* ===== PREMIUM SHOWCASE TILE ===== */

function PremiumShowcase({ item }) {
  return (
    <div>
      <div className="relative group h-[420px] rounded-3xl overflow-hidden">
        {/* IMAGE */}
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-700"
        />

        {/* DARK FADE */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <h3 className="text-white text-2xl font-semibold">{item.name}</h3>

          <a
          onClick={() => handleWhatsappClick({ source: "Website City Pg", obj:item.name })}
            href={`https://wa.me/9999402424?text=${encodeURIComponent(
              `Hi, I want to enquire about ${item.name}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 font-bold text-white bg-green-500 px-2 p-3 w-fit rounded-xl text-lg font-medium flex gap-1 hover:scale-105 duration-150 transform-gpu"
          >
            Whatsapp Now
            <span className="text-center mt-0.5">
              <FaWhatsapp size={22} />
            </span>
          </a>
        </div>

        {/* GOLD EDGE */}
        <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-yellow-500/30 transition duration-500" />

        {/* TAG */}
        <span className="absolute top-5 left-5 bg-yellow-500 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider z-10">
          Bestseller
        </span>
      </div>
    </div>
  );
}
