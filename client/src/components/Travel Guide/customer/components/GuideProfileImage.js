import React from "react";
import $ from "jquery";
import "../../../../css/GuideProfileImage.css";
const GuideProfileImage = ({ Image, name }) => {
  $(document).ready(function () {
    /* Demo purposes only */
    var snippet = [].slice.call(document.querySelectorAll(".hover"));
    if (snippet.length) {
      snippet.forEach(function (snippet) {
        snippet.addEventListener("mouseout", function (event) {
          if (event.target.parentNode.tagName === "figure") {
            event.target.parentNode.classList.remove("hover");
          } else {
            event.target.parentNode.classList.remove("hover");
          }
        });
      });
    }
  });
  let FullName = name.split(" ");
  return (
    <figure class='snip1581'>
      <img
        src={require(`../../../../images/TravelGuideProfile/${Image}`)}
        alt='profile-sample6'
      />
      <figcaption>
        <h3 class='title1'>{FullName[0]}</h3>
        <h3 class='title2'>{FullName[1] && FullName[1]}</h3>
        <h3 class='title3'></h3>
      </figcaption>
      <a href='#'></a>
    </figure>
  );
};

export default GuideProfileImage;
