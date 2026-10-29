"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const desktopImages = ["/bannerHome (1).webp", "/hero1.png"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
      relative w-full overflow-hidden bg-black
      h-[390px] md:h-[80vh] xl:h-[95vh]
      mt-20 md:mt-0
      "
    >
      {/* Background Slider */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 1.35,
            y: 80,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: {
              duration: 1.8,
              ease: "easeInOut",
            },
            scale: {
              duration: 8,
              ease: [0.16, 1, 0.3, 1],
            },
            y: {
              duration: 8,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="absolute inset-0"
        >
          <Image
            src={desktopImages[index % desktopImages.length]}
            alt="Hero banner"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 md:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-3xl mx-auto"
          >
            <h1
              className="
              text-white
              text-3xl
              sm:text-4xl
              md:text-7xl
              xl:text-7xl
              font-bold
              leading-tight
              text-center
              "
            >
              Premium Billiards,
              <br />
              Pool & Snooker Tables
            </h1>

            <p
              className="
              mt-5
              text-gray-200
              text-sm
              sm:text-base
              md:text-xl
              leading-relaxed
              max-w-2xl
              text-center
              "
            >
              Crafted for precision gameplay, elegant interiors, and
              unforgettable moments with every shot.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}