import { FaMoon, FaSun } from "react-icons/fa"; 

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
     <button
          onClick={toggleDarkMode}
          className={`flex items-center justify-center w-12 h-6 rounded-full relative ${
            darkMode ? "bg-orange-500" : "bg-gray-300"
          }`}
          title={darkMode ? "تغییر به حالت روشن" : "تغییر به حالت تیره"} 
        >
          <div
            className={`absolute w-6 h-6 rounded-full bg-white transition-all duration-300 ${
              darkMode ? "left-7" : "right-7"
            }`}
          ></div>

          <div
            className={`w-4 h-4 flex items-center justify-center absolute ${
              darkMode ? "right-7" : "left-7"
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
