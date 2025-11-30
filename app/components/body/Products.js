"use client";
import ProductCard from "../ProductCard";

export default function Products({ products }) {
  return (
    <section className="p-8 m-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-950">
        دیگر محصولات قابل توجه
      </h2>

      <div className="flex flex-wrap -m-1">
        {products.map((product) => (
          <div
            className="sm:w-1/2 md:w-1/3 lg:w-1/6 flex p-1"
            key={product.productLink}
          >
            <ProductCard
              rating={product.rating}
              reviewCount={product.reviewCount}
              productName={product.productName}
              price={product.price}
              shippingPrice={product.shippingPrice}
              imageUrl={product.imageUrl}
              productLink={product.productLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
