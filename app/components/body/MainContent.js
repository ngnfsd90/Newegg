import SideBarMenu from './SideBarMenu';
import Banner from './Banner';
import Categories from './Categories';
import TwinBanners from './TwinBanners';

export default function MainContent() {
  return (
     <section className="grid grid-cols-4 grid-rows-2 gap-4  p-8" style={{ background: "linear-gradient(to bottom, rgba(148, 188, 231, 0.895), rgba(255, 255, 255, 0))" }}>
      <div className="col-span-1 row-span-4">
        <SideBarMenu />
      </div>

      <div className="col-span-2 row-span-1">
        <Banner />
      </div>

      <div className="col-span-1 row-span-1">
         <Categories 
          title="دسته بندی 1"
          imageUrl="/pictures/category.png" 
          linkText="الان بخرید"
          linkUrl="/shop/category1"
        />
      </div>

      <div className="col-span-1 row-span-1">
 <Categories 
          title="دسته بندی 1"
          imageUrl="/pictures/category.png" 
          linkText="الان بخرید"
          linkUrl="/shop/category1"
        />      </div>

      <div className="col-span-1 row-span-1">
 <Categories 
          title="دسته بندی 1"
          imageUrl="/pictures/category.png" 
          linkText="الان بخرید"
          linkUrl="/shop/category1"
        />      </div>

      <div className="col-span-1 row-span-1">
 <Categories 
          title="دسته بندی 1"
          imageUrl="/pictures/category.png" 
          linkText="الان بخرید"
          linkUrl="/shop/category1"
        />      </div>

     <div className="col-span-4 row-span-2">
        <TwinBanners />
      </div>

    
    </section>
  );
}
