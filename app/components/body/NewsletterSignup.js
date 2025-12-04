"use client";

import { useDarkMode } from "../../contexts/DarkModeContext";

export default function NewsletterSignup({ coverImage = "/pictures/newsletter-cover.png" }) {
  const { darkMode } = useDarkMode();
  return (
    <div 
      className="relative p-3 sm:p-4 md:p-6 rounded-lg flex flex-col ml-0 sm:ml-4 justify-between min-h-[150px] sm:min-h-[180px] md:min-h-[200px] flex-1 sm:flex-[2] overflow-hidden"
      style={{
        backgroundImage: coverImage ? `url(${coverImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 w-full text-right text-black">
          معاملاتی فقط برای شما
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-between flex-1">
          <div className="flex-1 w-full sm:w-auto flex flex-col justify-center">
            <p className="mb-2 sm:mb-3 text-sm sm:text-base text-black">
              برای دریافت پیشنهادات ویژه در صندوق ورودی خود ثبت نام کنید.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="ایمیل خود را وارد نمایید"
                className="px-4 py-2 border rounded-md w-full sm:w-64 md:w-80 bg-white/90 backdrop-blur-sm"
              />
              <button className={`${darkMode ? "bg-[#8EAFF0]" : "bg-blue-600"} text-white px-4 sm:px-6 py-2 rounded-md whitespace-nowrap transition-transform duration-200 ${darkMode ? "hover:bg-[#7a9fdf]" : "hover:bg-blue-700"} hover:scale-105`}>
                ثبت نام کنید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
