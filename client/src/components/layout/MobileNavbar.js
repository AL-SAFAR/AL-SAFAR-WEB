import React, { Fragment, useState } from "react";
import $ from "jquery";
import "../../css/MobileNavbar.scss";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClearAuthClient } from "../../actions/AuthClientAction";
const MobileNavbar = ({ AuthClient: { isAuthenticated }, ClearAuthClient }) => {
  $(document).ready(function() {
    if (
      document.getElementsByClassName("clientnav")[0] ||
      document.getElementsByClassName("clientnav")[1]
    ) {
      var burger = document.querySelector(".burger-container"),
        header = document.querySelector(".windowheader");

      burger.onclick = function(e) {
        e.preventDefault();
        header.classList.toggle("menu-opened");
      };
    }
  });
  let history = useHistory();
  const [ProfileItems, setProfileItems] = useState(false);
  return (
    <Fragment>
      <div class='window clientnav' id='mobile_navbar'>
        <div class='windowheader' style={{ zIndex: 10000 }}>
          <div class='burger-container'>
            <div id='burger'>
              <div class='bar topBar'></div>
              <div class='bar btmBar'></div>
            </div>
          </div>
          <div class='icon icon-apple' style={{ color: "white" }}>
            AL-SAFAR
          </div>
          <ul class='menu'>
            {!isAuthenticated ? (
              <li className='menu-item mx-5'>
                <span
                  className='MobileAnchor text-center'
                  onClick={() => {
                    ClearAuthClient();
                    history.push("/register");
                  }}
                >
                  <strong>
                    {" "}
                    <i className='fa fa-user-circle'></i>
                    &nbsp;Login{" "}
                  </strong>
                </span>
              </li>
            ) : (
              <li class='ProfileMobile'>
                <span className='MobileAnchor' href='#'>
                  <span onClick={() => setProfileItems(!ProfileItems)}>
                    <img
                      className='avatar'
                      src={require("../../images/HotelProfile/Haris.jpg")}
                    />
                    &nbsp; Muhammad Haris &nbsp;
                    <i className='fa fa-chevron-down'></i>
                  </span>
                  {ProfileItems && (
                    <ul className='px-5'>
                      <li class='menu-item'>
                        <a className='MobileAnchor' href='#'>
                          My Account
                        </a>
                      </li>
                      <li class='menu-item'>
                        <a className='MobileAnchor' href='#'>
                          Notifications
                        </a>
                      </li>
                      <li class='menu-item'>
                        <span
                          className='MobileAnchor'
                          onClick={() => {
                            ClearAuthClient();
                            localStorage.removeItem("token");
                          }}
                        >
                          LogOut
                        </span>
                      </li>
                    </ul>
                  )}
                </span>
              </li>
            )}

            <li class='menu-item'>
              <a className='MobileAnchor' href='#'>
                Home
              </a>
            </li>
            <li class='menu-item'>
              <a className='MobileAnchor' href='#'>
                About
              </a>
            </li>
            <li class='menu-item'>
              <a className='MobileAnchor' href='#'>
                Contact
              </a>
            </li>
            <li class='menu-item'>
              <a className='MobileAnchor' href='#'>
                Faq
              </a>
            </li>
          </ul>
          <div class='shop icon icon-bag'></div>
        </div>
      </div>
    </Fragment>
  );
};

const MapStateToProps = state => ({
  AuthClient: state.AuthClient
});
export default connect(MapStateToProps, { ClearAuthClient })(MobileNavbar);
