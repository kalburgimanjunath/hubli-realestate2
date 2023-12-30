export default function Breadcrum({ items, children }) {
  return (
    <div className="flex text-xs w-full justify-between items-center font-bold text-gray-700">
      <div>
        {items &&
          items.map((item, index) => {
            return <span key={item + index}>/{item}</span>;
          })}
      </div>
      {/* <h3>{title}</h3> */}
      {children}
    </div>
  );
}
