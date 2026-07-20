import { Product } from "@/data/products";
import { siteConfig } from "@/config/site";

const WHATSAPP_NUMBER = "+923324162936";

export function getWhatsAppOrderLink(product: Product) {
  const message = `Hello,

I'm interested in purchasing the ${product.name} from the ${product.collection} Collection.

Product Price: PKR ${product.price.toLocaleString()}

Could you please share:

• Availability
• Delivery Time
• Payment Options

Thank you.`;

  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}