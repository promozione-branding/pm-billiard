"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });
const inter = Inter({ subsets: ["latin"] });

export default function TestimonialsSection() {

const testimonials = [
  {
    name: "Sushanto Bhattachaya",
    review:
      "Amazing tables and service. The Leadsuper tables installed at Savio Pool & Snooker Academy are perfectly smooth to play on. They provide excellent spin and cue ball control. Highly recommended for snooker tables.",
  },
  {
    name: "Mesmer Savio",
    review:
      "We recently purchased the Leadsuper Table from PM Billiards for Savio's Snooker Academy, Bangalore. The tables meet the highest standards and are truly worth it.",
  },
  {
    name: "Chandan Bhatti",
    review:
      "Genuine pricing and good quality. Bought Omin Gunman cue and it performs very well.",
  },
  {
    name: "Viraj Misal",
    review:
      "Good table options with excellent quality. Owner Manmeet Singh ji is very cooperative and supportive.",
  },
  {
    name: "Shuddu Sharma",
    review:
      "Overall experience with PM Billiards Factory has been exceptional. Highly recommend their products and services for top-notch pool tables and customer care.",
  },
  {
    name: "Govinder Puri",
    review:
      "Good quality tables at a reasonable price. Very professional and humble staff. The cues provided are also of great quality.",
  },
  {
    name: "Pratap Deependra",
    review:
      "Best place to buy cues and snooker accessories at reasonable prices. Very polite staff who guide you well according to your needs.",
  },
  {
    name: "teTodAS 342",
    review:
      "Great value for money. The table quality exceeded expectations. Well packed delivery and quick seller response. Very happy with the purchase.",
  },
  {
    name: "Vijaysharma Sharma",
    review:
      "Lead Super tables exceeded my expectations in terms of quality, finishing, and performance. Mr. Manmeet Singh's professionalism is commendable.",
  },
  {
    name: "Gul Mohammad (Faiz)",
    review:
      "Best products with genuine items at the lowest price. Very helpful and kind support from Mr. Puneet.",
  },
  {
    name: "Fahad Baig",
    review:
      "Fantastic opportunity to play snooker qualifiers locally. The Leadsuper case cover has very good material quality.",
  },
  {
    name: "Ashish Gore",
    review:
      "Cue case cover is highly recommended. Looks professional, lightweight, sturdy, and easy to carry.",
  }
];
  return (
    <section className={`${inter.className} w-full bg-[#e9e9e9] py-[40px] px-[20px] relative`}>
      
      <h2 className={`${playfair.className} text-center text-[34px] md:text-[64px] text-[#222] mb-[40px]`}>
      Customer Reviews
      </h2>

      <div className="flex flex-col lg:flex-row gap-[25px] items-stretch max-w-7xl mx-auto">

        {/* Rating Card */}
        <div className="lg:w-[320px] bg-white p-[10px_20px] text-center rounded-[4px]">
          <h2 className="text-[80px] md:text-[110px] font-semibold leading-none">4.9</h2>
          <div className="text-[#ff4d4d] text-[24px] my-[10px]">★★★★★</div>
          <p className="text-[#555] text-xl">(300+ reviews)</p>
          <h3 className="mt-[20px] font-medium leading-snug">
            Loved by Our Customers
          </h3>
        </div>

        {/* Swiper Slider */}
        <div className="flex-1 relative overflow-hidden">

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >

            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-[6px] p-[35px] h-auto md:h-70">
                  <p className="font-semibold text-2xl mb-[5px]">{item.name}</p>
                  <p className="text-[#ff9900] text-[40px] leading-none">“</p>
                  <p className="mt-[10px] text-[#333] leading-[1.5]">
                    {item.review}
                  </p>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>

          {/* Navigation Buttons */}
          <div className="prev-btn absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer">
            <ChevronLeft className="text-[#ff6a00]" />
          </div>

          <div className="next-btn absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer">
            <ChevronRight className="text-[#ff6a00]" />
          </div>

        </div>
      </div>

    </section>
  );
}