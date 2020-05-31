import React, { Fragment } from "react";
import UserProfileInfo from "../components/UserProfileInfo";
import UserProfileForm from "../components/UserProfileForm";
const UserProfile = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 mt-5'>
            <UserProfileInfo />
          </div>
          <div className='col-lg-8 mt-5'>
            <UserProfileForm />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfile;
