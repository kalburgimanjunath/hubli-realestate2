import { PROPERTY } from "../data/propery";
// import * as filestack from "filestack-js";
import {
  Sidebar,
  Breadcrum,
  Modal,
  AddProperty,
  ListProperty,
  AddCategory,
  // NewMap,
} from "../components/index";
// const client = filestack.init("YOUR API KEY");
import React, { useState, useEffect } from "react";

export default function Properties() {
  const [breadcrum, setBreadcrum] = useState(["home", "Add Properties"]);
  const [openPopup, setOpenPopup] = useState(false);
  const sidebar = [
    "properties",
    "category",
    "geolocation",
    "add properties",
    "add categories",
  ];

  // const [isLoaded, setIsLoaded] = useState(true);
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  // const center = useMemo(() => userLocation, []);
  const [sidebarSelectedItem, setSidebarItem] = useState("properties");
  const DisplayForms = () => {
    if (sidebarSelectedItem == "category") {
      setBreadcrum([breadcrum.splice(0, 1), "add category"]);
    } else if (sidebarSelectedItem == "properties") {
      setBreadcrum(["home", "add properties"]);
    } else {
      setBreadcrum(["home", "add properties"]);
    }
  };
  useEffect(() => {
    DisplayForms();
  }, [sidebarSelectedItem]);
  return (
    <div className="flex">
      <div className="w-1/3">
        {sidebarSelectedItem}
        <Sidebar sidebar={sidebar} setSidebarItem={setSidebarItem} />
      </div>
      <div className="w-full">
        <div className="flex w-full p-3 bg-gray-200">
          <Breadcrum items={breadcrum} title="Properties">
            <div className="flex justify-end">
              <button className="button button-primary">Save</button>
              <button
                className="button button-primary"
                onClick={() => setSidebarItem(sidebarSelectedItem)}
              >
                Add New
              </button>
            </div>
          </Breadcrum>
        </div>
        {openPopup ? <Modal /> : null}
        {sidebarSelectedItem == "properties" ? (
          <ListProperty items={PROPERTY} />
        ) : sidebarSelectedItem == "add properties" ? (
          <AddProperty setOpenPopup={setOpenPopup} />
        ) : sidebarSelectedItem == "category" ? (
          <AddCategory />
        ) : null}
      </div>
    </div>
  );
}
