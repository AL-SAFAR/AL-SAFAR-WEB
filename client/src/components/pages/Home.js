import React, { Fragment } from "react";
import Hero from "../Home/Hero";
import TopTours from "../Home/TopTours";
import DeluxePackages from "../Home/DeluxePackages";
import BestOffers from "../Home/BestOffers";
import PerfectTrip from "../Home/PerfectTrip";
import HeroBackground from "../Home/HeroBackground";
import OccupancyModal from "../Home/OccupancyModal";

const Home = () => {
  return (
    <Fragment>
      <OccupancyModal />
      <Hero />
      <div className='HeroPosition'>
        <HeroBackground />
      </div>
      <TopTours />
      <DeluxePackages />
      <BestOffers />
      <PerfectTrip />
    </Fragment>
  );
};

export default Home;
