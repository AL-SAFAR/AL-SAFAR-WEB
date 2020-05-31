import React, { Fragment } from "react";
import "../../../../css/GuideReviewCard.css";
const GuideReviewCard = () => {
  return (
    <Fragment>
      <figure class='snip1204'>
        <blockquote>
          Calvin: Sometimes when I'm talking to other people, my words can't
          keep up with my thoughts. I wonder why we think faster than we speak.
          Hobbes: Probably so we can think twice.{" "}
        </blockquote>
        <div class='author'>
          <img
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample7.jpg'
            alt='sq-sample7'
          />
          <h5 style={{ color: "#0099FF" }}>Pelican Steve</h5>
          {/* <span>LittleSnippets</span> */}
        </div>
      </figure>
    </Fragment>
  );
};

export default GuideReviewCard;
