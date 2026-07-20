import { notFound } from "next/navigation";

import { collections } from "@/data/collections";
import { products } from "@/data/products";

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

  const collection = collections.find(
    (c) => c.slug === slug
  );

  if (!collection) notFound();

  const collectionProducts = products.filter(
    (p) => p.collection === collection.slug
  );

  return (
    <main>
      <CollectionHero collection={collection} />

      <CollectionProducts
        collection={collection}
        products={collectionProducts}
      />

      <CollectionFeatures
        features={[
          {
            icon: <FaClock />,
            title: "Japanese Quartz Movement",
            description: "Reliable precision engineered for everyday accuracy.",
          },
          {
            icon: <FaGem />,
            title: "Premium Materials",
            description: "Crafted from premium stainless steel with exceptional finishing.",
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