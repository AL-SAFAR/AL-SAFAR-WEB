import React, { Fragment } from "react";
import RoomForm from "../components/RoomForm";
import RoomSearch from "../components/RoomSearch";
import RoomTable from "../components/RoomTable";
import "../../../../css/HoverIcons.css";

const Rooms = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 mt-4 mb-2'>
            <RoomForm />
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 mt-5 '>
            <div className='row'>
              <div className='SearchBar p-5 mr-3 '>
                <RoomSearch />
              </div>
            </div>
            <div className='row' style={{ marginTop: "-80px" }}>
              <RoomTable />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Rooms;
