import React from "react";
import "../../css/AddSubBtn.css";
import "../../css/ArrowButton.css";

const OccupancyModal = () => {
  return (
    <div
      class='modal fade'
      id='OccupancyModal'
      tabindex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog modal-dialog-centered' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title ' id='exampleModalLabel'>
              Occupancy
            </h5>
            <button
              type='button'
              class='close'
              data-dismiss='modal'
              aria-label='Close'
              style={{ color: "#0099FF" }}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div class='modal-body'>
            <div className='container'>
              <div className='Rooms'>
                <div className='row'>
                  <div className='col-12'>
                    <h4>Rooms</h4>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-4'>
                    <button class='icon-btn add-btn'>
                      <div class='btn-txt'>Remove</div>
                    </button>
                  </div>
                  <div className='col-4  mt-1 pt-1'>
                    <h3 id='RoomQuantity'>1</h3>
                  </div>
                  <div className='col-4'>
                    <button class='icon-btn add-btn'>
                      <div class='add-icon'></div>
                      <div class='btn-txt'>Add</div>
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className='Adults'>
                <div className='row'>
                  <div className='col-12'>
                    <h4>Adults</h4>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-4'>
                    <button class='icon-btn add-btn'>
                      <div class='btn-txt'>Remove</div>
                    </button>
                  </div>
                  <div className='col-4'>
                    <h3 id='AdultQuantity'>1</h3>
                  </div>
                  <div className='col-4'>
                    <button class='icon-btn add-btn'>
                      <div class='add-icon'></div>
                      <div class='btn-txt'>Add</div>
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className='Children'>
                <div className='row'>
                  <div className='col-12'>
                    <h4>Children</h4>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-4'>
                    <button class='icon-btn add-btn'>
                      <div class='btn-txt'>Remove</div>
                    </button>
                  </div>
                  <div className='col-4'>
                    <h3 id='ChildrenQuantity'>0</h3>
                  </div>
                  <div className='col-4'>
                    <button class='icon-btn add-btn'>
                      <div class='add-icon'></div>
                      <div class='btn-txt'>Add</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='modal-footer'>
            <a className='ArrowAnchor' href='#!'>
              <svg class='icon-arrow before'>
                <use xlinkHref='#arrow'></use>
              </svg>
              <span class='label'>Save Changes</span>
              <svg class='icon-arrow after'>
                <use xlinkHref='#arrow'></use>
              </svg>
            </a>

            <svg style={{ display: "none" }}>
              <defs>
                <symbol id='arrow' viewBox='0 0 35 15'>
                  <title>Arrow</title>
                  <path d='M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z ' />
                </symbol>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccupancyModal;
