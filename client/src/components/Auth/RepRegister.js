import React, { Fragment, useEffect } from "react";
import "../../../src/css/RepRegister.css";
import "../../../src/css/ServiceProviderSelector.scss";
import { urlencoded } from "body-parser";
import $ from "jquery";
import Image from "../../images/cartoon.gif";
import { connect } from "react-redux";
import { setAuthRep, AuthenticateRep } from "../../actions/AuthRepAction";
import Swal from "sweetalert2";
import { Redirect, useHistory } from "react-router-dom";

const RepRegister = ({
  AuthRep: {
    SignIn,
    emailSignIn,
    passwordSignIn,
    nameSignUp,
    emailSignUp,
    phoneSignUp,
    cnicSignUp,
    passwordSignUp,
    confirmpass,
    isAuthenticated
  },
  setAuthRep,
  AuthenticateRep
}) => {
  if (isAuthenticated !== null) {
    return <Redirect to={`/${isAuthenticated}/dashboard/`} />;
  }

  $(document).ready(function() {
    var $activeWidth,
      $defaultMarginLeft,
      $defaultPaddingLeft,
      $firstChild,
      $line,
      $navListItem;

    $line = $("#line");

    $navListItem = $(".nav-li");

    $activeWidth = $(".active-nav").width();

    $firstChild = $(".nav-li:first-child");

    $defaultMarginLeft = parseInt(
      $(".nav-li:first-child")
        .next()
        .css("marginLeft")
        .replace(/\D/g, "")
    );

    $defaultPaddingLeft = parseInt(
      $("#nav-container > ul")
        .css("padding-left")
        .replace(/\D/g, "")
    );

    $line.width($activeWidth + "px");

    $line.css("marginLeft", $defaultPaddingLeft + "px");

    $navListItem.click(function() {
      var $activeNav,
        $currentIndex,
        $currentOffset,
        $currentWidth,
        $initWidth,
        $marginLeftToSet,
        $this;
      $this = $(this);
      $activeNav = $(".active-nav");
      $currentWidth = $activeNav.width();
      $currentOffset = $activeNav.position().left;
      $currentIndex = $activeNav.index();
      $activeNav.removeClass("active-nav");
      $this.addClass("active-nav");
      if ($this.is($activeNav)) {
        return 0;
      } else {
        if ($this.index() > $currentIndex) {
          if ($activeNav.is($firstChild)) {
            $initWidth =
              $defaultMarginLeft +
              $this.width() +
              $this.position().left -
              $defaultPaddingLeft;
          } else {
            $initWidth = $this.position().left + $this.width() - $currentOffset;
          }
          $marginLeftToSet = $this.position().left + $defaultMarginLeft + "px";
          $line.width($initWidth + "px");
          return setTimeout(function() {
            $line.css("marginLeft", $marginLeftToSet);
            return $line.width($this.width() + "px");
          }, 175);
        } else {
          if ($this.is($firstChild)) {
            $initWidth =
              $currentOffset -
              $defaultPaddingLeft +
              $defaultMarginLeft +
              $currentWidth;
            $marginLeftToSet = $this.position().left;
          } else {
            $initWidth = $currentWidth + $currentOffset - $this.position().left;
            $marginLeftToSet = $this.position().left + $defaultMarginLeft;
          }
          $line.css("marginLeft", $marginLeftToSet);
          $line.width($initWidth + "px");
          return setTimeout(function() {
            return $line.width($this.width() + "px");
          }, 175);
        }
      }
    });
  });

  const onClick = e => {
    let name = e.target.name;
    let value = e.target.value;
    if (value === "SignIn") {
      value = true;
      document.getElementById("tab-2").checked = false;
      document.getElementById("tab-1").checked = true;
    } else {
      value = false;
      document.getElementById("tab-1").checked = false;
      document.getElementById("tab-2").checked = true;
    }
    name = "SignIn";
    setAuthRep({
      name,
      value
    });
  };
  const onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    setAuthRep({
      name,
      value
    });
  };
  const onSubmit = () => {
    if (passwordSignUp !== confirmpass && !SignIn) {
      Swal.fire({
        icon: "error",
        title: "Sign Up Failure",
        text: "Password and Confirm Password do not match!"
      });
      return;
    }
    let Representative = document.getElementsByClassName("active-nav")[0]
      .innerHTML;
    Representative = Representative.trim();

    console.log("On SUbmit");
    let AuthObj = {
      SignIn,
      emailSignIn,
      passwordSignIn,
      nameSignUp,
      emailSignUp,
      phoneSignUp,
      cnicSignUp,
      passwordSignUp,
      Representative
    };
    // console.log(AuthObj);
    AuthenticateRep(AuthObj);
  };

  return (
    <Fragment>
      <section
        class='hero'
        style={{
          marginBottom: "0px",
          paddingBottom: "0px",
          maxWidth: "100%",
          maxHeight: "100%"
        }}
      >
        <div class='content mt-5 py-5' style={{ zIndex: 2 }}>
          <div className='row RegisterRow'>
            <div
              className='col-lg-6 col-sm-12 col-md-12'
              style={{ marginRight: "-30px", paddingRight: "-20px" }}
            >
              <img id='RepAuthImage' src={Image} height='100%' width='100%' />
            </div>
            <div className='col-lg-6 col-sm-12 col-md-12'>
              <div
                class='login-wrap'
                style={{ paddingLeft: "0px", marginLeft: "0px" }}
              >
                {/* Service Provider Selectors */}

                <div id='ServiceProvider'>
                  <div className='SP_Selector px-5 pt-5'>
                    <section id='nav-test'>
                      <div id='nav-container'>
                        <ul>
                          <li class='nav-li active-nav py-2'>Hotel</li>
                          <li class='nav-li py-2'>Agent</li>
                          <li class='nav-li py-2'>Guide</li>
                        </ul>
                        <div id='line'></div>
                      </div>
                    </section>
                  </div>
                </div>

                <div class='login-html' style={{ paddingTop: "120px" }}>
                  <input
                    id='tab-1'
                    type='radio'
                    name='SignIn'
                    class='sign-in'
                    value='SignIn'
                    onClick={onClick}
                    defaultChecked={true}
                  />
                  <label for='tab-1' class='tab'>
                    Sign In
                  </label>
                  <input
                    id='tab-2'
                    type='radio'
                    name='SignUp'
                    onClick={onClick}
                    value='SignUp'
                    class='sign-up'
                  />
                  <label for='tab-2' class='tab'>
                    Sign Up
                  </label>
                  <div class='login-form'>
                    <div class='sign-in-htm '>
                      <div class='group'>
                        <label for='email' class='label'>
                          Email
                        </label>
                        <input
                          id='email'
                          type='email'
                          name='emailSignIn'
                          onChange={onChange}
                          class='input'
                          required
                        />
                      </div>
                      <div class='group'>
                        <label for='pass' class='label'>
                          Password
                        </label>
                        <input
                          id='pass'
                          type='password'
                          class='input'
                          data-type='password'
                          name='passwordSignIn'
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div class='group'>
                        <input
                          id='check'
                          type='checkbox'
                          class='check'
                          checked
                        />
                        <label for='check'>
                          <span class='icon'></span> Keep me Signed in
                        </label>
                      </div>
                      <div class='group'>
                        <input
                          onClick={onSubmit}
                          type='submit'
                          class='button'
                          value='Sign In'
                        />
                      </div>
                      <div class='hr'></div>
                      <div class='foot-lnk'>
                        <a href='#forgot'>Forgot Password?</a>
                      </div>
                    </div>
                    {/* name,email,password,mobile,CNIC */}
                    <div class='sign-up-htm'>
                      <div class='group'>
                        <label for='user' class='label'>
                          Name
                        </label>
                        <input
                          id='user'
                          type='text'
                          class='input'
                          name='nameSignUp'
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div class='group'>
                        <label for='email' class='label'>
                          Email:
                        </label>
                        <input
                          id='email'
                          type='email'
                          class='input'
                          name='emailSignUp'
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div class='group'>
                        <label for='phone' class='label'>
                          Phone:
                        </label>
                        <input
                          id='phone'
                          type='text'
                          class='input'
                          name='phoneSignUp'
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div class='group'>
                        <label for='CNIC' class='label'>
                          CNIC:
                        </label>
                        <input
                          id='CNIC'
                          type='text'
                          class='input'
                          name='cnicSignUp'
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div class='group'>
                        <label for='pass' class='label'>
                          Password
                        </label>
                        <input
                          id='pass'
                          type='password'
                          class='input'
                          data-type='password'
                          name='passwordSignUp'
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div class='group'>
                        <label for='confirmpass' class='label'>
                          Confirm Password
                        </label>
                        <input
                          id='confirmpass'
                          type='password'
                          name='confirmpass'
                          class='input'
                          data-type='password'
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div class='group'>
                        <input
                          onClick={onSubmit}
                          class='button'
                          value='Sign Up'
                          type='submit'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='waves'></div>
      </section>
    </Fragment>
  );
};
const MapStateToProps = state => ({
  AuthRep: state.AuthRep
});

export default connect(MapStateToProps, { setAuthRep, AuthenticateRep })(
  RepRegister
);
