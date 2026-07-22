import SupportHero from "@/components/support/SupportHero/SupportHero";
import SupportSection from "@/components/support/SupportSection/SupportSection";
import CTASection from "@/components/support/CTASection/CTASection";

export const metadata = {
  title: "Shipping | Imperial US",
  description:
    "Learn about Imperial US shipping times, processing, delivery estimates, and international shipping.",
};

export default function ShippingPage() {
  return (
    <>
      <SupportHero
        title="Shipping"
        subtitle="Delivered with Care."
      />

      <SupportSection title="Order Processing">
        <p>
          Every Imperial US order is carefully inspected and prepared before
          shipment. Orders are typically processed within <strong>1–2 business
          days</strong> after payment confirmation.
        </p>

        <p>
          Orders placed on weekends or public holidays will be processed on the
          next business day.
        </p>
      </SupportSection>

      <SupportSection title="Shipping Options">
        <p>
          We work with trusted courier partners to ensure your order arrives
          safely and securely.
        </p>

        <ul>
          <li>Standard Shipping</li>
          <li>Express Shipping (where available)</li>
          <li>International Shipping</li>
        </ul>
      </SupportSection>

      <SupportSection title="Estimated Delivery Times">
        <p>
          Delivery times may vary depending on your location and customs
          clearance.
        </p>

        <ul>
          <li>Pakistan: 2–5 business days</li>
          <li>Middle East: 4–8 business days</li>
          <li>Europe: 5–10 business days</li>
          <li>North America: 6–12 business days</li>
          <li>Rest of the World: 7–14 business days</li>
        </ul>

        <p>
          These estimates are provided as a guide and may vary during peak
          seasons or due to circumstances beyond our control.
        </p>
      </SupportSection>

      <SupportSection title="Order Tracking">
        <p>
          Once your order has been dispatched, you'll receive a shipping
          confirmation email containing your tracking number (where available),
          allowing you to monitor your shipment's progress.
        </p>
      </SupportSection>

      <SupportSection title="International Shipping">
        <p>
          Imperial US proudly ships to customers worldwide. International orders
          may be subject to customs inspections, import duties, taxes, or other
          fees imposed by your local authorities.
        </p>

        <p>
          These charges are the responsibility of the customer and are not
          included in the purchase price or shipping cost.
        </p>
      </SupportSection>

      <SupportSection title="Delivery Delays">
        <p>
          While we strive to deliver every order on time, delays may occasionally
          occur due to weather conditions, customs processing, courier issues,
          or other unforeseen circumstances.
        </p>

        <p>
          If your order has not arrived within the estimated delivery timeframe,
          please contact our Customer Care team and we'll be happy to assist.
        </p>
      </SupportSection>

      <CTASection />
    </>
  );
}