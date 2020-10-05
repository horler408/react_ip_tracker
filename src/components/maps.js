import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 7.3775,
      lng: 3.947,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBocOVRX1P8cSj1fxMqkMsyGOS0j5aJUXE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocationPin lat={7.3457} lng={3.8845} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
