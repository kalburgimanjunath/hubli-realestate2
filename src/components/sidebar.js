export default function Sidebar() {
  const sidebar = ["properties", "category", "geolocation"];
  return (
    <div>
      {sidebar &&
        sidebar.map((item, index) => {
          return <div key={index + item}>{item}</div>;
        })}
    </div>
  );
}
