import SupportHero from "@/components/support/SupportHero/SupportHero";
import SupportSection from "@/components/support/SupportSection/SupportSection";
import CTASection from "@/components/support/CTASection/CTASection";

export default function WarrantyPage() {
  return (
    <>
      <SupportHero
        title="Warranty"
        subtitle="Confidence in Every Purchase."
      />

      <SupportSection title="1-Year Limited Warranty">
        <p>
          Every Imperial US watch is backed by a
          1-Year Limited Warranty covering manufacturing
          defects in materials and workmanship under
          normal use.
        </p>
      </SupportSection>

      <SupportSection title="What's Covered">
        <ul>
          <li>Manufacturing defects</li>
          <li>Watch movement defects</li>
          <li>Factory assembly issues</li>
        </ul>
      </SupportSection>

      <SupportSection title="What's Not Covered">
        <ul>
          <li>Accidental damage</li>
          <li>Water damage caused by misuse</li>
          <li>Normal wear and tear</li>
          <li>Scratches on case, crystal or strap</li>
          <li>Battery replacement</li>
        </ul>
      </SupportSection>

      <SupportSection title="How to Make a Claim">
        <p>
          Contact our Customer Care team with your
          order number, a description of the issue,
          and photographs if applicable. We'll review
          your claim and provide the next steps.
        </p>
      </SupportSection>

      <CTASection />
    </>
  );
}