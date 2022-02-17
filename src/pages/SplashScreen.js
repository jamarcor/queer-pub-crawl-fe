import React from "react";
import { Row, Col } from "react-bootstrap";
import "../img/background.png";

export default function SplashScreen() {
  return (
    <div className='splash-page'>
      <Row>
        <Row>
          <Col xs={10} className="splash-text-center">
            <p>Hello World</p>
          </Col>
          <Col xs={6}>
            <div className='splash-image'>
              <img
                src="https://i.ibb.co/44VZgWT/Rainbow-LGBTQIA-Postivity-Instagram-Story-1080-1080-px.png"
                alt="background_image"
              />
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
