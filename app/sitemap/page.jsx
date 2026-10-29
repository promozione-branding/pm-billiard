import Link from "next/link";
import { ArrowUpRight, BookOpen, MapPin, Package, PanelsTopLeft } from "lucide-react";
import { categories, serviceCity } from "@/Data";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Sitemap | PM Billiards",
  description:
    "Browse all PM Billiards pages, products, categories, blog articles, and service locations.",
};

const staticPages = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Sitemap", href: "/sitemap" },
];

function LinkList({ links }) {
  return (
    <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
      {links.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            className="group flex items-center justify-between gap-3 rounded-lg border border-[#e7ece8] bg-white px-4 py-3 text-sm text-[#303b35] transition hover:border-[#2F8F6B] hover:text-[#267858]"
          >
            <span>{label}</span>
            <ArrowUpRight
              aria-hidden="true"
              size={16}
              className="shrink-0 text-[#2F8F6B] transition group-hover:text-[#C89A2F]"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SitemapSection({ icon: Icon, title, description, links }) {
  return (
    <section className="rounded-2xl border border-[#e7ece8] bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-5 flex items-start gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#2F8F6B]/10 text-[#2F8F6B]">
          <Icon aria-hidden="true" size={22} />
        </span>
        <div>
          <h2 className="text-xl font-semibold text-[#173c2e]">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
        </div>
      </div>
      <LinkList links={links} />
    </section>
  );
}

export default async function SitemapPage() {
  const blogs = await client.fetch(
    groq`*[_type == "blog" && defined(slug.current)] | order(title asc) {
      title,
      "slug": slug.current
    }`
  );

  const categoryLinks = categories.map((category) => ({
    label: category.name,
    href: `/categories/${category.id}`,
  }));
  const productLinks = categories.flatMap((category) =>
    category.products.map((product) => ({
      label: product.name,
      href: `/products/${product.id}`,
    }))
  );
  const blogLinks = blogs.map((blog) => ({
    label: blog.title || blog.slug,
    href: `/blogs/${blog.slug}`,
  }));
  const locationLinks = serviceCity.map((city) => ({
    label: city.label,
    href: city.href,
  }));

  return (
    <main className="min-h-screen bg-[#f7f9f7] pb-16">
      <header className="bg-gradient-to-br from-[#064e3b] via-[#126b4f] to-[#2F8F6B] px-5 pb-12 pt-36 text-white sm:pb-16 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#EDBC41]">
            PM Billiards
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Sitemap
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Find the pages, billiards products, categories, articles, and service
            locations across our website.
          </p>
          <div className="mt-6 h-1 w-16 rounded-full bg-[#EDBC41]" />
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-5 px-5 pt-8 sm:pt-10">
        <SitemapSection
          icon={PanelsTopLeft}
          title="Main pages"
          description="Explore the main sections of the PM Billiards website."
          links={staticPages}
        />
        <SitemapSection
          icon={Package}
          title="Product categories"
          description="Browse all available billiards and snooker categories."
          links={categoryLinks}
        />
        <SitemapSection
          icon={Package}
          title="All products"
          description="Go directly to any product in our catalog."
          links={productLinks}
        />
        
       
      </div>
    </main>
  );
}