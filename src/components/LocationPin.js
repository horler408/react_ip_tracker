import React from "react";

//Props to be passed
//<LocationPin lat={7.3457} lng={3.8845} text="My Marker" />

export default function LocationPin({ text }) {
  return (
    <div>
      <div>{text}</div>
    </div>
  );
}
