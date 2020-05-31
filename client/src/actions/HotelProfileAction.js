import {
  SET_HOTELPROFILE,
  FOOD_CLEAR,
  FACILITIES_CLEAR,
  ACTIVITIES_CLEAR,
  CLEANING_CLEAR,
  GENERAL_CLEAR,
  HOUSERULES_CLEAR,
  SET_HOTELProfileImages,
  ADD_HOTELPROFILE
} from "./types";
import FormData from "form-data";
import axios from "axios";
import Swal from "sweetalert2";
// Set Hotel Profile
export const setHotelProfile = data => async dispatch => {
  try {
    dispatch({ type: SET_HOTELPROFILE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

// Food Radio Button Clear
export const FoodClear = () => async dispatch => {
  try {
    dispatch({ type: FOOD_CLEAR });
  } catch (err) {
    console.log(err);
  }
};

// Facilities Radio Buttons Clear
export const FacilitiesClear = () => async dispatch => {
  try {
    dispatch({ type: FACILITIES_CLEAR });
  } catch (err) {
    console.log(err);
  }
};

//Activities input Clear
export const ActivitiesClear = () => async dispatch => {
  try {
    dispatch({ type: ACTIVITIES_CLEAR });
  } catch (err) {
    console.log(err);
  }
};

// Cleaning input Clear
export const CleaningClear = () => async dispatch => {
  try {
    dispatch({ type: CLEANING_CLEAR });
  } catch (err) {
    console.log(err);
  }
};

// Genearl input Clear
export const GenearalClear = () => async dispatch => {
  try {
    dispatch({ type: GENERAL_CLEAR });
  } catch (err) {
    console.log(err);
  }
};

// Genearl input Clear
export const HouseRulesClear = () => async dispatch => {
  try {
    dispatch({ type: HOUSERULES_CLEAR });
  } catch (err) {
    console.log(err);
  }
};

// Set Hotel Profile
export const setHotelProfileImages = data => async dispatch => {
  try {
    dispatch({ type: SET_HOTELProfileImages, payload: data });
  } catch (err) {
    console.log(err);
  }
};

// Add Hotel Profile

export const addHotelProfile = HotelProfile => async dispatch => {
  console.log(HotelProfile);
  const CConfig = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };

  const data = new FormData();

  data.append("name", HotelProfile.name);
  data.append("address", HotelProfile.address);
  data.append("city", HotelProfile.city);
  data.append("description", HotelProfile.description);
  data.append("wifi", HotelProfile.wifi);
  data.append("parking", HotelProfile.parking);
  data.append("smoking", HotelProfile.smoking);
  data.append("food", HotelProfile.food);
  data.append("FoodNames", HotelProfile.FoodNames);
  data.append("activites", HotelProfile.activities);
  data.append("cleaning", HotelProfile.cleaning);
  data.append("general", HotelProfile.general);
  data.append("ActivitiesName", HotelProfile.ActivitiesName);
  data.append("CleaningFacilities", HotelProfile.CleaningFacilities);
  data.append("GeneralFacilities", HotelProfile.GeneralFacilities);
  data.append("HouseRules", HotelProfile.HouseRules);
  data.append("CheckInTime", HotelProfile.CheckInTime);
  data.append("CheckOutTime", HotelProfile.CheckOutTime);

  for (var i = 0; i < HotelProfile.HotelImages.length > 0; i++) {
    data.append("HotelImages" + i, HotelProfile.HotelImages[i]);
  }
  console.log("data=");
  console.log(data);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    const res = await axios.post("/hotelRep/createHotelProfile", data, config);
    console.log(res.data);
    Swal.fire({
      icon: "success",
      title: "Profile Created Successfully!"
    });
  } catch (err) {
    console.error(err);
    axios.interceptors.response.use(error => {
      // Do something with response error
      if (error.response.status === 401) {
        console.log(err.message.msg);
      }
      return Promise.reject(error.response);
    });
  }
};
