import { Link } from "react-router-dom";
export default function Home() {
  const sidebar = ["properties", "category", "geolocation"];
  const blubs = [
    "properties",
    "categories",
    "builders",
    "individual",
    "agricultural land",
  ];
  return (
    <div style={{ display: "flex" }}>
      <div>
        {sidebar &&
          sidebar.map((item, index) => {
            return <div key={index + item}>{item}</div>;
          })}
      </div>
      <div style={{ display: "flex" }}>
        {blubs &&
          blubs.map((item, index) => {
            return (
              <div
                key={index + item}
                style={{
                  padding: 20,
                  backgroundColor: "#d0d0d0",
                  margin: 10,
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  {index} {item}
                </div>
                <div>
                  <Link to={`./../${item}`}>{item}</Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
