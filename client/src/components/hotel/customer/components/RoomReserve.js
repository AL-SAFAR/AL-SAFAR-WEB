import React, { Fragment, useState } from "react";
import $ from "jquery";
import "../../../../css/SearchHotel.scss";
import "rc-time-picker/assets/index.css";
import TimePicker from "rc-time-picker";
import moment from "moment";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { setRoomReserve } from "../../../../actions/RoomAction";
const RoomReserve = ({ setRoomReserve }) => {
  const format = "h:mm a";

  const now = moment()
    .hour(0)
    .minute(0);

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const ChangeFromDate = (value, e) => {
    setFromDate(value);
  };

  const onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    if (e.target.type === "number") {
      value = parseInt(value);
      if (isNaN(value) && value === "") {
        return false;
      }
    }
    setRoomReserve({ name, value });
  };

  const onDateChange = (value, name) => {
    if (value) {
      setRoomReserve({
        name,
        value
      });
    }
  };

  return (
    <Fragment>
      <div class='container SearchHotelContainer'>
        <div class='searchhotelcard'></div>
        <div class='searchhotelcard'>
          <h1 class='title'>Reserve</h1>
          <form>
            <div class='input-container'>
              <input
                type='number'
                id='#{label}'
                name='reserveAdult'
                onChange={onChange}
                required
              />
              <label for='#{label}'>Adult</label>
              <div class='bar'></div>
            </div>
            <div class='input-container'>
              <input
                type='number'
                id='#{label}'
                name='reserveChildren'
                onChange={onChange}
                required
              />
              <label for='#{label}'>Children</label>
              <div class='bar'></div>
            </div>{" "}
            <div class='input-container'>
              <input
                type='number'
                id='#{label}'
                name='reserveRoom'
                onChange={onChange}
                required
              />
              <label for='#{label}'>Room</label>
              <div class='bar'></div>
            </div>
            <label
              for=''
              className='pl-5 ml-2'
              style={{ color: "#757575", fontSize: "24px", fontWeight: 300 }}
            >
              Room Type
            </label>
            <div class='input-container'>
              <select
                class='form-control'
                name='reserveRoomType'
                onChange={onChange}
                id='sel1'
              >
                <option>Delexue</option>
                <option>Luxury</option>
                <option>Economy</option>
              </select>
              <div class='bar'></div>
            </div>
            <label
              for=''
              className='pl-5 ml-2'
              style={{ color: "#757575", fontSize: "24px", fontWeight: 300 }}
            >
              From Date
            </label>
            <div class='input-container'>
              <DatePicker
                selected={fromDate}
                name='reserveFromDate'
                onChange={value => onDateChange(value, "reserveFromDate")}
                popperPlacement='top-start'
                popperModifiers={{
                  offset: {
                    enabled: true,
                    offset: "-30px, 0px"
                  }
                }}
              />
              {/* <input type='hidden' required /> */}
              <div class='bar'></div>
            </div>
            <label
              for=''
              className='pl-5 ml-2'
              style={{ color: "#757575", fontSize: "24px", fontWeight: 300 }}
            >
              To Date
            </label>
            <div class='input-container'>
              <DatePicker
                selected={fromDate}
                name='reserveToDate'
                onChange={value => onDateChange(value, "reserveToDate")}
                popperPlacement='top-start'
                popperModifiers={{
                  offset: {
                    enabled: true,
                    offset: "-30px, 0px"
                  }
                }}
              />
              {/* <input type='hidden' required /> */}
              <div class='bar'></div>
            </div>
            <div class='button-container'>
              <button>
                <span>Reserve</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { setRoomReserve })(RoomReserve);
