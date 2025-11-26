import Banner from "./Banner";
import SidebarMenu from "./SideBarMenu"; 

export default function MainContent() {
  return (
    <div className="flex flex-wrap">
      <SidebarMenu className="w-full sm:w-1/4 lg:w-1/4" />

      {/* <Banner className="w-full sm:w-3/4 lg:w-3/4" /> */}
    </div>
  );
}
