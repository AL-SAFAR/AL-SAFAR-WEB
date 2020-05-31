import React, { Fragment } from "react";
// import { Card, Row, Col, Button, Badge } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
const RoomCard = () => {
  return (
    <Fragment>
      {/* <Card className="mt-3">
        <Row noGutters={true}>
          <Col lg={4}>
            <Card.Img
              src="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1483032942/texas-mokara-hotel-BESTHOTEL1216.jpg?itok=AWkapfNo"
              style={RoomCardStyle}
            />
          </Col>
          <Col lg={5}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                ad, velit repudiandae fugit sapiente ex corporis itaque. Quia
                tempora aperiam molestiae dolorem magnam, ullam illo tenetur
                recusandae sed, fugiat facere.
              </Card.Text>
              <Card.Footer>
                <h4 className="text-success">Rs.1500/Per night</h4>
              </Card.Footer>
            </Card.Body>
          </Col>
          <Col lg={3}>
            <Card.Body>
              <Card.Title className="text-primary">
                Good <Badge variant="success">8.6</Badge> <br />
                <h6 className="text-dark">226 Reviews</h6>
              </Card.Title>
              <Card.Text>
                <div className="mb-2">
                  <h4>Rating</h4>
                </div>
                <Card.Footer>
                  <Button variant="primary">Show More</Button>
                </Card.Footer>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>*/}
    </Fragment>
  );
};

const RoomCardStyle = {
  objectFit: "cover",
  height: "270px",
  width: "250px",
  padding: "0px"
};

export default RoomCard;
