import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { UniqueRooms } from "../../../../actions/RoomAction";
const RoomTable = ({ Room: { uniquerooms }, UniqueRooms }) => {
  useEffect(() => {
    UniqueRooms();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div className='col-md-12' style={{ maxWidth: "100%" }}>
        <div className='card'>
          <div className='card-header'>
            <div className='card-title'>
              <h4>Rooms List </h4>
            </div>
          </div>
          <div className='card-body'>
            <div className='table' style={{ overflowX: "auto" }} responsive>
              <thead className='text-primary'>
                <tr>
                  <th>Type</th>
                  <th>Rent</th>
                  <th>Occupancy</th>
                  <th>Rooms</th>
                  <th>Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {uniquerooms.map(roomItem => (
                  <Fragment>
                    <tr>
                      <td>{roomItem.roomType}</td>
                      <td>Rs.{roomItem.rent}</td>
                      <td>{roomItem.roomMaxOccupancy}</td>
                      <td className=''>{roomItem.NoOfRooms}</td>
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
                  </Fragment>
                ))}
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const MapStateToProps = state => ({
  Room: state.Room
});

export default connect(MapStateToProps, {
  UniqueRooms
})(RoomTable);
