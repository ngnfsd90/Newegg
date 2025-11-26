
export default function Banner() {
  return (
    <div className="w-full sm:w-3/4 lg:w-3/4 h-2/3 bg-yellow-500 p-4 justify-items-center">
      <h3 className="text-lg font-bold text-black">بنر تبلیغاتی</h3>
      <p className="text-sm text-black mt-2">
        اینجا محتوای بنر قرار می‌گیرد، برای مثال تبلیغات یا پیشنهادات ویژه.
      </p>
      <button className="mt-4 p-2 bg-black text-white rounded-md">
        خرید حالا
      </button>
    </div>
  );
}
