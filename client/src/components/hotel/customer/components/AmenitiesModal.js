import React, { Fragment } from "react";
import "../../../../css/AmenitiesModal.css";
const AmenitiesModal = ({ name, array }) => {
  return (
    <div>
      <div
        class='modal fade'
        id='amenitiesmodal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-dialog-centered' role='document'>
          <div
            class='modal-content'
            style={{ width: "230px", overflowY: "auto" }}
          >
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                {name}
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body text-center '>
              <div className='container'>
                <table
                  class='underlined  m-4 '
                  style={{ border: "none", overflowY: "auto" }}
                >
                  <tr>
                    <td>
                      <ol id='example1'>
                        {array.map(arrayItem => {
                          return (
                            <Fragment>
                              <li>
                                <p>{arrayItem}</p>
                              </li>
                            </Fragment>
                          );
                        })}
                      </ol>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;
