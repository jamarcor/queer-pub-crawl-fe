import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";

export default function Home() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="neighborhoodSelector">
          <Form.Label>Neighborhood Select</Form.Label>
          <Form.Select defaultValue="Neighborhood">
            <option>Castro</option>
            <option>SoMa</option>
            <option>The Mission</option>
            <option>North of Market</option>
            <option>All</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Dance" />
          <Form.Check type="checkbox" label="Dive" />
          <Form.Check type="checkbox" label="Inclusive" />
          <Form.Check type="checkbox" label="Dark room" />
          <Form.Check type="checkbox" label="Patio" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
