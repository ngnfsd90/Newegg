import SideBarMenu from "./SideBarMenu";
import Banner from "./Banner";
import Categories from "./Categories";
import TwinBanners from "./TwinBanners";
import BestDeals from "./BestDeals";
import FeaturedItems from "./FeaturedItems";
import Products from "./Products";

export default function MainContent() {
  const bestDealsProducts = [
    {
      rating: 4,
      reviewCount: 231,
      productName: "Thermaltake Toughpower GF2 ARGB 650W",
      price: "238.34",
      shippingPrice: "266.39",
      imageUrl: "/pictures/power.png",
      productLink: "/product/thermaltake-toughpower-gf2-650w",
    },
    {
      rating: 5,
      reviewCount: 120,
      productName: "Samsung Galaxy S22",
      price: "15,000",
      shippingPrice: "150",
      imageUrl: "/pictures/samsung.png",
      productLink: "/product/samsung-galaxy-s22",
    },
    {
      rating: 3,
      reviewCount: 50,
      productName: "Sony WH-1000XM4",
      price: "5,500",
      shippingPrice: "50",
      imageUrl: "/pictures/sony.png",
      productLink: "/product/sony-wh1000xm4",
    },
    {
      rating: 4,
      reviewCount: 200,
      productName: "Laptop Asus ROG",
      price: "40,000",
      shippingPrice: "100",
      imageUrl: "/pictures/asus.png",
      productLink: "/product/laptop-asus-rog",
    },
    {
      rating: 5,
      reviewCount: 500,
      productName: "Apple iPhone 13",
      price: "30,000",
      shippingPrice: "120",
      imageUrl: "/pictures/apple.png",
      productLink: "/product/iphone-13",
    },
  ];

  const featuredProducts = [
    {
      rating: 4,
      reviewCount: 231,
      productName: "Thermaltake Toughpower GF2 ARGB 650W",
      price: "238.34",
      shippingPrice: "266.39",
      imageUrl: "/pictures/power.png",
      productLink: "/product/thermaltake-toughpower-gf2-650w",
    },
    {
      rating: 5,
      reviewCount: 120,
      productName: "Samsung Galaxy S22",
      price: "15,000",
      shippingPrice: "150",
      imageUrl: "/pictures/samsung.png",
      productLink: "/product/samsung-galaxy-s22",
    },
    {
      rating: 3,
      reviewCount: 50,
      productName: "Sony WH-1000XM4",
      price: "5,500",
      shippingPrice: "50",
      imageUrl: "/pictures/sony.png",
      productLink: "/product/sony-wh1000xm4",
    },
    {
      rating: 4,
      reviewCount: 200,
      productName: "Laptop Asus ROG",
      price: "40,000",
      shippingPrice: "100",
      imageUrl: "/pictures/asus.png",
      productLink: "/product/laptop-asus-rog",
    },
  ];

  const products = [
    {
      rating: 4,
      reviewCount: 231,
      productName: "Thermaltake Toughpower GF2 ARGB 650W",
      price: "238.34",
      shippingPrice: "266.39",
      imageUrl: "/pictures/power.png",
      productLink: "/product/thermaltake-toughpower-gf2-650w",
    },
    {
      rating: 5,
      reviewCount: 120,
      productName: "Samsung Galaxy S22",
      price: "15,000",
      shippingPrice: "150",
      imageUrl: "/pictures/samsung.png",
      productLink: "/product/samsung-galaxy-s22",
    },
    {
      rating: 3,
      reviewCount: 50,
      productName: "Sony WH-1000XM4",
      price: "5,500",
      shippingPrice: "50",
      imageUrl: "/pictures/sony.png",
      productLink: "/product/sony-wh1000xm4",
    },
    {
      rating: 4,
      reviewCount: 200,
      productName: "Laptop Asus ROG",
      price: "40,000",
      shippingPrice: "100",
      imageUrl: "/pictures/asus.png",
      productLink: "/product/laptop-asus-rog",
    },
    {
      rating: 4,
      reviewCount: 231,
      productName: "Thermaltake Toughpower GF2 ARGB 650W",
      price: "238.34",
      shippingPrice: "266.39",
      imageUrl: "/pictures/power.png",
      productLink: "/product/thermaltake1-toughpower-gf2-650w",
    },
    {
      rating: 5,
      reviewCount: 120,
      productName: "Samsung Galaxy S22",
      price: "15,000",
      shippingPrice: "150",
      imageUrl: "/pictures/samsung.png",
      productLink: "/product/samsung1-galaxy-s22",
    },
    {
      rating: 3,
      reviewCount: 50,
      productName: "Sony WH-1000XM4",
      price: "5,500",
      shippingPrice: "50",
      imageUrl: "/pictures/sony.png",
      productLink: "/product/sony1-wh1000xm4",
    },
    {
      rating: 4,
      reviewCount: 200,
      productName: "Laptop Asus ROG",
      price: "40,000",
      shippingPrice: "100",
      imageUrl: "/pictures/asus.png",
      productLink: "/product/laptop-asus1-rog",
    },
  ];

  return (
    <main>
      <section
        className="p-16"
        style={{
          background:
            "linear-gradient(to bottom, rgba(148, 188, 231, 0.895), rgba(255, 255, 255, 0))",
        }}
      >
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div className="col-span-1 row-span-4">
            <SideBarMenu />
          </div>
          <div className="col-span-2 row-span-1">
            <Banner />
          </div>

          <div className="col-span-1 row-span-1">
            <Categories
              title="دسته بندی 1"
              imageUrl="/pictures/category.png"
              linkText="الان بخرید"
              linkUrl="/shop/category1"
            />
          </div>

          <div className="col-span-1 row-span-1">
            <Categories
              title="دسته بندی 2"
              imageUrl="/pictures/category.png"
              linkText="الان بخرید"
              linkUrl="/shop/category2"
            />
          </div>

          <div className="col-span-1 row-span-1">
            <Categories
              title="دسته بندی 3"
              imageUrl="/pictures/category.png"
              linkText="الان بخرید"
              linkUrl="/shop/category3"
            />
          </div>

          <div className="col-span-1 row-span-1">
            <Categories
              title="دسته بندی 4"
              imageUrl="/pictures/category.png"
              linkText="الان بخرید"
              linkUrl="/shop/category4"
            />
          </div>

          <div className="col-span-4 row-span-2">
            <TwinBanners />
          </div>
        </div>
      </section>

      <section className=" p-8 ">
        <BestDeals products={bestDealsProducts} />
      </section>

      <section className=" p-8 ">
        <FeaturedItems products={featuredProducts} />
      </section>

      <section className=" p-8 ">
        <Products products={products} />
      </section>
    </main>
  );
}
