import React from "react";
import Announcement from "../Components/Announcement";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import SliderSec from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <SliderSec />
      <Categories />
    </div>
  );
};

export default Home;
