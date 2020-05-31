import React, { Fragment, useEffect, useState } from "react";
import GuideItem from "../components/GuideItem";
import GuideItemAlt from "../components/GuideItemAlt";
import "../../../../css/guide.css";
import SearchGuide from "../components/SearchGuide";
import GuideCard from "../components/GuideCard";
import { connect } from "react-redux";
import Pagination from "../../../hotel/customer/components/Pagination";

import {
  GetGuideDetails,
  setGuide,
} from "../../../../actions/GuideProfileAction";
import GuideSearchForm from "../components/GuideSearchForm";
const Guides = ({
  GuideProfile: { GuideDetails },
  GetGuideDetails,
  setGuide,
}) => {
  useEffect(() => {
    GetGuideDetails();
  }, []);
  const [currentPage, setcurrentPage] = useState(1);
  const [PerPage] = useState(3);
  let GuidesList = GuideDetails.filter((item) => {
    return item.UserProfile.length > 0;
  });
  const IndexOfLastHotel = currentPage * PerPage;
  const indexOfFirstHotel = IndexOfLastHotel - PerPage;
  let CurrentGuides = [];
  {
    PerPage >= GuidesList.length
      ? (CurrentGuides = GuidesList)
      : (CurrentGuides = GuidesList.slice(indexOfFirstHotel, IndexOfLastHotel));
  }
  // Change page
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setcurrentPage(pageNumber);
  };
  return (
    <Fragment>
      <div className='' id='CardBody'>
        <div className='row  '>
          <div className='col-12'>
            <div className='row'>
              <div id='SGH_Container'>
                <h3 className='SearchGuideHeading'>
                  {" "}
                  We Provide the Best Travel Guides
                </h3>
              </div>
            </div>
            <GuideSearchForm />
          </div>
          {/* <div className='col-6'>
          <div className='row' id='SGH_Container'>
              <h1 className='SearchGuideHeading'>We Provide the Best </h1>
              <h1 className='SearchGuideHeading'>Travel Guides</h1>
            </div> 
          </div>*/}
        </div>
      </div>
      <div style={{ marginTop: "90px" }}>
        <div className='container'>
          <div className='row'>
            {CurrentGuides.map((item) => {
              return (
                item.UserProfile.length > 0 && (
                  <div className='col-lg-4' style={{ position: "relative" }}>
                    <GuideItem item={item} />
                    {/* <GuideItemAlt item={item} /> */}
                  </div>
                )
              );
            })}
            {/* <GuideItem item={GuideDetails[0]} /> */}
          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: "-70px" }}>
        <div className='row'>
          <div className='col-lg-3 col-md-2'></div>
          <div className='col-lg-6 col-md-8 col-sm-12'>
            <div>
              <Pagination
                PerPage={PerPage}
                Total={GuidesList.length}
                paginate={paginate}
              />
            </div>
          </div>
          <div className='col-lg-3 col-md-2'></div>
        </div>
      </div>
    </Fragment>
  );
};
const MapStateToProps = (state) => ({
  GuideProfile: state.GuideProfile,
});

export default connect(MapStateToProps, { GetGuideDetails, setGuide })(Guides);
