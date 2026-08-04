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
        name="Belts"
        subtitle="Premium Belts"
      />

      <CollectionProducts
        collection={collection}
        products={collectionProducts}
      />

      <CollectionFeatures
        features={[
          {
            icon: <FaClock />,
            title: "Premium Cowhide Leather",
            description: "Crafted from durable cowhide leather for lasting comfort and timeless style.",
          },
          {
            icon: <FaGem />,
            title: "Auto-Lock Buckle",
            description: "Micro-adjustable buckle system for a secure, precise, and comfortable fit.",
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
