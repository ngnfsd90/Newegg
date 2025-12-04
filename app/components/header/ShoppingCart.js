import { FiShoppingCart } from "react-icons/fi"; 
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function ShoppingCart() {
  const { darkMode } = useDarkMode();
  return (
    <button className={`cursor-pointer rounded-full transition-all flex-shrink-0 ${darkMode ? "hover:bg-[#3a3a3a] hover:px-3 hover:py-1.5" : "hover:bg-[#0040a0] hover:px-3 hover:py-1.5"}`} title="سبد خرید">
      <FiShoppingCart className="text-xl sm:text-2xl" />
    </button>
  );
}
