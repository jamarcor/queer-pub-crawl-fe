import React from "react";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Header.css";
import "../img/fruit_loop_logo.png";

function Header({ currentUser, setCurrentUser }) {

  let navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
    setCurrentUser({});
  }



  return (
    <div id="nav">
      <Container>
        <Row md={0}>
          <Col xs={10}>
            <Navbar>
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
                  <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Resources</Nav.Link>
            </Nav.Item> */}
                {/* <Nav.Link to="/home">{<img src={"https://i.ibb.co/whQWk0K/Fruit-Loop.png"} alt="logo"/>}</Nav.Link> */}
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
