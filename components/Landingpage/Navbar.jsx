"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { categories } from "@/Data";
import { usePathname } from "next/navigation";
import ContactForm from "../ContactForm";

// Change this import according to your popup component

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Popup state
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const openPopup = () => {
    setMobileOpen(false);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const pathname = usePathname();

  const isProductPage = pathname.startsWith("/products/");
  const navTextColor = isProductPage ? "text-black" : "text-white";

  return (
    <>
      {/* =========================================================
          FLOAT NAVBAR
      ========================================================= */}
      {!scrolled && (
        <header className="fixed top-0 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2 md:top-5">
          <div className="flex h-17 items-center rounded-2xl border border-white/20 bg-white/40 px-8 shadow-xl backdrop-blur-xl">
            
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 rounded-md bg-white px-2"
            >
              <Image
                src="/2.png"
                alt="Logo"
                width={66}
                height={40}
              />
            </Link>

            {/* Main Navigation */}
            <div
              className={`hidden flex-1 justify-center gap-10 uppercase lg:flex ${navTextColor} text-lg font-medium`}
            >
              <Link
                href="/"
                className="hover:text-[#F6BB31]"
              >
                Home
              </Link>

              <Link
                href="/about-us"
                className="hover:text-[#F6BB31]"
              >
                About Us
              </Link>

              <Link
                href="/products"
                className="hover:text-[#F6BB31]"
              >
                Products
              </Link>

              <Link
                href="/blogs"
                className="hover:text-[#F6BB31]"
              >
                Blogs
              </Link>

              <Link
                href="/contact-us"
                className="hover:text-[#F6BB31]"
              >
                Contact Us
              </Link>
            </div>

            {/* Desktop Enquire Button */}
            <div className="hidden items-center lg:flex">
              <button
                type="button"
                onClick={openPopup}
                className="rounded-md bg-[#2F8F6B] px-4 py-3 text-md font-semibold text-white transition-all duration-300 hover:bg-[#267858] hover:shadow-lg"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="ml-auto text-yellow-500 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>

          {/* =====================================================
              CATEGORY NAVIGATION
          ===================================================== */}
          <div
            className={`relative mt-4 hidden justify-center gap-5 lg:flex ${navTextColor} text-md font-medium`}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                onMouseEnter={() => setActiveMenu(cat.id)}
                className="flex items-center text-[17px] font-bold uppercase hover:text-[#F6BB31]"
              >
                {cat.name}
                <ChevronDown size={14} />
              </Link>
            ))}

            {/* Mega Menu */}
            {activeMenu && (
              <div className="fixed left-0 right-0 top-[112px] z-[60] h-145 overflow-y-auto bg-white py-12 text-black shadow-xl">
                <div className="mx-auto w-full px-8">
                  <p className="mb-8 text-xs capitalize tracking-[0.3em]">
                    {
                      categories.find(
                        (c) => c.id === activeMenu
                      )?.name
                    }
                  </p>

                  <div className="grid grid-cols-5 gap-10">
                    {categories
                      .find((c) => c.id === activeMenu)
                      ?.products.map((prod) => (
                        <Link
                          key={prod.id}
                          href={`/products/${prod.id}`}
                          onClick={closeMenu}
                        >
                          <div className="relative h-50 overflow-hidden rounded-md bg-gray-100">
                            <Image
                              src={prod.image?.[0]?.src}
                              alt={prod.name}
                              fill
                              className="object-contain transition hover:scale-110"
                            />
                          </div>

                          <p className="mt-4 text-center text-sm font-medium hover:text-amber-600">
                            {prod.name}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      )}

      {/* =========================================================
          SCROLL NAVBAR
      ========================================================= */}
      {scrolled && (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1a1a24]/70 shadow-xl backdrop-blur-xl">
          <div className="flex h-18 items-center justify-between px-6">
            
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 rounded-md bg-white px-2"
            >
              <Image
                src="/2.png"
                alt="Logo"
                width={60}
                height={30}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden gap-12 text-lg font-semibold text-white lg:flex">
              <Link href="/">Home</Link>

              <Link href="/about-us">
                About Us
              </Link>

              <Link href="/products">
                Our Products
              </Link>

              <Link href="/blogs">
                Blogs
              </Link>

              <Link href="/contact-us">
                Contact Us
              </Link>
            </div>

            {/* Desktop Enquire Button */}
            <div className="hidden lg:block">
              <button
                type="button"
                onClick={openPopup}
                className="rounded-md bg-[#2F8F6B] px-4 py-3 text-md font-semibold text-white transition-all duration-300 hover:bg-[#267858] hover:shadow-lg"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile Menu */}
            <button
              type="button"
              className="text-yellow-500 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </header>
      )}

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      {mounted &&
        mobileOpen &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              onClick={closeMenu}
              className="fixed inset-0 z-[999999] bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer */}
            <div className="fixed right-0 top-0 z-[1000000] h-screen w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl">
              
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b px-5 py-4">
                <Image
                  src="/2.png"
                  alt="Logo"
                  width={60}
                  height={30}
                />

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X
                    size={28}
                    className="cursor-pointer text-yellow-500"
                  />
                </button>
              </div>

              {/* Main Links */}
              <div className="flex flex-col gap-4 px-5 py-4 text-[15px] font-medium">
                <Link
                  href="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>

                <Link
                  href="/about-us"
                  onClick={closeMenu}
                >
                  About Us
                </Link>

                <Link
                  href="/products"
                  onClick={closeMenu}
                >
                  Products
                </Link>

                <Link
                  href="/blogs"
                  onClick={closeMenu}
                >
                  Blogs
                </Link>

                <Link
                  href="/contact-us"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </div>

              {/* Categories */}
              <div className="border-t px-5 py-4">
                <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
                  Categories
                </p>

                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="border-b py-2"
                  >
                    <Link
                      href={`/categories/${cat.id}`}
                      onClick={closeMenu}
                      className="block py-2 pl-3 text-sm text-black hover:text-[#008065]"
                    >
                      {cat.name}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Mobile Enquire Button */}
              <div className="p-5">
                <button
                  type="button"
                  onClick={openPopup}
                  className="block w-full rounded-md bg-[#2F8F6B] py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-[#267858]"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </>,
          document.body
        )}

      {/* =========================================================
          POPUP FORM
      ========================================================= */}
      {popupOpen && (
        <ContactForm
            isOpen={popupOpen}
  onClose={closePopup}
        />
      )}
    </>
  );
}