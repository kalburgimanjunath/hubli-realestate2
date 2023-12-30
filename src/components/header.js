import { Link } from "react-router-dom";
export default function Header() {
  const logo = "rlestate";
  const menu = ["home", "about", "services", "contact"];
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ padding: 10 }}>
        {logo}
      </Link>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {menu.map((item, index) => {
          return (
            <Link key={item + index} to={item} style={{ padding: 10 }}>
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
