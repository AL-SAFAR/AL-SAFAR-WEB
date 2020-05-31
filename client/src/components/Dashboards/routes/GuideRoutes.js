import Dashboard from "../views/Dashboard.jsx";
import GuideProfile from "../../Travel Guide/ServiceProvider/pages/GuideProfile";
import Bookings from "../../Travel Guide/ServiceProvider/pages/Booking";
import UserProfile from "../../Travel Guide/ServiceProvider/pages/UserProfile";
var GuideRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-36",
    component: Dashboard,
    layout: "/guide"
  },
  {
    path: "/guideprofile",
    name: "Guide Profile",
    icon: "nc-icon nc-badge",
    component: GuideProfile,
    layout: "/guide"
  },
  {
    path: "/bookings",
    name: "Bookings",
    icon: "nc-icon nc-check-2",
    component: Bookings,
    layout: "/guide"
  },
  {
    path: "/userprofile",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserProfile,
    layout: "/guide"
  }
];
export default GuideRoutes;
