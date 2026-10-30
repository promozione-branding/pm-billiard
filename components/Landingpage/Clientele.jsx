
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const clientsele = [
  { name: "YUSUF PATHAN", logo: "/clients/15.png" },
  { name: "NIKHIL MEHRA", logo: "/clients/16.png" },
  { name: "LEMON TREE", logo: "/clients/1.png" },
  { name: "RAJHANS GROUP", logo: "/clients/2.png" },
  { name: "Civil Services Officers Institute", logo: "/clients/3.png" },
  { name: "IIFT", logo: "/clients/5.png" },
  { name: "Indian Oil", logo: "/clients/6.png" },
  { name: "DLF Magnolias", logo: "/clients/7.png" },
  { name: "IIT ROORKEE", logo: "/clients/8.png" },
  { name: "House Of Armuse", logo: "/clients/9.png" },
  { name: "Royal Enfield Goa", logo: "/clients/11.png" },
  { name: "Vision Group", logo: "/clients/12.png" },
  { name: "Five Elements", logo: "/clients/13.png" },
  {
    name: "Indian Tourism Development Corporation Limited",
    logo: "/clients/4.png",
  },
];

export default function Ourclientsele() {
  return (
    <section className="sm:pt-10 py-8 bg-yellow-50 overflow-hidden">
      <div className="w-full mx-auto sm:px-10 px-5">

        {/* Heading */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-amber-500">Clients</span>
          </h2>

          <p className="mt-3 text-gray-700 leading-relaxed">
            Trusted by clubs, academies, and professional players for
            manufacturing premium-quality snooker tables crafted with
            precision, durability, and superior playing performance.
          </p>
        </div>

        {/* Slider */}
        <div className="relative group">

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            loop={true}
            speed={700}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".clients-prev",
              nextEl: ".clients-next",
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 24,
              },
              1536: {
                slidesPerView: 8,
                spaceBetween: 24,
              },
            }}
            className="!pb-5"
          >
            {clientsele.map((client, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center text-center group/client h-full">

                  {/* Logo Card */}
                  <div className="w-full h-24 sm:h-28 flex items-center justify-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={80}
                      className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 group-hover/client:scale-105"
                    />
                  </div>

                  {/* Client Name */}
                  <p className="mt-4 uppercase text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                    {client.name}
                  </p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          {/* <button
            className="clients-prev absolute left-0 top-1/2 -translate-y-1/2 z-10
            w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-gray-200
            flex items-center justify-center text-gray-800
            hover:bg-amber-500 hover:text-white transition-all
            -translate-x-1/2"
            aria-label="Previous clients"
          >
            &#10094;
          </button>

          <button
            className="clients-next absolute right-0 top-1/2 -translate-y-1/2 z-10
            w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-gray-200
            flex items-center justify-center text-gray-800
            hover:bg-amber-500 hover:text-white transition-all
            translate-x-1/2"
            aria-label="Next clients"
          >
            &#10095;
          </button> */}

        </div>
      </div>
    </section>
  );
}
