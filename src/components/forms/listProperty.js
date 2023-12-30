export default function ListProperty({ items }) {
  return (
    <>
      <div className="flex flex-wrap">
        {items &&
          items.map((item, index) => {
            return (
              <div
                key={item + index}
                className="w-half m-1 flex-wrap justify-center text-center items-center"
              >
                <div>
                  <img width={"100%"} src={item.property_photo} />
                </div>
                <div>{item.title + index}</div>
              </div>
            );
          })}
      </div>
    </>
  );
}
