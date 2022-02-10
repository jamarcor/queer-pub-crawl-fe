// import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Header from "./components/Header";
import Home from "./pages/Home";
import BarList from "./components/BarList";
import "./App.css";
import SignInForm from "./User/SignUpForm";
import LoginForm from "./User/LoginForm";
const url = "http://localhost:3000/";


function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("my token is: ", token);
    console.log("api endpoint url: ", url);
    if (token) {
      fetch(`${url}/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setCurrentUser(data);
          console.log("data returned from auto_login: ", data);
        });
    }
  }, []);
  


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home currentUser={currentUser}/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/bars" element={<BarList />} />
      </Routes>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <SignInForm />
      <LoginForm />
    </>
  
  );
}

export default App;
// function App() {
//   const [user, setUser] = useState({});
//   const [form, setForm] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       fetch(`http://localhost:3000/auto_login`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((resp) => resp.json())
//         .then((data) => {
//           setUser(data);
//           console.log(data)
//         });
//     }
//   }, []);

//   const handleLogin = (user) => {
//     setUser(user);
//   };

//   const handleFormSwitch = (input) => {
//     setForm(input);
//   };

//   console.log(user);

//   const renderForm = () => {
//     switch (form) {
//       case "login":
//         return <LoginForm handleLogin={handleLogin} />;
//         break;
//       default:
//         return <SignInForm handleLogin={handleLogin} />;
//     }
//   };
//   return (
//     <div className="App">
//       <Header handleFormSwitch={handleFormSwitch} />
//       {renderForm()}
//       <button type="button" class="btn btn-primary">
//         Home Page
//       </button>
//     </div>
//   );
// }
