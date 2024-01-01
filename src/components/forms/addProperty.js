import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddProperty({ setOpenPopup }) {
  const [userLocation, setUserLocation] = useState(null);
  // const [openPopup, setOpenPopup] = useState(false);
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
  return (
    <>
      {" "}
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
      <div className="border-l-2 grid grid-cols-2 p-3">
        <div className="grid-cols-6 mr-2 pr-2">
          <AddProperty />
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
            {/* {!isLoaded ? <h1>Loading...</h1> : <NewMap />} */}
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
    </>
  );
}
