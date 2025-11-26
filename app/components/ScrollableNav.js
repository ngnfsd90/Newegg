import { useState, useEffect } from "react";
import NavBarMenu from "./NavBarMenu";

export default function ScrollableNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {

    if (window.scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`w-full bg-white ${isVisible ? "" : "hidden"} shadow-md py-2`}
    >
      <div className="flex justify-between items-center p-2  text-black">
        <div className="space-x-4 flex items-center justify-items-end lg:block">
          <a href="#">Feedback</a>
          <a href="#">Help center</a>
        </div>

       <div className="flex items-center space-x-4 justify-between">
  <a href="#">Clearance</a>
  <a href="#">PC Builder</a>
    <NavBarMenu className="sm:hidden" />

</div>


        {/* <button
          onClick={toggleMenu}
          className="lg:hidden block text-black text-2xl"
        >
          <span>&#9776;</span> 
        </button> */}
      </div>

      {/* {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 w-48 bg-white shadow-lg rounded-md">
          <div className="flex flex-col items-start p-4 space-y-4">
            <a href="#">Feedback</a>
            <a href="#">Help center</a>
            <a href="#">Clearance</a>
            <a href="#">PC Builder</a>
          </div>
        </div>
      )}  */}
    </div>
  );
}
