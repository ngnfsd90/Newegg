"use client";
import BestDealsProductCard from "../BestDealsProductCard";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function BestDeals({ products }) {
  const { darkMode } = useDarkMode();
  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 m-2 sm:m-4 w-full max-w-full">
      <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-blue-950"}`}>
        بهترین معاملات امروز
      </h2>

      <div className="flex flex-wrap justify-center sm:justify-start gap-4 xl:flex-nowrap xl:justify-between">
        {products.slice(0, 5).map((product) => (
          <div
            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)] lg:w-1/4 xl:flex-1 xl:max-w-[calc(20%-16px)] mb-4 sm:mb-0 xl:mb-0"
            key={product.productLink}
          >
            <BestDealsProductCard
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

      <div className="mt-6 flex justify-center">
        <button
          onClick={() =>
            alert("برای مشاهده همه محصولات باید به صفحه دیگری بروید.")
          }
          className={`py-2 px-8 sm:px-16 ${darkMode ? "bg-[#8EAFF0]" : "bg-blue-600"} text-white rounded-full text-center transition-transform duration-200 ${darkMode ? "hover:bg-[#7a9fdf]" : "hover:bg-blue-700"} hover:scale-105`}
        >
          مشاهده همه
        </button>
      </div>
    </section>
  );
}
