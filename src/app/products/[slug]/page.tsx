import ProductHero from "@/components/product/ProductHero";
import ProductSpecs from "@/components/product/ProductSpecs";
import RelatedProducts from "@/components/product/RelatedProducts";
import { CatalogueService } from "@/lib/services/catalogue.service";
import { getWhatsAppOrderLink } from "@/lib/utils/whatsapp";
import { getEmailOrderLink } from "@/lib/utils/email";
import { notFound } from 'next/navigation';
import { ReviewService } from "@/lib/services/review.service";
import ProductReviews from "@/components/product/ProductReviews"

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

  const reviewSummary = await ReviewService.getReviewSummary(product.id);
  const reviews = await ReviewService.getProductReviews(product.id);

  return (
    <main>
      <ProductHero 
        product={product} 
        whatsappLink={whatsappLink}
        emailLink={emailLink}
      />
      <ProductReviews reviewSummary={reviewSummary.data} reviews={reviews}/>
      <ProductSpecs product={product} />
      <RelatedProducts product={product} relatedProducts={relatedProducts} />
    </main>
  );
}
