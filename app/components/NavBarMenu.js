"use client";

import { useState, useEffect, useRef } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function NavBarMenu() {
  const { darkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const scrollableNav = buttonRef.current.closest('[class*="fixed"]');
      const scrollableNavRect = scrollableNav ? scrollableNav.getBoundingClientRect() : null;
      
      setMenuPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right
      });
    }
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      title: "دیگر بخش‌ها",
      items: [
        "Newegg Insider",
        "شبکه‌سازی",
        "راهکارهای اداری",
       
      ]
    },
    {
      title: "تمام محصولات",
      items: [
        "قطعات و ذخیره‌سازی",
        "سیستم‌های کامپیوتری",
        "لوازم جانبی کامپیوتر",
        "سرور و قطعات",
        "الکترونیک",
        "بازی و واقعیت مجازی",
        "نرم‌افزار و خدمات"
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && buttonRef.current && 
          !menuRef.current.contains(event.target) && 
          !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const updateMenuPosition = () => {
      if (isOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setMenuPosition({
          top: rect.bottom + 8,
          right: window.innerWidth - rect.right
        });
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("resize", updateMenuPosition);
      window.addEventListener("scroll", updateMenuPosition);
      updateMenuPosition();
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition);
    };
  }, [isOpen]);

  return (
    <div className="relative menu-container" ref={menuRef}>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className={`${darkMode ? "bg-[#121212] text-white" : "bg-white text-black"} px-4 sm:px-6 py-1 rounded-full flex items-center space-x-2 ${darkMode ? "hover:bg-[#2a2a2a]" : "hover:bg-blue-800 hover:text-white"} transition-all`}
      >
        <span className="ml-1 ">☰</span>
        <span className="material-icons text-xs sm:text-sm">منو</span>
        <span className="mr-2 ">⌄</span>
      </button>

      {isOpen && (
        <div 
          className={`fixed ${darkMode ? "bg-[#121212]" : "bg-white"} shadow-lg p-4 w-[95vw] sm:w-[90vw] md:w-[70vw] lg:w-[50vw] xl:w-[40vw] max-w-[500px] sm:max-w-none z-[9999] rounded-lg ${darkMode ? "text-white" : ""} max-h-[80vh] overflow-y-auto lg:overflow-y-visible lg:max-h-none`}
          style={{ 
            top: `${menuPosition.top}px`,
            right: `${menuPosition.right}px`,
            maxWidth: '95vw'
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {menuItems.map((menuItem, menuIndex) => (
              <div key={menuIndex} className="relative flex flex-col">
                <ul className={`p-6 w-full flex-1 flex flex-col ${menuIndex === 0 && darkMode ? 'bg-[#363636]' : ''} ${menuIndex === 0 && !darkMode ? 'bg-indigo-50' : ''} ${menuIndex === 1 && darkMode ? 'bg-[#1f1f1f]' : ''} ${menuIndex === 1 && !darkMode ? 'bg-gray-50' : ''}`}>
                  <li className="font-bold text-lg mb-3">{menuItem.title}</li>
                  <ul className="space-y-1 flex-1">
                    {menuItem.items.map((item, itemIndex) => {
                      const handleItemClick = (e) => {
                        if (window.innerWidth < 1024 && menuIndex === 1) { 
                          e.preventDefault();
                          if (hoveredItem === `${menuIndex}-${itemIndex}`) {
                            setHoveredItem(null);
                          } else {
                            setHoveredItem(`${menuIndex}-${itemIndex}`);
                          }
                        }
                      };

                      return (
                      <li
                        key={itemIndex}
                        className="relative"
                        onMouseEnter={() => window.innerWidth >= 1024 && menuIndex === 1 && setHoveredItem(`${menuIndex}-${itemIndex}`)}
                        onMouseLeave={() => window.innerWidth >= 1024 && menuIndex === 1 && setHoveredItem(null)}
                        onClick={handleItemClick}
                      >
                        {menuIndex === 0 ? (
                          <a href="#" className={`block p-2 rounded cursor-pointer ${darkMode ? 'hover:bg-[#1f1f1f]' : 'hover:bg-gray-50'}`}>
                            {item}
                          </a>
                        ) : (
                          <>
                            <span className={`flex items-center p-2 rounded cursor-pointer ${darkMode ? 'hover:bg-[#363636]' : 'hover:bg-indigo-50'}`}>
                              <span className="flex-1">{item}</span>
                              <span className="text-gray-400 mr-2">›</span>
                            </span>
                            {hoveredItem === `${menuIndex}-${itemIndex}` && (
                              <>
                                <div className={`hidden lg:block absolute left-0 top-0 -translate-x-full w-64 p-4 shadow-lg z-[9999] min-h-[200px] ${darkMode ? 'bg-[#1f1f1f]' : 'bg-white'} ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-2`} style={{ backgroundColor: darkMode ? '#1f1f1f' : '#ffffff' }}>
                                  <ul className="space-y-2">
                                    <li className={`p-2 rounded-lg cursor-pointer text-sm ${darkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-indigo-50'}`}>
                                      زیرمنو 1
                                    </li>
                                    <li className={`p-2 rounded-lg cursor-pointer text-sm ${darkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-indigo-50'}`}>
                                      زیرمنو 2
                                    </li>
                                    <li className={`p-2 rounded-lg cursor-pointer text-sm ${darkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-indigo-50'}`}>
                                      زیرمنو 3
                                    </li>
                                  </ul>
                                </div>
                                <div className={`lg:hidden mt-2 w-full p-3 shadow-lg ${darkMode ? 'bg-[#1f1f1f]' : 'bg-white'} ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-2`} style={{ backgroundColor: darkMode ? '#1f1f1f' : '#ffffff' }}>
                                  <ul className="space-y-2">
                                    <li className={`p-2 rounded-lg cursor-pointer text-sm ${darkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-indigo-50'}`}>
                                      زیرمنو 1
                                    </li>
                                    <li className={`p-2 rounded-lg cursor-pointer text-sm ${darkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-indigo-50'}`}>
                                      زیرمنو 2
                                    </li>
                                    <li className={`p-2 rounded-lg cursor-pointer text-sm ${darkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-indigo-50'}`}>
                                      زیرمنو 3
                                    </li>
                                  </ul>
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </li>
                    )})}
                  </ul>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
