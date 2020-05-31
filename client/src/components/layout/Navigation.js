import React, { useState, useEffect } from "react";
import Navbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
const Navigation = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 500;
  useEffect(() => {
    window.addEventListener("resize", () => handleWindowSizeChange());
  }, []);

  const handleWindowSizeChange = () => {
    if (
      document.getElementsByClassName("clientnav")[0] ||
      document.getElementsByClassName("clientnav")[1]
    ) {
      setWidth(window.innerWidth);
    }
  };

  if (isMobile) {
    return <MobileNavbar />;
  } else {
    return <Navbar />;
  }
};

export default Navigation;
