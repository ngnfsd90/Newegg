import { FaUser } from "react-icons/fa"; 

export default function AuthButton() {
  return (
    <span className="cursor-pointer hover:text-gray-300 flex items-center space-x-2">
      <FaUser className="text-xl" /> 
      ورود / ثبت‌نام
    </span>
  );
}
