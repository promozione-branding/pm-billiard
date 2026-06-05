"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  const submitEmail = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setState("error");
      return;
    }
    setState("success");
    setEmail("");
  };

  return (
<footer className="relative text-white pt-12 pb-8 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover "
        style={{
          backgroundImage: "url('/try/mainbg.jpg')",
        }}
        aria-hidden="true"
      />

      {/* DARK LUXURY OVERLAY */}
   {/* PREMIUM TINTED OVERLAY (lets image show through) */}
<div
  className="absolute inset-0 -z-10 backdrop-blur-[1px]"
style={{
  background:
    "linear-gradient(180deg, rgba(0,96,76,0.90) 0%, rgba(0,0,0,0.825) 100%)",
}}


  aria-hidden="true"
/>




      {/* GOLD ACCENT LINE */}
      <div className="absolute top-0 left-0 h-1 w-full -z-5 bg-gradient-to-r from-[#EDBC41] to-[#C89A2F]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="inline-block rounded-sm overflow-hidden bg-white ">
              <Image
                src="/2.png"
                width={100}
                height={50}
                alt="PM Billiards"
                className="object-contain"
              />
            </div>

            <p className="mt-4 leading-relaxed text-sm text-white/90">
              PM Billiards is a premium manufacturer of professional snooker,
              pool, and billiard tables — crafted with precision engineering,
              tournament-grade materials, and timeless luxury design for homes,
              clubs, and competitive arenas.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[#EDBC41] font-semibold text-xl mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-[#EDBC41]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white hover:text-[#EDBC41]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-[#EDBC41]">
                Products
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-white hover:text-[#EDBC41]">
                 Blogs
                </Link>
              </li>
           
              <li>
                <Link href="/contact-us" className="text-white hover:text-[#EDBC41]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* PRODUCT CATEGORIES */}
          <div>
            <h3 className="text-[#EDBC41] font-semibold text-xl mb-4">
              Our Products
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/categories/snooker-table" className="text-white hover:text-[#EDBC41]">
                  Professional Snooker Tables
                </Link>
              </li>
              <li>
                <Link href="/categories/snooker-table" className="text-white hover:text-[#EDBC41]">
                  Tournament Pool Tables
                </Link>
              </li>
              <li>
                <Link href="/categories/snooker-table" className="text-white hover:text-[#EDBC41]">
                  Luxury Billiard Tables
                </Link>
              </li>
              <li>
                <Link href="/categories/snooker-cues" className="text-white hover:text-[#EDBC41]">
                  Premium Cues
                </Link>
              </li>
              <li>
                <Link href="/categories/snooker-table-cloth" className="text-white hover:text-[#EDBC41]">
                  Snooker Cloth
                </Link>
              </li>
              <li>
                <Link href="/categories/cue-case" className="text-white hover:text-[#EDBC41]">
                  Cue Cases
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-[#EDBC41] font-semibold text-xl mb-4">
              Contact Us
            </h3>

            <div className="flex items-start gap-3 mb-4">
              <MapPin className="text-[#EDBC41] w-5 h-5" />
              <p className="text-sm text-white/95">
              16/3,Basement, Block 16, East Patel Nagar,   New Delhi,  110008
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EDBC41]" />
                 <a href="tel:9999402424">9812232723,</a>{" "}
                  <a href="tel:8595063087">8745076259</a>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#EDBC41]" />
                <a
                  href="mailto:info@pmbilliards.com"
                  className="text-white hover:text-[#EDBC41]"
                >
                  pmbilliards@gmail.com
                </a>
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.instagram.com/pmbilliards_?igsh=OGlseTM3bGR4a3Z4"
                className="text-[#EDBC41] hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61575620020673"
                className="text-[#EDBC41] hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

           

           
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm text-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p>© 2025 PM Billiards. All Rights Reserved.</p>

            <p>
              Website Designed By{" "}
                Inquiry Bazaar Pvt. Ltd.  {" "}
        <a
          target="_blank"
          href="https://inquirybazaar.com/"
          className="text-[#FAAC18] hover:underline"
        >
           B2B Marketplace
        </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
