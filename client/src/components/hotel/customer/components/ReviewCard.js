import React from "react";
import "../../../../css/ReviewCard.scss";
import ReviewImage from "../../../../images/HotelProfile/Haris.jpg";
const ReviewCard = () => {
  return (
    <div className='' style={{ width: "100%" }}>
      <figure class='snip1506'>
        <div class='profile-image'>
          <img
            className='imgHoverEffect'
            src={ReviewImage}
            alt='profile-sample4'
          />
        </div>
        <figcaption>
          <h3>Muhammad Haris</h3>
          <h4>Feb 18,2020</h4>
          <p>Amazing stay as always. Will surely book again.</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default ReviewCard;
