import React, { Fragment, useState } from "react";
import "../../../../css/GuideSearchForm.css";
import StarRatings from "react-star-ratings";
import RangerSlider from "./RangeSlider";
const GuideSearchForm = () => {
  const [rating, setrating] = useState(0);
  const changeRating = (newRating, name) => {
    setrating(newRating);
  };
  return (
    <Fragment>
      <div className=''>
        {" "}
        <div className='container m-5' id='GuideContainer'>
          <div className='row'>
            <form className=''>
              <div class='form-row pl-5'>
                <div class='col has-icon'>
                  <input
                    type='text'
                    class='form-control GuideSearchInput'
                    id='GuideSearchLocation'
                    placeholder='Enter Location'
                  />
                  <span class='form-control-icon search-destination-input__icon'>
                    <span class='SVGIcon SVGIcon--24px search-form__icon'>
                      <svg
                        focusable='false'
                        data-id='SVG_LOCATION__24'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g
                          fill='none'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <path d='M6.45 13.47a6.75 6.75 0 0 1 .73-8.7l.05-.04a6.75 6.75 0 0 1 9.54 0l.05.05a6.75 6.75 0 0 1 .73 8.7L12 21.24l-5.55-7.78z'></path>
                          <path d='M14.24 9.55a2.24 2.24 0 1 1-4.48 0 2.24 2.24 0 0 1 4.48 0z'></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
                <div class='col has-icon'>
                  <input
                    type='text'
                    class='form-control GuideSearchInput'
                    id='GuideSearchLocation'
                    placeholder='Enter Guide Name'
                  />
                  <span class='form-control-icon search-destination-input__icon'>
                    <span class='SVGIcon SVGIcon--24px search-form__icon'>
                      <i className='fa-fa-car' style={{ color: "red" }}></i>
                      <svg
                        focusable='false'
                        data-id='SVG_GROUP__24'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <g fill='none' stroke-linecap='round'>
                          <path d='M2 19.835a18.625 18.625 0 0 0 7.113 1.415 18.613 18.613 0 0 0 7.114-1.415M22.623 16.849c-.943.39-1.917.7-2.91.926M16.227 19.737a7.108 7.108 0 0 0-2.083-5.03 7.15 7.15 0 0 0-2.308-1.542 7.139 7.139 0 0 0-2.722-.54c-.466 0-.931.045-1.388.135a7.162 7.162 0 0 0-2.564 1.062 7.084 7.084 0 0 0-1.963 1.963c-.259.388-.479.8-.658 1.23A7.108 7.108 0 0 0 2 19.737M12.416 9.324a3.3 3.3 0 0 1-3.299 3.3H9.11a3.299 3.299 0 0 1-3.298-3.3V8.5c0-1.822 1.476-3.3 3.299-3.3h.008a3.3 3.3 0 0 1 3.298 3.3v.824zM15.72 9.95c1.995 0 3.974.86 5.338 2.523a6.872 6.872 0 0 1 1.565 4.375M15.72 9.95h.007a3.2 3.2 0 0 0 3.2-3.2v-.8a3.2 3.2 0 0 0-3.2-3.2h-.007c-.949 0-1.8.413-2.388 1.068' />
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
              <div className='form-row mt-3 pl-5'>
                <p className='GuideSearchLabel'>Budget:</p>
                <RangerSlider />
              </div>
              <div className='form-row mt-5 pl-5'>
                <p className='GuideSearchLabel mt-1'>Rating:</p>
                <br />
                <div className=''>
                  {" "}
                  &nbsp; &nbsp;
                  <StarRatings
                    rating={rating}
                    starRatedColor='rgb(0,153,255)'
                    starHoverColor='rgb(0,153,255)'
                    starDimension='40px'
                    changeRating={changeRating}
                    numberOfStars={5}
                    name='rating'
                  />
                </div>
                <br />
              </div>

              <div className='row'>
                <div className='form-row pl-5 ml-5 mt-4 '>
                  <button
                    class='GuideButton btn btn-primary search-form__button search-form__submit-button'
                    type='submit'
                    disabled=''
                    style={{ width: "400px", fontWeight: "700" }}
                  >
                    <span class='btn__label'>
                      <span class='SVGIcon SVGIcon--24px search-form__icon'>
                        <svg
                          focusable='false'
                          data-id='SVG_SEARCH__24'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.7 13.2a6.5 6.5 0 1 0-1.4 2m0 0l4.6 4.6'
                            fill='none'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </span>
                      <span>Search</span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GuideSearchForm;
