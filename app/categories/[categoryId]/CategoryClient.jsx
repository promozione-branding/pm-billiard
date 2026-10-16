import { categories } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { redirect } from "next/navigation";

export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    redirect('/');
  }

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <div className="relative h-[45vh] md:h-[90vh] flex items-center justify-center text-center bg-cover overflow-hidden"
        style={{ backgroundImage: "url('/pm Billards Product/luxuryTable_.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-6 max-w-5xl">
          <div className="mx-auto mb-4 h-[2px] w-20 bg-[#EDBC41] rounded-full" />

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white">
            {category.name}
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Crafting championship-grade snooker, pool, and billiard tables that
            blend precision engineering, timeless design, and elite performance.
          </p>
        </div>
      </div>


      {/* 🔹 PRODUCT GRID (LIKE IMAGE SHARED) */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {category.products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                {/* Card */}
                <div className=" transition overflow-hidden">

                  {/* Image */}
                  <div className="relative h-[320px] w-full overflow-hidden">
                    <Image
                      src={product.image?.[0]?.src || "/placeholder.webp"}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4 bg-[#2F8F6B] group-hover:bg-yellow-500 p-2 rounded-full shadow">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Button Title (like screenshot) */}
                  <div className="py-6 flex justify-center">
                    <span className="px-6 py-2 e bg-[#2F8F6B]  text-white rounded-full font-semibold text-sm group-hover:bg-yellow-500 group-hover:text-white transition">
                      {product.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
