import React, { Fragment } from "react";
import "../../../../css/HotelCarousel.scss";
import $ from "jquery";

const HotelCarousel = ({ hotelImages }) => {
  $(document).ready(function() {
    document.getElementById("outer3").addEventListener("click", toggleState3);

    function toggleState3() {
      let galleryView = document.getElementById("galleryView");
      let tilesView = document.getElementById("tilesView");
      let outer = document.getElementById("outer3");
      let slider = document.getElementById("slider3");
      let tilesContainer = document.getElementById("tilesContainer");
      if (slider.classList.contains("active")) {
        slider.classList.remove("active");
        outer.classList.remove("outerActive");
        galleryView.style.display = "flex";
        tilesView.style.display = "none";

        while (tilesContainer.hasChildNodes()) {
          tilesContainer.removeChild(tilesContainer.firstChild);
        }
      } else {
        slider.classList.add("active");
        outer.classList.add("outerActive");
        galleryView.style.display = "none";
        tilesView.style.display = "flex";

        for (let i = 0; i < imgObject.length - 1; i++) {
          let tileItem = document.createElement("div");
          tileItem.classList.add("tileItem");
          tileItem.style.background = `url(${require("../../../../images/HotelProfile/" +
            imgObject[i])})`;
          tileItem.style.backgroundSize = "cover";
          tileItem.style.backgroundRepeat = "no-repeat";
          tilesContainer.appendChild(tileItem);
        }
      }
    }
    let imgObject = hotelImages;
    // let counter = 0;
    // {
    //   hotelImages.length > 0 &&
    //     hotelImages.map(image => {
    //       let imgobj = `../../../../images/HotelProfile/${image}`;
    //       imgObject[counter] = imgobj;
    //       counter++;
    //       return image;
    //     });
    // }

    let mainImg = 0;
    let prevImg = imgObject.length - 1;
    let nextImg = 1;

    function loadGallery() {
      let mainView = document.getElementById("mainView");
      mainView.style.background = `url(${require("../../../../images/HotelProfile/" +
        imgObject[mainImg])})`;
      mainView.style.backgroundSize = "cover";
      mainView.style.backgroundRepeat = "no-repeat";
      let leftView = document.getElementById("leftView");
      leftView.style.background = `url(${require("../../../../images/HotelProfile/" +
        imgObject[prevImg])})`;
      leftView.style.backgroundSize = "cover";
      leftView.style.backgroundRepeat = "no-repeat";
      let rightView = document.getElementById("rightView");
      rightView.style.background = `url(${require("../../../../images/HotelProfile/" +
        imgObject[nextImg])})`;
      rightView.style.backgroundSize = "cover";
      rightView.style.backgroundRepeat = "no-repeat";

      // let linkTag = document.getElementById("linkTag");
      // linkTag.href = imgObject[mainImg];
    }

    function scrollRight() {
      prevImg = mainImg;
      mainImg = nextImg;
      if (nextImg >= imgObject.length - 1) {
        nextImg = 0;
      } else {
        nextImg++;
      }
      loadGallery();
    }

    function scrollLeft() {
      nextImg = mainImg;
      mainImg = prevImg;

      if (prevImg === 0) {
        prevImg = imgObject.length - 1;
      } else {
        prevImg--;
      }
      loadGallery();
    }

    document.getElementById("navRight").addEventListener("click", scrollRight);
    document.getElementById("navLeft").addEventListener("click", scrollLeft);
    document.getElementById("rightView").addEventListener("click", scrollRight);
    document.getElementById("leftView").addEventListener("click", scrollLeft);
    document.addEventListener("keyup", function(e) {
      if (e.keyCode === 37) {
        scrollLeft();
      } else if (e.keyCode === 39) {
        scrollRight();
      }
    });

    loadGallery();
  });
  return (
    <Fragment>
      <div id='container' style={{ maxWidth: "100%" }}>
        <div id='toggleContainer'>
          <label>Carousel</label>
          <div id='toggle'>
            <div id='outer3'>
              <div id='slider3'></div>
            </div>
            <label>Tiles</label>
          </div>
        </div>
        <div id='galleryView'>
          <div id='galleryContainer'>
            <div id='leftView'></div>
            <button id='navLeft' class='navBtns'>
              <i class='fas fa-arrow-left fa-3x'></i>
            </button>
            <a id='linkTag'>
              <div id='mainView'></div>
            </a>
            <div id='rightView'></div>
            <button id='navRight' class='navBtns'>
              <i class='fas fa-arrow-right fa-3x'></i>
            </button>
          </div>
        </div>
        <div id='tilesView'>
          <div id='tilesContainer'></div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelCarousel;
