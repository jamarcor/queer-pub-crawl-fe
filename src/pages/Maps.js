import React, { useEffect, useState } from "react";
import "../App.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Maps() {
  const [bars, setBars] = useState([]);
  const [activeBar, setActiveBar] = React.useState(null);


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

  return (
    <MapContainer center={[37.7561, -122.4326]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {bars.map((bar) => (
        <Marker
          key={bar.id}
          position={[bar.latitude, bar.longitude]}
          eventHandlers={{
            click: (e) => {
              setActiveBar(bar)
            },
          }}
        />
      ))}

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
  );
}

// key={bars.bar_id}
//         position={[
//           bars.logitude,
//           bars.latitude
//         ]}>
//           onClick={() => {
//             setActiveBar(bars);
//           }}

// return <div>
//     <MapContainer center={[37.7561, -122.4326 ]} zoom={13}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[37.7561, -122.4326]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//   </div>;

// Neighborhood
// var polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047]
// ]).addTo(map);
