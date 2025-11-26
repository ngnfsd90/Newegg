import { FiShoppingCart } from "react-icons/fi"; 

export default function ShoppingCart() {
  return (
    <button className="cursor-pointer hover:text-gray-300" title="سبد خرید">
      <FiShoppingCart className="text-2xl" />
    </button>
  );
}
