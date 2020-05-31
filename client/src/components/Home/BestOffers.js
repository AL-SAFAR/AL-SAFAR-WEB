import React, { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CardImgLeft from "./CardImgLeft";
const BestOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Marriot",
      imgSrc:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      desc:
        "The 5-star Islamabad Marriott Hotel provides high speed wireless internet, an indoor pool and a fitness center. Pampering spa treatments with separate male and female lounges are also available. Room service is available 24 hours a day.The modern air-conditioned rooms "
    },
    {
      id: 2,
      title: "Marriot",
      imgSrc:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      desc:
        "The 5-star Islamabad Marriott Hotel provides high speed wireless internet, an indoor pool and a fitness center. Pampering spa treatments with separate male and female lounges are also available. Room service is available 24 hours a day.The modern air-conditioned rooms "
    },
    {
      id: 3,
      title: "Marriot",
      imgSrc:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      desc:
        "The 5-star Islamabad Marriott Hotel provides high speed wireless internet, an indoor pool and a fitness center. Pampering spa treatments with separate male and female lounges are also available. Room service is available 24 hours a day.The modern air-conditioned rooms"
    },
    {
      id: 4,
      title: "Marriot",
      imgSrc:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      desc:
        "The 5-star Islamabad Marriott Hotel provides high speed wireless internet, an indoor pool and a fitness center. Pampering spa treatments with separate male and female lounges are also available. Room service is available 24 hours a day.The modern air-conditioned rooms"
    }
  ];
  return (
    <Fragment>
      <Container className='text-center my-4'>
        <h4>
          <em>The Best Offers with Rooms</em>
        </h4>
      </Container>
      <Container>
        <Row>
          {offers.map(offer => {
            return (
              <Col md={6} className='my-5'>
                <CardImgLeft key={offer.id} offer={offer} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default BestOffers;
