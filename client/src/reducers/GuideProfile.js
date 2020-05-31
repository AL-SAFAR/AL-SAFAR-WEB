import {
  SET_GUIDEPROFILE,
  REMOVE_PLACENAME,
  GET_GUIDEDETAILS,
  SET_GUIDEITEMPROFILE,
} from "../actions/types";

const initialState = {
  name: "",
  email: "",
  cnic: "",
  currentpassword: "",
  newPassword: "",
  mobile: "",
  ProfileImage: null,
  address: "",
  city: "",
  charges: 1,
  description: "",
  placenames: [],
  PlaceImages: [],
  GuideDetails: [],
  GuideItemProfile: null,
  startDate: null,
  endDate: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GUIDEPROFILE: {
      // File Handling
      if (action.payload.type === "file") {
        let file = action.payload.file;
        var FileExists = false;
        var index = 0;

        if (action.payload.name === "ProfileImage") {
          return {
            ...state,
            ProfileImage: file,
          };
        }
        //Check if Object is already in placenames Array
        for (var i = 0; i < state.PlaceImages.length; i++) {
          if (
            typeof state.PlaceImages[i][action.payload.name + ""] !==
            "undefined"
          ) {
            index = i;
            FileExists = true;
            break;
          }
        }
        // Place Image already Exists in Array
        if (FileExists) {
          return {
            ...state,
            PlaceImages: [
              ...state.PlaceImages.slice(0, index),
              { [action.payload.name]: file },
              ...state.PlaceImages.slice(index + 1),
            ],
          };
        } else {
          //Place Image Does Not Exist in Array

          return {
            ...state,
            PlaceImages: [
              ...state.PlaceImages,
              { [action.payload.name]: file },
            ],
          };
        }
      }
      // SET placenames array
      else if (action.payload.name.includes("placename")) {
        var exists = false;
        var index = 0;
        //Check if Object is already in placenames Array
        for (var i = 0; i < state.placenames.length; i++) {
          if (
            typeof state.placenames[i][action.payload.name + ""] !== "undefined"
          ) {
            index = i;
            exists = true;
            break;
          }
        }
        // Place Name already Exists in Array
        if (exists) {
          return {
            ...state,
            placenames: [
              ...state.placenames.slice(0, index),
              { [action.payload.name]: action.payload.value },
              ...state.placenames.slice(index + 1),
            ],
          };
        } else {
          //Place Name Does Not Exist in Array

          return {
            ...state,
            placenames: [
              ...state.placenames,
              { [action.payload.name]: action.payload.value },
            ],
          };
        }
      } else {
        // Regular Text : Address,City etc
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      }
    }
    case REMOVE_PLACENAME: {
      let counter = -1;
      if (action.payload.index === 0 && state.placenames.length === 1) {
        return {
          ...state,
          placenames: [],
        };
      }
      return {
        ...state,
        placenames: state.placenames.filter((placename) => {
          ++counter;
          console.log("INdex=" + action.payload.index);
          console.log("Counter=" + counter);
          return counter !== action.payload.index;
        }),
        PlaceImages: state.PlaceImages.filter((PlaceImage) => {
          ++counter;
          console.log("INdex=" + action.payload.index);
          console.log("Counter=" + counter);
          return counter !== action.payload.index;
        }),
      };
    }
    case GET_GUIDEDETAILS: {
      console.log("Action Payload=");
      console.log(action.payload);

      return {
        ...state,
        GuideDetails: action.payload,
      };
    }
    case SET_GUIDEITEMPROFILE: {
      return {
        ...state,
        GuideItemProfile: action.payload,
      };
    }
    default:
      return state;
  }
};
