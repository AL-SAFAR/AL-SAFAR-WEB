import {
  SET_HOTELPROFILE,
  FOOD_CLEAR,
  FACILITIES_CLEAR,
  ACTIVITIES_CLEAR,
  CLEANING_CLEAR,
  GENERAL_CLEAR,
  HOUSERULES_CLEAR,
  SET_HOTELProfileImages
} from "../actions/types";

const initialState = {
  name: "",
  address: "",
  city: "",
  description: "",
  wifi: false,
  parking: false,
  smoking: false,
  food: false,
  facilities: false,
  HouseRules: false,
  FoodNames: "",
  activities: false,
  cleaning: false,
  general: false,
  ActivitiesName: "",
  CleaningFacilities: "",
  GeneralFacilities: "",
  CheckInTime: "",
  CheckOutTime: "",
  HotelImages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELPROFILE: {
      return {
        ...state,
        [action.payload.name]:
          action.payload.type === "checkbox"
            ? action.payload.checked
            : action.payload.value
      };
    }
    case FOOD_CLEAR: {
      return {
        ...state,
        FoodNames: ""
      };
    }
    case FACILITIES_CLEAR: {
      return {
        ...state,
        activities: false,
        cleaning: false,
        general: false
      };
    }
    case ACTIVITIES_CLEAR: {
      return {
        ...state,
        ActivitiesName: ""
      };
    }
    case CLEANING_CLEAR: {
      return {
        ...state,
        CleaningFacilities: ""
      };
    }
    case GENERAL_CLEAR: {
      return {
        ...state,
        GeneralFacilities: ""
      };
    }
    case HOUSERULES_CLEAR: {
      return {
        ...state,
        CheckInTime: "",
        CheckOutTime: ""
      };
    }
    case SET_HOTELProfileImages: {
      return {
        ...state,
        HotelImages: action.payload
      };
    }
    default:
      return state;
  }
};
