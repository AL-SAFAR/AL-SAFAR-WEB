import React, { useEffect } from "react";
import "../../../css/ClientDashboard.css";
const ClientDashboard = () => {
  useEffect(() => {
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
  }, []);
  return (
    <div className='ClientDashboardBody'>
      <nav className='ClientDashboard_menu' tabindex='0'>
        <div className='smartphone-menu-trigger'></div>
        <header className='ClientDashboardavatar'>
          <img
            className='ClientImage'
            src='https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg'
          />
          <h2>John D.</h2>
        </header>
        <ul id='ClientDashboardUL'>
          <li tabindex='0' className='icon-dashboard'>
            <span>Dashboard</span>
          </li>
          <li tabindex='0' className='icon-customers'>
            <span>My account</span>
          </li>
          <li tabindex='0' className='icon-users'>
            <span>Users</span>
          </li>
          <li tabindex='0' className='icon-settings'>
            <span>Settings</span>
          </li>
        </ul>
      </nav>

      <main className='ClientDashboard_Main'>
        <div class='helper'>
          RESIZE THE WINDOW
          <span>Breakpoints on 900px and 400px</span>
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
