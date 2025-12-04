import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
     <button
          onClick={toggleDarkMode}
          className={`flex items-center justify-center w-12 h-6 rounded-full relative overflow-hidden ${
            darkMode ? "bg-orange-500" : "bg-gray-300"
          }`}
          title={darkMode ? "تغییر به حالت روشن" : "تغییر به حالت تیره"} 
        >
          <div
            className={`absolute w-5 h-5 rounded-full bg-white transition-all duration-300 ${
              darkMode ? "left-0.5" : "right-0.5"
            }`}
          ></div>

          <div
            className={`w-4 h-4 flex items-center justify-center absolute transition-all duration-300 ${
              darkMode ? "right-1" : "left-1"
            }`}
          >
            {darkMode ? (
              <FaSun className="text-yellow-300" />
            ) : (
              <FaMoon className="text-black" />
            )}
          </div>
        </button>
  );
}
