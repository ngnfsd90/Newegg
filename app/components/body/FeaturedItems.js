"use client";
import FeaturedProductCard from "../FeaturedProductCard";

export default function FeaturedItems({ products }) {
  return (
    <section className="m-4 p-8 ">
      <div className=" flex justify-between">
        <h2 className="text-2xl font-bold mb-4 text-blue-950">محصولات ویژه</h2>

        <a
          href="#"
          className="inline-flex items-center text-blue-950 hover:underline mt-4 text-sm font-semibold "
        >
          مشاهده بیشتر
          <span className="mr-1 ">🢐</span>
        </a>
      </div>
      <div className="flex flex-wrap justify">
        {products.map((product) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
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
