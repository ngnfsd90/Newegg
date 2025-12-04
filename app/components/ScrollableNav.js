"use client";

import { useState, useEffect } from "react";
import NavBarMenu from "./NavBarMenu";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function ScrollableNav() {
  const { darkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(60);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div 
      className={`w-full fixed left-0 right-0 ${darkMode ? "bg-[#121212]" : "bg-white"} ${isVisible ? "" : "hidden"} shadow-md z-40`}
      style={{ top: `${headerHeight}px` }}
    >
      <div className={`flex flex-row justify-between items-center p-1 sm:p-2 ${darkMode ? "text-white" : "text-black"} gap-1 sm:gap-4 overflow-x-auto`}>
        

        <div className="flex items-center flex-shrink-0">
          <div className="flex items-center space-x-1 sm:space-x-4 gap-1 sm:gap-3">
            <NavBarMenu />
            <span className="ml-0.5 sm:ml-2 text-xs sm:text-sm font-normal">❘</span>
            <a href="#" className="whitespace-nowrap text-xs sm:text-sm font-normal">ترخیص</a>
            <a href="#" className="whitespace-nowrap text-xs sm:text-sm font-normal">کمپانی ها</a>
          </div>
        </div>

        <div className="flex items-center gap-0.5 sm:gap-4 flex-shrink-0">
          <a href="#" className="whitespace-nowrap text-xs sm:text-sm font-normal">بازخورد</a>
          <span className="mx-0.5 sm:mx-5 text-xs sm:text-sm font-normal">❘</span>
          <a href="#" className="whitespace-nowrap text-xs sm:text-sm font-normal">راهنمای مشتری</a>
        </div>

        
      </div>

     
    </div>
  );
}
