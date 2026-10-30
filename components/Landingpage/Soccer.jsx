import React from "react";
import Link from "next/link";

const Soccer = () => {
  const iconItems = [
    {
      label: "CHOOSE YOUR TABLE",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      ),
    },
    {
      label: "PROFESSIONAL QUALITY",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
        >
          <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" />
        </svg>
      ),
    },
    {
      label: "TOURNAMENT STANDARD",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
        >
          <path d="M8 4h8v8H8z" />
          <path d="M12 12v8" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="w-full min-h-[85vh] relative overflow-hidden flex items-center">
        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/parllex.webp')" }}
        />

        <div className="absolute inset-0 bg-black/20" />

        {/* GLASS PANEL */}
        <div className="relative w-full lg:w-1/2 h-full backdrop-blur-md bg-[#c4a288]/45 text-white px-5 sm:px-10 lg:px-16 py-12 lg:py-25 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto lg:mx-0">
            {/* ICONS */}
            <div className="flex  gap-6 sm:gap-10 mb-8">
              {iconItems.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start gap-2 w-[30%] sm:w-auto"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white flex items-center justify-center rounded-sm">
                    {item.icon}
                  </div>

                  <p className="text-[10px] sm:text-xs tracking-widest font-semibold">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>zQ

            {/* HEADING */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-5">
              PREMIUM CRAFTED
              <br />
              BILLIARDS, POOL & SNOOKER
              <br />
              TABLES FOR EVERY SPACE
            </h2>

            <div className="w-14 h-1 bg-white mb-5" />

            {/* TEXT */}
            <p className="text-sm sm:text-base leading-relaxed mb-8">
              PM Billiards is a leading manufacturer of premium Pool Tables,
              professional Snooker Tables, and classic Billiard Tables designed
              for homes, clubs, resorts, and competitive gaming arenas.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/categories/snooker-table" className="border border-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[#008065] transition">
                EXPLORE TABLES
              </Link>

              <Link href="/contact-us" className="border text-black border-white px-6 py-3 text-sm font-semibold bg-white hover:text-[#008065] transition">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECOND SECTION ================= */}

      <section
        style={{ backgroundImage: "url(/newbg.webp)" }}
        className="hidden md:block bg-center bg-cover h-[40vh] sm:h-[55vh] lg:bg-fixed"
      />
    </>
  );
};

export default Soccer;
