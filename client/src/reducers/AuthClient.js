import {
  SET_AUTHCLIENT,
  SET_AUTHCLIENTSUCCESS,
  CLEAR_AUTHCLIENT
} from "../actions/types";

const initialState = {
  emailSignIn: "",
  passwordSignIn: "",
  nameSignUp: "",
  emailSignUp: "",
  passwordSignUp: "",
  confirmpass: "",
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHCLIENT: {
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    }
    case SET_AUTHCLIENTSUCCESS: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: action.payload.value,
        token: action.payload.token
      };
    }
    case CLEAR_AUTHCLIENT: {
      return {
        ...state,
        emailSignIn: "",
        passwordSignIn: "",
        nameSignUp: "",
        emailSignUp: "",
        passwordSignUp: "",
        confirmpass: "",
        isAuthenticated: false,
        user: null
      };
    }

    default:
      return state;
  }
};
