import React from "react";
import "../../../../css/OrderGuide.css";
import StarsRating from "stars-rating";
import Moment from "react-moment";
const OrderGuide = ({ GuideProfile }) => {
  let date = new Date();
  console.clear();
  console.log(GuideProfile);
  let { GuideItemProfile } = GuideProfile;
  let { name } = GuideItemProfile;
  let { startDate, endDate } = GuideProfile;
  let SD = new Date(startDate);
  let ED = new Date(endDate);
  let startingDate =
    SD.getDate() + "/" + (SD.getMonth() + 1) + "/" + SD.getFullYear();
  let EndingDate =
    ED.getDate() + "/" + (ED.getMonth() + 1) + "/" + ED.getFullYear();
  let Image = GuideProfile.GuideItemProfile.Image;
  return (
    <div>
      <img
        id='GuidePaymentImage'
        src={require(`../../../../images/TravelGuideProfile/${Image}`)}
      />
      <div id='OrderGuideCaption'>
        <div id='OrderGuideName'>{name}</div>
        <small>Travel Guide</small>
      </div>

      <div id='OrderGuideDetails'>
        <div>
          <b>Location:</b> {GuideItemProfile.UserProfile[0].city}
        </div>
        <div id='ratingContainer'>
          <b> Rating:</b>
          <div id='OrderGuideRating'>
            <StarsRating count={5} size={25} color2={"#0099FF"} rating={5} />
          </div>
        </div>

        <div id='OrderGuideDates'>
          <div>
            <b>From Date:</b>
            {startingDate}
          </div>
          <div>
            <b>To Date:</b> {EndingDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderGuide;
