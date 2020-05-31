import React, { useState, useEffect } from "react";
import HotelDesktopCarousel from "../components/HotelImages";
import MobileCarousel from "../components/HotelMobileCarousel";
const HotelCarousel = ({ hotelImages }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 800;
  useEffect(() => {
    window.addEventListener("resize", () => handleWindowSizeChange());
  }, []);

  const handleWindowSizeChange = () => {
    if (
      document.getElementsByClassName("hoteldetailCarousel")[0] ||
      document.getElementsByClassName("hoteldetailCarousel")[1]
    ) {
      setWidth(window.innerWidth);
    }
  };

  if (isMobile) {
    return <MobileCarousel hotelImages={hotelImages} />;
  } else {
    return <HotelDesktopCarousel hotelImages={hotelImages} />;
  }
};

export default HotelCarousel;
