import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";

import DemoNavbar from "../components/Navbars/DemoNavbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.jsx";
import Home from "../../pages/Home";
import routes from "../routes/GuideRoutes";

import Dashboard from "../views/Dashboard.jsx";
import Rooms from "../../hotel/HotelServiceProvider/Pages/Rooms.js";
import HotelProfile from "../../hotel/HotelServiceProvider/Pages/HotelProfile.js";
import Bookings from "../../hotel/HotelServiceProvider/Pages/Bookings.js";
import { connect } from "react-redux";
import { loadUser } from "../../../actions/AuthRepAction";
var ps;

class GuideDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info"
    };
    this.mainPanel = React.createRef();
  }
  componentDidMount() {
    this.props.loadUser();
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    let ClientDesktopNavExists = document.getElementById("desktop_navbar");
    let ClientMobileNavExists = document.getElementById("mobile_navbar");
    let ClientFooterExists = document.getElementById("ClientFooter");

    if (ClientDesktopNavExists) {
      ClientDesktopNavExists.parentNode.removeChild(ClientDesktopNavExists);
    } else if (ClientMobileNavExists) {
      ClientMobileNavExists.parentNode.removeChild(ClientMobileNavExists);
    }
    if (ClientFooterExists) {
      ClientFooterExists.parentNode.removeChild(ClientFooterExists);
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className='wrapper'>
        <Sidebar
          {...this.props}
          routes={routes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className='main-panel' ref={this.mainPanel}>
          <DemoNavbar {...this.props} routes={routes} />
          <Switch>
            {routes.map((prop, key) => {
              console.log(prop);
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>
          {/* <Footer fluid /> */}
        </div>
        {/* <FixedPlugin
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
          handleActiveClick={this.handleActiveClick}
          handleBgClick={this.handleBgClick}
        /> */}
      </div>
    );
  }
}

export default connect(null, { loadUser })(GuideDashboard);
