import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
const DeluxePackages = () => {
  return (
    <Fragment>
      <style type="text/css">
        {`

        `}
      </style>
      <div
        style={{
          backgroundImage: `url(https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-13-at-21.28.33.png)`,
          height: "500px",
          width: "auto",
          objectFit: "contain",
          marginTop: "50px"
        }}
      >
        <Carousel
          style={{ padding: "100px" }}
          showControls={true}
          showIndicators={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.riphah.edu.pk/sites/default/files/islamabad.jpg"
              alt="First slide"
              style={imageStyle}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.parhlo.com/wp-content/uploads/2017/04/fiii-1.jpg"
              alt="Third slide"
              style={imageStyle}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.ajktours.com/wp-content/uploads/2016/11/Banjosa_lake-Rawalakot.jpg"
              alt="Third slide"
              style={imageStyle}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
};
const imageStyle = {
  height: "300px",
  width: "auto"
};

export default DeluxePackages;
