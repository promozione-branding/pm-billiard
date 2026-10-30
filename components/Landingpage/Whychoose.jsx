'use client'

import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Whychoose = () => {

  const images = [
    "/clients/15.png",
    "/new/1_.webp",
    "/new/2_.webp",
    "/new/3_.webp",
    "/new/4.webp",
    "/new/5.webp",
    "/new/6.webp",
    "/new/7.webp",
    "/new/8.webp",
    "/new/9_.webp",
    "/snooker/5.webp",
    "/new/11.jpeg",

    
  ];

  return (
    <div>

      <section className="w-full bg-center bg-cover py-5 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-18 items-center">

          {/* LEFT — TEXT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight px-2">
              Why PM Billiards is the Preferred Choice
            </h2>

            <p className="text-black px-2">
              At PM Billiards, we are committed to delivering premium Pool Tables,
              Snooker Tables, and Billiard Tables that meet the highest standards of
              quality, performance, and design. With expert craftsmanship, superior
              materials, and a passion for precision, we have become a trusted choice
              for homes, clubs, and professional gaming spaces.
            </p>

            <div className="grid grid-cols-2 md:gap-6 gap-2 mt-6">

              <div className="bg-yellow-100 p-5 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg text-black">
                  Premium Materials & Build
                </h3>
                <p className="text-sm text-black mt-2">
                  We use high-grade slate, premium wood, and professional cloth to
                  ensure durability, smooth gameplay, and long-term reliability.
                </p>
              </div>

              <div className="bg-green-100 p-5 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg text-black">
                  Professional Craftsmanship
                </h3>
                <p className="text-sm text-black mt-2">
                  Each table is crafted with precision to ensure perfect leveling,
                  accurate rebound, and flawless play.
                </p>
              </div>

              <div className="bg-green-100 p-5 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg text-black">
                  Custom-Built Tables
                </h3>
                <p className="text-sm text-black mt-2">
                  We build custom Pool, Snooker & Billiard tables tailored to your
                  space, style, and requirements.
                </p>
              </div>

              <div className="bg-yellow-100 p-5 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg text-black">
                  Tournament Grade
                </h3>
                <p className="text-sm text-black mt-2">
                  Our tables meet professional and club standards for high-performance
                  gameplay.
                </p>


              </div>



            </div>



          </div>


          {/* RIGHT — IMAGE SLIDER (REPLACES GIF) */}
          <div>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop={true}
              className="rounded-xl overflow-hidden"
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-[500px] md:h-[600px] relative">
                    <Image
                      src={src}
                      alt="PM Billiards table"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <p className="font-semibold text-black mt-5 text-xl md:text-2xl text-center">
              Trusted by clubs, academies, gaming centers, and professional players.
            </p>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Whychoose