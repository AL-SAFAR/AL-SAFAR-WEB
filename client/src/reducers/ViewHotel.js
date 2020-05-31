import { VIEW_HOTELS, HOTEL_DETAIL } from "../actions/types";

const initialState = {
  HotelList: [],
  DetailHotel: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VIEW_HOTELS: {
      return {
        ...state,
        HotelList: action.payload
      };
    }
    case HOTEL_DETAIL: {
      return {
        ...state,
        DetailHotel: action.payload
      };
    }

    default:
      return state;
  }
};
