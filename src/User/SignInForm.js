// import React, { useState } from "react";
// // import Form from "react-bootstrap/Form";

// function SignInForm(props) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (evt) => {
//     setUsername(evt.target.value);
//   };

//   const handlePasswordChange = (evt) => {
//     setPassword(evt.target.value);
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     fetch(`http://localhost:3000/users`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         localStorage.setItem("token", data.jwt);
//         // props.handleLogin(data.user);
//       });
//     setUsername("");
//     setPassword("");
//   };
//   const formDivStyle = {
//     margin: "auto",
//     padding: "20px",
//     width: "80%",
//   };

//   return (
//     <div style={formDivStyle}>
//         <h1>Sign Up</h1>
//         <form className="ui form" onSubmit={handleSubmit}>
//           <div className="field">
//             <label>Username</label>
//             <input
//               value={username}
//               onChange={handleUsernameChange}
//               type="text"
//               placeholder="username"
//             />
//           </div>
//           <div className="field">
//             <label>Password</label>
//             <input
//               value={password}
//               onChange={handlePasswordChange}
//               type="password"
//               placeholder="password"
//             />
//           </div>

//           <button type="button" class="btn btn-primary" type="submit">
//             Submit
//           </button>
//         </form>
//     </div>
//   );
// }

// export default SignInForm;
