import React, { Fragment } from "react";
import SearchBar from "../layout/SearcBar";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import TravelAgentItem from "./TravelAgentItem";
const TravelAgent = () => {
  const Agents = [
    {
      id: 1,
      Name: "Abdullah Abid",
      Description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate dignissimos optio consequuntur, maxime consequatur, ut itaque, ea error dolorem tempora quidem voluptate ad quas perferendis deleniti quod placeat. Impedit!`,
      level: "level 1",
      rating: 5,
      Customers: 500,
      CurrentBookings: 10,
      Located: "Islamabad,Pakistan",
      Joined: "January 2019"
    },
    {
      id: 2,
      Name: "Tahseen",
      Description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus voluptates autem repudiandae aliquam adipisci provident quaerat earum expedita ut. Magnam velit quasi porro a sit esse asperiores hic impedit adipisci!`,
      level: "level 2",
      rating: 5,
      Customers: 500,
      CurrentBookings: 10,
      Located: "Islamabad,Pakistan",
      Joined: "January 2019"
    },
    {
      id: 3,
      Name: "Khawaja ali",
      Description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis ipsum quasi, ratione impedit numquam. Impedit dolor quam quas quae earum? Aliquam ducimus officia tenetur vitae, suscipit perspiciatis debitis commodi!`,
      level: "level 2",
      rating: 3,
      Customers: 500,
      CurrentBookings: 10,
      Located: "Islamabad,Pakistan",
      Joined: "January 2019"
    }
  ];
  return (
    <Fragment>
      <Jumbotron>
        <Row>
          <Col md={4}></Col>
          <Col md={6}>
            <h1 style={{ color: "#2d6c7f", fontSize: "500%" }}>
              Travel Agents
            </h1>
            <SearchBar />
          </Col>
          <Col md={2}></Col>
        </Row>
      </Jumbotron>
      <Container>
        <Row>
          {Agents.map(Agent => {
            return (
              <Col md={6}>
                <TravelAgentItem key={Agent.id} Agent={Agent} />;
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default TravelAgent;
