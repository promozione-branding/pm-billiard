"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    title: "Snooker Ball",
    icon: "/cat-ball.png",
    link: "/categories/billiard-balls",
  },
  {
    title: "Snooker Table",
    icon: "/cat-tablee.jpeg",
    link: "/categories/snooker-table",
  },
  {
    title: "Snooker Cue",
    icon: "/cat-cue.png",
    link: "/categories/snooker-cues",
  },
  {
    title: "Accessories",
    icon: "/cat-acc.png",
    link: "/categories/billiards-accessories",
  },
  {
    title: "Table Cloth",
    icon: "/cat-clothh.png",
    link: "/categories/snooker-table-cloth",
  },
  {
    title: "Cue Cases",
    icon: "/cat-case.png",
    link: "/categories/cue-case",
  },
  {
    title: "Foosball Table",
    icon: "/cat-soccer.png",
    link: "/categories/soccer-table",
  },
];

export default function CategorySection() {
  return (
    <section className="w-full">
      <div className="text-center my-5 md:my-10">
        <h2 className="text-black text-4xl md:text-5xl font-semibold leading-tight">
          Explore Our <span className="text-yellow-500">Collection</span>
        </h2>

        <p className="text-black mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Professional-grade equipment and handcrafted tables designed for
          players, clubs, and luxury game rooms.
        </p>
      </div>

      <div className="block md:hidden px-3">
        <Swiper
          spaceBetween={12}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {categories.map((cat, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <Link
                href={cat.link}
                className="relative flex flex-col items-center justify-center w-full h-full rounded-xl border-2 border-yellow-500 bg-white overflow-hidden p-4"
              >
                <div className="relative w-[200px] h-[150px]">
                  <Image
                    src={cat.icon}
                    alt={cat.title}
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>


                <p className="text-black font-bold text-xs uppercase tracking-wide mt-2 text-center">
                  {cat.title}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= DESKTOP STRIP ================= */}
      <div className="hidden md:flex w-full h-[300px] overflow-hidden">
        {categories.map((cat, i) => (
          <Link
            href={cat.link}
            key={i}
            className="relative flex-1 border-2 border-yellow-500 bg-white group overflow-hidden flex flex-col items-center justify-center"
          >
            <div className="relative w-[200px] h-[250px]">
              <Image
                src={cat.icon}
                alt={cat.title}
                fill
                className="object-cover drop-shadow-lg transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-2"
              />
            </div>

            <div className="mt-6 text-center">
              <p className="text-black font-bold text-lg uppercase transition-all duration-300 group-hover:tracking-[0.2em]">
                {cat.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}