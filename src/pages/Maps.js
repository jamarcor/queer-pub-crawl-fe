import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../App.css";
// import rainbowPin from "../img/rainbow-pin.png";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Maps({ mapFilter, bars, setBars }) {
  // const [bars, setBars] = useState([]);
  const [activeBar, setActiveBar] = React.useState(null);
  // console.log(mapFilter)

  useEffect(() => {
    const abortController = new AbortController();
    fetch("http://localhost:3000/bars")
      .then((r) => r.json())
      .then((r) => {
        // console.log("response is: ", r);
        setBars(r);
        console.log("bars is: ", bars);
      });
  }, []);

 const icon = L.icon({
  iconUrl: require("../img/rainbow-pin.png"),
  iconSize: [25, 35],
  // iconAnchor: [22, 94],
  // popupAnchor: [-3, -76],
 })

// const filterNeighborhoods = bars.filter((bar) => bar.neighborhood.id == mapFilter);


  return (
    <Container>
      <Col>
    <MapContainer center={[37.7561, -122.4326]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
      />
      {bars
      .filter((bar) => bar.neighborhood.id == mapFilter || mapFilter === "all")
      .map((bar) => (
        <Marker
          icon={icon}
          key={bar.id}
          position={[bar.latitude, bar.longitude]}
          eventHandlers={{
            click: (e) => {
              setActiveBar(bar)
            },
          }}
        />
      )
      )}

      {activeBar && (
        <Popup
          position={[activeBar.latitude, activeBar.longitude]}
          onClose={() => {
            setActiveBar(null);
          }}
        >
          <div>
            <h3>{activeBar.name}</h3>
            <img className="map-bar-pic"
            src={activeBar.img_url}
            alt="bar pic"
            />
            <p>{activeBar.street_address}</p>
            
          </div>
        </Popup>
      )}
    </MapContainer>
    </Col>
    </Container>
  );
}