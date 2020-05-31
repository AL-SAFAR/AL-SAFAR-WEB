import React, { Fragment } from "react";
import HotelCard from "./HotelCard";
import { connect } from "react-redux";
import { UniqueRoomsByHotel } from "../../../../actions/RoomAction";
const ListHotel = ({ HotelList, indexOfFirstHotel, UniqueRoomsByHotel }) => {
  let counter = indexOfFirstHotel - 1;

  return (
    <Fragment>
      {HotelList.map(HotelItem => {
        ++counter;
        // UniqueRoomsByHotel(HotelItem._id);

        return <HotelCard HotelItem={HotelItem} counter={counter} />;
      })}
    </Fragment>
  );
};

export default connect(null, { UniqueRoomsByHotel })(ListHotel);
