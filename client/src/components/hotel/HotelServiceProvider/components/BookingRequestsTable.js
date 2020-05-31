import React, { Fragment } from "react";

const BookingRequests = () => {
  return (
    <Fragment>
      <div className='col-md-12' style={{ maxWidth: "100%" }}>
        <div className='card'>
          <div className='card-header'>
            <div className='card-title'>
              <h4>Booking Requests </h4>
            </div>
          </div>
          <div className='card-body'>
            <div className='table' style={{ overflowX: "auto" }} responsive>
              <thead className='text-primary'>
                <tr>
                  <th>Customer Name</th>
                  <th>FromDate</th>
                  <th>toDate</th>
                  <th>Type of Room</th>
                  <th>Number of Rooms</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Khawaja Muhammad Ali</td>
                  <td>17-2-2020</td>
                  <td>19-2-2020</td>
                  <td>Economy</td>
                  <td>1</td>
                  <td>
                    <span className='delete' style={{ color: "#d9534f" }}>
                      <strong>
                        <a href='#!'>Delete</a>
                      </strong>
                    </span>
                  </td>
                  <td>
                    <span className='update'>
                      <strong>
                        <a href='#!'>Update</a>
                      </strong>
                    </span>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookingRequests;
