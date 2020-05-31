import React, { Fragment } from "react";
import HotelProfileForm from "../components/HotelProfileForm";
import HotelProfileImage from "../components/HotelProfileImage";
import RadioTest from "../components/RadioTest";

const HotelProfile = () => {
  return (
    <Fragment>
      <div className='m-1 pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <HotelProfileForm />
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <HotelProfileImage />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelProfile;
