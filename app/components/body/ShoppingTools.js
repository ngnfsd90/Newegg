"use client";

import ShoppingToolsCard from '../ShoppingToolsCard';
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function ShoppingTools({ tools }) {
  const { darkMode } = useDarkMode();
  
  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 m-2 sm:m-4 w-full max-w-full">
      <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-blue-950"}`}>ابزارهای خرید</h2>
      <div className="flex flex-wrap justify-center sm:justify-start lg:justify-between gap-4">
        {tools.map((tool) => (
          <ShoppingToolsCard
            key={tool.title}
            title={tool.title}
            imageUrl={tool.imageUrl}
            linkUrl={tool.linkUrl}
          />
        ))}
      </div>
    </section>
  );
}
