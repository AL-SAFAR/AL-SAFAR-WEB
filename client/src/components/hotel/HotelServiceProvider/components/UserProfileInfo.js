import React, { Fragment } from "react";

import CardImage from "../../../../images/HotelProfile/Haris.jpg";

const UserProfileInfo = () => {
  return (
    <Fragment>
      <div className='mt-5 ml-2'>
        <div className='card card-user'>
          <div className='image'>
            <img
              alt='...'
              src={"https://images.alphacoders.com/674/674925.png"}
            />
          </div>
          <div className='card-body'>
            <div className='author'>
              <a href='#pablo' onClick={e => e.preventDefault()}>
                <img alt='...' className='avatar border-gray' src={CardImage} />
                <h5 className='title'>Muhmmad Haris</h5>
              </a>
              <p className='description'>About Me</p>
            </div>
            <p className='description text-center'>
              <span style={{ color: "#0099FF" }}> Email: </span> haris@gamil.com{" "}
              <br />
              <span style={{ color: "#0099FF" }}>
                {" "}
                CNIC:{" "}
              </span> 37405-8724131-3 <br />
              <span style={{ color: "#0099FF" }}>
                {" "}
                Mobile:{" "}
              </span> 03155145023 <br />
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserProfileInfo;
