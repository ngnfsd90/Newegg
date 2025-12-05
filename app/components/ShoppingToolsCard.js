export default function ShoppingToolsCard({ title, imageUrl, linkUrl }) {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] xl:w-[calc(25%-12px)] p-2 sm:p-4">
      <a
        href={linkUrl}
        className="block bg-cover bg-center rounded-lg overflow-hidden relative h-24 sm:h-28 md:h-32 lg:h-36 w-full"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-start justify-start text-white text-lg font-semibold  p-3">
          {title}
        </div>
        <div className="absolute inset-0 flex p-3 justify-start items-start mt-3">
          <p className="inline-flex items-center text-white hover:underline mt-4 text-sm font-semibold ">
            بررسی کنید
            <span className="mr-1 ">🢐</span>
          </p>
        </div>
      </a>
    </div>
  );
}
