export default function Breadcrum({ items }) {
  console.log(items);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
      }}
    >
      {items &&
        items.map((item, index) => {
          return <span key={item + index}>/{item}</span>;
        })}
    </div>
  );
}
