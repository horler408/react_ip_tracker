import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 9.082,
      lng: 8.6753,
    },
    zoom: 5,
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBocOVRX1P8cSj1fxMqkMsyGOS0j5aJUXE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocationPin
            lat={this.props.lat}
            lng={this.props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

// function SimpleMap({ lat, lng }) {
//   const location = {
//     center: {
//       lat: lat,
//       lng: lng,
//     },
//     zoom: 14,
//   };
//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyBocOVRX1P8cSj1fxMqkMsyGOS0j5aJUXE" }}
//         defaultCenter={location.center}
//         defaultZoom={location.zoom}
//       ></GoogleMapReact>
//     </div>
//   );
// }

// export default SimpleMap;
