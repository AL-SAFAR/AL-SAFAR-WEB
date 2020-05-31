import React, { Fragment } from "react";
import "../../../../css/guide.css";
import Image from "../../../../images/HotelProfile/Haris.jpg";
import StarsRating from "stars-rating";
import Truncate from "react-truncate";
import { Redirect, useHistory } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import {
  setGuide,
  GetGuideDetails,
} from "../../../../actions/GuideProfileAction";
const GuideItem = ({
  GuideProfile: { GuideDetails },
  Item,
  GetGuideDetails,
  setGuide,
}) => {
  $(document).ready(function () {
    $(window)
      .scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top;

          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) {
            //object comes into view (scrolling down)
            if ($(this).css("opacity") == 0) {
              $(this).fadeTo(500, 1);
            }
          } else {
            //object goes out of view (scrolling up)
            if ($(this).css("opacity") == 1) {
              $(this).fadeTo(500, 0);
            }
          }
        });
      })
      .scroll();
  });

  let { item } = Item;
  console.log(Item);
  let history = useHistory();
  return (
    <Fragment>
      <div id='GuideItemBody' className=''>
        {" "}
        <figure class='snip1171' id='GuideItemCard'>
          {item.Image && (
            <img
              src={require(`../../../../images/TravelGuideProfile/${item.Image}`)}
              alt='sample71'
              style={{ height: "200px", width: "100%" }}
            />
          )}
          <div class='price'>
            Rs.
            {item.UserProfile[0].serviceCharges}
          </div>
          <figcaption
            style={{
              paddingBottom: "0px",
              paddingRight: "10px",
            }}
          >
            <h3>
              {item.name.length > 10
                ? item.name.substring(0, 10) + "..."
                : item.name}
            </h3>

            <p id='GuideItemdescription'>
              {item.UserProfile[0].description.length > 203
                ? item.UserProfile[0].description.substring(0, 203) + "..."
                : item.UserProfile[0].description}
            </p>
            <div
              className='row pt-4'
              style={{ paddingBottom: "0px", marginBottom: "0px" }}
            >
              <div className='col-lg-7'>
                <StarsRating
                  count={5}
                  size={30}
                  color2={"#0099FF"}
                  rating={5}
                />
              </div>
              <div className='col-lg-5'>
                <a
                  style={{ color: "white" }}
                  onClick={() => {
                    setGuide(item).then(() => {
                      history.push("/GuideProfile");
                    });
                    console.log("asd");
                  }}
                >
                  Details
                </a>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </Fragment>
  );
};

const MapStateToProps = (state, ownProps) => ({
  GuideProfile: state.GuideProfile,
  Item: ownProps,
});

export default connect(MapStateToProps, { GetGuideDetails, setGuide })(
  GuideItem
);
