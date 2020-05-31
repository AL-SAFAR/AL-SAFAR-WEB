import React, { useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import SearchHotel from "../components/SearchHotel";
import { connect } from "react-redux";
import { GetHotelsList } from "../../../../actions/ViewHotelsAction";
import ListHotel from "../components/ListHotel";
import Pagination from "../components/Pagination";
import {
  UniqueRoomsByHotel,
  setUniqueRoom,
} from "../../../../actions/RoomAction";

const Hotels = ({
  ViewHotel: { HotelList, uniquerooms },
  GetHotelsList,
  UniqueRoomsByHotel,
  setUniqueRoom,
}) => {
  useEffect(() => {
    GetHotelsList();
    // setUniqueRoom([]);
    {
      HotelList.map((listItem) => {
        UniqueRoomsByHotel(listItem._id);
      });
    }
  }, []);
  let counter = -1;

  const [currentPage, setcurrentPage] = useState(1);
  const [HotelPerPage] = useState(3);

  //Get Current Hotels
  const IndexOfLastHotel = currentPage * HotelPerPage;
  const indexOfFirstHotel = IndexOfLastHotel - HotelPerPage;
  let CurrentHotels = [];
  {
    HotelPerPage >= HotelList.length
      ? (CurrentHotels = HotelList)
      : (CurrentHotels = HotelList.slice(indexOfFirstHotel, IndexOfLastHotel));
  }
  // Change page
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setcurrentPage(pageNumber);
  };

  return (
    <div className='row'>
      <div id='SearchHotel' className='col-lg-4 col-md-12 col-sm-12 mt-5'>
        <SearchHotel />
      </div>
      <div id='HotelCard' className='col-lg-8 col-md-12 col-sm-12'>
        <ListHotel
          HotelList={CurrentHotels}
          indexOfFirstHotel={indexOfFirstHotel}
        />
        <div className='container ml-5'>
          <div className='row'>
            <div className='col-12'>
              <div id='pagination' className='' style={{ width: "70%" }}>
                <Pagination
                  PerPage={HotelPerPage}
                  Total={HotelList.length}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapStateToProps = (state) => ({
  ViewHotel: state.ViewHotel,
  Room: state.Room,
});
export default connect(MapStateToProps, {
  GetHotelsList,
  setUniqueRoom,
  UniqueRoomsByHotel,
})(Hotels);
