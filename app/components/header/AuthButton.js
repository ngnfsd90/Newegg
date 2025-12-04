import { FaUser } from "react-icons/fa"; 
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function AuthButton() {
  const { darkMode } = useDarkMode();
  return (
    <span className={`cursor-pointer flex items-center space-x-2 rounded-full transition-all ${darkMode ? "hover:bg-[#3a3a3a] hover:px-3 hover:py-1.5" : "hover:bg-[#0040a0] hover:px-3 hover:py-1.5"}`}>
      <FaUser className="text-xl flex-shrink-0" /> 
      <span className="hidden 2xl:inline">ورود / ثبت‌نام</span>
    </span>
  );
}
