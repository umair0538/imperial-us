import { notFound } from "next/navigation";
import { CatalogueService } from "@/lib/services/catalogue.service";
import CollectionHero from "@/components/collections/CollectionHero";
import CollectionProducts from "@/components/collections/CollectionProducts";
import CollectionFeatures from "@/components/collections/CollectionFeatures";

import {
  FaClock,
  FaGem,
  FaShieldAlt,
  FaShippingFast,
} from "react-icons/fa";

interface Props {
  params: {
    slug: string;
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  console.log(slug);

  const collection = await CatalogueService.getCollectionBySlug(slug);

  if (!collection) notFound();

  const collectionProducts = await CatalogueService.getProductsByCollectionSlug(collection.slug);

  return (
    <main>
      <CollectionHero
        name="Sunglasses"
        subtitle="Premium Sunglasses"
      />

      <CollectionProducts
        collection={collection}
        products={collectionProducts}
      />

      <CollectionFeatures
        description="Every Imperial US pair of sunglasses is thoughtfully crafted using premium materials, refined detailing, and UV400 lenses to deliver exceptional comfort, protection, and timeless style."
        features={[
          {
            icon: <FaClock />,
            title: "UV400 Protection",
            description: "Premium lenses that block 100% of harmful UVA and UVB rays.",
          },
          {
            icon: <FaGem />,
            title: "Premium Materials",
            description: "Crafted with premium frames and refined metal detailing for lasting durability.",
          },
          {
            icon: <FaShieldAlt />,
            title: "1-Year Warranty",
            description: "Every Imperial US timepiece is backed by our official warranty.",
          },
          {
            icon: <FaShippingFast />,
            title: "Free Delivery",
            description: "Complimentary nationwide shipping across Pakistan.",
          },
        ]}
      />
    </main>
  );
}
