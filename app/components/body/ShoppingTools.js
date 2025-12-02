import ShoppingToolsCard from '../ShoppingToolsCard';

export default function ShoppingTools({ tools }) {
  return (
    <section className=" p-8 m-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-950">ابزارهای خرید</h2>
      <div className="flex  justify-between ">
        {tools.map((tool) => (
          <ShoppingToolsCard
            key={tool.title}
            title={tool.title}
            imageUrl={tool.imageUrl}
            linkUrl={tool.linkUrl}
          />
        ))}
      </div>
    </section>
  );
}
