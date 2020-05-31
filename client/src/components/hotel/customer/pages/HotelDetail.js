import React, { Fragment, useState, useEffect } from "react";
import HotelImages from "../components/HotelImages";
import "../../../../css/hotelDetail.css";
import "../../../../css/ReadMore.css";
import ReviewCard from "../components/ReviewCard";
import StarsRating from "stars-rating";

import $ from "jquery";
import Pagination from "../components/Pagination";
import AmenitiesModal from "../components/AmenitiesModal";
import RoomReserve from "../components/RoomReserve";
import { connect } from "react-redux";
import { hotelDetail } from "../../../../actions/ViewHotelsAction";
import { withRouter, Redirect, useHistory } from "react-router-dom";
import HotelCarousel from "../components/HotelCarousel";
const HotelDetail = ({ ViewHotel: { DetailHotel } }) => {
  useEffect(() => {
    if (DetailHotel === null) {
      console.log("Executed");
      return <Redirect to='/hotel' />;
    }
    //eslint-disable-next-line
  }, [DetailHotel]);

  const [ModalAmenities, setModalAmenities] = useState({
    name: "",
    array: []
  });

  $(document).ready(function() {
    window.$("#amenitiesmodal").modal({ show: false });
  });

  const onClick = () => {
    window.$("#amenitiesmodal").modal("show");
  };

  const onAmenitiesClick = e => {
    if (e.target.id === "food") {
      setModalAmenities({
        name: "Food",
        array: foods
      });
    } else if (e.target.id === "cleaning") {
      setModalAmenities({
        name: "Cleaning",
        array: Cleaning
      });
    } else {
      setModalAmenities({
        name: "General",
        array: general
      });
    }
    window.$("#amenitiesmodal").modal("show");
  };

  const {
    hotelName,
    hotelImages,
    address,
    description,
    starRating,
    extras,
    houseRules,
    city
  } = DetailHotel;

  const { facilities, wifi, foods, parking } = extras;

  const { Cleaning, general } = facilities;

  const { Smoking, checkIn, checkOut } = houseRules;

  const ReadMore = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("ReadMoreBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = " Read More<i class='ion-clipboard'></i>";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = " Read Less<i class='ion-clipboard'></i>";
      moreText.style.display = "inline";
    }
  };

  return (
    <Fragment>
      <AmenitiesModal name={ModalAmenities.name} array={ModalAmenities.array} />
      <HotelCarousel hotelImages={hotelImages} />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='HotelHeading mt-5'>
              <h1>{hotelName}</h1>
              <h6>{city}</h6>
            </div>
            <hr />
            <div className='description'>
              {description.length > 400 ? (
                <Fragment>
                  {description.slice(0, 400)}
                  <span id='dots' style={{ color: "#0099FF" }}>
                    ...
                  </span>
                  <span id='more' style={{ display: "none" }}>
                    {description.slice(400)}
                  </span>
                </Fragment>
              ) : (
                description
              )}
              <button
                id='ReadMoreBtn'
                class='snip1434 ReadMorehover'
                onClick={ReadMore}
              >
                Read More<i class='ion-clipboard'></i>
              </button>{" "}
            </div>
            <hr />
            <div className='HotelHeading Amenities'>
              <h5>Amenities</h5>
              <div className='container pt-3 pl-3 pr-3'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <h6>
                      {wifi && (
                        <Fragment>
                          <i className='fa fa-wifi amenitiesIcon'></i>
                          <span className='pl-3'>Wifi</span>
                        </Fragment>
                      )}
                    </h6>
                  </div>
                  <div className='col-lg-6'>
                    <h6>
                      {Smoking && (
                        <Fragment>
                          <i className='fa fa-smoking amenitiesIcon'></i>
                          <span className='pl-3'>Smoking</span>
                        </Fragment>
                      )}
                    </h6>
                  </div>
                </div>
                <div className='row pt-4'>
                  <div className='col-lg-6'>
                    <h6>
                      {parking && (
                        <Fragment>
                          <i className='fa fa-car amenitiesIcon'></i>
                          <span className='pl-3'>Parking</span>
                        </Fragment>
                      )}
                    </h6>
                  </div>
                  <div className='col-lg-6'></div>
                </div>
                <hr />
              </div>
            </div>
            {foods.length > 0 && (
              <div className='HotelFoodNames'>
                <Fragment>
                  <div className='HotelHeading '>
                    <h5>
                      <i
                        className='fa fa-hamburger pr-2'
                        style={{ color: "#0099FF" }}
                      ></i>
                      Food
                    </h5>
                    <div className='listofFoods'>
                      <div className='container mx-5'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <h6>{foods[0]}</h6>
                          </div>
                          <div className='col-lg-6'>
                            <h6>{foods.length > 1 && foods[1]}</h6>
                          </div>
                        </div>
                        <div className='row mt-3'>
                          <div className='col-lg-6'>
                            <h6>{foods.length > 2 && foods[2]}</h6>
                          </div>
                          <div className='col-lg-6'>
                            <button
                              id='food'
                              onClick={onAmenitiesClick}
                              class='snip1434 ReadMorehover'
                            >
                              Show All<i class='ion-clipboard'></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: "-90px" }}>
                        <hr />
                      </div>
                    </div>
                  </div>
                </Fragment>
              </div>
            )}
            {Cleaning.length > 0 && (
              <div className='Cleaning mt-4'>
                <Fragment>
                  <div className='HotelHeading '>
                    <h5>
                      <i
                        className='fa fa-broom pr-2'
                        style={{ color: "#0099FF" }}
                      ></i>
                      Cleaning
                    </h5>
                    <div className='listofFoods'>
                      <div className='container mx-5'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <h6>{Cleaning[0]}</h6>
                          </div>
                          <div className='col-lg-6'>
                            <h6>{Cleaning.length > 1 && Cleaning[1]}</h6>
                          </div>
                        </div>
                        <div className='row mt-3'>
                          <div className='col-lg-6'>
                            <h6>{Cleaning.length > 2 && Cleaning[2]}</h6>
                          </div>
                          <div className='col-lg-6'>
                            <button
                              id='cleaning'
                              onClick={e => onAmenitiesClick(e)}
                              class='snip1434 ReadMorehover'
                            >
                              Show All<i class='ion-clipboard'></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr style={{ marginTop: "-90px" }} />
                    </div>
                  </div>
                </Fragment>
              </div>
            )}

            {general.length > 0 && (
              <div className='General mt-4'>
                <Fragment>
                  <div className='HotelHeading '>
                    <h5>
                      <i
                        className='fa fa-umbrella-beach pr-2'
                        style={{ color: "#0099FF" }}
                      ></i>
                      General
                    </h5>
                    <div className='listofFoods'>
                      <div className='container mx-5'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <h6>{general[0]}</h6>
                          </div>
                          <div className='col-lg-6'>
                            <h6>{general.length > 1 && general[1]}</h6>
                          </div>
                        </div>
                        <div className='row mt-3'>
                          <div className='col-lg-6'>
                            <h6>{general.length > 2 && general[2]}</h6>
                          </div>
                          <div className='col-lg-6'>
                            <button
                              id='general'
                              onClick={onAmenitiesClick}
                              class='snip1434 ReadMorehover'
                            >
                              Show All<i class='ion-clipboard'></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr style={{ marginTop: "-90px" }} />
                    </div>
                  </div>
                </Fragment>
              </div>
            )}
            {houseRules && (
              <Fragment>
                <div className='HouseRules mt-4'>
                  <div className='HotelHeading '>
                    <h5>
                      <i
                        className='fa fa-clipboard-list pr-2'
                        style={{ color: "#0099FF" }}
                      ></i>
                      House Rules
                    </h5>
                    <div className='listofFoods'>
                      <div className='container mx-5'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <h6>CheckIn-Time: {checkIn}</h6>
                          </div>
                          <div className='col-lg-6'>
                            <h6>CheckOut-Time: {checkOut}</h6>
                          </div>
                        </div>
                      </div>
                      <hr style={{ marginTop: "-90px" }} />
                    </div>
                  </div>
                </div>
              </Fragment>
            )}

            <div className='Review mt-4'>
              <div className='HotelHeading '>
                <h5>
                  <i
                    className='fa fa-star-half-alt pr-2'
                    style={{ color: "#0099FF" }}
                  ></i>
                  Reviews
                </h5>
                <div className='listofFoods'>
                  <div className='container '>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='row mx-5 px-5'>
                          {/* <div className='col-lg-3'>Current Rating:</div> */}
                          <div className='col-lg-9'>
                            <StarsRating
                              count={5}
                              size={40}
                              color2={"#0099FF"}
                            />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-4 text-right'>
                            {" "}
                            Communication
                          </div>
                          <div className='col-lg-4'>
                            <div class='progress'>
                              <div
                                class='progress-bar progress-bar-striped progress-bar-animated'
                                role='progressbar'
                                aria-valuenow='75'
                                aria-valuemin='0'
                                aria-valuemax='100'
                                style={{ width: "100%" }}
                              ></div>
                            </div>{" "}
                          </div>
                          <div className='col-lg-4'>5.0</div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-4 text-right'> Accuracy</div>
                          <div className='col-lg-4'>
                            <div class='progress'>
                              <div
                                class='progress-bar progress-bar-striped progress-bar-animated'
                                role='progressbar'
                                aria-valuenow='75'
                                aria-valuemin='0'
                                aria-valuemax='100'
                                style={{ width: "75%" }}
                              ></div>
                            </div>{" "}
                          </div>
                          <div className='col-lg-4'>4.0</div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-4 text-right'> Check-in</div>
                          <div className='col-lg-4'>
                            <div class='progress'>
                              <div
                                class='progress-bar progress-bar-striped progress-bar-animated'
                                role='progressbar'
                                aria-valuenow='75'
                                aria-valuemin='0'
                                aria-valuemax='100'
                                style={{ width: "75%" }}
                              ></div>
                            </div>{" "}
                          </div>
                          <div className='col-lg-4'>4.0</div>
                        </div>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-lg-6'></div>
                      <div className='col-lg-6'></div>
                    </div>
                  </div>
                  <hr style={{ marginTop: "-90px" }} />
                </div>{" "}
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <ReviewCard />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <ReviewCard />
                    </div>
                  </div>
                </div>
                <hr style={{ marginTop: "-40px" }} />
                <div className='container' style={{ marginTop: "-40px" }}>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <Pagination />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <RoomReserve />
          </div>
        </div>
      </div>{" "}
    </Fragment>
  );
};

const MaptStateToProps = state => ({
  ViewHotel: state.ViewHotel
});

export default connect(MaptStateToProps, {
  hotelDetail
})(withRouter(HotelDetail));
