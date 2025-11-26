import { useState, useEffect } from "react";

export default function NavBarMenu() {
  const [isOpen, setIsOpen] = useState(false); 
  const [clickedOutside, setClickedOutside] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".menu-container") === null) {
        setIsOpen(false); 
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside); 
    };
  }, []);

  return (
    <div className="relative menu-container">
      <button
        onClick={toggleMenu}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        منو
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg mt-2 p-4 w-[50vw] z-50 rounded-lg">
          <div className="grid grid-cols-2 gap-8">
            <ul className="bg-[#F5F5F5] p-6 rounded-lg w-[50%]">
              <li className="font-bold text-lg mb-3">تمام محصولات</li>
              <ul className="space-y-3">
                <li>قطعات و ذخیره‌سازی <span className="text-gray-400">›</span></li>
                <li>سیستم‌های کامپیوتری <span className="text-gray-400">›</span></li>
                <li>لوازم جانبی کامپیوتر <span className="text-gray-400">›</span></li>
                <li>سرور و قطعات <span className="text-gray-400">›</span></li>
                <li>الکترونیک <span className="text-gray-400">›</span></li>
                <li>بازی و واقعیت مجازی <span className="text-gray-400">›</span></li>
                <li>نرم‌افزار و خدمات <span className="text-gray-400">›</span></li>
              </ul>
            </ul>

            <ul className="bg-white p-6 rounded-lg w-[50%]">
              <li className="font-bold text-lg mb-3">دیگر بخش‌ها</li>
              <ul className="space-y-3">
                <li>Newegg Insider <span className="text-gray-400">›</span></li>
                <li>شبکه‌سازی <span className="text-gray-400">›</span></li>
                <li>راهکارهای اداری <span className="text-gray-400">›</span></li>
                <li>خودرو و ابزار <span className="text-gray-400">›</span></li>
                <li>خانه و فضای باز <span className="text-gray-400">›</span></li>
                <li>سلامت و ورزش <span className="text-gray-400">›</span></li>
                <li>پوشاک و لوازم جانبی <span className="text-gray-400">›</span></li>
                <li>اسباب‌بازی‌ها، پهپادها و سازندگان <span className="text-gray-400">›</span></li>
              </ul>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
