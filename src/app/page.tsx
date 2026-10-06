import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import CollectionBanner from "@/components/home/CollectionBanner";
import Philosophy from "@/components/home/Philosophy";
import WhyImperial from "@/components/home/WhyImperial";
import Newsletter from "@/components/home/Newsletter";
import ProductCategories from "@/components/home/ProductCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <CollectionBanner image="/images/collections/signature/banner.png" title="Signature Collection" href="/collections/signature" />
      <FeaturedProducts />
      <CollectionBanner image="/images/collections/classic/banner.png" title="Classic Collection" href="/collections/classic" />
      <ProductCategories />
      <CollectionBanner image="/images/collections/executive/banner.png" title="Executive Collection" href="/collections/executive" />
      <WhyImperial />
      <Philosophy />
      <Newsletter/>
    </>
  );
}