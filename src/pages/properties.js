import { Link } from "react-router-dom";
import { PROPERTY } from "../data/propery";
import {
  Sidebar,
  Breadcrum,
  Modal,
  AddProperty,
  ListProperty,
} from "../components/index";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { useState, useMemo } from "react";

export default function Properties() {
  const breadcrum = ["home", "Add Properties"];
  const [userLocation, setUserLocation] = useState(null);
  const getUserLocation = () => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          // update the value of userlocation variable
          setUserLocation({ latitude, longitude });
        },
        // if there was an error getting the users location
        (error) => {
          console.error("Error getting user location:", error);
        },
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyChsjpSre5dmxOzusLacbrKo76TViXJiYc",
  });
  const [openPopup, setOpenPopup] = useState(false);
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  // const center = useMemo(() => userLocation, []);

  return (
    <div className="flex">
      <div className="w-1/3">
        <Sidebar />
      </div>
      <div className="w-full">
        {openPopup ? <Modal /> : null}
        <div className="flex w-full p-3 bg-gray-200">
          <Breadcrum items={breadcrum} title="Properties">
            <div className="flex justify-end">
              <button className="button button-primary">Save</button>
              <button className="button button-primary">Add New</button>
            </div>
          </Breadcrum>
        </div>
        <div className="border-l-2 grid grid-cols-2 p-3">
          <div className="grid-cols-6 mr-2 pr-2">
            <AddProperty />

            <ListProperty items={PROPERTY} />
          </div>
          <div className="grid-cols-6 justify-center text-left border-l-2 m-2 p-2">
            <div className="w-60 items-center text-center">
              <div className="flex w-40 h-40 bg-gray-200 items-center p-3">
                <span>Upload Owner/Builder Photo</span>
              </div>
              <div className="block w-full m-2">
                <button
                  className="flex button button-primary"
                  onClick={getUserLocation}
                >
                  Locate Address
                </button>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div>Address:</div>
                <Link className="text-blue" onClick={() => setOpenPopup(true)}>
                  Edit
                </Link>
              </div>
              <div>
                #189,Manjunath Nilaya,Gokul road,Ravi nagar,Hubli,Karnataka.
              </div>
              {userLocation && (
                <div>
                  <h2>User Location</h2>
                  <p>Latitude: {userLocation.latitude}</p>
                  <p>Longitude: {userLocation.longitude}</p>
                </div>
              )}
              {!isLoaded ? (
                <h1>Loading...</h1>
              ) : (
                <GoogleMap
                  mapContainerClassName="map-container"
                  center={center}
                  zoom={10}
                />
              )}
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
    </div>
  );
}
