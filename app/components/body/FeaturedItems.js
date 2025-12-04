"use client";
import FeaturedProductCard from "../FeaturedProductCard";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function FeaturedItems({ products }) {
  const { darkMode } = useDarkMode();
  
  return (
    <section className="m-2 sm:m-4 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 w-full max-w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
        <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-blue-950"}`}>محصولات ویژه</h2>

        <a
          href="#"
          className={`inline-flex items-center hover:underline text-sm font-semibold mr-4 lg:mr-8 xl:mr-12 ${darkMode ? "text-[#8EAFF0]" : "text-blue-950"}`}
        >
          مشاهده بیشتر
          <span className="mr-1 ">🢐</span>
        </a>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 xl:flex-nowrap xl:justify-between">
        {products.map((product) => (
          <div
            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)] lg:w-1/4 xl:flex-1 xl:max-w-[calc(25%-12px)] mb-4 sm:mb-0 xl:mb-0"
            key={product.productLink}
          >
            <FeaturedProductCard
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
