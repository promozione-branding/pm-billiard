"use client"
import React from "react";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { handleCallClick, handleWhatsappClick } from "@/track";

export default function CTA2() {
  return (
    <section className="px-4 py-6 md:py-10 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden py-6 rounded-3xl border border-[#b99a3b]/40 bg-[#123c2d] px-5  shadow-[0_15px_50px_rgba(18,60,45,0.18)] sm:px-10 sm:py-12">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

        {/* Gold Lines */}
        <div className="absolute left-0 top-0 h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        <div className="absolute bottom-0 right-0 h-px w-32 bg-gradient-to-l from-transparent via-[#d4af37] to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">

          {/* Small Heading */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d4af37] sm:text-xs">
              Premium Billiards Experience
            </span>

            <span className="h-px w-10 bg-[#d4af37]" />
          </div>

          {/* Main Heading */}
          <h2 className="flex flex-col md:flex-row items-center justify-center gap-1 whitespace-nowrap text-center text-3xl font-semibold leading-tight text-[#fffdf5] xs:text-2xl sm:gap-2 sm:text-4xl md:text-5xl lg:text-6xl">
            <span>Ready to Upgrade</span>

            <span className="text-[#d4af37]">Your Game Room?</span>
          </h2>

          {/* Description */}
          {/* <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#d9e3dc] sm:text-base">
            Talk to our team for premium billiards, pool, snooker and
            gaming tables. Let us help you choose the perfect table for
            your space.
          </p> */}

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            {/* Call Button */}
            <a
              onClick={() => handleCallClick({ source: "Website CTA", })}
              href="tel:+918745076259"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d4af37] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#fffdf5] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#123c2d] sm:w-auto"
            >
              <Phone
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:rotate-12"
              />

              <span>Call Now</span>

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* WhatsApp Button */}
            <a
              onClick={() => handleWhatsappClick({ source: "Website CTA", })}
              href="https://wa.me/+918745076259"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(37,211,102,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-[0_12px_30px_rgba(37,211,102,0.3)] sm:w-auto"
            >
              <FaWhatsapp
                size={25}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span>WhatsApp Us</span>

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Bottom Text */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-wider text-[#b9c9bf] sm:text-xs">
            <span>Pool Tables</span>
            <span className="text-[#d4af37]">•</span>
            <span>Snooker Tables</span>
            <span className="text-[#d4af37]">•</span>
            <span>Gaming Tables</span>
          </div>
        </div>
      </div>
    </section>
  );
}