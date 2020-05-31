import React, { Fragment } from "react";
import "../../../../css/BasicInfo.css";
const BasicInfo = ({ city, name, serviceCharges }) => {
  return (
    <Fragment>
      <div class='page-content page-container' id='page-content'>
        <div class='padding'>
          <div class='row container '>
            <div class='col-xl-6 col-md-12'>
              <div class='BasicInfoCard card user-card-full'>
                <div class='row m-l-0 m-r-0'>
                  <div
                    id='BasicImage'
                    class='col-sm-4 bg-c-lite-green user-profile'
                  >
                    <div class='card-block text-center text-white'>
                      <div class='m-b-25'>
                        {" "}
                        <img
                          src='https://img.icons8.com/bubbles/100/000000/user.png'
                          class='img-radius'
                          alt='User-Profile-Image'
                        />{" "}
                      </div>
                      <h6 class='f-w-600'>{name}</h6>
                      <p>Travel Guide</p>{" "}
                      <i class=' mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16'></i>
                    </div>
                  </div>
                  <div class='col-sm-8'>
                    <div class='card-block'>
                      <h6 class='m-b-20 p-b-5 b-b-default f-w-600'>
                        Booking Information
                      </h6>
                      <div class='row'>
                        <div class='col-sm-6'>
                          <p class='m-b-10 f-w-600'>City</p>
                          <h6 class='text-muted f-w-4                                     00'>
                            {city}
                          </h6>
                        </div>
                        <div class='col-sm-6'>
                          <p class='m-b-10 f-w-600'>Service Charges</p>
                          <h6 class='text-muted f-w-400'>
                            Rs.{serviceCharges}
                          </h6>
                        </div>
                      </div>
                      <h6 class='m-b-20 m-t-40 p-b-5 b-b-default f-w-600'>
                        Expertise
                      </h6>
                      <div class='row'>
                        <div class='col-sm-6'>
                          <h6 class='text-muted f-w-400'>
                            <i
                              className='fa fa-check-square'
                              style={{ color: "#0099FF" }}
                            ></i>{" "}
                            &nbsp; Enthusiasm
                          </h6>
                        </div>
                        <div class='col-sm-6'>
                          <h6 class='text-muted f-w-400'>
                            <i
                              className='fa fa-check-square'
                              style={{ color: "#0099FF" }}
                            ></i>{" "}
                            &nbsp; Strong Memory
                          </h6>
                        </div>
                      </div>
                      <ul class='social-link list-unstyled m-t-40 m-b-10'>
                        <li>
                          <a
                            href='#!'
                            data-toggle='tooltip'
                            data-placement='bottom'
                            title=''
                            data-original-title='facebook'
                            data-abc='true'
                          >
                            <i
                              class='mdi mdi-facebook feather icon-facebook facebook'
                              aria-hidden='true'
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href='#!'
                            data-toggle='tooltip'
                            data-placement='bottom'
                            title=''
                            data-original-title='twitter'
                            data-abc='true'
                          >
                            <i
                              class='mdi mdi-twitter feather icon-twitter twitter'
                              aria-hidden='true'
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href='#!'
                            data-toggle='tooltip'
                            data-placement='bottom'
                            title=''
                            data-original-title='instagram'
                            data-abc='true'
                          >
                            <i
                              class='mdi mdi-instagram feather icon-instagram instagram'
                              aria-hidden='true'
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BasicInfo;
