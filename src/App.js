import React, { useState, useEffect } from "react";
import "./App.css";
import arrow from "./components/assets/icon-arrow.svg";
import DetailPage from "./components/details";
import Map from "./components/maps";

function App() {
  const API_KEY = "at_7Oso1FsJjRiGPmrL9psu3X9Qe6vHV";

  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  let url;
  const defaultUrl = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`;
  const searchUrl = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${query}`;

  query !== undefined ? (url = searchUrl) : (url = defaultUrl);
  useEffect(() => {
    const getRequest = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setDetails(data);
    };

    getRequest();
  }, [url, query, searchUrl]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const getLocation = () => {
    if (details.location !== undefined) {
      return `${details.location.region}, ${details.location.city} ${details.location.geonameId}`;
    }
  };

  const getTimezone = () => {
    if (details.location !== undefined) {
      return details.location.timezone;
    }
  };

  const getLat = () => {
    if (details.location !== undefined) {
      return details.location.lat;
      //console.log(details.location.lat);
    }
  };

  const getLong = () => {
    if (details.location !== undefined) {
      return details.location.lng;
      //console.log(details.location.lng);
    }
  };

  return (
    <div className="container">
      <div className="container_top">
        <h2 className="container_title">IP address tracker</h2>
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for any IP address or domain"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={getSearch} className="search_button" type="submit">
            <img src={arrow} alt="Search Arrow" />
          </button>
        </div>
      </div>
      <DetailPage
        ip={details.ip}
        isp={details.isp}
        timezone={getTimezone()}
        location={getLocation()}
      />
      <Map lat={getLat()} lng={getLong()} />
    </div>
  );
}

export default App;
