export default function AddProperty() {
  return (
    <div className="p-2 relative justify-left text-left">
      <div>
        <h3 className="p-2 font-bold">Property Details</h3>
        <form>
          <input type="text" placeholder="Category-agricultural land" />
          <input type="text" placeholder="Length" />
          <input type="text" placeholder="Width" />
          <input type="checkbox" placeholder="Square/Not Square" />
          Square/Not Square
          <input type="text" placeholder="Length" />
          <input type="text" placeholder="Width" />
          <input type="checkbox" />
          Builder/Owner
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
        </form>
      </div>
    </div>
  );
}
