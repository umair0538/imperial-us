import { notFound } from "next/navigation";
import { CatalogueService } from "@/lib/services/catalogue.service";
import ProductCard from "@/components/product/ProductCard";
import { ProductCardProduct } from "@/components/product/ProductCard";
import ProductGrid from "@/components/product/ProductGrid";

interface Props {
  params: {
    category: string;
  };
}

const titles: Record<string, string> = {
  belt: "Men's Leather Belts",
  watch: "Men's Wrist Watches",
  sunglasses: "Men's Sunglasses"
}

export default async function ProductsPage({ params }: Props) {
  const { category } = await params;

  const products = await CatalogueService.getProductsByType(category);

  if (!products) notFound();

  const productList: ProductCardProduct[] = [];

  products.map((product) => (
    productList.push({
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        images: product.images
    })
  ));

  const title: string = titles[category]

  return (
    <main>
        <ProductGrid products={productList} title={title}/>
    </main>
  );
}
