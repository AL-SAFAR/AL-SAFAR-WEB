import { SET_AUTHREP, SET_AUTHSUCCESS, LOAD_USER } from "../actions/types";

const initialState = {
  SignIn: true,
  emailSignIn: "",
  passwordSignIn: "",
  nameSignUp: "",
  emailSignUp: "",
  phoneSignUp: "",
  cnicSignUp: "",
  passwordSignUp: "",
  confirmpass: "",
  isAuthenticated: null,
  token: localStorage.getItem("token"),
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHREP: {
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    }
    case SET_AUTHSUCCESS: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: action.payload.value,
        token: action.payload.token
      };
    }
    case LOAD_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
};
