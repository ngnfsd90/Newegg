export default function CopyRight() {
  return (
    <div className="bg-white text-black py-4 text-center flex justify-between items-center m-4">
      <div className="flex justify-end gap-6 mt-4 items-center">
        <a
          href="https://facebook.com"
          className="text-blue-600 hover:text-blue-800"
        >
          <i className="fab fa-facebook-square text-2xl"></i>
        </a>
        <a
          href="https://twitter.com"
          className="text-blue-400 hover:text-blue-600"
        >
          <i className="fab fa-twitter-square text-2xl"></i>
        </a>
        <a
          href="https://instagram.com"
          className="text-pink-600 hover:text-pink-800"
        >
          <i className="fab fa-instagram-square text-2xl"></i>
        </a>
        <a
          href="https://linkedin.com"
          className="text-blue-700 hover:text-blue-900"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="https://youtube.com"
          className="text-red-600 hover:text-red-800"
        >
          <i className="fab fa-youtube-square text-2xl"></i>
        </a>
        <a
          href="https://pinterest.com"
          className="text-red-500 hover:text-red-700"
        >
          <i className="fab fa-pinterest-square text-2xl"></i>
        </a>
        <a href="https://tiktok.com" className="text-black hover:text-gray-700">
          <i className="fab fa-tiktok text-2xl"></i>
        </a>
      </div>

      <div className="flex justify-center gap-8 mt-2">
        <a href="#" className="text-sm hover:underline">
          Terms & Conditions
        </a>
        <a href="#" className="text-sm hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="text-sm hover:underline">
          Your Privacy Choices
        </a>
        <p className="text-sm">
          .2000-2025 Newegg International Inc. All rights reserved©
        </p>
      </div>
    </div>
  );
}
