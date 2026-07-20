import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import RoyalCollection from "@/components/home/RoyalCollection";
import ClassicCollection from "@/components/home/ClassicCollection";
import Philosophy from "@/components/home/Philosophy";
import WhyImperial from "@/components/home/WhyImperial";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <RoyalCollection />
      <ClassicCollection />
      <Philosophy />
      <WhyImperial />
      <Newsletter/>
    </>
  );
}