"use client";

import PropTypes from "prop-types";
import EggIcon from "./EggIcon";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function FeaturedProductCard({
  rating,
  reviewCount,
  productName,
  price,
  shippingPrice,
  imageUrl,
  productLink,
}) {
  const { darkMode } = useDarkMode();
  
  return (
    <div className={`${darkMode ? "bg-[#363636]" : "bg-gray-100"} p-2 sm:p-4 m-1 sm:m-2 rounded-lg transition-all w-full max-w-[288px] ${darkMode ? "text-white" : ""}`}>
      <div className="flex items-center gap-0 mb-2">
        {[...Array(5)].map((_, index) => (
          <EggIcon
            key={index}
            filled={index < rating}
            className={`w-4 h-4 ${index > 0 ? '-ml-1' : ''}`}
          />
        ))}
        <span className={darkMode ? "text-gray-400" : "text-gray-500"}>({reviewCount})</span>
      </div>

      <a
        href={productLink}
        className={`${darkMode ? "text-[#8EAFF0]" : "text-blue-600"} hover:underline text-xl font-semibold mb-2 block`}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {productName}
      </a>

      <p className={`text-xl font-bold mb-1 ${darkMode ? "text-white" : "text-gray-800"}`}>{price} Dh</p>

      <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Shipping: {shippingPrice} Dh</p>

      <img
        src={imageUrl}
        alt={productName}
        className="w-full h-32 sm:h-40 object-cover rounded-lg"
      />
    </div>
  );
}

FeaturedProductCard.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  shippingPrice: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productLink: PropTypes.string.isRequired,
};
