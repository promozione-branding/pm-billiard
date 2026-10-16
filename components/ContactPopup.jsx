import { useState } from "react";
import Image from "next/image";

export default function ContactPopup({ isOpen, onClose }) {
  if (!isOpen) return null; // ❗ hides popup

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm p-4">
      
      <div className="relative w-full max-w-3xl md:max-w-5xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/90 to-white/80">

        {/* ❌ Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-800 hover:text-red-500 text-2xl z-50"
          onClick={onClose}
        >
          ✕
        </button>

        {/* 🖼 Image */}
        <div className="hidden md:block w-full md:w-1/2 relative min-h-[300px]">
          <Image
            src="/try/temp_.webp"
            alt="Contact Us"
            fill
            className="object-cover"
          />
        </div>

        {/* 📝 Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white/90 backdrop-blur-sm overflow-y-auto">
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
            Get In Touch With Us
          </h2>

          <div className="w-20 h-[3px] bg-[#F7C600] mx-auto mb-6 rounded-full"></div>

          <form className="space-y-3">
            
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 w-full"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="p-3 rounded-lg border border-gray-300 w-full"
            />

            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg border border-gray-300 w-full"
            />

            <textarea
              placeholder="Message"
              className="p-3 rounded-lg border border-gray-300 w-full h-24"
            />

            <button className="w-full py-3 bg-yellow-400 rounded-lg font-semibold">
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}