import React, { useState } from "react";
import "../../../../css/BubbleAffectButton.scss";
import $ from "jquery";
import { connect } from "react-redux";
import {
  setGuideProfile,
  UpdateUserProfile
} from "../../../../actions/GuideProfileAction";
const UserProfileForm = ({
  GuideProfile: { name, email, cnic, mobile, ProfileImage },
  setGuideProfile,
  UpdateUserProfile
}) => {
  $(document).ready(function() {
    const button = document.querySelector(".buttonloading");
    function toggleClass() {
      this.classList.toggle("activeloading");
    }

    function addClass() {
      this.classList.add("finished");
    }

    button.addEventListener("click", toggleClass);
    button.addEventListener("transitionend", toggleClass);
    button.addEventListener("transitionend", addClass);
  });

  const [ImagePreview, setImagePreview] = useState("");

  const onImageChange = e => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    onChange(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    // CSS Refresh Icon Reset
    document.getElementById("UpdateProfile").classList.remove("finished");
    // Call to Action
    UpdateUserProfile({
      name,
      email,
      cnic,
      mobile,
      ProfileImage
    });
  };
  const onChange = e => {
    setGuideProfile({
      name: e.target.name,
      value: e.target.value,
      type: e.target.type,
      ...(e.target.files && { file: e.target.files[0] })
    });
  };

  return (
    <div className='mt-3'>
      <div>
        <div className='card card-user '>
          <div className='card-header'>
            <div className='card-title'>
              <h3 className='' style={{ color: "#0099FF" }}>
                Edit Profile
              </h3>
            </div>
          </div>
          <div className='card-body '>
            <form className=''>
              <div className='row'>
                {/* Name */}
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <label>Name:</label>
                    <input
                      placeholder='Enter Name'
                      name='name'
                      type='text'
                      onChange={onChange}
                    />
                  </div>
                </div>
                {/* Email  */}
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <label>Email:</label>
                    <input
                      placeholder='Enter Email'
                      name='email'
                      type='email'
                      onChange={onChange}
                    />
                  </div>
                </div>
                {/* CNIC */}
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <label>CNIC:</label>
                    <input
                      placeholder='Enter CNIC'
                      name='cnic'
                      type='text'
                      onChange={onChange}
                    />
                  </div>
                </div>
                {/* Current Password */}
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <label>Mobile:</label>
                    <input
                      placeholder='Enter Mobile'
                      name='mobile'
                      type='text'
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              {/* File Uploader*/}
              <div className='row'>
                <div className='col-lg-8 col-md-6 col-sm-12 '>
                  <div className='form-group'>
                    <label>Profile Image:</label>
                    <div className='custom-file mt-2'>
                      <input
                        type='file'
                        className='custom-file-input '
                        id='ProfileImage'
                        name='ProfileImage'
                        onChange={onImageChange}
                      />
                      <label className='custom-file-label' for='customFile'>
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                  <img src={ImagePreview} style={{ height: "100px" }} />
                </div>
              </div>

              {/* Update Profile Button */}
              <div className='row mt-2'>
                <div className=' ml-auto mr-auto'>
                  <button
                    className='buttonloading'
                    id='UpdateProfile'
                    type='button'
                    onClick={onSubmit}
                  >
                    <span className=''>Update Profile</span>
                    <span className='loading'>
                      <i className='fa fa-refresh'></i>
                    </span>
                    <span className='checkIcon' style={{ color: "white" }}>
                      <i className='fa fa-check'></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapStateToProps = state => ({
  GuideProfile: state.GuideProfile
});

export default connect(MapStateToProps, { setGuideProfile, UpdateUserProfile })(
  UserProfileForm
);
