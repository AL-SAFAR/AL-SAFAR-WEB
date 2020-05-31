import React, { Fragment } from "react";
import { Card, Row, Col } from "react-bootstrap";
const CardSmall = () => {
  return (
    <div>
      <Fragment>
        <Card className={CardStyle}>
          <Row noGutters={true}>
            <Col>
              <Card.Img
                src='https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1483032942/texas-mokara-hotel-BESTHOTEL1216.jpg?itok=AWkapfNo'
                style={CardSmallStyle}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Card Text</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Fragment>
    </div>
  );
};

const CardSmallStyle = {
  objectFit: "cover",
  height: "100px",
  width: "auto",
  padding: "0px"
};

const CardStyle = {
  height: "50px",
  width: "auto",
  marginTop: "20px"
};

export default CardSmall;
