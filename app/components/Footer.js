"use client";

import { useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Footer() {
  const { darkMode } = useDarkMode();
  const [openSections, setOpenSections] = useState({});
  
  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const footerSections = [
    {
      title: "خدمات مشتری",
      links: [
        { text: "مرکز کمک", href: "#" },
        { text: "پیگیری سفارش", href: "#" },
        { text: "بازگشت کالا", href: "#" },
        { text: "سیاست بازگشت کالا", href: "#" },
        { text: "حریم خصوصی و امنیت", href: "#" },
        { text: "بازخورد", href: "#" }
      ]
    },
    {
      title: "حساب کاربری",
      links: [
        { text: "ورود/ثبت‌نام", href: "#" },
        { text: "تاریخچه سفارشات", href: "#" },
        { text: "تاریخچه بازگشت‌ها", href: "#" },
        { text: "دفتر آدرس‌ها", href: "#" },
        { text: "لیست آرزوها", href: "#" },
        { text: "لیست خریدها", href: "#" },
        { text: "اطلاع‌رسانی ایمیلی", href: "#" },
        { text: "سفارشات اشتراکی", href: "#" },
        { text: "اطلاع‌رسانی‌ها", href: "#" }
      ]
    },
    {
      title: "اطلاعات شرکت",
      links: [
        { text: "درباره نیوگ", href: "#" },
        { text: "روابط سرمایه‌گذاران", href: "#" },
        { text: "جوایز/رتبه‌بندی‌ها", href: "#" },
        { text: "ساعات و مکان‌ها", href: "#" },
        { text: "پرسش‌های رسانه‌ای", href: "#" },
        { text: "مشاغل نیوگ", href: "#" },
        { text: "خبرها", href: "#" },
        { text: "نیوگ اینسایدر", href: "#" },
        { text: "قانون شفافیت در زنجیره تأمین", href: "#" }
      ]
    },
    {
      title: "ابزارها و منابع",
      links: [
        { text: "فروش در نیوگ", href: "#" },
        { text: "برای کسب‌وکار شما", href: "#" },
        { text: "خدمات شریک نیوگ", href: "#" },
        { text: "عضویت در شبکه تأثیرگذاران", href: "#" },
        { text: "تبدیل به شریک تجاری", href: "#" },
        { text: "نقشه سایت", href: "#" },
        { text: "خرید بر اساس برند", href: "#" }
      ]
    }
  ];
  
  return (
    <footer className={`${darkMode ? "bg-[#121212]" : "bg-blue-950"} text-white py-8`}>
      <div className="container mx-auto px-4">
        <div className="md:hidden space-y-3">
          {footerSections.map((section, index) => (
            <div key={index} className="border-b border-gray-700 last:border-b-0">
              <button
                onClick={() => toggleSection(index)}
                className={`w-full py-4 px-6 rounded-full ${darkMode ? "bg-[#363636]" : "bg-blue-900"} flex items-center justify-between text-lg font-semibold transition-all`}
              >
                <span>{section.title}</span>
                <span className={`transform transition-transform duration-300 ${openSections[index] ? 'rotate-180' : ''}`}>
                  ⌄
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSections[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="py-4 px-6 space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="hover:underline text-sm block py-1">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-xl mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
