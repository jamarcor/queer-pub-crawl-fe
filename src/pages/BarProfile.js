import React, { useEffect, useState} from 'react';
import { useParams } from "react-router";
import { Row, Col, Button, Form } from "react-bootstrap"
// import BarList from "./components/BarList"

export default function Bars({ currentUser }) {
  // let [searchParams, setSearchParams] = useSearchParams();
  const [barData, setBarData] = useState([]);
  const { id } = useParams();
  // const myParams = useParams()
  
  
  useEffect(() => {
    fetch(`http://localhost:3000/bars/${id}`)
    .then((r) => r.json())
    .then((bar) =>{
      // console.log(bar);
      // console.log(myParams)
      setBarData(bar);
    });
  }, []);

      // TODO - send post request to backend
    // check DB to make sure it's there
    // see if the return on the fetch logs a success and render a message for success
    // if successful, set state to true/ if false, render form
    // error case, keep form
  
  function handleReview(e) {
    e.preventDefault()
    console.log("submitted")
    // fetch("http:/")
  }


  return (
    <>

      <Row>
        <Form onSubmit={handleReview}>
          <Form.Group>
            <Form.Label>Submit Test </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit" >Submit</Button>
        </Form>
        <Col>

        <div>
          


          <img src={barData.img_url} alt={barData.description}/>
        </div>

        </Col>

      </Row>
      </>
  );
}
