import React, { useState, useEffect } from "react";
import "../../css/Navbar.css";
import Logo from "../../images/Logo/Logo.png";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClearAuthClient } from "../../actions/AuthClientAction";
const Navbar = ({ AuthClient: { isAuthenticated }, ClearAuthClient }) => {
  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      var scroll = this.scrollY;
      console.log(scroll);
      let navbar = document.getElementById("navbar-desktop");
      let NavLinkDesktop = document.getElementsByClassName("nav-link-desktop");
      if (navbar) {
        if (scroll === 0) {
          navbar.style.backgroundColor = "transparent";
          navbar.style.border = "none";
          navbar.style.boxShadow = "none";
          navbar.style.lineHeight = "0px";
          NavLinkDesktop[0].style.color = "white";
          NavLinkDesktop[1].style.color = "white";
          NavLinkDesktop[2].style.color = "white";
        } else {
          navbar.style.backgroundColor = "white";
          navbar.style.boxShadow = "0 12px 6px -6px rgba(0, 0, 0, 0.2)";
          navbar.style.borderBottom = "2px solid rgba(0, 153, 255, 0.7)";
          navbar.style.lineHeight = "40px";
          NavLinkDesktop[0].style.color = "#0099FF";
          NavLinkDesktop[1].style.color = "#0099FF";
          NavLinkDesktop[2].style.color = "#0099FF";
        }
      }
    });
  }, []);
  const [Profile, setProfile] = useState(false);
  let history = useHistory();
  return (
    <div
      class='fixed-top clientnav'
      id='desktop_navbar'
      style={{ width: "100%" }}
    >
      <nav class='navbar  navbar-fixed-top ' id='navbar-desktop'>
        <div class='container-fluid'>
          <div class='brand'>
            <img
              src={require("../../images/Logo/logo.png")}
              alt='logo'
              style={{ height: "60px", width: "250px" }}
            />
            {/* AL-SAFAR{" "}
            <i
              class='fa fa-plane'
              style={{ textShadow: "1px 1px white, -1px -1px #666" }}
            ></i> */}
          </div>
          <ul class='desktop-ul nav pull-right' id='listContainer'>
            <li className='li-desktop '>
              <a class='nav-link nav-link-desktop'>Home</a>
            </li>
            <li className='li-desktop'>
              <a class='nav-link nav-link-desktop'>About</a>
            </li>
            <li className='li-desktop'>
              <a class='nav-link nav-link-desktop'>Contact</a>
            </li>
            <li className='ProfileLI ml-5'>
              {!isAuthenticated ? (
                <button
                  className='btn btn-primary'
                  onClick={() => {
                    ClearAuthClient();
                    history.push("/register");
                  }}
                >
                  <i className='fa fa-user'></i> Login
                </button>
              ) : (
                <div
                  style={{ display: "inline-block", color: "black" }}
                  className='pt-1'
                >
                  <img
                    src={require("../../images/HotelProfile/Haris.jpg")}
                    alt='Avatar'
                    class='avatar'
                  />
                  <span className='mr-5'>
                    <a id='NavbarAvatar' onClick={() => setProfile(!Profile)}>
                      &nbsp; Muhammad Haris &nbsp;
                      <i className='fa fa-chevron-down'></i>
                    </a>
                    {Profile && (
                      <div className='ProfileDropDown mt-3'>
                        <div className='container'>
                          <div className='row'>
                            <div className='col-2'></div>
                            <div className='col-8 mt-2 pl-4'>
                              <img
                                src={require("../../images/HotelProfile/Haris.jpg")}
                                alt='Avatar'
                                class='ProfileImage'
                              />
                            </div>
                            <div className='col-4'></div>
                          </div>
                          <div className='row'>
                            <div className='col-3'></div>
                            <div className='col-8 mt-1'>
                              <div className='row'>Muhammad Haris</div>
                              <div className='row UserEmail'>
                                <em> Haris@gmail.com </em>
                              </div>
                            </div>
                            <div className='col-1'></div>
                          </div>
                          <div className='row'>
                            <div className='col-2'></div>
                            <div className='col-8 mt-3'>
                              <ul className='ProfileUL'>
                                <li>
                                  <span className='ProfileListItem'>
                                    <a
                                      class='ProfileAnchor'
                                      onClick={() => alert("Clicked")}
                                    >
                                      <i className='fa fa-user'></i> &nbsp;My
                                      Account
                                    </a>
                                  </span>
                                </li>
                                <li>
                                  <span className='ProfileListItem'>
                                    <a
                                      class='ProfileAnchor'
                                      onClick={() => alert("Clicked")}
                                    >
                                      <i className='fa fa-bell'></i>{" "}
                                      &nbsp;Notification
                                    </a>
                                  </span>
                                </li>
                                <li>
                                  <span className='ProfileListItem'>
                                    <a
                                      class='ProfileAnchor'
                                      onClick={() => {
                                        ClearAuthClient();
                                        localStorage.removeItem("token");
                                      }}
                                    >
                                      <i className='fa fa-power-off'></i>{" "}
                                      &nbsp;LogOut
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className='col-2'></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </span>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <br />
    </div>
  );
};

const MapStateToProps = (state) => ({
  AuthClient: state.AuthClient,
});
export default connect(MapStateToProps, { ClearAuthClient })(Navbar);
