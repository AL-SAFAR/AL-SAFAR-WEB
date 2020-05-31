import axios from "axios";
import Swal from "sweetalert2";
import setAuthToken from "../components/utils/setAuthToken";
import {
  SET_AUTHCLIENT,
  SET_AUTHCLIENTSUCCESS,
  CLEAR_AUTHCLIENT
} from "./types";
// Set SignUp and Signin form of Representative
export const setAuthClient = data => async dispatch => {
  try {
    // console.log(data);
    dispatch({ type: SET_AUTHCLIENT, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const AuthenticateClient = data => async dispatch => {
  try {
    console.log("Authenticate Rep=");
    console.log(data);
    const {
      SignIn,
      emailSignIn,
      passwordSignIn,
      nameSignUp,
      emailSignUp,
      passwordSignUp,
      isAuthenticated
    } = data;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    if (SignIn) {
      let type = "0";
      let SignInData = {
        email: emailSignIn,
        password: passwordSignIn,
        type
      };
      console.log(SignInData);
      const res = await axios.post("/auth", SignInData, config);
      let token = res.data.token;
      let value = true;
      dispatch({
        type: SET_AUTHCLIENTSUCCESS,
        payload: {
          value,
          token
        }
      });
    } else {
      let RegisterData = {
        name: nameSignUp,
        email: emailSignUp,
        password: passwordSignUp
      };
      const res = await axios.post("/users", RegisterData, config);
      let token = res.data.token;
      let value = true;
      dispatch({
        type: SET_AUTHCLIENTSUCCESS,
        payload: {
          value,
          token
        }
      });
    }
  } catch (error) {
    error.response.data.errors
      ? Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: error.response.data.errors[0].msg
        })
      : Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: error.response.data.msg
        });
    console.log("Error Response=");
    console.log(error.response.data);
  }
};

// Set Loading to True
export const ClearAuthClient = () => {
  return {
    type: CLEAR_AUTHCLIENT
  };
};
