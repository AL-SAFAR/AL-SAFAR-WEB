import React, { Fragment } from "react";
import "../../../../css/guideItemAlt.css";
import Image from "../../../../images/HotelProfile/Haris.jpg";
import StarsRating from "stars-rating";
import {
  setGuide,
  GetGuideDetails,
} from "../../../../actions/GuideProfileAction";

import { connect } from "react-redux";
const GuideItemAlt = ({
  GuideProfile: { GuideDetails },
  Item,
  GetGuideDetails,
  setGuide,
}) => {
  let { item } = Item;
  return (
    <Fragment>
      <div className='container'>
        <figure class='snip0045 red'>
          <figcaption>
            <h2>
              {item.name.length > 10
                ? item.name.substring(0, 10) + "..."
                : item.name}
            </h2>
            <p id='GuideItemdescription'>
              {item.UserProfile[0].description.length > 50
                ? item.UserProfile[0].description.substring(0, 50) + "..."
                : item.UserProfile[0].description}
            </p>
            <StarsRating count={5} size={30} color2={"#0099FF"} rating={5} />
          </figcaption>
          <img
            src={require(`../../../../images/TravelGuideProfile/${item.Image}`)}
            alt='sample7'
          />
          <div class='position'>
            <span>Rs.10,000</span>
            Details
          </div>
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
  GuideItemAlt
);
