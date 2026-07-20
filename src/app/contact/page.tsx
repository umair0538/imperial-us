import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/contact/FAQ";
import TrustSection from "@/components/contact/TrustSection";

export const metadata = {
  title: "Contact | Imperial US",
  description:
    "Get in touch with Imperial US. Whether you have questions about our collections, orders, or warranty, we're here to help.",
};

export default function ContactPage() {
  return (
    <main>

      <ContactHero />

      <ContactForm />

      <FAQ />

      <TrustSection />

    </main>
  );
}