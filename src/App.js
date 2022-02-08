// import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Bars from "./pages/Bars"
import BarList from "./components/BarList";
import "./style/App.css";
// import Header from "./components/Header";
// import SignInForm from "./User/SignInForm";
// import LoginForm from "./User/LoginForm";

function App() {
  return (
    <>
      <Header />
      <nav>
        <Link to="/home"> Home </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bars" element={<BarList />} />
      </Routes>
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

