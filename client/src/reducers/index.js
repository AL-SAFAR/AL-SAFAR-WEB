import { combineReducers } from "redux";
import HotelProfile from "./HotelProfile";
import Room from "./Room";
import AuthRep from "./AuthRep";
import ViewHotel from "./ViewHotel";
import AuthClient from "./AuthClient";
import GuideProfile from "./GuideProfile";
import Payment from "./Payment";
export default combineReducers({
  HotelProfile: HotelProfile,
  Room: Room,
  AuthRep: AuthRep,
  ViewHotel: ViewHotel,
  AuthClient: AuthClient,
  GuideProfile: GuideProfile,
  Payment: Payment,
});
