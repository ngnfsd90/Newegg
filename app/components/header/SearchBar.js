"use client";

import { useDarkMode } from "../../contexts/DarkModeContext";

export default function SearchBar() {
  const { darkMode } = useDarkMode();
  return (
    <div 
      className={`flex items-center space-x-1 rounded-full px-2 py-2 w-full max-w-[720px] h-8 sm:h-9 md:h-10 2xl:h-10 ${
        darkMode ? "bg-[#363636]" : "bg-white"
      }`}
    >
      <input
        type="text"
        className={`w-full bg-transparent border-none focus:outline-none ${
          darkMode ? "bg-[#363636] text-white" : "bg-white text-black"
        }`}
      />
      <button className={`${darkMode ? "bg-[#8EAFF0]" : "bg-[#79b6ec]"} text-white px-2 sm:px-3 md:px-4 lg:px-5 py-0.5 sm:py-1 rounded-full ${darkMode ? "hover:bg-[#7a9fdf]" : "hover:bg-[#005bb5]"}`}>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl">🔍</span>
      </button>
    </div>
  );
}
