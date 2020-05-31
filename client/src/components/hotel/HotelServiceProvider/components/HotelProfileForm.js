import React, { useState, Fragment } from "react";
import "../../../../css/HotelProfileForm.css";
import "../../../../css/HotelProfileFormRadio.css";
import "pretty-checkbox/dist/pretty-checkbox.min.css";
import ReactDOM from "react-dom";
import "../../../../css/HotelProfileRadio.css";
import createReactClass from "create-react-class";
import TimePicker from "rc-time-picker";
import moment from "moment";
import "rc-time-picker/assets/index.css";
import { connect } from "react-redux";
import {
  setHotelProfile,
  FoodClear,
  FacilitiesClear,
  ActivitiesClear,
  CleaningClear,
  GenearalClear,
  HouseRulesClear,
  addHotelProfile
} from "../../../../actions/HotelProfileAction";
import $ from "jquery";

const HotelProfileForm = ({
  HotelProfile: {
    name,
    address,
    city,
    description,
    wifi,
    parking,
    smoking,
    food,
    facilities,
    HouseRules,
    FoodNames,
    activities,
    cleaning,
    general,
    ActivitiesName,
    CleaningFacilities,
    GeneralFacilities,
    CheckInTime,
    CheckOutTime,
    HotelImages
  },
  setHotelProfile,
  FoodClear,
  FacilitiesClear,
  ActivitiesClear,
  CleaningClear,
  GenearalClear,
  HouseRulesClear,
  addHotelProfile
}) => {
  //Radio Button Jquery
  $(document).ready(function() {
    $(".hotelprofileinput[type=checkbox]").click(function() {
      let counter = 0;
      let clicked = $(this).data("index");
      $(".hotelprofileinput[type=checkbox]").each(function() {
        if ($(this)[0].checked) {
          counter++;
        }
      });
    });
  });

  const onChange = e => {
    var name = e.target.name;
    var value = e.target.value;
    var type = e.target.type;
    var checked = e.target.checked;
    setHotelProfile({
      name,
      value,
      type,
      checked
    });
  };

  const format = "h:mm a";

  const now = moment()
    .hour(0)
    .minute(0);

  const onTimeChange = (value, id) => {
    if (value) {
      let Time = value.format(format);
      setHotelProfile({
        name: id,
        value: Time
      });
    }
  };

  const onRadioClick = e => {
    let name = e.target.name;

    if (name === "food") {
      if (e.target.checked) {
        let FoodNames = React.createElement(
          "div",
          {
            style: { marginTop: "-65px", width: "100%" },
            id: "FoodNamesID",
            className: "pb-5 mb-5"
          },
          [
            React.createElement(
              "label",
              { htmlFor: "FoodNames" },
              "Enter Food names:"
            ),
            React.createElement("input", {
              id: "FoodNames",
              name: "FoodNames",
              className: "FoodNames",
              required: "required",
              placeholder: "e.g: Pakistani,Italian,Mexican",
              onChange: e => onChange(e)
            })
          ]
        );

        ReactDOM.render(FoodNames, document.getElementById("foodinput"));
      } else {
        FoodClear();
        ReactDOM.unmountComponentAtNode(document.getElementById("foodinput"));
      }
    } else if (name === "facilities") {
      if (e.target.checked) {
        let FacilitiesInput = createReactClass({
          render: function() {
            return (
              <div className='pb-5'>
                {/* Activities and Cleaning Radio */}

                <div className='form-group row' style={{ marginTop: "-70px" }}>
                  <div
                    className='col-lg-6 col-md-6 col-sm-12'
                    style={{ paddingRight: "0px" }}
                  >
                    <div className='funkyradio'>
                      <div className='funkyradio-success'>
                        <input
                          type='checkbox'
                          name='activities'
                          id='activities'
                          onChange={e => onFacilityClick(e)}
                          onClick={e => onChange(e)}
                        />
                        <label htmlFor='activities'>
                          <i className='fa fa-tasks'></i>
                          &nbsp; activities
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-6 col-md-6 col-sm-12'
                    style={{ paddingRight: "0px" }}
                  >
                    <div className='funkyradio'>
                      <div className='funkyradio-success'>
                        <input
                          type='checkbox'
                          name='cleaning'
                          id='cleaning'
                          onChange={e => onFacilityClick(e)}
                          onClick={e => onChange(e)}
                        />
                        <label htmlFor='cleaning'>
                          <i className='fa fa-broom'></i>
                          &nbsp; Cleaning
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* General Radio */}
                <div
                  className='form-group row mb-5'
                  style={{
                    marginTop: "-30px",
                    width: "105%"
                  }}
                >
                  <div className='col-lg-2 col-md-2 '></div>
                  <div
                    className='col-lg-8 col-md-8 col-sm-12'
                    style={{ padding: "0px" }}
                  >
                    <div className='funkyradio'>
                      <div className='funkyradio-success'>
                        <input
                          type='checkbox'
                          name='general'
                          id='general'
                          onChange={e => onFacilityClick(e)}
                          onClick={e => onChange(e)}
                        />
                        <label htmlFor='general'>
                          <i className='fa fa-list'></i>
                          &nbsp; General
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-2'></div>
                </div>
              </div>
            );
          }
        });
        ReactDOM.render(
          <FacilitiesInput />,
          document.getElementById("facilitiesinput")
        );
      } else {
        FacilitiesClear();
        ActivitiesClear();
        CleaningClear();
        GenearalClear();
        ReactDOM.unmountComponentAtNode(
          document.getElementById("facilitiesinput")
        );
        ReactDOM.unmountComponentAtNode(
          document.getElementById("activitiesinput")
        );
        ReactDOM.unmountComponentAtNode(
          document.getElementById("cleaninginput")
        );
        ReactDOM.unmountComponentAtNode(
          document.getElementById("generalinput")
        );
      }
    } else if (name === "HouseRules") {
      if (e.target.checked) {
        let CheckInOut = createReactClass({
          render: function() {
            return (
              <div>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 mb-2'>
                      <TimePicker
                        showSecond={false}
                        defaultValue={now}
                        className='xxx'
                        onChange={value => onTimeChange(value, "CheckInTime")}
                        format={format}
                        use12Hours
                        inputReadOnly
                        allowEmpty={false}
                      />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 mb-2'>
                      <TimePicker
                        showSecond={false}
                        defaultValue={now}
                        className='xxx'
                        onChange={value => onTimeChange(value, "CheckOutTime")}
                        format={format}
                        use12Hours
                        inputReadOnly
                        allowEmpty={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        });
        ReactDOM.render(<CheckInOut />, document.getElementById("CheckInOut"));
      } else {
        HouseRulesClear();
        ReactDOM.unmountComponentAtNode(document.getElementById("CheckInOut"));
      }
    }
  };
  const onFacilityClick = e => {
    if (e.target.name === "activities") {
      if (e.target.checked) {
        let ActivitiesInput = React.createElement(
          "div",
          {
            style: { marginTop: "-65px", width: "100%" },
            id: "ActivitiesName",
            className: "pb-5 mb-5"
          },
          [
            React.createElement(
              "label",
              { htmlFor: "ActivitiesName" },
              "Enter Activites names:"
            ),
            React.createElement("input", {
              id: "ActivitiesName",
              name: "ActivitiesName",
              className: "ActivitiesName",
              required: "required",
              placeholder: "e.g: Tennis,Golf",
              onChange: e => onChange(e)
            })
          ]
        );

        ReactDOM.render(
          ActivitiesInput,
          document.getElementById("activitiesinput")
        );
      } else {
        ActivitiesClear();
        ReactDOM.unmountComponentAtNode(
          document.getElementById("activitiesinput")
        );
      }
    } else if (e.target.name === "cleaning") {
      if (e.target.checked) {
        let CleaningInput = React.createElement(
          "div",
          {
            style: { marginTop: "-65px", width: "100%" },
            id: "CleaningFacilities",
            className: "pb-5 mb-5"
          },
          [
            React.createElement(
              "label",
              { htmlFor: "CleaningFacilities" },
              "Enter Cleaning Facilities:"
            ),
            React.createElement("input", {
              id: "CleaningFacilities",
              name: "CleaningFacilities",
              className: "CleaningFacilities",
              required: "required",
              placeholder: "e.g: Washing,Dryer",
              onChange: e => onChange(e)
            })
          ]
        );

        ReactDOM.render(
          CleaningInput,
          document.getElementById("cleaninginput")
        );
      } else {
        CleaningClear();
        ReactDOM.unmountComponentAtNode(
          document.getElementById("cleaninginput")
        );
      }
    } else if (e.target.name === "general") {
      if (e.target.checked) {
        let GeneralInput = React.createElement(
          "div",
          {
            style: { marginTop: "-65px", width: "100%" },
            id: "GeneralFacilities",
            className: "pb-5 mb-5"
          },
          [
            React.createElement(
              "label",
              { htmlFor: "GeneralFacilities" },
              "Enter Other Facilities:"
            ),
            React.createElement("input", {
              id: "GeneralFacilities",
              name: "GeneralFacilities",
              className: "GeneralFacilities",
              required: "required",
              placeholder: "e.g: airpot,room service",
              onChange: e => onChange(e)
            })
          ]
        );

        ReactDOM.render(GeneralInput, document.getElementById("generalinput"));
      } else {
        GenearalClear();
        ReactDOM.unmountComponentAtNode(
          document.getElementById("generalinput")
        );
      }
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    let obj = {
      name,
      address,
      city,
      description,
      wifi,
      parking,
      smoking,
      food,
      facilities,
      HouseRules,
      FoodNames,
      activities,
      cleaning,
      general,
      ActivitiesName,
      CleaningFacilities,
      GeneralFacilities,
      CheckInTime,
      CheckOutTime,
      HotelImages
    };
    console.log(obj);
    addHotelProfile(obj);
  };

  return (
    <Fragment>
      <div className='form mt-3' style={{ width: "100%", maxWidth: "100%" }}>
        <div className='form-toggle'></div>
        <div className='form-panel one'>
          <div className='form-header'>
            <h1>Set Up Hotel Profile</h1>
          </div>
          <div className='form-content'>
            <form onSubmit={onSubmit} enctype='multipart/form-data'>
              {/* Name */}
              <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required='required'
                  onChange={e => onChange(e)}
                />
              </div>
              {/* Address */}
              <div className='form-group'>
                <label htmlFor='address'>Address: </label>
                <input
                  type='text'
                  id='address'
                  name='address'
                  required='required'
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='address'>City: </label>
                <input
                  type='text'
                  id='city'
                  name='city'
                  required='required'
                  onChange={e => onChange(e)}
                />
              </div>
              {/* Description */}
              <div className='form-group'>
                <label htmlFor='description'>Description: </label>
                <br />
                <textarea
                  rows='4'
                  cols='50'
                  type='text'
                  id='description'
                  name='description'
                  required='required'
                  onChange={e => onChange(e)}
                  style={{ border: "1px solid #0099FF" }}
                />
              </div>
              {/* Extras Label */}
              <div className='form-group'>
                <div>
                  <label style={{ marginBottom: "5px" }}>
                    Extras(Optional):
                  </label>
                </div>
              </div>
              {/* Wifi and Parking Radio */}
              <div className='form-group row'>
                <div
                  className='col-lg-6 col-md-6 col-sm-12'
                  style={{ paddingRight: "0px" }}
                >
                  <div className='funkyradio'>
                    <div className='funkyradio-success'>
                      <input
                        type='checkbox'
                        name='wifi'
                        id='wifi'
                        value='wifi'
                        onChange={e => onChange(e)}
                      />
                      <label htmlFor='wifi'>
                        <i className='fa fa-wifi'></i>
                        &nbsp; Wifi
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className='col-lg-6 col-md-6 col-sm-12'
                  style={{ paddingRight: "0px" }}
                >
                  <div className='funkyradio'>
                    <div className='funkyradio-success'>
                      <input
                        type='checkbox'
                        name='parking'
                        id='parking'
                        value='parking'
                        onChange={e => onChange(e)}
                      />
                      <label htmlFor='parking'>
                        <i className='fa fa-car'></i>
                        &nbsp; Parking
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Smoking Radio */}
              <div
                className='form-group row mb-5'
                style={{ marginTop: "-30px" }}
              >
                <div className='col-lg-2 col-md-2'></div>
                <div
                  className='col-lg-8 col-md-8 col-sm-12'
                  style={{ paddingRight: "0px" }}
                >
                  <div className='funkyradio'>
                    <div className='funkyradio-success'>
                      <input
                        type='checkbox'
                        name='smoking'
                        id='smoking'
                        value='Smoking'
                        onChange={e => onChange(e)}
                      />
                      <label htmlFor='smoking'>
                        <i className='fa fa-smoking'></i>
                        &nbsp; Smoking
                      </label>
                    </div>
                  </div>
                </div>
                <div className='col-lg-2 col-md-2'></div>
              </div>
              <div className='form-group'></div>
              {/* Slider Radio for Food  */}
              <div className='form-group pl-5 pt-1'>
                <div class='wrap'>
                  <div class='block'>
                    <div className='row'>
                      <div className='col-6'>
                        <input
                          className='hotelprofileinput'
                          data-index='0'
                          name='food'
                          id='food'
                          type='checkbox'
                          onClick={e => onRadioClick(e)}
                          onChange={e => onChange(e)}
                        />
                        <label className='hotelprofilelabel' for='food'></label>
                      </div>
                      <div className='col-6'>
                        <span className='hotelprofilespan'>Food</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Food Names DIV , Note: Do not fucking delete this   */}
              <div className='form-group' id='foodinput'></div>
              {/* Slider Radio for Facilities  */}
              <div className='form-group pl-5' style={{ marginTop: "-60px" }}>
                <div className='wrap'>
                  <div className='block'>
                    <div className='row'>
                      <div className='row'>
                        <div className='col-6'>
                          <input
                            className='hotelprofileinput'
                            data-index='1'
                            name='facilities'
                            id='Facilities'
                            type='checkbox'
                            onClick={e => onRadioClick(e)}
                            onChange={e => onChange(e)}
                          />
                          <label
                            className='hotelprofilelabel'
                            for='Facilities'
                          ></label>
                        </div>
                        <div className='col-6'>
                          <span className='hotelprofilespan'>Facilities</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facilitie DIV , Note: Do not fucking delete this   */}
              <div id='facilitiesinput'></div>

              {/* Activites DIV */}
              <div className='form-group' id='activitiesinput'></div>
              {/* Cleaning DIV */}
              <div className='form-group' id='cleaninginput'></div>
              {/* General DIV */}
              <div className='form-group' id='generalinput'></div>

              {/* House Rules */}
              <div className='form-group pl-5' style={{ marginTop: "-90px" }}>
                <div className='wrap'>
                  <div className='block'>
                    <div className='row'>
                      <div className='col-6'>
                        <input
                          className='hotelprofileinput'
                          data-index='3'
                          name='HouseRules'
                          id='HouseRules'
                          type='checkbox'
                          onClick={e => onRadioClick(e)}
                          onChange={e => onChange(e)}
                        />
                        <label
                          className='hotelprofilelabel'
                          for='HouseRules'
                        ></label>
                      </div>
                      <div className='col-6'>
                        <span className='hotelprofilespan'>
                          House&nbsp;Rules
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CheckInOut DIV */}
              <div
                className='pb-5'
                style={{ marginTop: "-50px" }}
                id='CheckInOut'
              ></div>
              <div className='form-group'>
                <button type='submit'>Create Profile</button>
              </div>
            </form>
          </div>
        </div>
        <div className='form-panel two'></div>
      </div>
    </Fragment>
  );
};

const MapStateToProps = state => ({
  HotelProfile: state.HotelProfile
});

export default connect(MapStateToProps, {
  setHotelProfile,
  FoodClear,
  FacilitiesClear,
  ActivitiesClear,
  CleaningClear,
  GenearalClear,
  HouseRulesClear,
  addHotelProfile
})(HotelProfileForm);
