import React, { Fragment } from "react";
import { Card, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { CardTitle } from "react-bootstrap/Card";

const CardImgLeft = ({ offer: { imgSrc, title, desc } }) => {
  return (
    <Fragment>
      <Card>
        <Row noGutters={true}>
          <Col>
            <Card.Img src={imgSrc} style={CardImgLeftStyle} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{desc}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonToolbar>
                <Button variant='outline-primary'>Primary</Button>
              </ButtonToolbar>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};

const CardImgLeftStyle = {
  objectFit: "cover",
  height: "400px",
  width: "300px",
  padding: "0px"
};

export default CardImgLeft;
