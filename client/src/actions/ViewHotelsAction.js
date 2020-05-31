import { VIEW_HOTELS, HOTEL_DETAIL } from "./types";
import axios from "axios";
import Swal from "sweetalert2";

// Add a New Room
export const hotelDetail = data => async dispatch => {
  try {
    dispatch({ type: HOTEL_DETAIL, payload: data });
  } catch (err) {
    console.log(err);
  }
};

// Add a New Room
export const GetHotelsList = () => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    const res = await axios.get("/users/viewHotels", config);
    dispatch({ type: VIEW_HOTELS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
