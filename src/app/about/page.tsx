import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import Philosophy from "@/components/about/Philosophy";
import Standards from "@/components/about/Standards";
import Craftsmanship from "@/components/about/Craftsmanship";
import ClosingCTA from "@/components/about/ClosingCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <Philosophy />
      <Standards />
      <Craftsmanship />
      <ClosingCTA />
    </main>
  );
}