import React, { Fragment } from "react";
import "../../../../css/HotelProfileRadio.css";
import $ from "jquery";
const RadioTest = () => {
  $(document).ready(function() {
    $(".hotelprofileinput[type=checkbox]").change(function() {
      let counter = 0;
      let clicked = $(this).data("index");
      $(".hotelprofileinput[type=checkbox]").each(function() {
        if ($(this)[0].checked) {
          counter++;
        }
      });
      if (counter == 3) {
        let toDisable = clicked;
        while (toDisable == clicked) {
          toDisable = Math.round(Math.random() * 2);
        }
        $(".hotelprofileinput:eq(" + toDisable + ")")[0].checked = false;
      }
    });
  });
  return (
    <Fragment>
      <div class='wrap'>
        <div class='block'>
          <div className='row'>
            <div className='col-6'>
              <input
                className='hotelprofileinput'
                data-index='0'
                id='cheap'
                type='checkbox'
              />
              <label className='hotelprofilelabel' for='cheap'></label>
            </div>
            <div className='col-6'>
              <span className='hotelprofilespan'>Food</span>
            </div>
          </div>

          <div className='row'>
            <div className='col-6'>
              <input
                className='hotelprofileinput'
                data-index='0'
                id='Facilities'
                type='checkbox'
              />
              <label className='hotelprofilelabel' for='Facilities'></label>
            </div>
            <div className='col-6'>
              <span className='hotelprofilespan'>Facilities</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RadioTest;
