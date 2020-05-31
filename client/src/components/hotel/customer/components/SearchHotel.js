import React, { Fragment, useState } from "react";
import $ from "jquery";
import "../../../../css/SearchHotel.scss";
import "rc-time-picker/assets/index.css";
import TimePicker from "rc-time-picker";
import moment from "moment";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
const SearchHotel = () => {
  $(document).ready(function() {});

  const format = "h:mm a";

  const now = moment()
    .hour(0)
    .minute(0);
  const Toggle = () => {
    var SearcForm = document.getElementById("SearchHotelForm");
    if (SearcForm.style.display === "none") {
      SearcForm.style.display = "";
    } else {
      SearcForm.style.display = "none";
    }
    console.log("Toggle Clicked");
  };
  const onTimeChange = (value, id) => {};
  const [address, setAddress] = useState("");

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    setAddress(value);
  };
  return (
    <Fragment>
      <div class='container SearchHotelContainer' style={{}}>
        <div class='searchhotelcard'></div>
        <div class='searchhotelcard'>
          <h1 class='title'>Search</h1>
          <form id='SearchHotelForm'>
            <div class='input-container'>
              <input type='#{type}' id='#{label}' required />
              <label for='#{label}'>Destination</label>
              <div class='bar'></div>
            </div>
            <div class='input-container'>
              <input type='number' id='#{label}' required />
              <label for='#{label}'>Adult</label>
              <div class='bar'></div>
            </div>
            <div class='input-container'>
              <input type='number' id='#{label}' required />
              <label for='#{label}'>Children</label>
              <div class='bar'></div>
            </div>{" "}
            <div class='input-container'>
              <input type='number' id='#{label}' required />
              <label for='#{label}'>Rooms</label>
              <div class='bar'></div>
            </div>
            <label
              for=''
              className='pl-5 ml-2'
              style={{ color: "#757575", fontSize: "24px", fontWeight: 300 }}
            >
              Check In Time
            </label>
            <div class='input-container'>
              <TimePicker
                showSecond={false}
                className='xxx'
                defaultValue={now}
                format={format}
                use12Hours
                inputReadOnly
                allowEmpty={false}
              />
              {/* <input type='hidden' required /> */}
              <div class='bar'></div>
            </div>
            <label
              for=''
              className='pl-5 ml-2'
              style={{ color: "#757575", fontSize: "24px", fontWeight: 300 }}
            >
              Check Out Time
            </label>
            <div class='input-container'>
              <TimePicker
                showSecond={false}
                className='xxx'
                defaultValue={now}
                format={format}
                use12Hours
                inputReadOnly
                allowEmpty={false}
              />
              {/* <input type='hidden' required /> */}
              <div class='bar'></div>
            </div>
            <div class='button-container'>
              <button>
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
        <div class='searchhotelcard IconButtonSearch alt'>
          <div class='searchButtonAlt' onClick={Toggle}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchHotel;
