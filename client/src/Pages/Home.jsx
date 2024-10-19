import React from "react";
import Header from "../Components/Header";
import Steps from "../Components/Steps";
import BgSlider from "../Components/BgSlider";
import Testimonials from "../Components/Testimonials";
import Upload from "../Components/Upload";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonials />
      <Upload />
    </div>
  );
};

export default Home;
