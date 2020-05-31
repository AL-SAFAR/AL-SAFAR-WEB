import React, { Fragment } from "react";
import "../../../../css/GuideCard.css";

const GuideCard = () => {
  return (
    <Fragment>
      <div className='GuideHeader'>
        <img
          className='HeaderImage'
          src={require("../../../../images/Defaults/TravelGuide/four-man-on-mountain-667236.jpg")}
          alt='GuideHeader'
        />
        <div className='GuideSearchForm'></div>
      </div>
    </Fragment>
  );
};

export default GuideCard;
