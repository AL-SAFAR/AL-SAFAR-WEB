import React, { Fragment, useEffect } from "react";
import $ from "jquery";
import "../../../../css/HireMeModal.css";
import Swal from "sweetalert2";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { connect } from "react-redux";
import { setGuideProfile } from "../../../../actions/GuideProfileAction";
import { useHistory } from "react-router-dom";
const HireMeModal = ({
  GuideProfile: { startDate, endDate },
  showModal,
  setGuideProfile,
}) => {
  $(document).ready(function () {
    window.$("#largeModal").modal({ show: true, backdrop: "static" });
  });
  useEffect(() => {
    if (!showModal) {
      resetBooking();
    }
  }, []);
  const resetBooking = () => {
    setGuideProfile({
      name: "startDate",
      value: null,
    });
    setGuideProfile({
      name: "endDate",
      value: null,
    });

    return;
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const history = useHistory();
  const handleSelect = (ranges) => {
    console.log(new Date());
    console.log("Ranges=");
    console.log(ranges);
    console.log("Ranges Selection");
    console.log([ranges.selection]);
    console.log("Start Date");
    console.log(ranges.selection.startDate);
    console.log("End Date");
    console.log(ranges.selection.endDate);
    setState([ranges.selection]);
    let startDate = ranges.selection.startDate;
    let endDate = ranges.selection.endDate;

    if (startDate) {
      // alert(startDate);
      setGuideProfile({
        name: "startDate",
        value: ranges.selection.startDate,
      });
    }
    if (endDate) {
      // alert(endDate);
      setGuideProfile({
        name: "endDate",
        value: ranges.selection.endDate,
      });
    }
  };
  return (
    <Fragment>
      {showModal && (
        <div
          className='modal fade'
          id='largeModal'
          tabindex='-1'
          role='dialog'
          aria-labelledby='basicModal'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered modal-lg'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title' id='myModalLabel'>
                  Select Date to Book Guide
                </h4>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <DateRangePicker
                  onChange={(item) => {
                    handleSelect(item);
                  }}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={state}
                  direction='horizontal'
                />
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-danger'
                  data-dismiss='modal'
                >
                  Close
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => {
                    if (startDate === null && endDate === null) {
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Please Select the Dates to book Guide",
                      });
                      return;
                    }
                    window.$("#largeModal").modal("hide");
                    history.push("/payment");
                  }}
                >
                  Next &nbsp; <i class='fa fa-arrow-right'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
const MapStateToProps = (state, ownProps) => ({
  GuideProfile: state.GuideProfile,
  showModal: ownProps.showModal,
});
export default connect(MapStateToProps, { setGuideProfile })(HireMeModal);
