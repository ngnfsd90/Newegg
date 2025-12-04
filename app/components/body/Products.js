"use client";
import ProductCard from "../ProductCard";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function Products({ products }) {
  const { darkMode } = useDarkMode();
  
  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 m-2 sm:m-4 w-full max-w-full">
      <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-blue-950"}`}>
        دیگر محصولات قابل توجه
      </h2>

      <div className="flex flex-wrap justify-center sm:justify-start gap-4">
        {products.map((product) => (
          <div
            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)] lg:w-1/4 xl:w-[calc(16.666%-13.33px)] mb-4 sm:mb-0 xl:mb-0"
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
