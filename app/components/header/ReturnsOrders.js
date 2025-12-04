import { useDarkMode } from "../../contexts/DarkModeContext";

export default function ReturnsOrders() {
  const { darkMode } = useDarkMode();
  return (
    <span className={`cursor-pointer rounded-full transition-all ${darkMode ? "hover:bg-[#3a3a3a] hover:px-3 hover:py-1.5" : "hover:bg-[#0040a0] hover:px-3 hover:py-1.5"}`}>
      مرجوعی و سفارشات
    </span>
  );
}
