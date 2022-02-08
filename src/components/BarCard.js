import React from "react";
//import Link from react router

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function BarCard({ bar }) {
  return (
    <>
      
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={bar.img_url} />
        <Card.Body>
          <Card.Title>{bar.name}</Card.Title>
          <Card.Text>{bar.street_address}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

//<Link to=`/bar/${bar.id}`>
//  <Button variant="primary">Go somewhere</Button>
//</Link>
