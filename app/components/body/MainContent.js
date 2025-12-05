"use client";

import SideBarMenu from "./SideBarMenu";
import Banner from "./Banner";
import Categories from "./Categories";
import TwinBanners from "./TwinBanners";
import BannerSlider from "./BannerSlider";
import BestDeals from "./BestDeals";
import FeaturedItems from "./FeaturedItems";
import Products from "./Products";
import ShoppingTools from "./ShoppingTools";
import NewsletterSignup from "./NewsletterSignup";
import DownloadApp from "./DownloadApp";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function MainContent() {
  const { darkMode } = useDarkMode();
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

  const tools = [
    {
      title: "PC Builder",
      imageUrl: "/pictures/pc-builder.png",
      linkUrl: "/pc-builder",
    },
    {
      title: "Gaming PC Finder",
      imageUrl: "/pictures/gaming-pc.png",
      linkUrl: "/gaming-pc-finder",
    },
    {
      title: "Laptop Finder",
      imageUrl: "/pictures/laptop-finder.png",
      linkUrl: "/laptop-finder",
    },
    {
      title: "Memory Finder",
      imageUrl: "/pictures/memory-finder.png",
      linkUrl: "/memory-finder",
    },
  ];

  return (
    <main className="w-full max-w-full overflow-x-hidden pt-20 sm:pt-24">
      <section
        className={`p-4 sm:p-8 md:p-12 lg:p-16 ${darkMode ? "bg-[#121212]" : ""}`}
        style={darkMode ? {} : {
          background:
            "linear-gradient(to bottom, rgba(148, 188, 231, 0.895), rgba(255, 255, 255, 0))",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-full">
          
          <div className="md:col-span-1 md:row-span-3 lg:col-span-1 lg:row-span-4 mt-16 sm:mt-20 md:mt-0">
            <div className="sm:max-w-[280px] sm:mx-auto md:max-w-[200px] md:mx-0 lg:max-w-none">
              <SideBarMenu />
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-1">
            <div className="block lg:hidden">
              <BannerSlider />
            </div>
            <div className="hidden lg:block">
              <Banner />
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-1 lg:row-span-1">
            <Categories
              title="دسته بندی 1"
              imageUrl="/pictures/category.png"
              linkText="الان بخرید"
              linkUrl="/shop/category1"
            />
          </div>

          <div className="md:col-span-1 lg:col-span-1 lg:row-span-1">
            <Categories
              title="دسته بندی 2"
              imageUrl="/pictures/category.png"
              linkText="الان بخرید"
              linkUrl="/shop/category2"
            />
          </div>

          <div className="md:col-span-1 md:col-start-1 lg:col-start-auto lg:col-span-1 lg:row-span-1">
            <Categories
              title="دسته بندی 3"
              imageUrl="/pictures/category.png"
              linkText="الان بخرید"
              linkUrl="/shop/category3"
            />
          </div>

          <div className="md:col-span-1 md:col-start-2 lg:col-start-auto lg:col-span-1 lg:row-span-1">
            <Categories
              title="دسته بندی 4"
              imageUrl="/pictures/category.png"
              linkText="الان بخرید"
              linkUrl="/shop/category4"
            />
          </div>

          <div className="md:col-span-2 lg:col-span-4 lg:row-span-2">
            <div className="hidden lg:block">
              <TwinBanners />
            </div>
          </div>
        </div>
      </section>

      <section className="p-0">
        <BestDeals products={bestDealsProducts} />
      </section>

      <section className="p-0">
        <FeaturedItems products={featuredProducts} />
      </section>

      <section className="p-0">
        <Products products={products} />
      </section>

      <section className="p-0 w-full max-w-full"> 
        <ShoppingTools tools={tools}  />
      </section>

      <section className={`${darkMode ? "bg-[#2a2a2a]" : "bg-gray-50"} py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-4 sm:gap-3 justify-between items-stretch`}> 
        <DownloadApp  />
        <NewsletterSignup  />
      </section>
    </main>
  );
}
