import { Link } from "react-router-dom";
import { Banner, Sidebar } from "../components";
export default function Home() {
  const blubs = [
    "properties",
    "categories",
    "builders",
    "individual",
    "agricultural land",
  ];
  return (
    <div className="grid grid-cols-2">
      <Sidebar />
      <Banner
        title="LUXURY VILLA
MINUTES
FROM THE BAY"
      />
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
