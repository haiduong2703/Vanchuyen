import React from "react";

import TabNew from "../components/TabNew";
import SlideNews from "../components/SlideNews";
import Sale from "../components/Sale";
const News = () => {
  return (
    <>
      <SlideNews />
      <TabNew display={0} />
      <Sale />
    </>
  );
};

export default News;
