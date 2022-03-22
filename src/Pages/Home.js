import React from "react";
import Announcement from "../Components/Announcement";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import SliderSec from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <SliderSec />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
