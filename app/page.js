import Hero from "@/components/Landingpage/Hero";
import Whychoose from "@/components/Landingpage/Whychoose";

import AboutUs from "@/components/Landingpage/About";
import Products from "@/components/Landingpage/Products";
import ProductCategorySection from "@/components/Landingpage/Categories";

import Popup from "@/components/Popup"
import TestimonialsSection from "@/components/Landingpage/Testmonial";
import Letter from "@/components/Landingpage/Letter";
import PremiumTablesSection from "@/components/Landingpage/Premium";

import Soccer from "@/components/Landingpage/Soccer";
import Clientele from "@/components/Landingpage/Clientele";
import Faq from "@/components/Landingpage/Faq";
import BestSeller from "@/components/Landingpage/Bestseller";
import Location from "@/components/Location";
import CTA2 from "@/components/Landingpage/CTA2";

export default function Home() {
  return (
    <>
      <Popup></Popup>
      <Hero></Hero>
      <ProductCategorySection></ProductCategorySection>
<BestSeller></BestSeller>
      <AboutUs></AboutUs>
          <Letter></Letter>
      <Products></Products>
      <Soccer></Soccer>
      <Clientele></Clientele>

      <Whychoose></Whychoose>
  

  
      <PremiumTablesSection></PremiumTablesSection>
<TestimonialsSection></TestimonialsSection>
      <Faq></Faq>
      <Location></Location>
      <CTA2/>
    </>
  );
}
