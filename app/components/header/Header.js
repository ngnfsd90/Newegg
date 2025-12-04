"use client";

import { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import LocationSelector from "./LocationSelector";
import LocationPicker from "./LocationPicker";
import AuthButton from "./AuthButton";
import DarkModeToggle from "./DarkModeToggle";
import ReturnsOrders from "./ReturnsOrders";
import ShoppingCart from "./ShoppingCart";
import Notification from "./Notification";
import ScrollableNav from "../ScrollableNav";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [selectedCountry, setSelectedCountry] = useState("انتخاب کشور");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
 <>
    <header
      className={`${darkMode ? "bg-[#121212]" : "bg-[#001d71]"} text-white shadow-lg fixed top-0 left-0 right-0 z-50 w-full`}
    >
      <div className="w-full max-w-full px-0.5 sm:px-2 md:px-4 lg:px-8 xl:px-16 py-2 flex flex-nowrap justify-between items-center gap-0.5 sm:gap-2 md:gap-3 lg:gap-4 overflow-x-hidden">
        <Logo />
        <div className="flex-shrink-0">
          <LocationSelector setSelectedCountry={setSelectedCountry} />
        </div>
        <div className="hidden min-[500px]:flex flex-1 min-w-[60px] sm:min-w-[80px] md:min-w-[200px] lg:min-w-[300px] xl:min-w-[500px] 2xl:min-w-[720px] mx-1 sm:mx-1 md:mx-2 lg:mx-4">
          <SearchBar />
        </div>
        <div className="flex items-center justify-between min-[350px]:justify-end min-[500px]:justify-end w-full min-[350px]:w-auto min-[500px]:w-auto gap-1 min-[350px]:gap-2 min-[500px]:gap-1 md:gap-2 lg:gap-4 xl:gap-6 flex-shrink-0 pr-0.5 sm:pr-0">
          <button
            onClick={toggleSearch}
            className={`min-[500px]:hidden cursor-pointer rounded-full transition-all ${darkMode ? "hover:bg-[#3a3a3a] hover:px-3 hover:py-1.5" : "hover:bg-[#0040a0] hover:px-3 hover:py-1.5"}`}
            title="جستجو"
          >
            <span className="text-xl">🔍</span>
          </button>
          <Notification />
          <div>
            <LocationPicker />
          </div>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <AuthButton />
          <div className="hidden 2xl:block">
            <ReturnsOrders />
          </div>
          <ShoppingCart />
        </div>
      </div>
      {isSearchOpen && (
        <div className="w-full px-1 sm:px-2 md:px-4 lg:px-8 xl:px-16 py-2 border-t border-white/20 min-[500px]:hidden">
          <SearchBar />
        </div>
      )}
    </header>
     <ScrollableNav />
    </>
  );
}
