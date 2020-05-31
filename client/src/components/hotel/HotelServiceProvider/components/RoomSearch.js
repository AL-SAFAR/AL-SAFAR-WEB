import React, { Fragment } from "react";
import "../../../../css/SearchBar.scss";
import $ from "jquery";
const RoomSearch = () => {
  $(document).ready(function() {
    $(".searchForm").click(function() {
      $(".search").addClass("opened");
      $(".searchbox").focus();
    });
    $(".searchForm").focusout(function() {
      $(".search").removeClass("opened");
      $(".searchDiv").removeClass("searchDiv");
    });

    $(".SeacrhBar").focusout(function() {
      $(".search").removeClass("opened");
      $(".searchDiv").removeClass("searchDiv");
    });
    $("input").focus(function() {
      $(".search").removeClass("opened");
      document.getElementById("SearchBarText").value = "";
    });
    $(".searchbox").focus(function() {
      $(".search").addClass("opened");
      document.getElementById("SearchBarText").value = "Room Search";
    });
  });
  return (
    <Fragment>
      <div className='wrapper searchForm'>
        <h3 id='SearchBarText'>Search Room</h3>
        <div class='search searchDiv'>
          <form name='cse' id='' class='searchform' autocomplete='off'>
            <input
              type='text'
              size='40'
              id='SearchInput'
              class='searchbox SearchInput'
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default RoomSearch;
