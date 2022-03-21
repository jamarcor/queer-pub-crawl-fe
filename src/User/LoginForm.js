import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginForm({ setCurrentUser, currentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

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
    navigate("/home")
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
            placeholder="Tracy Martel?"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="login-password">
            <Form.Label>Password</Form.Label>
          <Form.Control 
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="What's the T?"
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
