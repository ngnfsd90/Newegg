"use client"
import { useState } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function SidebarMenu() {
  const { darkMode } = useDarkMode();
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { title: "اجزای کامپیوتر و ذخیره‌سازی", submenus: ["زیرمنو 1", "زیرمنو 2", "زیرمنو 3" , "زیرمنو 3" ,"زیرمنو 3" ,"زیرمنو 3" ,"زیرمنو 3"] },
    { title: "سیستم‌های کامپیوتری", submenus: ["زیرمنو 1", "زیرمنو 2"] },
    { title: "لوازم جانبی کامپیوتر", submenus: ["زیرمنو 1", "زیرمنو 2", "زیرمنو 3", "زیرمنو 4"] },
    { title: "الکترونیک", submenus: ["زیرمنو 1", "زیرمنو 2"] },
    { title: "گیمینگ", submenus: ["زیرمنو 1", "زیرمنو 2", "زیرمنو 3"] },
    { title: "نرم‌افزار و خدمات", submenus: ["زیرمنو 1"] },
    { title: "شبکه‌بندی", submenus: ["زیرمنو 1", "زیرمنو 2", "زیرمنو 3"] },
    { title: "راه‌حل‌های اداری", submenus: ["زیرمنو 1", "زیرمنو 2"] },
    { title: "اتومبیل و ابزارآلات صنعتی", submenus: ["زیرمنو 1"] },
    { title: "خانه و فضای باز", submenus: ["زیرمنو 1", "زیرمنو 2"] },
    { title: "سلامت و ورزش", submenus: ["زیرمنو 1", "زیرمنو 2"] },
    { title: "پوشاک و لوازم جانبی", submenus: ["زیرمنو 1"] },
    { title: "اسباب‌بازی و پهپادها", submenus: ["زیرمنو 1", "زیرمنو 2"] },
  ];

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleClick = (index, e) => {
    if (window.innerWidth < 1024) { 
      e.preventDefault();
      if (activeMenu === index) {
        setActiveMenu(null);
      } else {
        setActiveMenu(index);
      }
    }
  };

  return (
    <div 
      className="w-full h-auto text-white z-50 rounded-lg"
      style={{
        background: "linear-gradient(180deg, #05225E 0%, #295591 100%)",
        color: "#fff"
      }}
    >
      <div className="p-2 sm:p-4">
        <h3 className="text-base sm:text-lg font-bold">تمام محصولات</h3>
        <ul className="space-y-1 sm:space-y-2 mt-2 sm:mt-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative flex items-center space-x-2 rounded-lg p-1 sm:p-2 cursor-pointer"
              style={{
                background: activeMenu === index ? "linear-gradient(to right, #05225E 0%, #295591 100%)" : "transparent"
              }}
              onMouseEnter={() => window.innerWidth >= 1024 && handleMouseEnter(index)}
              onMouseLeave={() => window.innerWidth >= 1024 && handleMouseLeave()}
              onClick={(e) => handleClick(index, e)}
            >
              <a href="#" className="w-full text-xs sm:text-sm">{item.title}</a>
              <span className="text-xs sm:text-sm">›</span>

              {activeMenu === index && (
                <>
                  <div className="hidden lg:block absolute left-0 top-0 -translate-x-full w-64 rounded-lg p-4 shadow-lg shadow-blue-900/50 z-[9999] min-h-full" style={{ background: "linear-gradient(to left, #05225E 0%, #295591 100%)" }}>
                    <ul className="space-y-2">
                      {item.submenus.map((submenu, submenuIndex) => (
                        <li key={submenuIndex} className="hover:bg-blue-500 p-2 rounded-lg cursor-pointer text-sm">
                          {submenu}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:hidden mt-2 w-full rounded-lg p-2 shadow-lg shadow-blue-900/50" style={{ background: "linear-gradient(to left, #05225E 0%, #295591 100%)" }}>
                    <ul className="space-y-1 sm:space-y-2">
                      {item.submenus.map((submenu, submenuIndex) => (
                        <li key={submenuIndex} className="hover:bg-blue-500 p-1 sm:p-2 rounded-lg cursor-pointer text-xs sm:text-sm">
                          {submenu}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
