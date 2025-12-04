export default function Banner() {
  return (
    <div className="w-full h-48 sm:h-64 md:h-80 p-2 justify-items-center rounded-lg">
      <a href="/your-target-page" className="w-full h-full block">
        <img 
          src="/pictures/banner.png" 
          alt="Banner Image"
          className="w-full h-full object-cover rounded-lg" 
        />
      </a>
    </div>
  );
}
