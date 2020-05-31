import React from "react";
import "../../../../css/BubbleAffectButton.scss";
import $ from "jquery";
const UserProfileForm = () => {
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

  const onClick = e => {
    console.log("Value Clicked");
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
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <label>Name:</label>
                    <input placeholder='Enter Name' type='text' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <label>Email:</label>
                    <input placeholder='Enter Email' type='email' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <label>CNIC:</label>
                    <input placeholder='Enter CNIC' type='text' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <label>Password:</label>
                    <input placeholder='Enter Password' type='password' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 '>
                  <div className='form-group'>
                    <label>About Me</label>

                    <textarea
                      id=''
                      style={{ border: "1px solid #0099FF" }}
                      rows='4'
                      cols='90'
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className=' ml-auto mr-auto'>
                  <button class='buttonloading' onClick={onClick}>
                    <span class='submit'>Update Profile</span>
                    <span class='loading'>
                      <i class='fa fa-refresh'></i>
                    </span>
                    <span class='checkIcon'>
                      <i class='fa fa-check'></i>
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

export default UserProfileForm;
