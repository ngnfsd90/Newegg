export default function Categories({ title, imageUrl, linkText, linkUrl }) {
  return (
    <div>
      <div
        className="w-full sm:w-3/4 lg:w-full h-80 relative bg-cover bg-center p-2 m-2 rounded-lg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute top-4 left-4 transform -translate-y-1/2 text-white text-3xl font-bold z-10">
          {title}
        </div>

        <a
          href={linkUrl}
          className="absolute bottom-4 left-4 text-white p-2 bg-black rounded-md hover:bg-gray-700 z-10"
        >
          {linkText}
        </a>

        <a href={linkUrl} className="absolute inset-0 z-0" />
      </div>
    </div>
  );
}
