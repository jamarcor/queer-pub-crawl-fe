import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

function SignUpForm({ setCurrentUser, currentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", data.include[0].jwt);
        console.log(data.include[0].jwt);
        // props.handleLogin(data.user);
      });
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <Form id="signup-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="signup-username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={handleUsernameChange}
            type="text"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="signup-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="password"
          />
        </Form.Group>
        <Button variant="primary" className="standard-button" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default SignUpForm;

{
  /* <div style={formDivStyle}>
<h1>Sign Up</h1>
<Form className="ui form" onSubmit={handleSubmit}>
  <div className="field">
    <label>Username</label>
    <input
      value={username}
      onChange={handleUsernameChange}
      type="text"
      placeholder="username"
    />
  </div>
  <div className="field">
    <label>Password</label>
    <input
      value={password}
      onChange={handlePasswordChange}
      type="password"
      placeholder="password"
    />
  </div>

  <Button variant="primary" className="standard-button" type="submit">
    Submit
  </Button>
</Form>
</div> */
}
