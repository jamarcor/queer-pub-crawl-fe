import React from "react";
import Nav from "react-bootstrap/Nav";

// const headerStyle = {
//   background: "black",
//   height: "20vh",
//   // lineHeight: "15vh"
// };
function Header() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/bars">Bar List</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
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
