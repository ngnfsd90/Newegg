"use client";

import { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function LocationSelector({ setSelectedCountry }) {
  const { darkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [isDoneEnabled, setIsDoneEnabled] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [selectedCountry, setSelectedCountryState] = useState("");
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });

  const updateMenuPosition = () => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const header = document.querySelector("header");
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
        right: rightPosition,
      });
    }
  };

  useEffect(() => {
    updateMenuPosition();

    const handleResize = () => {
      updateMenuPosition();
    };

    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", updateMenuPosition);

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", updateMenuPosition);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleLocationMenu = () => setIsOpen(!isOpen);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
    checkDoneButtonStatus(event.target.value, selectedCountry);
  };

  const handleCountryChange = (country, countryCode) => {
    setSelectedCountryState(country);
    checkDoneButtonStatus(zipCode, country);
  };

  const checkDoneButtonStatus = (zipCode, selectedCountry) => {
    if (zipCode || selectedCountry) {
      setIsDoneEnabled(true);
    } else {
      setIsDoneEnabled(false);
    }
  };

  const handleDone = () => {
    setSelectedCountry(selectedCountry);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={toggleLocationMenu}
          className={`text-white flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm rounded-full transition-all ${
            darkMode
              ? "hover:bg-[#3a3a3a] hover:px-2 hover:py-1 sm:hover:px-3 sm:hover:py-1.5"
              : "hover:bg-[#0040a0] hover:px-2 hover:py-1 sm:hover:px-3 sm:hover:py-1.5"
          }`}
        >
          <FaMapMarkerAlt className="text-white text-sm sm:text-base md:text-xl flex-shrink-0" />
          <span className="hidden sm:inline text-white">
            {selectedCountry
              ? `${selectedCountry} تحویل داده شود`
              : "انتخاب موقعیت شما"}
          </span>
          <span className="sm:hidden text-white text-xs">موقعیت</span>
        </button>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className={`fixed ${
            darkMode ? "bg-[#121212] text-white" : "bg-white text-black"
          } border rounded-lg p-4 sm:p-6 md:p-10 w-[90vw] sm:w-80 md:w-96 rtl shadow-xl z-[60] max-h-[calc(100vh-80px)] overflow-y-auto`}
          style={{
            top: `${menuPosition.top}px`,
            right: `${menuPosition.right}px`,
          }}
        >
          <h3 className="font-bold mb-4 text-lg">انتخاب موقعیت</h3>

          <p className="text-sm text-gray-500 mb-4">
            گزینه‌های تحویل و سرعت‌های تحویل ممکن است برای مکان‌های مختلف متفاوت
            باشند.
          </p>

          <div className="flex mb-4">
            <input
              type="text"
              placeholder="کد پستی وارد کنید"
              className="p-3 w-full border rounded-r-lg focus:outline-none"
              value={zipCode}
              onChange={handleZipCodeChange}
            />
            <button
              onClick={() => alert("کد پستی ارسال شد")}
              className="bg-[#8EAFF0] text-black px-6 py-3 rounded-l-lg hover:bg-[#7a9fdf] font-semibold"
            >
              Apply
            </button>
          </div>

          <div className="flex items-center mb-4">
            <hr className="w-full border-t-2 border-gray-300" />
            <span className="mx-2 text-gray-500">یا</span>
            <hr className="w-full border-t-2 border-gray-300" />
          </div>

          <div className="mb-4">
            <select
              className="w-full p-3 border rounded-lg"
              value={selectedCountry}
              onChange={(e) =>
                handleCountryChange(e.target.value, e.target.value)
              }
            >
              <option value="">انتخاب کشور</option>
              <option value="ایران">ایران</option>
              <option value="آلمان">آلمان</option>
              <option value="فرانسه">فرانسه</option>
              <option value="آمریکا">آمریکا</option>
              <option value="انگلیس">انگلیس</option>
              <option value="امارات">امارات</option>
              <option value="قطر">قطر</option>
              <option value="عراق">عراق</option>
            </select>
          </div>

          <div className="flex flex-col items-center">
            <button
              className={`py-2 px-6 rounded-full ${
                isDoneEnabled
                  ? "bg-[#FA9D29] text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
              disabled={!isDoneEnabled}
              onClick={handleDone}
            >
              ذخیره تغییرات
            </button>
          </div>
        </div>
      )}
    </>
  );
}
