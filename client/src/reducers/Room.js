import {
  SET_ROOM,
  UNIQUE_ROOMS,
  UNIQUE_ROOMSHOTEL,
  HOTEL_COUNTER,
  SET_UNIQUEROOM,
  SET_ROOMRESERVE
} from "../actions/types";

const initialState = {
  roomType: "Delexue",
  rent: 1,
  roomMaxOccupancy: 1,
  NumberOfRooms: 1,
  uniquerooms: [],
  uniqueroomsHotel: [],
  counterForHotel: -1,
  reserveAdult: 1,
  reserveChildren: 1,
  reserveRoom: 1,
  reserveRoomType: "Delexue",
  reserveFromDate: new Date(),
  reserveToDate: new Date()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOM: {
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    }
    case UNIQUE_ROOMS: {
      return {
        ...state,
        uniquerooms: action.payload
      };
    }
    case UNIQUE_ROOMSHOTEL: {
      return {
        ...state,
        uniqueroomsHotel: [...state.uniqueroomsHotel, action.payload],
        counterForHotel: state.counterForHotel + 1
      };
    }
    case SET_UNIQUEROOM: {
      return {
        ...state,
        uniquerooms: action.payload
      };
    }
    case SET_ROOMRESERVE: {
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    }

    default:
      return state;
  }
};
