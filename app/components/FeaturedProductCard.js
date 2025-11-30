import PropTypes from "prop-types";

export default function FeaturedProductCard({
  rating,
  reviewCount,
  productName,
  price,
  shippingPrice,
  imageUrl,
  productLink,
}) {
  return (
    <div className="bg-gray-100 p-4 m-2 rounded-lg   transition-all w-90">
      <div className="flex items-center space-x-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-${index < rating ? "yellow-400" : "gray-300"}`}
          >
            🥚
          </span>
        ))}
        <span className="text-gray-500">({reviewCount})</span>
      </div>

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

      <p className="text-xl font-bold text-gray-800 mb-1">{price} Dh</p>

      <p className="text-sm text-gray-500 mb-4">Shipping: {shippingPrice} Dh</p>

      <img
        src={imageUrl}
        alt={productName}
        className="w-full h-40 object-cover rounded-lg"
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
