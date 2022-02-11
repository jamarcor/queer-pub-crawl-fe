// import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Auth from "./User/Auth";
import Header from "./components/Header";
import Home from "./pages/Home";
import BarList from "./components/BarList";
import "./App.css";
import Maps from "./pages/Maps"
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
        <Route path="/login" element={<Auth setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
        <Route path="/home" element={<Home currentUser={currentUser}/>} />
        <Route path="/maps" element={<Maps currentUser={currentUser}/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/bars" element={<BarList />} />
      </Routes>
    </>
  
  );
}

export default App;

