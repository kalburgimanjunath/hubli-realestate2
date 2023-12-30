import { Sidebar, Breadcrum } from "../components/index";
const AddNew = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "30%" }}>
      <form>
        <input type="text" placeholder="Category-agricultural land" />
        <input type="text" placeholder="Length" />
        <input type="text" placeholder="Width" />
        <input type="checkbox" placeholder="Square/Not Square">
          Square/Not Square
        </input>
        <input type="text" placeholder="Length" />
        <input type="text" placeholder="Width" />
        <input type="checkbox">Builder/Owner</input>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
      </form>
    </div>
  );
};
const ListView = () => {
  return <div>List View</div>;
};

export default function Properties() {
  const breadcrum = ["home", "Add Properties"];
  return (
    <div>
      <h3>Properties</h3>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <div style={{ display: "flex" }}>
            <Breadcrum items={breadcrum} />
            <div style={{ display: "flex" }}>
              <button>Save</button>
              <button>Add New</button>
            </div>
          </div>
          <AddNew />
          <ListView />
        </div>
      </div>
    </div>
  );
}
