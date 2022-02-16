import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Row, Col, Button, Form, Card, ListGroup } from "react-bootstrap";
// import BarList from "./components/BarList"

export default function Bars({ currentUser }) {
  const [barData, setBarData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  // const myParams = useParams()
  // const [currentBar, setCurrentBar] = useState({});
  // let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(`http://localhost:3000/bars/${id}`)
      .then((r) => r.json())
      .then((bar) => {
        // console.log(bar);
        // console.log(myParams)
        setBarData(bar);
      });
  }, []);

  // function handleReview(e) {
  //   e.preventDefault()
  //   // console.log("submitted")
  //   // const token = localStorage.getItem("token");
  //   const review = e.target.review.value();

  //   fetch(`http://localhost:3000/reviews`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //       // Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({
  //       user_id: currentUser.user.id,
  //       bar_id: barData.id,
  //       review
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((r) => console.log(r));
  //   }

  function handleChange(e) {
    e.preventDefault();
    // console.log(e.target.value);
    setReviews(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target);
    fetch(`http://localhost:3000/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.user.id,
        bar_id: barData.id,
        review: reviews,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
    // setBarData("")
  }

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((r) => r.json())
      .then((r) => {
        let reviewArray = []
        for (const review in r ) {
          reviewArray.push(r[review].review)
          console.log(r[review])
        }
        setReviews(reviewArray);
        console.log("bar review", reviews);
      });
  }, []);

  return (
    <>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Submit Test </Form.Label>
            <Form.Control onChange={handleChange} as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        <Col>
          <div>
            <img src={barData.img_url} alt={barData.description} />
            <Card>
              <ListGroup variant="flush">
                {reviews.map((r) => (
                  <ListGroup.Item>{r}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
}
