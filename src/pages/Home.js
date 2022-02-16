import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button} from "react-bootstrap";
import "../App.css";
import Maps from "./Maps"

export default function Home({ currentUser }) {
  const [bars, setBars] = useState([]);
  const [mapFilter, setMapFilter] = useState("all");
  const [categories, setCategories] = useState([]);
  // cont [categoryFilter, setCategoryFilter] = useState(null);

  useEffect(() => {
    // const abortController = new AbortController();
    fetch("http://localhost:3000/bars")
      .then((r) => r.json())
      .then((r) => {
        // console.log("response is: ", r);
        setBars(r);
        // console.log("bars is: ", bars);
      });
  }, []);

function handleSelectChange(e){
  // console.log(e.target.value)
  setMapFilter(e.target.value);
}

function handleCategoryClick(e){

}


  return (
    <div>
      <Container>
        <Col>
        <Form>
          <Form.Group className="mb-3" controlId="neighborhoodSelector">
              <Form.Label>Neighborhood Select</Form.Label>
              <Form.Select onChange={handleSelectChange}
              defaultValue="Neighborhood">
                <option value="all">All</option>
                <option value={1}>Castro</option>
                <option value={2}>SoMa</option>
                <option value={3}>North of Market</option>
                <option value={4}>The Mission</option>
              </Form.Select>
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
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
        </Col>
      </Container>
      <Maps mapFilter={mapFilter} bars={bars} setBars={setBars}/>
    </div>
  );
}
