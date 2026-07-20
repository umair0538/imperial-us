import ProductHero from "@/components/product/ProductHero";
import ProductSpecs from "@/components/product/ProductSpecs";
import RelatedProducts from "@/components/product/RelatedProducts";
import { products } from "@/data/products";
import { getWhatsAppOrderLink } from "@/utils/whatsapp";
import { getEmailOrderLink } from "@/utils/email";
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  const whatsappLink = getWhatsAppOrderLink(product);
  const emailLink = getEmailOrderLink(product);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <ProductHero 
        product={product} 
        whatsappLink={whatsappLink}
        emailLink={emailLink}
      />
      <ProductSpecs product={product} />
      <RelatedProducts product={product} />
    </main>
  );
}