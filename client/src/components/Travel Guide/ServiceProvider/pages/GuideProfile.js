import React, { Fragment } from "react";
import GuideProfileForm from "../components/GuideProfileForm";
const GuideProfile = () => {
  return (
    <Fragment>
      <div className='GuideProfileForm mt-5 '>
        <div className='row'>
          <div className='container'>
            <div className='col-lg-12'>
              <GuideProfileForm />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GuideProfile;
