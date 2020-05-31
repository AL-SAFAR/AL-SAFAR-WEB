import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//Layouts
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import PageNotFound from "./components/layout/PageNotFound";
// Client
import Guides from "./components/Travel Guide/customer/pages/Guides";
import GuideProfile from "./components/Travel Guide/customer/pages/GuideProfile";
import Home from "./components/pages/Home";
import Hotel from "./components/hotel/customer/pages/Hotels";
import HotelDetail from "./components/hotel/customer/pages/HotelDetail";
import Airline from "./components/airline/Airline";
import TravelAgent from "./components/TravelAgent/TravelAgent1/TravelAgent";
import Clientdashboard from "./components/Dashboards/layouts/ClientDashboard";
//Auth
import Login from "./components/Auth/LoginMobile";
import Register from "./components/Auth/Register";
import RepRegister from "./components/Auth/RepRegister";

// Service Providers
import Admin from "./components/Dashboards/layouts/Admin.jsx";
import HotelDashboard from "./components/Dashboards/layouts/HotelDashboard";
import GuideDashboard from "./components/Dashboards/layouts/GuideDashboard";

//CSS
import "./App.css";
import "./components/Dashboards/assets/css/paper-dashboard.scss?v=1.1.0";
import "./components/Dashboards/assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import Rooms from "./components/hotel/HotelServiceProvider/Pages/Rooms";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers/index";
// Payment
import Payment from "./components/Payment/customer/Payment";

const App = () => {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Fragment>
            <Navigation />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Hotel' component={Hotel} />
              <Route exact path='/Hoteldetail' component={HotelDetail} />
              <Route exact path='/Guide' component={Guides} />
              <Route exact path='/GuideProfile' component={GuideProfile} />
              <Route exact path='/Airline' component={Airline} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Register' component={Register} />
              <Route exact path='/TravelAgent' component={TravelAgent} />
              <Route path='/clientdashboard' component={Clientdashboard} />
              <Route path='/admin' render={(props) => <Admin {...props} />} />
              <Route
                path='/hotel'
                render={(props) => <HotelDashboard {...props} />}
              />
              <Route
                path='/guide'
                render={(props) => <GuideDashboard {...props} />}
              />
              <Route path='/payment' component={Payment} />
              <Route path='/RepRegister' component={RepRegister} />
              <Route component={PageNotFound} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
