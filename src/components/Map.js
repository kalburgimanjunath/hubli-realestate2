// // const React = window.React;
// // const Component = React.Component;
// // const render = window.ReactDOM.render;
// import React, { Component } from "react";
// export default class NewMap extends Component {
//   constructor(props) {
//     super(props);
//     this.googleChecker = this.googleChecker.bind(this);
//     this.renderMap = this.renderMap.bind(this);
//   }

//   googleChecker() {
//     if (!window.google) {
//       setTimeout(this.googleChecker, 100);
//       console.log("not there yet");
//     } else {
//       console.log("we're good to go!!");
//       this.renderMap();
//     }
//   }

//   renderMap() {
//     const coords = { lat: 41.375885, lng: 2.177813 };
//     // create map instance
//     new google.maps.Map(this.refs.mapContainer, {
//       zoom: 16,
//       center: {
//         lat: coords.lat,
//         lng: coords.lng,
//       },
//     });
//   }

//   componentDidMount() {
//     this.googleChecker();
//   }

//   render() {
//     return (
//       <div className="card map-holder">
//         <div className="card-block" ref="mapContainer" />
//       </div>
//     );
//   }
// }
