import React, { Fragment } from "react";
import "../../../../css/SearchForm.css";
const SearchGuide = () => {
  return (
    <Fragment>
      <section className='GuideCarousel'>
        <div
          id='carouselExampleFade'
          className='carousel slide carousel-fade'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                src='https://worldonawhim.com/wp-content/uploads/2019/11/europe-travel-guidebook.jpg'
                className='d-block w-100'
                alt='...'
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://media-exp1.licdn.com/dms/image/C561BAQFm_BeY_CqRhA/company-background_10000/0?e=2159024400&v=beta&t=6B4QXTYhodoksINMdUw6r5tfIf3wfb2X7yZlTB9F6As'
                className='d-block w-100'
                alt='...'
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://assets.nst.com.my/images/articles/11nt24tour_1502417972.jpg'
                className='d-block w-100'
                alt='...'
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleFade'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleFade'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </section>
      <section className='search-sec pt-5 pb-1 ' style={{ zIndex: 30 }}>
        <div className='container'>
          <form action='#' method='post' novalidate='novalidate'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='col-lg-4 col-md-3 col-sm-12 p-0'>
                    <input
                      type='text'
                      className='form-control search-slt'
                      placeholder='Enter Guide Name'
                    />
                  </div>
                  <div className='col-lg-4 col-md-3 col-sm-12 p-0'>
                    <input
                      type='text'
                      className='form-control search-slt'
                      placeholder='Enter City'
                    />
                  </div>
                  {/* <div className='col-lg-3 col-md-3 col-sm-12 p-0'>
                    <select
                      className='form-control search-slt'
                      id='exampleFormControlSelect1'
                    >
                      <option>Select Vehicle</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                    </select>
                  </div> */}
                  <div className='col-lg-4 col-md-3 col-sm-12 p-0'>
                    <button type='button' className='btn btn-primary wrn-btn'>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default SearchGuide;
