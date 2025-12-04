export default function Categories({ title, imageUrl, linkText, linkUrl }) {
  return (
    <div>
      <div
        className="w-full h-48 sm:h-64 md:h-80 relative bg-cover bg-center p-2 m-1 sm:m-2 rounded-lg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute top-4 left-4 transform -translate-y-1/2 text-white text-xl sm:text-2xl md:text-3xl font-bold z-10">
          {title}
        </div>

        <div className="absolute inset-0 flex p-2 justify-end items-start mt-2">
          <a
            href={linkUrl}
            className="inline-flex items-center text-white hover:underline mt-5 text-sm font-semibold"
          >
            {linkText}
            <span className="mr-1 ">🢐</span>
          </a>
        </div>

        <a href={linkUrl} className="absolute inset-0 z-0" />
      </div>
    </div>
  );
}
