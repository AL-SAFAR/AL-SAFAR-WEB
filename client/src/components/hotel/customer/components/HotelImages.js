import React, { Fragment } from "react";
import HotelCarousel from "./HotelDesktopCarousel";

const HotelImages = ({ hotelImages }) => {
  return (
    <Fragment>
      {" "}
      {hotelImages && (
        <Fragment>
          <div
            className='desktop-carousel hoteldetailCarousel'
            style={{ marginTop: "40px" }}
          >
            <div className='row ImagesRow'>
              <div
                className='col-lg-6 ImagesCol'
                style={{ margin: "0px", padding: "0px" }}
              >
                <img
                  className='imgHoverEffect'
                  src={require(`../../../../images/HotelProfile/${hotelImages[0]}`)}
                  style={{ width: "100%", height: "400px" }}
                  data-toggle='modal'
                  data-target='#exampleModal'
                />
              </div>
              <div
                className='col-lg-3 ImagesCol'
                style={{ margin: "0px", padding: "0px" }}
              >
                <div className='row ImagesRow'>
                  <div className='col-lg-12 ImagesCol'>
                    {hotelImages.length >= 1 && (
                      <img
                        className='imgHoverEffect'
                        src={require(`../../../../images/HotelProfile/${hotelImages[1]}`)}
                        style={{ width: "100%", height: "200px" }}
                        data-toggle='modal'
                        data-target='#exampleModal'
                      />
                    )}
                  </div>
                </div>
                <div className=' row ImagesRow'>
                  <div className='col-lg-12 ImagesCol'>
                    {hotelImages.length >= 2 && (
                      <img
                        className='imgHoverEffect'
                        src={require(`../../../../images/HotelProfile/${hotelImages[2]}`)}
                        style={{ width: "100%", height: "200px" }}
                        data-toggle='modal'
                        data-target='#exampleModal'
                      />
                    )}
                  </div>
                </div>
              </div>
              <div
                className='col-lg-3'
                style={{ margin: "0px", padding: "0px" }}
              >
                <div className='row ImagesRow'>
                  <div className='col-lg-12 ImagesCol'>
                    {hotelImages.length >= 3 && (
                      <img
                        className='imgHoverEffect'
                        src={require(`../../../../images/HotelProfile/${hotelImages[3]}`)}
                        style={{ width: "100%", height: "200px" }}
                        data-toggle='modal'
                        data-target='#exampleModal'
                      />
                    )}
                  </div>
                </div>
                <div className='row ImagesRow'>
                  <div className='col-lg-12 ImagesCol'>
                    {hotelImages.length >= 4 && (
                      <img
                        className='imgHoverEffect'
                        src={require(`../../../../images/HotelProfile/${hotelImages[4]}`)}
                        style={{ width: "100%", height: "200px" }}
                        data-toggle='modal'
                        data-target='#exampleModal'
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog full_modal-dialog' role='document'>
          <div class='modal-content full_modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Hotel Images
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <HotelCarousel hotelImages={hotelImages} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelImages;
