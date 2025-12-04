"use client";

import { useState, useRef, useEffect } from 'react';
import Flag from 'react-world-flags';
import { useDarkMode } from '../../contexts/DarkModeContext';

export default function LocationPicker() {
  const { darkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("امارات متحده عربی");
  const [countryCode, setCountryCode] = useState("AE"); 
  const [selected, setSelected] = useState("AE");
  const [tempSelected, setTempSelected] = useState(null);
  const [tempCountryCode, setTempCountryCode] = useState("AE");
  const [tempCountryName, setTempCountryName] = useState("امارات متحده عربی");
  const buttonRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 }); 

  const countries = [
    { name: "ایران", code: "IR" },
    { name: "امریکا", code: "US" },
    { name: "انگلیس", code: "GB" },
    { name: "آلمان", code: "DE" },
    { name: "فرانسه", code: "FR" },
    { name: "ایتالیا", code: "IT" },
    { name: "اسپانیا", code: "ES" },
    { name: "کانادا", code: "CA" },
    { name: "استرالیا", code: "AU" },
    { name: "ژاپن", code: "JP" },
    { name: "چین", code: "CN" },
    { name: "هند", code: "IN" },
    { name: "برزیل", code: "BR" },
    { name: "مکزیک", code: "MX" },
    { name: "ترکیه", code: "TR" },
    { name: "روسیه", code: "RU" },
    { name: "کره جنوبی", code: "KR" },
    { name: "سنگاپور", code: "SG" },
    { name: "امارات متحده عربی", code: "AE" },
    { name: "عربستان سعودی", code: "SA" },
    { name: "مصر", code: "EG" },
    { name: "آفریقای جنوبی", code: "ZA" },
    { name: "نیوزیلند", code: "NZ" },
    { name: "سوئد", code: "SE" },
    { name: "نروژ", code: "NO" },
    { name: "دانمارک", code: "DK" },
    { name: "هلند", code: "NL" },
    { name: "بلژیک", code: "BE" },
    { name: "سوئیس", code: "CH" },
    { name: "اتریش", code: "AT" }
  ];

  const updateMenuPosition = () => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const windowWidth = window.innerWidth;
      
      let menuWidth;
      if (windowWidth < 640) {
        menuWidth = windowWidth * 0.9; 
      } else if (windowWidth < 768) {
        menuWidth = 320; 
      } else {
        menuWidth = 384; 
      }
      
      let rightPosition = windowWidth - buttonRect.right;
      const minRightMargin = 8; 
      const maxRightPosition = windowWidth - menuWidth - minRightMargin;
      
      if (rightPosition > maxRightPosition) {
        rightPosition = maxRightPosition;
      }
      
      if (rightPosition < minRightMargin) {
        rightPosition = minRightMargin;
      }
      
      setMenuPosition({
        top: headerHeight,
        right: rightPosition
      });
    }
  };

  useEffect(() => {
    updateMenuPosition();
    
    const handleResize = () => {
      updateMenuPosition();
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updateMenuPosition);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateMenuPosition);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTempSelected(selected);
      setTempCountryCode(countryCode);
      setTempCountryName(selectedCountry);
    }
  };

  const handleCountryChange = (country, code) => {
    setTempCountryName(country);
    setTempCountryCode(code); 
    setTempSelected(code);
  };

  const handleSave = () => {
    setSelectedCountry(tempCountryName);
    setCountryCode(tempCountryCode);
    setSelected(tempSelected);
    setIsOpen(false);
    alert("Preferences saved");
  };

  return (
    <>
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={handleToggle}
          className={`text-white flex items-center space-x-1 sm:space-x-2 rounded-full transition-all flex-shrink-0 ${darkMode ? "hover:bg-[#3a3a3a] hover:px-2 hover:py-1 sm:hover:px-3 sm:hover:py-1.5" : "hover:bg-[#0040a0] hover:px-2 hover:py-1 sm:hover:px-3 sm:hover:py-1.5"}`}
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full overflow-hidden flex-shrink-0">
            <Flag code={countryCode} style={{ width: '100%', height: '100%' }} />
          </div>
        </button>
      </div>

      {isOpen && (
        <div 
          className={`fixed ${darkMode ? "bg-[#121212] text-white" : "bg-white text-black"} border rounded-lg p-4 sm:p-6 w-[90vw] sm:w-80 md:w-96 rtl shadow-xl z-[60] max-h-[calc(100vh-80px)] overflow-y-auto`}
          style={{ top: `${menuPosition.top}px`, right: `${menuPosition.right}px` }}
        >
          <h3 className="font-bold mb-2 text-base sm:text-lg">کشور \ منطقه</h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-4">لطفاً یک کشور / منطقه برای خرید انتخاب کنید:</p>
          
         <ul className="space-y-2 sm:space-y-3 max-h-60 sm:max-h-80 overflow-y-auto pr-2">
          {countries.map((country, index) => (
            <li
              key={index}
              onClick={() => handleCountryChange(country.name, country.code)}
              className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              <div className="flex items-center space-x-2 w-full justify-between">
                <div className="flex items-center space-x-1 space-x-reverse"> 
                  <Flag code={country.code} style={{ width: 20, height: 20 }} />
                  <span>{country.name}</span>
                </div>
              </div>
              <div className={`w-4 h-4 border-2 ${tempSelected === country.code ? 'bg-blue-500' : 'bg-transparent'} rounded-full`}></div>
            </li>
          ))}
          </ul>

          <div className="mt-4 flex flex-col items-center">
            <button
              className="bg-[#FA9D29] text-white py-2 px-6 rounded-full"
              onClick={handleSave}
            >
              ذخیره تنظیمات
            </button>
            <p className="text-gray-500 text-sm mt-2 text-center">
              خرید و ارسال بین‌المللی، نیوایگ گلوبال.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
