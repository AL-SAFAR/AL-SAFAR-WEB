import React from "react";
import HeroBackground from "./HeroBackground";
import "../../css/Hero.css";
import Tabs from "./Tabs";
const Hero = () => {
  return (
    <div style={{}}>
      <div className='header'>
        <div>
          <div className='container'>
            <div className='row' style={{ paddingTop: "100px" }}>
              <div className='col-lg-6 col-sm-12 col-md-12'>
                <div className='TabsPadding'>
                  <Tabs />
                </div>
              </div>
              <div className='col-lg-6 col-sm-12 col-md-12'>
                {" "}
                <h1 class='heading-primary '>
                  <span class='heading-primary-main'>AL-SAFAR</span>
                  <span class='heading-primary-sub'>
                    Making Dreams a Reality
                  </span>
                </h1>
                <div>
                  <a href='#!' class='herobtn herobtn-white herobtn-animated'>
                    Discover our tours
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
