import React, { Fragment } from "react";
import GuideItem from "./customer/components/GuideItem";
import GuideItemAlt from "./customer/components/GuideItemAlt";
import Image from "../../images/HotelProfile/Haris.jpg";
import "../../css/guide.scss";
import SearchGuide from "./customer/components/SearchGuide";

const Guides = () => {
  return (
    <Fragment>
      <SearchGuide />

      {/* <div style={{ marginTop: "-90px" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 p-1'>
              <GuideItem />
            </div>
            <div className='col-lg-6 p-1'>
              <GuideItemAlt />
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Guides;
