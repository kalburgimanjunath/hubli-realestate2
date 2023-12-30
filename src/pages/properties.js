import { Sidebar, Breadcrum } from "../components/index";
const AddNew = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "30%" }}>
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
      <div style={{ display: "flex", columnCount: 3 }}>
        <Sidebar />
        <div>
          <div style={{ display: "flex" }}>
            <Breadcrum items={breadcrum} />
            <div style={{ display: "flex" }}>
              <button>Save</button>
              <button>Add New</button>
            </div>
          </div>
          <div>
            <AddNew />
            <ListView />
          </div>
          <div></div>
        </div>
        <div>
          <div>
            <div style={{ width: "30%", backgroundColor: "#d0d0d0" }}>
              Upload Owner/Builder Photo
            </div>
            <button>Locate Address</button>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Address:</div>
              <div>Edit</div>
            </div>
            <div>
              #189,Manjunath Nilaya,Gokul road,Ravi nagar,Hubli,Karnataka.
            </div>
          </div>
          <div>
            <div>
              <div>Email:</div>
            </div>
            <div>manjunath@gmail.com</div>
          </div>
          <div>
            <div>
              <div>Website:</div>
            </div>
            <div>yahoo.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
