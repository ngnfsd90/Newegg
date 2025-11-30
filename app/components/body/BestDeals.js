"use client";
import BestDealsProductCard from "../BestDealsProductCard";

export default function BestDeals({ products }) {
  return (
    <section className="p-8 m-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-950">
        بهترین معاملات امروز
      </h2>

      <div className="flex flex-wrap justify">
        {products.slice(0, 5).map((product) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 "
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
          className="py-2 px-16 bg-blue-600 text-white rounded-full text-center hover:bg-blue-700"
        >
          مشاهده همه
        </button>
      </div>
    </section>
  );
}
