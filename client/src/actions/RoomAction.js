import {
  SET_ROOM,
  ADD_ROOM,
  UNIQUE_ROOMS,
  UNIQUE_ROOMSHOTEL,
  HOTEL_COUNTER,
  SET_UNIQUEROOM,
  SET_ROOMRESERVE
} from "./types";
import axios from "axios";
import Swal from "sweetalert2";
// Set Hotel Profile
export const setRoom = data => async dispatch => {
  try {
    dispatch({ type: SET_ROOM, payload: data });
  } catch (err) {
    console.log(err);
  }
};

// Add a New Room
export const addRoom = data => async dispatch => {
  try {
    var NoOfRooms = data.NumberOfRooms;
    var roomType = data.roomType;
    var roomMaxOccupancy = data.roomMaxOccupancy;
    var rent = data.rent;
    let FormData = {
      roomType,
      rent,
      roomMaxOccupancy,
      NoOfRooms
    };
    const res = await axios.post("/hotelRep/addNewRoom", FormData);

    Swal.fire({
      icon: "success",
      title: "Room Added Successfully!"
    });
  } catch (err) {
    console.log(err);
  }
};

// Unique Rooms
export const UniqueRooms = id => async dispatch => {
  try {
    console.log(id);
    let res = await axios.post("/hotelRep/uniquerooms");

    dispatch({ type: UNIQUE_ROOMS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// Unique Rooms
export const UniqueRoomsByHotel = id => async dispatch => {
  try {
    console.log(id);
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    let res = await axios.post(
      "/users/uniqueroomshotel",
      {
        id
      },
      config
    );

    dispatch({
      type: UNIQUE_ROOMSHOTEL,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const setUniqueRoom = data => async dispatch => {
  try {
    dispatch({ type: SET_UNIQUEROOM, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const setRoomReserve = data => async dispatch => {
  try {
    dispatch({ type: SET_ROOMRESERVE, payload: data });
  } catch (err) {
    console.log(err);
  }
};
