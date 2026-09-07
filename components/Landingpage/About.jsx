import React from "react";
import ElectricBorder from "@/components/ElectricBorder";
import  Link from "next/link"
const About = () => {
  return (
    <div>
      <>
        {/* about */}

        <section className="relative w-full bg-[#2d291a] bg-center bg-cover text-white overflow-hidden">
          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-5 py-7 sm:py-12 grid grid-cols-1 lg:grid-cols-2  sm:gap-14 lg:gap-20 items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="hidden md:flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#222] text-sm">
                  ✨ Premium craftsmanship
                </span>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#222] text-sm">
                  Expert installation
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-6">
                PM Billiards –
                <br />
                <span className="text-[#f5c243]">
                  Premium Pool Tables, Snooker Tables & Billiard Tables.
                </span>
              </h2>

              <p className="text-white mb-10 text-sm sm:text-base lg:text-lg">
                Welcome to PM Billiards, your trusted destination for premium
                Pool Tables, Snooker Tables, and Billiard Tables designed for
                homes, clubs, resorts, and professional gaming arenas. We
                specialize in manufacturing high-quality Pool Tables,
                professional-grade Snooker Tables, and premium Billiard Tables
                that deliver superior performance, precision gameplay,
                durability, and elegant design. Our expertly crafted Pool Tables
                offer smooth ball movement, perfect leveling, and long-lasting
                construction for both home and commercial use. Our professional
                Snooker Tables are built to tournament standards, featuring
                premium slate beds, high-quality cloth, and exceptional frame
                stability. We also provide classic and modern Billiard Tables
                designed for recreational players, clubs, and luxury
                entertainment spaces. Whether you are a professional player, a
                serious snooker enthusiast, or looking to install a premium Pool
                Table, Snooker Table, or Billiard Table in your home or
                business.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12">
                <Link href="/about-us" className="inline-flex items-center gap-2 bg-[#2f8f6b] hover:bg-[#55b338] transition px-6 py-3 rounded-full text-white font-medium">
                  Explore our journey →
                </Link>

                <Link href="/contact-us" className="inline-flex items-center gap-2 border border-[#E0AE2E] hover:border-[#E0AE2E] transition px-6 py-3 rounded-full text-white">
                  Contact us
                </Link>
              </div>
            </div>

            <ElectricBorder className="hidden md:block">
              <div
                className=" relative w-full max-w-full sm:max-w-[620px] rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-8"
                style={{
                  backgroundImage: "url(/pm-billiard-about.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-[#3c6a4f]/40 to-black/70" />

                <div className="relative">
                  <div className="rounded-[20px] sm:rounded-[28px] border border-[#8ea97a]/40 bg-gradient-to-b from-[#1f3a2f] to-[#0f1f18] p-4 sm:p-6 shadow-[0_0_40px_rgba(120,180,120,0.25)]">
                    <p className="text-sm text-gray-300 mb-2">
                      Our Flagship Product
                    </p>

                    <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-white mb-3">
                      Professional Tournament Snooker Table
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-full sm:max-w-[90%]">
                      Built to international tournament standards with precision
                      slate, premium cloth, reinforced hardwood frame, and
                      perfectly tuned cushions to deliver championship-level
                      gameplay and long-term durability.
                    </p>

                    <div className="h-px bg-white/10 mb-5" />

                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    

                      <Link href="/categories/snooker-table" className="bg-[#f5c243] text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-[#e0ae2e] transition">
                        Explore Tables
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
                    <div className="rounded-2xl bg-gradient-to-b from-[#13251e] to-[#0b1611] p-4 sm:p-5 shadow-inner">
                      <p className="text-sm text-gray-400 mb-1">
                        Manufacturing Lead Time
                      </p>
                      <p className="font-serif text-xl sm:text-2xl text-white">
                        7–14 days
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-b from-[#13251e] to-[#0b1611] p-4 sm:p-5 shadow-inner">
                      <p className="text-sm text-gray-400 mb-1">
                        Professional Setup
                      </p>
                      <p className="font-serif text-xl sm:text-2xl text-white">
                        4–6 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ElectricBorder>
          </div>
        </section>
      </>
    </div>
  );
};

export default About;
