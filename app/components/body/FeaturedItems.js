"use client";
import FeaturedProductCard from "../FeaturedProductCard";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function FeaturedItems({ products }) {
  const { darkMode } = useDarkMode();
  
  return (
    <section className="m-2 sm:m-4 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 pl-6 sm:pl-8 md:pl-10 lg:pl-14 xl:pl-20 w-full max-w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
        <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-blue-950"}`}>محصولات ویژه</h2>

        <a
          href="#"
          className={`inline-flex items-center hover:underline text-sm font-semibold mr-6 sm:mr-8 md:mr-10 lg:mr-12 xl:mr-16 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          مشاهده بیشتر
          <span className="mr-1 ">🢐</span>
        </a>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-5 md:gap-6 xl:flex-nowrap xl:justify-between">
        {products.map((product) => (
          <div
            className="w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-13.33px)] lg:w-1/4 xl:flex-1 xl:max-w-[calc(25%-15px)] mb-4 sm:mb-0 xl:mb-0"
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
