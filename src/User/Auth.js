import React from "react";

import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

import { Tab, Tabs, Row, Col, Container } from "react-bootstrap";

export default function Auth({ setCurrentUser, currentUser }) {
  return(
  <div>
     <Row>
        <Col sm={8}>

          <Container>
            <Row className="g-0">
              <Col></Col>
              <Col xs={10} className="text-center" >
                <Tabs
                  defaultActiveKey="login"
                  id="uncontrolled-tab-example"
                  fill justify
                >
                  <Tab eventKey="login" title="LOG IN">
                    <LoginForm
                      setCurrentUser={setCurrentUser}
                      currentUser={currentUser}
                    />
                  </Tab>

                  <Tab eventKey="signup" title="SIGN UP">
                    <SignUpForm
                      setCurrentUser={setCurrentUser}
                      currentUser={currentUser}
                    />
                  </Tab>
                </Tabs>
              </Col>
              <Col></Col>
            </Row>
          </Container>

        </Col>
      </Row>
  </div>
)}


{/* <Tabs
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
    </Tabs> */}