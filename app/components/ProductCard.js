import PropTypes from "prop-types";

export default function ProductCard({
  rating,
  reviewCount,
  productName,
  price,
  shippingPrice,
  imageUrl,
  productLink,
}) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg   transition-all w-60">
      <img
        src={imageUrl}
        alt={productName}
        className="w-60 h-52 object-cover rounded-lg"
      />

      <div className="flex items-center space-x-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-yellow-400 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            {index < rating ? "🥚" : "🍳"}
          </span>
        ))}
        <span className="text-gray-500">({reviewCount})</span>
      </div>

      {/* نام محصول */}
      <a
        href={productLink}
        className="text-blue-600 hover:underline text-xl font-semibold mb-2 block"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {productName}
      </a>

      <p className="text-xl font-bold text-gray-800 mb-1">{price} ریال</p>

      <p className="text-sm text-gray-500 mb-4">
        هزینه حمل و نقل: {shippingPrice} ریال
      </p>
    </div>
  );
}

ProductCard.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  shippingPrice: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productLink: PropTypes.string.isRequired,
};
