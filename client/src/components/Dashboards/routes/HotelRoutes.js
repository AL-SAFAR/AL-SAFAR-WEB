import Dashboard from "../views/Dashboard.jsx";
import Rooms from "../../hotel/HotelServiceProvider/Pages/Rooms.js";
import HotelProfile from "../../hotel/HotelServiceProvider/Pages/HotelProfile.js";
import Bookings from "../../hotel/HotelServiceProvider/Pages/Bookings.js";
import UserProfile from "../../hotel/HotelServiceProvider/Pages/UserProfile.js";
var HotelRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/hotel"
  },
  {
    path: "/rooms",
    name: "Rooms",
    icon: "nc-icon nc-shop",
    component: Rooms,
    layout: "/hotel"
  },
  {
    path: "/hotelprofile",
    name: "Hotel Profile",
    icon: "nc-icon nc-istanbul",
    component: HotelProfile,
    layout: "/hotel"
  },
  {
    path: "/bookings",
    name: "Bookings",
    icon: "nc-icon nc-check-2",
    component: Bookings,
    layout: "/hotel"
  },
  {
    path: "/userprofile",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserProfile,
    layout: "/hotel"
  }
];
export default HotelRoutes;
