import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Header.css"



function Header({ currentUser }) {
  return (
    <div id="nav">
    <Container >
      <Row md={0}>
        <Col xs={10}>
          <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/login">Sign up/Log in</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/bars">Bar List</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Resources</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Header;

// <div style={headerStyle}>
//   <h1 style={{ color: "white" }}>Queer Pub Crawl</h1>
//   <button
//     type="button"
//     className="btn btn-primary"
//     onClick={() => props.handleFormSwitch("signUp")}
//   >
//     Sign Up
//   </button>
//   <button
//     type="button"
//     className="btn btn-primary"
//     onClick={() => props.handleFormSwitch("login")}
//   >
//     Log In
//   </button>
// </div>
