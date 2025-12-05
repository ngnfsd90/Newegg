"use client";

import { useDarkMode } from "../../contexts/DarkModeContext";

export default function DownloadApp({ coverImage = "/pictures/download-app-cover.png", darkCoverImage = "/pictures/download-app-cover-dark.png" }) {
  const { darkMode } = useDarkMode();
  const currentCoverImage = darkMode && darkCoverImage ? darkCoverImage : coverImage;
  
  return (
    <div 
      className="relative p-3 sm:p-4 md:p-6 rounded-lg flex flex-col mr-0 sm:mr-4 justify-between min-h-[150px] sm:min-h-[180px] md:min-h-[200px] flex-1 overflow-hidden"
      style={{
        backgroundImage: currentCoverImage ? `url(${currentCoverImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 flex flex-col justify-between h-full">
        <h2 className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 w-full text-right ${darkMode ? 'text-white' : 'text-black'}`}>
          برنامه ما را دانلود کنید
        </h2>
        <div className="flex items-center justify-end sm:justify-end gap-16 sm:gap-20 w-full flex-1 px-16 sm:px-20">
          <p className={`text-xs sm:text-sm text-right leading-relaxed ${darkMode ? 'text-white' : 'text-black'}`}>
            برای دانلود برنامه، کد QR را اسکن کنید.<br />
            این کد را با دوربین گوشی خود اسکن کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
