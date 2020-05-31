import React from "react";
import "../../../../css/GuidePlaceItemAlt.css";
const GuidePlaceItemAlt = ({ Item }) => {
  return (
    <div>
      <figure class='snip1571'>
        <img
          className='GuidePlaceItemImage'
          src={require(`../../../../images/TravelGuidePlaces/${Item.image}`)}
          alt='sample21'
        />
        <figcaption>
          <h3>{Item.name}</h3>
        </figcaption>
      </figure>
    </div>
  );
};

export default GuidePlaceItemAlt;
