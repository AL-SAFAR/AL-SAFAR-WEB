import React from "react";
import $ from "jquery";
import "../../../../css/GuidePlaceItem.css";
const GuidePlaceItem = ({ Item }) => {
  console.clear();
  console.log(Item);
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
  return (
    <div>
      <figure class='snip1585'>
        <img
          className='GuidePlaceItemImage'
          src={require(`../../../../images/TravelGuidePlaces/${Item.image}`)}
          alt='sample70'
        />
        <figcaption>
          <h3>
            <span>{Item.name}</span>
          </h3>
        </figcaption>
      </figure>
    </div>
  );
};

export default GuidePlaceItem;
