export default function Home() {
  const sidebar = ["properties", "category", "geolocation"];
  return (
    <div>
      <div>
        {sidebar &&
          sidebar.map((item) => {
            return <div>{item}</div>;
          })}
      </div>
      <div></div>
    </div>
  );
}
