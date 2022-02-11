import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Maps from "./Maps"

export default function Home({ currentUser }) {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="neighborhoodSelector">
            <Row>
              <Form.Label>Neighborhood Select</Form.Label>
              <Form.Select defaultValue="Neighborhood">
                <option>Castro</option>
                <option>SoMa</option>
                <option>The Mission</option>
                <option>North of Market</option>
                <option>All</option>
              </Form.Select>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Row>
              <Col md="auto"><Form.Check type="checkbox" label="Dance" /></Col>
              <Col md="auto"><Form.Check type="checkbox" label="Dive" /></Col>
              <Col md="auto"><Form.Check type="checkbox" label="Inclusive" /></Col>
              <Col md="auto"><Form.Check type="checkbox" label="Sports" /></Col>
              <Col md="auto"><Form.Check type="checkbox" label="Patio" /></Col>
              <Col md="auto"><Form.Check type="checkbox" label="Drag" /></Col>
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Maps />
    </div>
  );
}
