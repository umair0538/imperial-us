import { Product } from "@/data/products";
import { siteConfig } from "@/config/site";

export function getEmailOrderLink(product: Product) {
  const subject = `Enquiry about ${product.name}`;

  const body = `Hello,

I'm interested in purchasing the ${product.name} from the ${product.collection} Collection.

Product Price: PKR ${product.price.toLocaleString()}

Could you please share:

• Availability
• Delivery Time
• Payment Options

Thank you.`;

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}