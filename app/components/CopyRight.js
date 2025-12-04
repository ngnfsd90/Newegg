"use client";

import { useDarkMode } from "../contexts/DarkModeContext";

export default function CopyRight() {
  const { darkMode } = useDarkMode();
  
  return (
    <div className={`${darkMode ? "bg-[#363636] text-white" : "bg-white text-black"} py-4 text-center flex flex-col sm:flex-row justify-between items-center m-2 sm:m-4 gap-4 sm:gap-0`}>
      <div className="flex justify-center sm:justify-end gap-4 sm:gap-6 items-center">
        <a
          href="https://facebook.com"
          className="text-blue-600 hover:text-blue-800"
        >
          <i className="fab fa-facebook-square text-2xl"></i>
        </a>
        <a
          href="https://twitter.com"
          className="text-blue-400 hover:text-blue-600"
        >
          <i className="fab fa-twitter-square text-2xl"></i>
        </a>
        <a
          href="https://instagram.com"
          className="text-pink-600 hover:text-pink-800"
        >
          <i className="fab fa-instagram-square text-2xl"></i>
        </a>
        <a
          href="https://linkedin.com"
          className="text-blue-700 hover:text-blue-900"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="https://youtube.com"
          className="text-red-600 hover:text-red-800"
        >
          <i className="fab fa-youtube-square text-2xl"></i>
        </a>
        <a
          href="https://pinterest.com"
          className="text-red-500 hover:text-red-700"
        >
          <i className="fab fa-pinterest-square text-2xl"></i>
        </a>
        <a href="https://tiktok.com" className="text-black hover:text-gray-700">
          <i className="fab fa-tiktok text-2xl"></i>
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Your Privacy Choices
        </a>
        <p className="w-full sm:w-auto text-center sm:text-left">
          .2000-2025 Newegg International Inc. All rights reserved©
        </p>
      </div>
    </div>
  );
}
