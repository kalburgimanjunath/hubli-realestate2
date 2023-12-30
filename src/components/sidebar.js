export default function Sidebar() {
  const sidebar = ["properties", "category", "geolocation"];
  return (
    <div className="h-full shadow">
      {sidebar &&
        sidebar.map((item, index) => {
          return (
            <div
              className="bg-black border-b text-white p-3 border-color-gray hover:bg-pink-100 hover:text-black hover:cursor-pointer"
              key={index + item}
            >
              {item.toUpperCase()}
            </div>
          );
        })}
    </div>
  );
}
