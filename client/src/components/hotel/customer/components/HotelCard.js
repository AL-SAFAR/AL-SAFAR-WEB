import React, { Fragment, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "../../../../css/HotelCard.scss";
import Image from "../../../../images/Serina.jpg";
import StarsRating from "stars-rating";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { UniqueRoomsByHotel } from "../../../../actions/RoomAction";
import { hotelDetail } from "../../../../actions/ViewHotelsAction";
import HotelDetail from "../pages/HotelDetail";
import { useHistory } from "react-router-dom";
import { format } from "morgan";
const HotelCard = ({
  HotelItem,
  UniqueRoomsByHotel,
  Room: { uniqueroomsHotel },
  counter,
  props,
  hotelDetail,
  ViewHotel: { DetailHotel }
}) => {
  const [redirect, setRedirect] = useState(false);
  const [runOnce, setRunOnce] = useState(true);
  const history = useHistory();
  useEffect(() => {
    localStorage.removeItem("persist:root");
    history.push("/hotel");
    let id = HotelItem._id;
    console.log("Executed");
    // UniqueRoomsByHotel(id);
    //eslint-disable-next-line
  }, []);

  const onClick = () => {
    setRedirect(true);
    hotelDetail(HotelItem);
    // history.push("/Hoteldetail");
  };

  const { hotelName, description, city, hotelImages } = HotelItem;

  return (
    <Fragment>
      {redirect && (
        <Fragment>
          <Redirect to='/hotelDetail' />
        </Fragment>
      )}

      <div id='HotelCard'>
        {" "}
        <main id='mainHotelCard' className='MainContentHotel'>
          <div class='card Hotelcard pt-5'>
            <div class='card__body'>
              <div class='half'>
                <div class='col-sm-12 featured_text'>
                  <h5 className='col-sm-12' style={{ padding: "0px" }}>
                    {hotelName}
                  </h5>
                  <p className='col-sm-12 sub'>{city}</p>
                  <p class='price'>Rs.{uniqueroomsHotel[counter]}</p>
                </div>
                <div class='image'>
                  <img
                    src={require(`../../../../images/HotelProfile/${hotelImages[0]}`)}
                    alt=''
                    style={{ height: "200px" }}
                  />
                </div>
              </div>
              <div class='half col-sm-12'>
                <div class='description' style={{ maxWidth: "100%" }}>
                  <div className='container'>
                    <p style={{ paddingBottom: "30px" }}>
                      {description.length > 200 ? (
                        <Fragment>
                          <div>{description.slice(0, 200) + "...."}</div>
                        </Fragment>
                      ) : (
                        HotelItem.description
                      )}
                    </p>
                    <div className=''>
                      <span class='stock mt-2 pt-2'>
                        <i class='fa fa-star'></i> Current Rating
                      </span>
                      <div class='reviews'>
                        <ul class='stars'>
                          <StarsRating
                            count={5}
                            size={35}
                            color2={"#0099FF"}
                            rating={5}
                          />
                          (64 reviews)
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='card__footer' style={{ marginTop: "-10px" }}>
              <div class='recommend'>
                <h4>Facilities</h4>
                <h3>
                  <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12 pb-2'>
                      <span className='mr-2'>
                        {" "}
                        {HotelItem.extras.wifi && (
                          <Fragment>
                            Wifi <i className='fa fa-wifi'></i>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 pb-2'>
                      <span className='mr-2'>
                        {HotelItem.extras.parking && (
                          <Fragment>
                            Parking<i className='fa fa-car pl-1'></i>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 pb-2'>
                      <span className='mr-2'>
                        {HotelItem.houseRules.Smoking && (
                          <Fragment>
                            Smoking<i className='fa fa-smoking pl-1'></i>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </h3>
              </div>
              <div class='action'>
                <button type='button' onClick={onClick}>
                  Detail <i className='fa fa-arrow-right'></i>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

const MapStateToProps = state => ({
  Room: state.Room,
  ViewHotel: state.ViewHotel
});

HotelCard.defaultProps = {
  uniqueroomsHotel: PropTypes.array.isRequired
};

export default connect(MapStateToProps, {
  UniqueRoomsByHotel,
  hotelDetail
})(withRouter(HotelCard));
