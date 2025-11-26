import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; 

export default function LocationSelector({ setSelectedCountry }) {
  const [isOpen, setIsOpen] = useState(false); 
  const [isDoneEnabled, setIsDoneEnabled] = useState(false); 
  const [zipCode, setZipCode] = useState(''); 
  const [selectedCountry, setSelectedCountryState] = useState(''); 

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
    <div className="relative">
      <button
        onClick={toggleLocationMenu}
        className="text-white flex items-center space-x-2"
      >
        <FaMapMarkerAlt className="text-white text-xl" />
        <span>{selectedCountry ? `${selectedCountry} تحویل داده شود` : 'انتخاب موقعیت شما'}</span>
      </button>
      {isOpen && (
        <div className="absolute bg-white text-black border rounded-lg mt-8 p-10 w-96 rtl shadow-xl">
          <h3 className="font-bold mb-4 text-lg">انتخاب موقعیت</h3>

          <p className="text-sm text-gray-500 mb-4">
            گزینه‌های تحویل و سرعت‌های تحویل ممکن است برای مکان‌های مختلف متفاوت باشند.
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
              className="bg-[#0066c0] text-white px-6 py-3 rounded-l-lg hover:bg-[#005bb5]"
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
              onChange={(e) => handleCountryChange(e.target.value, e.target.value)}
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

          <div className="flex justify-center">
            <button
              className={`py-2 px-6 rounded-lg ${isDoneEnabled ? 'bg-[#FF6600] text-white' : 'bg-gray-300 text-gray-600'}`}
              disabled={!isDoneEnabled} 
              onClick={handleDone} 
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
