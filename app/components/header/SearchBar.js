
export default function SearchBar({ darkMode }) {
  return (
    <div 
      className={`flex items-center space-x-1 rounded-full px-2 py-2 w-[720px] h-10 ${
        darkMode ? "bg-[#353738]" : "bg-white"
      }`}
    >
      <input
        type="text"
        className={`w-full bg-transparent border-none focus:outline-none ${
          darkMode ? "bg-[#353738] text-white" : "bg-white text-black"
        }`}
      />
      <button className="bg-[#79b6ec] text-white px-5 py-1 rounded-full hover:bg-[#005bb5]">
        <span className="text-xl">🔍</span>
      </button>
    </div>
  );
}
