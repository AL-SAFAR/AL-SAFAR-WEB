import { SET_AUTHREP, SET_AUTHSUCCESS, LOAD_USER } from "./types";
import axios from "axios";
import Swal from "sweetalert2";
import setAuthToken from "../components/utils/setAuthToken";
import React from "react";

// Set SignUp and Signin form of Representative
export const setAuthRep = data => async dispatch => {
  try {
    // console.log(data);
    dispatch({ type: SET_AUTHREP, payload: data });
  } catch (err) {
    console.log(err);
  }
};

// Set SignUp and Signin form of Representative
export const AuthenticateRep = data => async dispatch => {
  console.log(data);
  try {
    const {
      SignIn,
      emailSignIn,
      passwordSignIn,
      nameSignUp,
      emailSignUp,
      phoneSignUp,
      cnicSignUp,
      passwordSignUp,
      Representative
    } = data;
    console.log(Representative);
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    // Sign In
    if (SignIn) {
      try {
        let type = "0";
        let value = "";
        if (Representative === "Hotel") {
          type = "1";
          value = "hotel";
        } else if (Representative === "Agent") {
          type = "3";
          value = "agent";
        } else {
          type = "2";
          value = "guide";
        }
        let email = emailSignIn;
        let password = passwordSignIn;
        let SignInData = {
          email,
          password,
          type
        };
        const res = await axios.post("/auth", SignInData, config);
        let token = res.data.token;

        dispatch({
          type: SET_AUTHSUCCESS,
          payload: {
            value,
            token
          }
        });
        console.log(res.data);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: err.response.data.errors[0].msg
        });
        console.error(err.response.data.msg);
      }
    } else {
      console.log("Inside Else");
      // Sign Up
      let name = nameSignUp;
      let email = emailSignUp;
      let password = passwordSignUp;
      let mobile = phoneSignUp;
      let cnic = cnicSignUp;
      let FormData = { name, email, password, mobile, cnic };
      console.log(Representative);
      if (Representative.toString() === "Hotel") {
        console.log("Inside Hotel IF");
        try {
          const res = await axios.post("/hotelRep", FormData, config);
          console.log("res.data=");
          console.log(res.data);
          console.log("Try Executed of Hotel Rep");

          return;
        } catch (err) {
          console.log("Catch Executed of Hotel Rep");
          console.log(err.response.data.errors[0].msg);
          Swal.fire({
            icon: "error",
            title: "Sign Up Failed",
            text: err.response.data.errors[0].msg
          });
        }
      } else if (Representative === "Agent") {
        console.log("Inside Agent IF");
        try {
          const res = await axios.post("/TravelAgent", FormData, config);
          console.log("res.data=");
          console.log(res.data);
        } catch (err) {
          console.error(err);
          console.log(err.response.data.errors[0].msg);
          Swal.fire({
            icon: "error",
            title: "Sign Up Failed",
            text: err.response.data.errors[0].msg
          });
        }
      } else {
        // Guide
        try {
          const res = await axios.post("/guide", FormData, config);
          console.log("res.data=");
          console.log(res.data);

          return;
        } catch (err) {
          console.log(err.response.data.errors[0].msg);
          Swal.fire({
            icon: "error",
            title: "Sign Up Failed",
            text: err.response.data.errors[0].msg
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

//LoadUser
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/auth");
    dispatch({ type: LOAD_USER, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};
