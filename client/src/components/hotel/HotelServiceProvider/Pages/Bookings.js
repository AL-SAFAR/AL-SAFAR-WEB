import React, { Fragment } from "react";
import BookingRequest from "../components/BookingRequestsTable";
const Bookings = () => {
  return (
    <Fragment>
      <div className='row mt-5 pt-5'>
        <div className='col-lg-1'></div>
        <div className='col-lg-10 col-md-12 col-sm-12'>
          <BookingRequest />
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-12 col-md-12 col-sm-12'></div>
      </div>
    </Fragment>
  );
};

export default Bookings;
