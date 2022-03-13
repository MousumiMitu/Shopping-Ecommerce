import React from "react";
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import SliderSec from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <SliderSec />
    </div>
  );
};

export default Home;
