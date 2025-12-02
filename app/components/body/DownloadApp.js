export default function DownloadApp() {
  return (
    <div className="bg-indigo-50 text-black p-6 rounded-lg flex mr-4 items-center justify-between min-h-[265px]">
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-3">برنامه ما را دانلود کنید</h2>
        <p className="text-black mb-3 text-sm">
          برای دانلود برنامه، کد QR را اسکن کنید. این کد را با دوربین گوشی خود
          اسکن کنید.
        </p>
        <div className="flex justify-center items-center">
          <img
            src="/pictures/qr-code.png"
            alt="QR Code"
            className="w-24 h-24"
          />
        </div>
      </div>
      <div className="flex-none ml-4">
        <img
          src="/pictures/phone.png"
          alt="Phone Illustration"
          className="w-32"
        />
      </div>
    </div>
  );
}
