import SupportHero from "@/components/support/SupportHero/SupportHero";
import SupportSection from "@/components/support/SupportSection/SupportSection";
import CTASection from "@/components/support/CTASection/CTASection";

export const metadata = {
  title: "Returns & Exchanges | Imperial US",
  description:
    "Learn about the Imperial US returns, exchanges, and refund policy.",
};

export default function ReturnsPage() {
  return (
    <>
      <SupportHero
        title="Returns & Exchanges"
        subtitle="Shop with Confidence."
      />

      <SupportSection title="Our Return Policy">
        <p>
          We want you to be completely satisfied with your purchase. If your
          order doesn't meet your expectations, you may request a return within
          <strong> 14 days </strong>
          of receiving your order, provided the item meets our return
          requirements.
        </p>
      </SupportSection>

      <SupportSection title="Return Eligibility">
        <p>
          To qualify for a return, your item must:
        </p>

        <ul>
          <li>Be unused and in its original condition.</li>
          <li>Include the original watch box, packaging, and accessories.</li>
          <li>Include the warranty card and any complimentary items.</li>
          <li>Be returned within 14 days of delivery.</li>
          <li>Be accompanied by proof of purchase.</li>
        </ul>
      </SupportSection>

      <SupportSection title="Items That Cannot Be Returned">
        <ul>
          <li>Products showing signs of wear or misuse.</li>
          <li>Items damaged after delivery.</li>
          <li>Products with missing packaging or accessories.</li>
          <li>Customized or personalized products.</li>
          <li>Gift cards or promotional items.</li>
        </ul>
      </SupportSection>

      <SupportSection title="Exchanges">
        <p>
          If you'd like a different color or model, we'll gladly assist with an
          exchange, subject to product availability.
        </p>

        <p>
          Exchanges must meet the same eligibility requirements as returns.
        </p>
      </SupportSection>

      <SupportSection title="Refund Process">
        <p>
          Once we receive and inspect your returned item, we'll notify you of
          the outcome.
        </p>

        <p>
          If your return is approved, your refund will be processed using the
          original payment method. Depending on your payment provider, refunds
          may take
          <strong> 5–10 business days </strong>
          to appear in your account.
        </p>
      </SupportSection>

      <SupportSection title="How to Start a Return">
        <p>
          To initiate a return or exchange, please contact our Customer Care
          team with:
        </p>

        <ul>
          <li>Your order number.</li>
          <li>Your full name.</li>
          <li>The reason for the return or exchange.</li>
          <li>Photos of the product if applicable.</li>
        </ul>

        <p>
          Our team will guide you through the next steps and provide return
          instructions.
        </p>
      </SupportSection>

      <CTASection />
    </>
  );
}