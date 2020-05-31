import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import CardUI from "./CardUI";
const TopTours = () => {
  const toptours = [
    {
      id: 1,
      title: "Paris",
      imgSrc:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, consequatur molestias sint ducimus quaerat quia soluta? Neque dolor deserunt mollitia consequatur laudantium ad. Ratione, vel eius placeat accusantium facilis dolorum`
    },
    {
      id: 2,
      title: "Rome",
      imgSrc:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, consequatur molestias sint ducimus quaerat quia soluta? Neque dolor deserunt mollitia consequatur laudantium ad. Ratione, vel eius placeat accusantium facilis dolorum`
    },
    {
      id: 3,
      title: "London",
      imgSrc:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, consequatur molestias sint ducimus quaerat quia soluta? Neque dolor deserunt mollitia consequatur laudantium ad. Ratione, vel eius placeat accusantium facilis dolorum`
    }
  ];
  return (
    <Fragment>
      <div
        style={{
          zIndex: 50,
          position: "relative",
          backgroundColor: "white"
        }}
      >
        {" "}
        <Container>
          <h1 className='text-center' style={{ marginTop: "50px" }}>
            <strong>
              <em>We have the best Tours</em>
            </strong>
          </h1>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            inventore odio hic, voluptate, voluptatibus in ullam cum excepturi
            cumque vitae ipsam, exercitationem optio saepe? Nemo molestias vitae
            aperiam tempora distinctio?
          </p>
        </Container>
        <Container className='mt-5'>
          <Row>
            {toptours.map(toptour => {
              return (
                <Col md={4}>
                  <CardUI key={toptours.id} toptour={toptour} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default TopTours;
