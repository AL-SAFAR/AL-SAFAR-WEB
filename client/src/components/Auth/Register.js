import React, { Fragment, useEffect, useState } from "react";
import "../../css/ClientAuth.scss";
import $ from "jquery";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  setAuthClient,
  AuthenticateClient,
  ClearAuthClient
} from "../../actions/AuthClientAction";

import Swal from "sweetalert2";
const Register = ({
  AuthClient: {
    emailSignIn,
    passwordSignIn,
    nameSignUp,
    emailSignUp,
    passwordSignUp,
    confirmpass,
    isAuthenticated
  },
  setAuthClient,
  AuthenticateClient,
  ClearAuthClient
}) => {
  $(document).ready(function() {
    $(".ClientAuthInput input")
      .focus(function() {
        $(this)
          .parent(".ClientAuthInput")
          .each(function() {
            $("label", this).css({
              "line-height": "18px",
              "font-size": "18px",
              "font-weight": "100",
              top: "0px"
            });
            $(".spin", this).css({
              width: "100%"
            });
          });
      })
      .blur(function() {
        $(".spin").css({
          width: "0px"
        });
        if ($(this).val() == "") {
          $(this)
            .parent(".ClientAuthInput")
            .each(function() {
              $("label", this).css({
                "line-height": "60px",
                "font-size": "24px",
                "font-weight": "300",
                top: "10px"
              });
            });
        }
      });

    $(".alt-2").click(function() {
      if (!$(this).hasClass("material-button")) {
        $(".shape").css({
          width: "100%",
          height: "100%",
          transform: "rotate(0deg)"
        });

        setTimeout(function() {
          $(".ClientAuthOverBox").css({
            overflow: "initial"
          });
        }, 600);

        $(this).animate(
          {
            width: $(window).width() >= 481 ? "140px" : "70px",
            height: $(window).width() >= 481 ? "140px" : "70px"
          },
          500,
          function() {
            $(".ClientAuthBox").removeClass("back");

            $(this).removeClass("active");
          }
        );

        $(".ClientAuthOverBox .ClientAuthTitle").fadeOut(300);
        $(".ClientAuthOverBox .ClientAuthInput").fadeOut(300);
        $(".ClientAuthOverBox .ClientAuthButton").fadeOut(300);

        $(".alt-2").addClass("material-buton");
      }
    });

    $(".material-button").click(function() {
      if ($(this).hasClass("material-button")) {
        setTimeout(function() {
          $(".ClientAuthOverBox").css({
            overflow: "hidden"
          });
          $(".ClientAuthBox").addClass("back");
        }, 200);
        $(this)
          .addClass("active")
          .animate({
            width: "700px",
            height: "700px"
          });

        setTimeout(function() {
          $(".shape").css({
            width: "50%",
            height: "50%",
            transform: "rotate(45deg)"
          });

          $(".ClientAuthOverBox .ClientAuthTitle").fadeIn(300);
          $(".ClientAuthOverBox .ClientAuthInput").fadeIn(300);
          $(".ClientAuthOverBox .ClientAuthButton").fadeIn(300);
        }, 700);

        $(this).removeClass("material-button");
      }

      if ($(".alt-2").hasClass("material-buton")) {
        $(".alt-2").removeClass("material-buton");
        $(".alt-2").addClass("material-button");
      }
    });
  });

  // useEffect(() => {
  //   localStorage.removeItem("persist:root");
  //   ClearAuthClient();
  // }, []);
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 500;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (isMobile) {
      $(this).animate(
        {
          width: $(window).width() >= 481 ? "140px" : "70px",
          height: $(window).width() >= 481 ? "140px" : "70px"
        },
        500,
        function() {
          $(".ClientAuthBox").removeClass("back");

          $(this).removeClass("active");
        }
      );
    } else {
    }
  }, []);
  const onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    // alert(name + " " + value);
    setAuthClient({
      name,
      value
    });
  };

  const onSubmit = SignIn => {
    let data = {
      SignIn,
      emailSignIn,
      passwordSignIn,
      nameSignUp,
      emailSignUp,
      passwordSignUp,
      confirmpass,
      isAuthenticated
    };
    if (!SignIn) {
      if (passwordSignUp !== confirmpass)
        Swal.fire({
          icon: "Error",
          title: "Password and Confirm Password do not match"
        });
    }
    AuthenticateClient(data);
  };

  return (
    <Fragment>
      {localStorage.getItem("token") && <Redirect to='/' />}
      <div
        id='ClientAuthBody'
        style={{
          backgroundImage: `url(https://wallpaperaccess.com/full/1510383.jpg)`,
          position: "relative"
        }}
      >
        <div class='materialContainer p-2 mt-5 mb-5'>
          <div class='ClientAuthBox'>
            <div class='ClientAuthTitle'>LOGIN</div>

            <div class='ClientAuthInput'>
              <label for='email'>Email</label>
              <input
                type='email'
                name='emailSignIn'
                id='email'
                onChange={onChange}
                required
              />
              <span class='spin'></span>
            </div>

            <div class='ClientAuthInput'>
              <label for='pass'>Password</label>
              <input
                type='password'
                name='passwordSignIn'
                id='pass'
                onChange={onChange}
                required
              />
              <span class='spin'></span>
            </div>

            <div class='ClientAuthButton login'>
              <button onClick={() => onSubmit(true)}>
                <span>Login</span> <i class='fa fa-check'></i>
              </button>
            </div>

            <a href='' class='pass-forgot'>
              Don't have an Account? <a href='#!'>Register</a>
            </a>
            <a href='' class='pass-forgot'>
              Forgot your password?
            </a>
          </div>

          <div class='ClientAuthOverBox'>
            <div class='material-button alt-2'>
              <span class='shape'></span>
            </div>

            <div class='ClientAuthTitle'>REGISTER</div>

            <div class='ClientAuthInput'>
              <label for='nameSignUp'>Full Name:</label>
              <input
                type='text'
                name='nameSignUp'
                id='nameSignUp'
                onChange={onChange}
                required
              />
              <span class='spin'></span>
            </div>
            <div class='ClientAuthInput'>
              <label for='emailSignUp'>Email</label>
              <input
                type='email'
                name='emailSignUp'
                id='emailSignUp'
                onChange={onChange}
                required
              />
              <span class='spin'></span>
            </div>

            <div class='ClientAuthInput'>
              <label for='passwordSignUp'>Password</label>
              <input
                type='password'
                name='passwordSignUp'
                id='passwordSignUp'
                onChange={onChange}
                required
              />
              <span class='spin'></span>
            </div>

            <div class='ClientAuthInput'>
              <label for='confirmpass'>Confirm Password</label>
              <input
                type='password'
                name='confirmpass'
                id='confirmpass'
                onChange={onChange}
                required
              />
              <span class='spin'></span>
            </div>

            <div class='ClientAuthButton'>
              <button onClick={() => onSubmit(false)}>
                <span>Register</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const MapStateToProps = state => ({
  AuthClient: state.AuthClient
});
export default connect(MapStateToProps, {
  setAuthClient,
  AuthenticateClient,
  ClearAuthClient
})(Register);
