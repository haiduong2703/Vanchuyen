import React from "react";
import SlideShow from "../components/SlideShow";

import slideShowData from "../assets/data/slideshow";
import Tabs from "../components/Tabs";
import TabNew from "../components/TabNew";
import Infor from "../components/Infor";
import Introduce from "../components/Image_company";
const Home = () => {
  return (
    <>
      <SlideShow
        data={slideShowData}
        control={true}
        auto={true}
        search={true}
      />
      <Tabs />
      <TabNew />
      <Infor />
      <Introduce />
    </>
  );
};

export default Home;
