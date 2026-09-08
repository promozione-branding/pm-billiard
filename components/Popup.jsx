"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { categories } from "@/Data";
export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 20) {
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll); // open once
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const formData = {
        supplierToken: "6a9fbb5cd936bdc2bb1d74d5",
        platform: "pmbilliard Popup Form",
        platformEmail: "pmbilliards@gmail.com",
        name,
        phone,
        email,
        place: "N/A",
        product,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("✅ Your enquiry has been submitted successfully!");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}

Message: ${message}

Contact: ${phone}`;

        const waUrl = `https://wa.me/+918745076259?text=${encodeURIComponent(
          whatsappText
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");

        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl md:max-w-5xl h-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/90 to-white/80">

        <button
          className="absolute top-4 right-4 text-gray-800 hover:text-red-500 text-2xl z-50"
          onClick={handleClose}
        >
          ✕
        </button>

        <div className="hidden md:block w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/try/temp.webp"
            alt="Contact Us"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white/90 backdrop-blur-sm relative z-30 overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
            Get In Touch With Us
          </h2>
          <div className="w-20 h-[3px] bg-[#F7C600] mx-auto mb-6 rounded-full"></div>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className=" p-3 rounded-lg text-black text-sm border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-white/90 shadow-sm transition"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
              <select
                name="products"
                required
                defaultValue=""
                className="p-3 rounded-lg bg-white border border-[#EDBC41]/30 text-black"
              >
                <option value="" disabled>
                  Select Product
                </option>

                {categories.map((cat) =>
                  cat.products?.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name}
                    </option>
                  ))
                )}
              </select>
            </div>

            <input
              type="tel"
              maxLength={10}
              minLength={10}
              pattern="[0-9]{10}"
              placeholder="081234 56789"
              className="w-full p-3 rounded-lg text-black text-sm border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-white/90 shadow-sm transition"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg text-black text-sm border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-white/90 shadow-sm transition"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-lg text-black text-sm border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-white/90 shadow-sm transition h-28 resize-none"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#F7C600] to-[#F7A400] hover:opacity-90 transition rounded-lg font-semibold text-white text-sm shadow-lg"
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>

            {status && (
              <p className={`text-center text-sm mt-2 font-medium ${status.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
