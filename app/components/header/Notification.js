import { IoNotificationsOutline } from "react-icons/io5"; 
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function Notification() {
  const { darkMode } = useDarkMode();
  return (
    <button className={`text-white rounded-full transition-all ${darkMode ? "hover:bg-[#3a3a3a] hover:px-3 hover:py-1.5" : "hover:bg-[#0040a0] hover:px-3 hover:py-1.5"}`} title="اعلان‌ها">
      <IoNotificationsOutline className="text-2xl" />
    </button>
  );
}
