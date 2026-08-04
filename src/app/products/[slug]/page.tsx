import ProductHero from "@/components/product/ProductHero";
import ProductSpecs from "@/components/product/ProductSpecs";
import RelatedProducts from "@/components/product/RelatedProducts";
import { CatalogueService } from "@/lib/services/catalogue.service";
import { getWhatsAppOrderLink } from "@/lib/utils/whatsapp";
import { getEmailOrderLink } from "@/lib/utils/email";
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await CatalogueService.getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappLink = getWhatsAppOrderLink(product);
  const emailLink = getEmailOrderLink(product);
  const relatedProducts = await CatalogueService.getRelatedProducts(product);

  return (
    <main>
      <ProductHero 
        product={product} 
        whatsappLink={whatsappLink}
        emailLink={emailLink}
      />
      <ProductSpecs product={product} />
      <RelatedProducts product={product} relatedProducts={relatedProducts} />
    </main>
  );
}
