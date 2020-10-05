import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google.map.react";

function map() {
  return (
    <div>
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBocOVRX1P8cSj1fxMqkMsyGOS0j5aJUXE",
})(map);
