import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardSmall from "./CardSmall";
const PerfectTrip = () => {
  return (
    <Fragment>
      <Container>
        <h4>Plan your Perfect Trip</h4>

        <p>
          <em>
            {" "}
            Search Flights, Hotels & Car Hire to our most popular destinations
          </em>{" "}
        </p>

        <Row>
          <Col lg={4}>
            <CardSmall />
            <br />
            <CardSmall />
            <br />
            <CardSmall />
          </Col>
          <Col lg={4}>
            <CardSmall />
            <br />
            <CardSmall />
            <br />
            <CardSmall />
          </Col>
          <Col lg={4}>
            <CardSmall />
            <br />
            <CardSmall />
            <br />
            <CardSmall />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default PerfectTrip;
