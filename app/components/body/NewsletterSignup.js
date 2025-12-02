export default function NewsletterSignup() {
  return (
    <div className="bg-indigo-50 p-8 rounded-lg flex items-center justify-between ml-4 min-h-[260px] flex-[2]">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          معاملاتی فقط برای شما
        </h2>
        <p className="text-gray-600 mb-4">
          برای دریافت پیشنهادات ویژه در صندوق ورودی خود ثبت نام کنید.
        </p>
        <div className="flex space-x-2">
          <input
            type="email"
            placeholder="ایمیل خود را وارد نمایید"
            className="px-4 py-2 border rounded-md w-80"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            ثبت نام کنید
          </button>
        </div>
      </div>
      <div className="flex-none ml-6">
        <img
          src="/pictures/illustration.png"
          alt="Newsletter Illustration"
          className="w-56"
        />
      </div>
    </div>
  );
}
