import React from "react";

import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

import { Tab, Tabs } from "react-bootstrap";

export default function Auth({ setCurrentUser, currentUser }) {
  return(
  <div>
    <Tabs
      defaultActiveKey="Home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="signup" title="Sign Up">
        <SignUpForm setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      </Tab>
      <Tab eventKey="login" title="Log In">
        <LoginForm setCurrentUser={setCurrentUser} currentUser={currentUser}/>
        </Tab>
    </Tabs>
  </div>
)}
