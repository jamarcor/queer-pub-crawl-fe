import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Row, Col, Button, Form, Card, ListGroup } from "react-bootstrap";

export default function BarProfile({ currentUser }) {
  const [barData, setBarData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/bars/${id}`)
      .then((r) => r.json())
      .then((bar) => {
        console.log(bar);
        // console.log(myParams)
        setBarData(bar);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target[0].value);
    fetch(`http://localhost:3000/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.user.id,
        bar_id: barData.id,
        review: e.target[0].value,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(barData, data, "data");
        setBarData({
          ...barData,
          reviews: [...barData.reviews, data]
        });
        setReviewSubmitted(true);
      });
  }

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((r) => r.json())
      .then((r) => {
        let reviewArray = [];
        for (const review in r) {
          reviewArray.push(r[review].review);
          console.log(r[review]);
        }
        setReviews(reviewArray);
        console.log("bar review", reviews);
      });
  }, []);

  return (
    <>
      <Row>
        { !reviewSubmitted ? (
           <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Submit Review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>)
          : (
            <p>Review Submitted</p>
          )

        }
        <Col>
          <div>
            <img src={barData.img_url} alt={barData.description} />

            {barData.reviews ? (
              <Card key={barData.id}>
                <ListGroup variant="flush">
                  {barData.reviews.map((r) => (
                    <ListGroup.Item key={r.id}>{r.review}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            ) : (
              <p>Reviews Loading</p>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
}
