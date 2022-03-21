import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignUpForm({ setCurrentUser, currentUser }) {
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
    navigate("/home")
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
            placeholder="Tracy Martel?"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="signup-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="What's the T?"
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
