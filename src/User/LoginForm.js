import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form'

function LoginForm({ setCurrentUser, currentUser }) {
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
    console.log(username, password);
    fetch(`http://localhost:3000/login`, {
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
        localStorage.setItem("token", data.token);
        // console.log(data.jwt)
        console.log(data);
        // props.handleLogin(data.user);
      });
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <Form id="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="login-username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={handleUsernameChange}
            type="text"
            placeholder="username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="login-password">
            <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="password"
          />
        </Form.Group>
        <Button variant="primary" className="standard-button" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;

{
  /* <div>
<div style={formDivStyle}>
  <h1>Log In</h1>
  <form class="ui form" onSubmit={handleSubmit}>
    <div class="field">
      <label>Username</label>
      <input
        value={username}
        onChange={handleUsernameChange}
        type="text"
        placeholder="username"
      />
    </div>
    <div class="field">
      <label>Password</label>
      <input
        value={password}
        onChange={handlePasswordChange}
        type="password"
        placeholder="password"
      />
    </div>

    <button type="button" class="btn btn-primary" type="submit">
      Submit
    </button>
  </form>
</div>
</div> */
}
