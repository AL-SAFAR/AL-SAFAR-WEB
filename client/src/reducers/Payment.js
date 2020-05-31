import { SET_PAYMENT } from "../actions/types";

const initialState = {
  cardNumber: "",
  cardHolder: "",
  Expires: "",
  CVC: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAYMENT: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    default:
      return state;
  }
};
