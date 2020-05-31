import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import "../../css/card-style.css";

const CardUI = ({ toptour: { imgSrc, title, desc } }) => {
  return (
    <Fragment>
      <Card className='cardUI'>
        <div className='overflow'>
          <Card.Img
            variant='top'
            src={imgSrc}
            style={{
              overflow: "hidden"
            }}
            className='CardImageTop'
          />
        </div>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button variant='primary'>Success</Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default CardUI;
