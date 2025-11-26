export default function TwinBanners() {
  return (
    <div className="flex justify-between gap-4">
      <div className="w-full h-80 bg-blue-500 rounded-lg overflow-hidden">
        <a href="/your-target-page" className="block w-full h-full">
          <img
            src="/pictures/banner2.png"
            alt="First Banner"
            className="w-full h-full object-cover rounded-lg"
          />
        </a>
      </div>

      <div className="w-full h-80 bg-green-500 rounded-lg overflow-hidden">
        <a href="/your-target-page" className="block w-full h-full">
          <img
            src="/pictures/banner3.png"
            alt="Second Banner"
            className="w-full h-full object-cover rounded-lg"
          />
        </a>
      </div>
    </div>
  );
}
