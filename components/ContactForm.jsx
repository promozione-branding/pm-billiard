"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { X } from "lucide-react";
import { categories } from "@/Data";

export default function ContactForm({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (!loading) {
      setStatus("");
      onClose();
    }
  };

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
        setStatus(
          "✅ Your enquiry has been submitted successfully!"
        );

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}

Message: ${message}

Contact: ${phone}`;

        const waUrl = `https://wa.me/918745076259?text=${encodeURIComponent(
          whatsappText
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

        // Clear form
        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");

        // Close popup after success
        setTimeout(() => {
          onClose();
          setStatus("");
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
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="relative flex max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={handleClose}
          disabled={loading}
          className="absolute right-4 top-4 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition hover:bg-[#2F8F6B] hover:text-white disabled:cursor-not-allowed"
        >
          <X size={20} />
        </button>

        {/* LEFT IMAGE */}
        <div className="relative hidden min-h-[550px] w-1/2 md:block">
          <Image
            src="/try/temp.webp"
            alt="Contact Us"
            fill
            className="object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#123c2d]/90 via-[#123c2d]/20 to-transparent" />

          <div className="absolute bottom-10 left-8 right-8 text-white">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-[#d4af37]">
              Premium Billiards
            </p>

            <h3 className="text-3xl font-semibold leading-tight">
              Let&apos;s Build Your
              <br />
              Perfect Game Room
            </h3>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full overflow-y-auto bg-[#fffdf8] p-6 sm:p-8 md:w-1/2 md:p-10">

          {/* Heading */}
          <div className="mb-6 text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2F8F6B]">
              Get In Touch
            </p>

            <h2 className="text-2xl font-bold text-[#123c2d] sm:text-3xl">
              Get In Touch With Us
            </h2>

            <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-[#d4af37]" />
          </div>

          <form
            className="space-y-3"
            onSubmit={handleSubmit}
          >
            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm text-black outline-none transition focus:border-[#2F8F6B] focus:ring-2 focus:ring-[#2F8F6B]/20"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />

            {/* PRODUCT */}
            <select
              required
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              disabled={loading}
              className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm text-black outline-none transition focus:border-[#2F8F6B] focus:ring-2 focus:ring-[#2F8F6B]/20"
            >
              <option value="" disabled>
                Select Product
              </option>

              {categories.map((cat) =>
                cat.products?.map((prod) => (
                  <option
                    key={prod.id}
                    value={prod.name}
                  >
                    {prod.name}
                  </option>
                ))
              )}
            </select>

            {/* PHONE */}
            <input
              type="tel"
              maxLength={10}
              minLength={10}
              pattern="[0-9]{10}"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm text-black outline-none transition focus:border-[#2F8F6B] focus:ring-2 focus:ring-[#2F8F6B]/20"
              required
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value.replace(/\D/g, "")
                )
              }
              disabled={loading}
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm text-black outline-none transition focus:border-[#2F8F6B] focus:ring-2 focus:ring-[#2F8F6B]/20"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Tell us about your requirement..."
              rows={3}
              className="w-full resize-none rounded-lg border border-gray-200 bg-white p-3 text-sm text-black outline-none transition focus:border-[#2F8F6B] focus:ring-2 focus:ring-[#2F8F6B]/20"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
            />

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#2F8F6B] py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#267858] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Submitting..."
                : "Send Enquiry"}
            </button>

            {/* STATUS */}
            {status && (
              <p
                className={`mt-2 text-center text-sm font-medium ${
                  status.startsWith("✅")
                    ? "text-green-600"
                    : status === "Sending..."
                    ? "text-gray-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}