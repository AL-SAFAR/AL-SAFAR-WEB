import React, { Fragment, useState, useContext, useEffect } from "react";
import "../../../../css/HotelProfileFormRadio.css";
import "../../../../css/HotelProfileForm.css";
import { connect } from "react-redux";
import { setRoom, addRoom } from "../../../../actions/RoomAction";
import Room from "../../../../reducers/Room";
const RoomForm = ({
  Room: { roomType, rent, roomMaxOccupancy, NumberOfRooms },
  setRoom,
  addRoom
}) => {
  const onChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    if (e.target.type === "number") {
      value = parseInt(value);
      if (isNaN(value) && value === "") {
        return false;
      }
    }
    setRoom({
      name,
      value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    const RoomObj = {
      roomType,
      rent,
      roomMaxOccupancy,
      NumberOfRooms
    };
    addRoom(RoomObj);
  };

  return (
    <Fragment>
      <div className='form mt-5' style={{ maxWidth: "100%" }}>
        <div className='form-toggle'></div>
        <div className='form-panel one'>
          <div className='form-header'>
            <h1>Add Room</h1>
          </div>
          <div className='form-content'>
            <form onSubmit={onSubmit} enctype='multipart/form-data'>
              <div class='form-group'>
                <label for='sel1'>Room Type:</label>
                <select
                  class='form-control'
                  name='roomType'
                  onChange={onChange}
                  id='sel1'
                  value={roomType}
                >
                  <option>Deluxe</option>
                  <option>Luxury</option>
                  <option>Economy</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='rent'>Rent: </label>
                <input
                  type='number'
                  min='1'
                  id='rent'
                  name='rent'
                  min='1'
                  onChange={onChange}
                  value={rent}
                  placeholder='Enter Rent per day'
                  required='required'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Maximum Occupany of Room: </label>
                <input
                  type='number'
                  id='roomMaxOccupancy'
                  name='roomMaxOccupancy'
                  min='1'
                  onChange={onChange}
                  value={roomMaxOccupancy}
                  placeholder='Maximum Occupancy of Room'
                  required='required'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Number of Rooms </label>
                <input
                  type='number'
                  id='NumberOfRooms'
                  name='NumberOfRooms'
                  min='1'
                  onChange={onChange}
                  value={NumberOfRooms}
                  required='required'
                />
              </div>

              <div className='form-group'>
                <button type='submit'>Add Room</button>
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
  Room: state.Room
});

export default connect(MapStateToProps, {
  setRoom,
  addRoom
})(RoomForm);
