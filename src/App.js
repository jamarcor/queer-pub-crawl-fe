import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/App.css";
import Header from "./components/Header";
import SignInForm from "./components/SignInForm";
import LoginForm from "./components/LoginForm";

function App() {
  const [user, setUser] = useState({});
  const [form, setForm] = useState("");



  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setUser(data);
          console.log(data)
        });
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleFormSwitch = (input) => {
    setForm(input);
  };


  console.log(user);

  const renderForm = () => {
    switch (form) {
      case "login":
        return <LoginForm handleLogin={handleLogin} />;
        break;
      default:
        return <SignInForm handleLogin={handleLogin} />;
    }
  };
  return (
    <div className="App">
      <Header handleFormSwitch={handleFormSwitch} />
      {renderForm()}
      <button className="ui button">
        Home Page
      </button>
    </div>
  );
}

export default App;
