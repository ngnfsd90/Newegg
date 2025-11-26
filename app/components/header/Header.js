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

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("انتخاب کشور");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
 <>
    <header
      className={`bg-[#001d71] text-white shadow-lg ${darkMode ? "bg-[#18191a]" : ""} sticky top-0 z-50`}
    >
      <div className="w-full px-4 py-2 flex justify-between items-center space-x-3">
        <Logo />
        <LocationSelector setSelectedCountry={setSelectedCountry} />
        <SearchBar darkMode={darkMode} />
        <Notification />
        <LocationPicker />
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <AuthButton />

        <ReturnsOrders />

        <ShoppingCart />
      </div>
    </header>
     {/* <ScrollableNav /> */}
    </>
  );
}
