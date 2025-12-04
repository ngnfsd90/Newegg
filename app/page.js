"use client";

import MainContent from "./components/body/MainContent"; 
import CopyRight from "./components/CopyRight";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import { useDarkMode } from "./contexts/DarkModeContext";

export default function App() {
  const { darkMode } = useDarkMode();
  
  return (
    <div className={`${darkMode ? "bg-[#121212]" : ""} min-h-screen w-full overflow-x-hidden`}>
      <Header />
      <MainContent />
      <Footer />
      <CopyRight />
    </div>
  );
}
