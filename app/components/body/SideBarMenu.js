"use client"
import { useState } from "react";

export default function SidebarMenu() {
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

  return (
    <div className="w-full h-auto bg-blue-800 text-white top-36 right-10 z-50 rounded-lg">
      <div className="p-4">
        <h3 className="text-lg font-bold">تمام محصولات</h3>
        <ul className="space-y-2 mt-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="w-full">{item.title}</a>
              <span className="text-sm">›</span>

              {activeMenu === index && (
                <div className="absolute right-full top-0 mt-2 w-56 bg-blue-600 rounded-lg p-2 shadow-lg shadow-blue-900/50 z-60">
                  <ul className="space-y-2">
                    {item.submenus.map((submenu, submenuIndex) => (
                      <li key={submenuIndex} className="hover:bg-blue-500 p-2 rounded-lg cursor-pointer">
                        {submenu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
