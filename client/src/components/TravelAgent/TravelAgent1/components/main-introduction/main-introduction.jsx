import React from "react";
import "./main-introduction.styles.scss";
function MainIntro({
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
  cover6,
  cover7,
  cover8,
  whatyoudo,
  hostimg,
  hostname,
  location,
  hostRating,
  hostdesc,
  hostBriefIntro,
  hostDuration,
  groupSize,
  guideIncludes,
  hostedIn,
  reviewerpic,
  reviewername,
  review,
}) {
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-4" style={{ paddingRight: 8 }}>
              <img src={cover1} alt="" />
            </div>
            <div className="col-md-4">
              <div className="row" style={{ height: "70%" }}>
                <div className="col-md-12 p-0 m-0">
                  <img
                    src={cover2}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "static",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="row" style={{ height: "28.5%", marginTop: 8 }}>
                <div className="col-md-6 pl-0 pr-1 ">
                  <img
                    src={cover3}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "static",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-md-6 pr-0 pl-1 ">
                  <img
                    src={cover4}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "static",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row" style={{ height: "162px" }}>
                <div className="col-md-6 pl-2 pr-1 ">
                  <img
                    src={cover5}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "static",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-md-6 pr-0 pl-1 ">
                  <img
                    src={cover6}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "static",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="row" style={{ height: "306px", marginTop: 8 }}>
                <div className="col-md-6 pl-2 pr-1 ">
                  <img
                    src={cover7}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "static",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-md-6 pr-0 pl-1 ">
                  <img
                    src={cover8}
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "static",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="introduction">
        <div className="container">
          <div className="row">
            <div className="col-md-5" style={{ lineHeight: 1.5 }}>
              <span className="featured">FEATURED</span>
              <div className="name">{hostname}</div>
              <div className="location">{location}</div>
              <div className="rating">{hostRating} ★</div>
            </div>
            <div className="col-md-7">
              <span className="descriptiom">{hostBriefIntro}</span>
              <div className="row pt-5">
                <div className="col">
                  <i class="far fa-clock icons"></i>
                  <div className="desc">Duration</div>
                  <div className="desc1">{hostDuration}</div>
                </div>
                <div className="col">
                  <i class="fas fa-user-friends icons"></i>
                  <div className="desc">Group size</div>
                  <div className="desc1">{groupSize}</div>
                </div>
                <div className="col">
                  <i class="fas fa-clipboard-list icons"></i>
                  <div className="desc">Includes</div>
                  <div className="desc1">{guideIncludes}</div>
                </div>
                <div className="col">
                  <i class="fas fa-comments icons"></i>
                  <div className="desc">Hosted in</div>
                  <div className="desc1">{hostedIn}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="agentDescription">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-3" style={{ height: 200 }}>
              <div className="stickyHeading">What you'll do</div>
            </div>
            <div className="col-md-9">
              <div className="stickyHeadingContent">{whatyoudo}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" style={{ height: 349 }}>
              <div className="stickyHeading">Your Host</div>
            </div>
            <div className="col-md-9">
              <div style={{ height: 120, width: 120 }}>
                <img src={hostimg} alt="" style={{ borderRadius: "50%" }} />
              </div>
              <h4
                style={{
                  marginTop: "3%",
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                }}
              >
                {hostname}
              </h4>
              <div className="stickyHeadingContent">{hostdesc}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="whats-included">
        <div className="container">
          <div className="row">
            <div className="col-md-3" style={{ height: 280 }}>
              <div className="stickyHeading">What's included</div>
            </div>
            <div className="col-md-9">
              <div className="stickyHeadingContent pl-2">
                <div className="row">
                  <div className="col-md-4 mr-4 colmd4styling">
                    <i class="fas fa-glass-cheers icons1"></i>
                    <div className="desc pt-3">Drinks</div>
                    <div className="desc2">5 hours</div>
                  </div>
                  <div className="col-md-4 colmd4styling">
                    <i class="fas fa-bus icons1"></i>
                    <div className="desc pt-3">Transportation</div>
                    <div className="desc2">5 hours</div>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-3" style={{ height: 280 }}>
              <div className="stickyHeading">Guest Reviews</div>
            </div>
            <div className="col-md-9">
              <div style={{ display: "inline-flex" }}>
                <div style={{ height: 60, width: 60 }}>
                  <img
                    src={reviewerpic}
                    alt=""
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="desc pl-3 pt-3">{reviewername}</div>
              </div>
              <div className="customer-review pt-3">{review}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainIntro;
