import React, { Fragment, useState, useEffect } from "react";
import "../../../../css/pagination.scss";
import $ from "jquery";
const Pagination = ({ PerPage, Total, paginate }) => {
  useEffect(() => {
    var element = document.getElementById("PageItem1");
    if (element) element.classList.add("current");
  }, []);

  let pageNumbers = [];
  console.log("Math.Ceil=" + Math.ceil(Total / PerPage));
  const [IndexOfFirst, setIndexOfFirst] = useState(1);
  const [NoOfPageItem, setNoOfPageItem] = useState(5);
  const [IndexOfLast, setIndexOfLast] = useState(
    NoOfPageItem + IndexOfFirst - 1
  );

  for (let i = IndexOfFirst; i <= NoOfPageItem + IndexOfFirst - 1; ++i) {
    if (Math.ceil(Total / PerPage) >= i) pageNumbers.push(i);
  }
  const Next = () => {
    console.clear();
    console.log("Indx of First");
    console.log(IndexOfFirst);
    console.log("NoOfPageItem");
    console.log(NoOfPageItem);
    console.log("IOL=");
    console.log(IndexOfFirst + NoOfPageItem);
    console.log("CEIL=");
    console.log(Math.ceil(Total / PerPage));
    if (IndexOfFirst + NoOfPageItem >= Math.ceil(Total / PerPage)) {
      return;
    }
    let newIndex = NoOfPageItem + IndexOfFirst - 1;
    setIndexOfFirst(newIndex);

    setIndexOfLast(NoOfPageItem + IndexOfFirst - 1);

    var elems = document.querySelectorAll(".current");

    [].forEach.call(elems, function (el) {
      el.classList.remove("current");
    });
    var element = document.getElementById("PageItem" + IndexOfFirst);
    element.classList.add("current");
    paginate(NoOfPageItem + IndexOfFirst - 1);
  };

  const Prev = () => {
    if (IndexOfFirst <= 1) {
      return;
    }
    let newIndex = IndexOfFirst - NoOfPageItem + 1;
    setIndexOfFirst(newIndex);

    setIndexOfLast(IndexOfLast - 1);

    var elems = document.querySelectorAll(".current");

    [].forEach.call(elems, function (el) {
      el.classList.remove("current");
    });
    var element = document.getElementById("PageItem" + IndexOfFirst);
    element.classList.add("current");
    paginate(IndexOfFirst - NoOfPageItem + 1);
  };

  return (
    <Fragment>
      <div class='pagination-wrapper' style={{ maxWidth: "100%" }}>
        <div class='pagination'>
          <a
            class='prev page-numbers'
            href='javascript:;'
            onClick={() => Prev()}
          >
            Prev
          </a>

          {pageNumbers.map((number) => (
            <a
              onClick={(e) => {
                var elems = document.querySelectorAll(".current");

                [].forEach.call(elems, function (el) {
                  el.classList.remove("current");
                });
                var element = document.getElementById(e.target.id);
                element.classList.add("current");

                paginate(number);
              }}
              id={`PageItem${number}`}
              class='page-numbers'
              href='#!'
            >
              {number}
            </a>
          ))}

          <a
            class='next page-numbers'
            onClick={() => Next()}
            href='javascript:;'
          >
            Next
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Pagination;
