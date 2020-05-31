import React, { Fragment, useState } from "react";
import "../../../../css/GuideProfile.css";
import GuideProfileImage from "../components/GuideProfileImage";
import "../../../../css/TextAnimation.css";
import anime from "animejs/lib/anime.es.js";
import $ from "jquery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import StarsRating from "stars-rating";
import GuidePlaceItem from "../components/GuidePlaceItem";
import GuidePlaceItemAlt from "../components/GuidePlaceItemAlt";
import Pagination from "../../../hotel/customer/components/Pagination";
import BasicInfo from "../components/BasicInfo";
import GuideReviewCard from "../components/GuideReviewCard";
import useWindowSize from "../../../customHooks/useWindowSize";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import HireMeModal from "../components/HireMeModal";
import { setGuideProfile } from "../../../../actions/GuideProfileAction";

const GuideProfile = ({
  GuideProfile: { GuideItemProfile },
  setGuideProfile,
}) => {
  $(document).ready(function () {
    // window.$("#exampleModal").modal();
    // Wrap every letter in a span
    // var textWrapper = document.querySelector(".ml13");
    // textWrapper.innerHTML = textWrapper.textContent.replace(
    //   /\S/g,
    //   "<span class='letter'>$&</span>"
    // );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml13 .letter",
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i,
      })
      .add({
        targets: ".ml13 .letter",
        translateY: [0, -100],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: (el, i) => 100 + 30 * i,
      });

    $(window)
      .scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top;

          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) {
            //object comes into view (scrolling down)
            if ($(this).css("opacity") == 0) {
              $(this).fadeTo(500, 1);
            }
          } else {
            //object goes out of view (scrolling up)
            if ($(this).css("opacity") == 1) {
              $(this).fadeTo(500, 0);
            }
          }
        });
      })
      .scroll();

    // Wrap every letter in a span
    var textWrapper = document.querySelector(".ml10 .letters");
    if (textWrapper)
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml10 .letter",
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i,
      })
      .add({
        targets: ".ml10",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });

    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml5 .line",
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700,
      })
      .add({
        targets: ".ml5 .line",
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
      })
      .add({
        targets: ".ml5 .ampersand",
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=600",
      })
      .add({
        targets: ".ml5 .letters-left",
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=300",
      })
      .add({
        targets: ".ml5 .letters-right",
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=600",
      });
  });
  let history = useHistory();

  console.clear();
  console.log(GuideProfile);
  const [currentPage, setcurrentPage] = useState(1);
  const [PerPage] = useState(6);
  const size = useWindowSize();
  let PlacesList = [];
  GuideItemProfile.UserProfile[0].places.map((item) => {
    console.clear();
    console.log("ITem Place=");
    console.log(item);
    PlacesList.push({
      name: item.placeName,
      image: item.placeImage,
    });
  });
  const [showModal, setshowModal] = useState(false);
  console.log(PlacesList);

  //Get Current Places
  const IndexOfLastHotel = currentPage * PerPage;
  const indexOfFirstHotel = IndexOfLastHotel - PerPage;
  let CurrentPlaces = [];
  {
    PerPage >= PlacesList.length
      ? (CurrentPlaces = PlacesList)
      : (CurrentPlaces = PlacesList.slice(indexOfFirstHotel, IndexOfLastHotel));
  }
  // Change page
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setcurrentPage(pageNumber);
  };
  const onHireMeClick = (e) => {
    setshowModal(true);
    // document.getElementById("largeModal").style.display = "block";
  };
  return (
    <Fragment>
      {/* Hire Me Modal */}
      <HireMeModal showModal={showModal} />
      <div id='GuideProfileBody'>
        {/* Header */}
        <div class='profile-page pt-5 mt-3 pb-5'>
          <div class=''>
            <div
              class='page-header page-header-small'
              filter-color='blue'
              style={{
                backgroundImage: `url('https://static.onecms.io/wp-content/uploads/sites/28/2019/12/arequipa-peru-WHERETOGO2020.jpg')`,
                backgroundSize: "cover",
              }}
            >
              <div class='page-header-image' data-parallax='true'></div>
              <div class='container'>
                <div class='content-center'>
                  <div class='cc-profile-image'>
                    <a href='#'>
                      <img
                        src={require(`../../../../images/TravelGuideProfile/${GuideItemProfile.Image}`)}
                        alt='Image'
                      />
                    </a>
                  </div>
                  <div class='h2 title' style={{ color: "white" }}>
                    {GuideItemProfile.name}
                  </div>
                  <h6 class='' style={{ color: "white" }}>
                    {GuideItemProfile.UserProfile[0].city}
                  </h6>
                  <button
                    class='btn btn-primary smooth-scroll mr-2'
                    data-aos='zoom-in'
                    data-aos-anchor='data-aos-anchor'
                    data-toggle='modal'
                    data-target='#largeModal'
                    onClick={onHireMeClick}
                  >
                    Hire Me
                  </button>
                  <a
                    class='btn btn-primary'
                    href='#!'
                    data-aos='zoom-in'
                    data-aos-anchor='data-aos-anchor'
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Basic Information Card */}
        <div d='BasicInfo'>
          <div
            className='container'
            style={{ marginBottom: "0px", paddingBottom: "0px" }}
          >
            <div className='row'>
              <div className='col-sm-12'>
                <BasicInfo
                  city={GuideItemProfile.UserProfile[0].city}
                  name={GuideItemProfile.name}
                  serviceCharges={
                    GuideItemProfile.UserProfile[0].serviceCharges
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/* About ME */}
        <div className='' style={{ marginTop: "-90px", paddingTop: "0px" }}>
          <div id='AboutMeSection'>
            <h1 class='AboutMeHeading'>About Me</h1>
            <div className='section  AboutMeDescription'>
              <div className='container containerMargin'>
                <div className='row'></div>
                <div className='row p-2 MarginFive'>
                  <div className='col-lg-8'>
                    <div className='card'>
                      <div className='card-body'>
                        {GuideItemProfile.UserProfile[0].description}
                      </div>
                    </div>
                  </div>

                  <div
                    id='GuideDescriptionImage'
                    className='col-lg-4'
                    style={{ marginLeft: "-55px", marginTop: "-70px" }}
                  >
                    <GuideProfileImage
                      Image={GuideItemProfile.Image}
                      name={GuideItemProfile.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RatingHeading and Starts */}
          <div className='container RatingMargin'>
            <div className='row'>
              <div className='col-lg-6'></div>
              <div className='col-lg-6 col-sm-12'>
                <h1 id='RatingHeading'>Rating:</h1>
                <div id='RatingStars'>
                  <StarsRating
                    count={5}
                    size={70}
                    color2={"#0099FF"}
                    rating={5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Place To Visit Text */}
        <div
          id='GuideImageGallery'
          className='container-fluid'
          style={{ position: "relative" }}
        >
          <div className='row'>
            <div className='container'>
              <div className='row' id='placeToVisitText'>
                <div
                  className='placeToVisitTextPosition'
                  style={{ position: "relative" }}
                >
                  <h1 class='ml5'>
                    <span class='text-wrapper'>
                      <span class='line line1'></span>
                      <span class='letters letters-left'>Places &nbsp; </span>
                      <span class='letters ampersand'>{" To "} </span>
                      <span class='letters letters-right'>&nbsp; Visit</span>
                      <span class='line line2'></span>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            {/* Guide Places Cards */}
            <div className='container' id='GuidePlaceItems'>
              <div className='row'>
                {size.width < 1025
                  ? // Mobile and Tablet Place Card
                    CurrentPlaces.map((Item) => {
                      return (
                        <div className='com-md-6 col-sm-6'>
                          <GuidePlaceItemAlt Item={Item} />
                        </div>
                      );
                    })
                  : // Desktop Place Card
                    CurrentPlaces.map((Item) => {
                      return (
                        <div className='col-lg-4'>
                          <GuidePlaceItem Item={Item} />
                        </div>
                      );
                    })}
              </div>
              {/* Pagination */}
              <div className='row'>
                <div className='col-lg-3 col-md-3 '></div>
                <div
                  className='col-lg-6 col-md-6 col-sm-12'
                  id='GuidePlacesPagination'
                >
                  <Pagination
                    PerPage={PerPage}
                    Total={PlacesList.length}
                    paginate={paginate}
                  />
                </div>
                <div className='col-lg-3 col-md-3 '></div>
              </div>
            </div>
          </div>
        </div>
        {/* Review Cards */}
        <div className='container-fluid  ' id='backgroundReviewCard'>
          <div className='row mt-5 pt-5'>
            <div className='col-lg-3 col-sm-3 chevronLeft'>
              <i className='fa fa-chevron-left indicatorsRC '></i>
            </div>
            <div className='col-lg-6 col-sm-6' id='GuidReviewCardBody'>
              <GuideReviewCard />
            </div>
            <div className='col-lg-3 col-sm-3 chevronRight'>
              <i className='fa fa-chevron-right indicatorsRC '></i>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const MapStateToProps = (state) => ({
  GuideProfile: state.GuideProfile,
});

export default connect(MapStateToProps, { setGuideProfile })(GuideProfile);
