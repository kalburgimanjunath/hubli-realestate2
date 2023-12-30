import { Link } from "react-router-dom";
export default function Header() {
  const logo = "rlestate";
  const menu = ["home", "about", "services", "contact"];
  return (
    <div className="flex w-full shadow-lg justify-between bg-gray-400 font-bold text-white">
      <Link to="/" className="p-3 cursor-pointer">
        {logo}
      </Link>
      <div className="flex justify-between">
        {menu.map((item, index) => {
          return (
            <Link
              key={item + index}
              to={item}
              className="p-3 cursor-pointer hover:bg-pink-400"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
