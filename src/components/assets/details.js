import React from "react";

export default function DetailPage({ ip, isp, location, timezone }) {
  return (
    <div className="details">
      <div className="deatails_ip-address">
        <h6 className="details_title">IP ADDRESS</h6>
        <p className="ip_address">{ip}</p>
      </div>
      <div className="details_location">
        <h6 className="details_title">LOCATION</h6>
        <p className="location">{location}</p>
      </div>
      <div className="details_time-zone">
        <h6 className="details_title">TIMEZONE</h6>
        <p className="time_zone">{timezone}</p>
      </div>
      <div className="details_isp">
        <h6 className="details_title">ISP</h6>
        <p className="isp">{isp}</p>
      </div>
    </div>
  );
}
