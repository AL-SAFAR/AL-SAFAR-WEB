import {
  SET_GUIDEPROFILE,
  REMOVE_PLACENAME,
  GET_GUIDEDETAILS,
  SET_GUIDEITEMPROFILE,
} from "./types";
import FormData from "form-data";
import axios from "axios";
import Swal from "sweetalert2";

export const setGuideProfile = (data) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: SET_GUIDEPROFILE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const removePlaceName = (data) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: REMOVE_PLACENAME, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const addGuideProfile = (data) => async (dispatch) => {
  try {
    console.clear();
    console.log("Data Action=");
    console.log(data);
    let { address, city, charges, description, placenames, PlaceImages } = data;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const guideprofile = new FormData();
    guideprofile.append("address", address);
    guideprofile.append("city", city);
    guideprofile.append("serviceCharges", charges);
    guideprofile.append("description", description);
    guideprofile.append("placenames", placenames);
    console.clear();
    let placeNameArray = [];
    for (var i = 0; i < PlaceImages.length; i++) {
      console.log(placenames[i][`placename${i}`]);
      placeNameArray.push(placenames[i][`placename${i}`]);
      guideprofile.append("PlaceImages" + i, PlaceImages[i][`customFile${i}`]);
    }
    console.log(placeNameArray);
    guideprofile.append("placenames", placeNameArray);
    const res = await axios.post("/guide/guideprofile", guideprofile, config);
    console.log(res);
    // console.log(guideprofile);
    // dispatch({ type: REMOVE_PLACENAME, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const UpdateUserProfile = (data) => async (dispatch) => {
  try {
    // alert("Update Profile action");
    console.clear();
    console.log(data);
    let { name, email, cnic, mobile, ProfileImage } = data;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const Data = new FormData();
    Data.append("name", name);
    Data.append("email", email);
    Data.append("cnic", cnic);
    Data.append("mobile", mobile);
    Data.append("Image", ProfileImage);

    let response = await axios.post("/guide/updateProfile", Data, config);
    console.log(response.data);
    Swal.fire({
      icon: "success",
      title: "Profile Updated Successfully",
      text: response.data.msg,
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Sign In Failed",
      text: error.response.data.errors[0].msg,
    });
    console.error(error);
  }
};

export const GetGuideDetails = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await axios.get("/guide/guidedetails", config);
    console.clear();
    console.log("RES=");
    console.log(res.data);
    dispatch({ type: GET_GUIDEDETAILS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const setGuide = (data) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: SET_GUIDEITEMPROFILE, payload: data });
  } catch (err) {
    console.log(err);
  }
};
