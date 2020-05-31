import React, { Fragment } from "react";

const HotelMobileCarousel = ({ hotelImages }) => {
  return (
    <Fragment>
      <div style={{}} className='hoteldetailCarousel'>
        <div
          id='carouselExampleIndicators'
          class='carousel slide'
          data-ride='carousel'
        >
          <ol class='carousel-indicators'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              class='active'
            ></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
          </ol>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img
                class='d-block w-100'
                src={require(`../../../../images/HotelProfile/` +
                  hotelImages[0])}
                alt='Third slide'
                style={ImageStyle}
              />
            </div>
            {hotelImages.map(image => {
              return (
                <Fragment>
                  <div className='carousel-item'>
                    <img
                      class='d-block w-100'
                      src={require(`../../../../images/HotelProfile/` + image)}
                      alt='Hotel Iamge'
                      style={ImageStyle}
                    />
                  </div>
                </Fragment>
              );
            })}
          </div>
          <a
            class='carousel-control-prev'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='sr-only'>Previous</span>
          </a>
          <a
            class='carousel-control-next'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='sr-only'>Next</span>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
const ImageStyle = {
  height: "400px",
  width: "100%"
};

export default HotelMobileCarousel;
