import { useState } from 'react';
import Flag from 'react-world-flags'; 

export default function LocationPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("انتخاب کشور");
  const [countryCode, setCountryCode] = useState("IR"); 
  const [selected, setSelected] = useState(null); 

  const handleToggle = () => setIsOpen(!isOpen);

  const handleCountryChange = (country, code) => {
    setSelectedCountry(country);
    setCountryCode(code); 
    setSelected(code); 
    setIsOpen(false); 
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="text-white flex items-center space-x-2"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Flag code={countryCode} style={{ width: '100%', height: '100%' }} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute bg-white text-black border rounded-lg mt-6 p-6 w-96 rtl shadow-xl">
          <h3 className="font-bold mb-4 text-lg">لطفاً یک کشور / منطقه برای خرید انتخاب کنید:</h3>
          
         <ul className="space-y-3">
          {["ایران", "امریکا", "انگلیس", "آلمان"].map((country, index) => (
            <li
              key={index}
              onClick={() => handleCountryChange(country, country === "ایران" ? "IR" : country === "امریکا" ? "US" : country === "انگلیس" ? "GB" : "DE")}
              className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
            >


              <div className="flex items-center space-x-2 w-full justify-between">
                <div className="flex items-center space-x-2"> 
                  <Flag code={country === "ایران" ? "IR" : country === "امریکا" ? "US" : country === "انگلیس" ? "GB" : "DE"} style={{ width: 20, height: 20 }} />
                  <span>{country}</span>
                </div>
              </div>


              <div className={`w-4 h-4 border-2 ${selected === (country === "ایران" ? "IR" : country === "امریکا" ? "US" : country === "انگلیس" ? "GB" : "DE") ? 'bg-blue-500' : 'bg-transparent'} rounded-full`}></div>

            
            </li>
          ))}
          </ul>

          <div className="mt-4 flex justify-center">
            <button
              className="bg-[#FF6600] text-white py-2 px-6 rounded-full"
              onClick={() => alert("Preferences saved")}
            >
              ذخیره تنظیمات
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
