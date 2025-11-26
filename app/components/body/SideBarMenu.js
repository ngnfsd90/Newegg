"use client"
import { useState } from "react";

export default function SidebarMenu() {
  return (
    <div className="w-full h-auto bg-blue-800 text-white  top-36 right-10 z-50 rounded-lg">
      <div className="p-4">
        <h3 className="text-lg font-bold">تمام محصولات</h3>
        <ul className="space-y-2 mt-4">
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">اجزای کامپیوتر و ذخیره‌سازی</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">سیستم‌های کامپیوتری</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">لوازم جانبی کامپیوتر</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">الکترونیک</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">گیمینگ</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">نرم‌افزار و خدمات</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">شبکه‌بندی</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">راه‌حل‌های اداری</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">اتومبیل و ابزارآلات صنعتی</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">خانه و فضای باز</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">سلامت و ورزش</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">پوشاک و لوازم جانبی</a>
            <span className="text-sm">›</span>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
            <a href="#" className="w-full">اسباب‌بازی و پهپادها</a>
            <span className="text-sm">›</span>
          </li>
        </ul>
      </div>
    </div>
  );
}


// import { useState } from 'react';

// export default function SidebarMenu() {
//   const [isOpen, setIsOpen] = useState(true); 

//   return (
//     <div className="w-full sm:w-1/4 lg:w-1/4 h-full bg-blue-800 text-white fixed top-36 right-10 z-50 rounded-lg">
//       <div className="p-4">
//         <h3 className="text-lg font-bold">تمام محصولات</h3>
//         <ul className="space-y-2 mt-4">
//           <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
//             <a href="#" className="w-full">اجزای کامپیوتر و ذخیره‌سازی</a>
//             <span className="text-sm">›</span>
//           </li>
//           <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
//             <a href="#" className="w-full">سیستم‌های کامپیوتری</a>
//             <span className="text-sm">›</span>
//           </li>
//           <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
//             <a href="#" className="w-full">لوازم جانبی کامپیوتر</a>
//             <span className="text-sm">›</span>
//           </li>
//           <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
//             <a href="#" className="w-full">الکترونیک</a>
//             <span className="text-sm">›</span>
//           </li>
//           <li className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 cursor-pointer">
//             <a href="#" className="w-full">گیمینگ</a>
//             <span className="text-sm">›</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
